"use server";

import { getResend } from "@/lib/resend";
import {
  contactSchema,
  type ContactFormState,
} from "@/lib/validations/contact";

export async function submitContact(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone") ?? "",
    message: formData.get("message"),
  };

  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      ok: false,
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  const { name, email, phone, message } = parsed.data;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!to || !from) {
    return {
      ok: false,
      message: "Email is not configured. Please try again later.",
    };
  }

  try {
    const resend = getResend();
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Contact form: ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : null,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
      html: `
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        ok: false,
        message: "Failed to send your message. Please try again.",
      };
    }

    return {
      ok: true,
      message: "Thank you! We'll get back to you soon.",
    };
  } catch (err) {
    console.error("Contact submit error:", err);
    return {
      ok: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
