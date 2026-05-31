"use client";

import { useRef, useState } from "react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { motion, AnimatePresence } from "framer-motion";
import {
    contactSchema,
    initialContactState,
    type ContactFormState,
} from "@/lib/validations/contactv2";
import { useReducedMotion } from "@/components/motion/useReducedMotion";

// ─── Submit button ────────────────────────────────────────────────────────────

function SubmitButton({ pending }: { pending: boolean }) {
    return (
        <button type="submit" className="btn btn-primary" disabled={pending}>
            {pending ? "Sending…" : "Send message"}
        </button>
    );
}

// ─── Main form ────────────────────────────────────────────────────────────────

export function ContactForm() {
    const [state, setState] = useState<ContactFormState>(initialContactState);
    const reduced = useReducedMotion();
    const turnstileRef = useRef<TurnstileInstance>(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const raw = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            phone: formData.get("phone") as string | undefined,
            message: formData.get("message") as string,
        };

        // Client-side validation
        const parsed = contactSchema.safeParse(raw);
        if (!parsed.success) {
            setState({
                status: "error",
                message: "Please fix the errors below.",
                fieldErrors: parsed.error.flatten().fieldErrors as ContactFormState["fieldErrors"],
            });
            return;
        }

        // Turnstile check before setting loading state
        const turnstileToken = turnstileRef.current?.getResponse();
        if (!turnstileToken) {
            setState({ status: "error", message: "Please complete the bot check." });
            return;
        }

        setState({ status: "loading", message: "" });

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...parsed.data, turnstileToken }), // ← token included
            });

            const json: { message?: string; fieldErrors?: ContactFormState["fieldErrors"] } =
                await res.json();

            if (!res.ok) {
                setState({
                    status: "error",
                    message: json.message ?? "Something went wrong. Please try again.",
                    fieldErrors: json.fieldErrors,
                });
                return;
            }

            setState({
                status: "success",
                message: json.message ?? "Message sent! I'll be in touch soon.",
            });
            (e.target as HTMLFormElement).reset();
        } catch {
            setState({
                status: "error",
                message: "Network error — please check your connection and try again.",
            });
        }
    }

    const pending = state.status === "loading";

    return (
        <form onSubmit={handleSubmit} noValidate>
            <AnimatePresence mode="wait">
                {state.status === "success" && (
                    <motion.div
                        key="success"
                        className="form-success"
                        initial={reduced ? false : { opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                    >
                        {state.message}
                    </motion.div>
                )}
                {state.status === "error" && state.message && !state.fieldErrors && (
                    <motion.div
                        key="error"
                        className="form-banner-error"
                        initial={reduced ? false : { opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                    >
                        {state.message}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="form-field">
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    aria-invalid={!!state.fieldErrors?.name}
                />
                {state.fieldErrors?.name && (
                    <span className="form-error">{state.fieldErrors.name[0]}</span>
                )}
            </div>

            <div className="form-field">
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    aria-invalid={!!state.fieldErrors?.email}
                />
                {state.fieldErrors?.email && (
                    <span className="form-error">{state.fieldErrors.email[0]}</span>
                )}
            </div>

            <div className="form-field">
                <label htmlFor="phone">Phone (optional)</label>
                <input id="phone" name="phone" type="tel" autoComplete="tel" />
            </div>

            <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    required
                    aria-invalid={!!state.fieldErrors?.message}
                />
                {state.fieldErrors?.message && (
                    <span className="form-error">{state.fieldErrors.message[0]}</span>
                )}
            </div>

            {/* Turnstile lives here, in ContactForm, next to the ref it uses */}
            <Turnstile
                ref={turnstileRef}
                siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
            />

            <SubmitButton pending={pending} />
        </form>
    );
}