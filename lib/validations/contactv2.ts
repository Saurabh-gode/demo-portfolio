// lib/validations/contact.ts
import { z } from "zod";

export const contactSchema = z.object({
    name: z.string().min(1, "Name is required").max(100),
    email: z.string().email("Invalid email address"),
    phone: z.string().max(30).optional(),
    message: z.string().min(10, "Message must be at least 10 characters").max(2000),
});

export type ContactFormState = {
    status: "idle" | "loading" | "success" | "error";
    message: string;
    fieldErrors?: Partial<Record<keyof z.infer<typeof contactSchema>, string[]>>;
};

export const initialContactState: ContactFormState = {
    status: "idle",
    message: "",
};