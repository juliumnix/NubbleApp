import {z} from 'zod';

export const forgotPasswordSchema = z.object({
  email: z.string().email('digite um email valido'),
});

export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;
