import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z
    .string()
    .optional()
    .transform((v) => (v === "" ? undefined : v)),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormState = {
  ok: boolean;
  message?: string;
  fieldErrors?: Partial<Record<keyof z.infer<typeof contactSchema>, string[]>>;
};

export const initialContactState: ContactFormState = {
  ok: false,
};
