"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContact } from "@/app/contact/actions";
import {
  initialContactState,
  type ContactFormState,
} from "@/lib/validations/contact";
import { useReducedMotion } from "@/components/motion/useReducedMotion";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="btn btn-primary" disabled={pending}>
      {pending ? "Sending…" : "Send message"}
    </button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState<ContactFormState, FormData>(
    submitContact,
    initialContactState,
  );
  const reduced = useReducedMotion();

  return (
    <form action={formAction} noValidate>
      <AnimatePresence mode="wait">
        {state.ok && state.message && (
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
        {!state.ok && state.message && (
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

      <SubmitButton />
    </form>
  );
}
