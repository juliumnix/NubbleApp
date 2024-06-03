import {z} from 'zod';

export const loginSchema = z.object({
  email: z.string().email('email invalido'),
  password: z.string().min(1, 'senha deve ter no minimo 8 caracteres'),
});

export type LoginSchema = z.infer<typeof loginSchema>;
