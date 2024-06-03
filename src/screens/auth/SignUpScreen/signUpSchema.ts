import {z} from 'zod';

const userNameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim;

export const signUpSchema = z.object({
  username: z.string().regex(userNameRegex, 'username inválido'),
  fullname: z.string().min(5, 'nome muito curto').max(50, 'nome muito longo'),
  email: z.string().email('email inválido'),
  password: z.string().min(8, 'minimo 8 caracteres'),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
