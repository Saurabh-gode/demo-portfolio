/// <reference types="@cloudflare/workers-types" />

// worker/contact.ts
import { z } from "zod";

export interface Env {
    RESEND_API_KEY: string;         // Worker Secret
    TURNSTILE_SECRET: string;       // Worker Secret
    CONTACT_RATE_LIMIT: KVNamespace; // KV binding for rate limiting
    ALLOWED_ORIGIN: string;         // e.g. https://yoursite.com
}

const contactSchema = z.object({
    name: z.string().min(1).max(100),
    email: z.string().email(),
    phone: z.string().max(30).optional(),
    message: z.string().min(10).max(2000),
    turnstileToken: z.string().min(1, "Bot check failed"),
});

const RATE_LIMIT = 3;          // max submissions
const RATE_WINDOW = 60 * 60;   // per hour (seconds)

export default {
    async fetch(req: Request, env: Env): Promise<Response> {
        // ── CORS ──────────────────────────────────────────────────────────────
        const origin = req.headers.get("Origin") ?? "";
        const corsHeaders = {
            "Access-Control-Allow-Origin": env.ALLOWED_ORIGIN,
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
        };

        if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
        if (req.method !== "POST")
            return json({ message: "Method not allowed" }, 405, corsHeaders);
        if (origin !== env.ALLOWED_ORIGIN)
            return json({ message: "Forbidden" }, 403, corsHeaders);

        // ── Parse body ────────────────────────────────────────────────────────
        let body: unknown;
        try { body = await req.json(); }
        catch { return json({ message: "Invalid JSON" }, 400, corsHeaders); }

        // ── Validate ──────────────────────────────────────────────────────────
        const parsed = contactSchema.safeParse(body);
        if (!parsed.success) {
            return json({
                message: "Validation failed.",
                fieldErrors: parsed.error.flatten().fieldErrors,
            }, 422, corsHeaders);
        }

        const { name, email, phone, message, turnstileToken } = parsed.data;

        // ── Turnstile verification ────────────────────────────────────────────
        const tsRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ secret: env.TURNSTILE_SECRET, response: turnstileToken }),
        });
        const tsData = await tsRes.json() as { success: boolean };
        if (!tsData.success)
            return json({ message: "Bot verification failed. Please try again." }, 400, corsHeaders);

        // ── Rate limiting (per IP via KV) ─────────────────────────────────────
        const ip = req.headers.get("CF-Connecting-IP") ?? "unknown";
        const kvKey = `contact:${ip}`;
        const current = parseInt(await env.CONTACT_RATE_LIMIT.get(kvKey) ?? "0", 10);

        if (current >= RATE_LIMIT)
            return json({ message: "Too many submissions. Please try again later." }, 429, corsHeaders);

        await env.CONTACT_RATE_LIMIT.put(kvKey, String(current + 1), { expirationTtl: RATE_WINDOW });

        // ── Send email via Resend ─────────────────────────────────────────────
        const emailRes = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${env.RESEND_API_KEY}`,
            },
            body: JSON.stringify({
                from: "Contact Form <contact@yourdomain.com>",
                to: ["you@yourdomain.com"],
                subject: `New message from ${name}`,
                text: [
                    `Name: ${name}`,
                    `Email: ${email}`,
                    phone ? `Phone: ${phone}` : null,
                    ``,
                    `Message:`,
                    message,
                ].filter(Boolean).join("\n"),
            }),
        });

        if (!emailRes.ok) {
            console.error("Resend error:", await emailRes.text());
            return json({ message: "Failed to send message. Please try again." }, 500, corsHeaders);
        }

        return json({ message: "Message sent! I'll be in touch soon." }, 200, corsHeaders);
    },
};

function json(data: unknown, status: number, headers: Record<string, string>) {
    return new Response(JSON.stringify(data), {
        status,
        headers: { "Content-Type": "application/json", ...headers },
    });
}