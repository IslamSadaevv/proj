import { z } from 'zod'
import { Role } from '@/generated/prisma/enums'

// Base User Schema
export const userSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: 'The password must be at least 8 characters long.' })
    .max(100, { message: "The password can't be longer than 100 characters." }),
  username: z.string().min(3, { message: 'The username must be at least 3 characters long.' }),
  role: z.nativeEnum(Role),
})

// --- Login Schema ---
export const signInSchema = z.object({
  email: userSchema.shape.email,
  password: userSchema.shape.password,
})
export type SignInInput = z.infer<typeof signInSchema>

// --- Register Schema ---
export const registerSchema = z
  .object({
    firstName: z.string().min(2, { message: 'First name is too short' }),
    lastName: z.string().min(2, { message: 'Last name is too short' }),
    email: userSchema.shape.email,
    password: userSchema.shape.password,
    passwordConfirmation: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    path: ['passwordConfirmation'],
    message: 'The password and confirmation do not match',
  })
export type RegisterInput = z.infer<typeof registerSchema>

// --- Update User Schema ---
export const updateUserSchema = z.object({
  username: userSchema.shape.username,
})
export type UpdateUserInput = z.infer<typeof updateUserSchema>
