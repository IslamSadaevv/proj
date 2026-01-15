'use server'

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { publicFormAction, protectedFormAction } from '@/lib/serverFunctions' // protectedServerFunction weggehaald
import { createUser, getUserByEmail, startSession, stopSession, updateUser } from '@/dal/users'
import { verifyPassword } from '@/lib/passwordUtils'
import { setSessionCookie, clearSessionCookie, getSessionId } from '@/lib/sessionUtils'
import { registerSchema, signInSchema, updateUserSchema } from '@/schemas/userSchemas'

// ---------------------------
// LOGIN ACTION
// ---------------------------
export const loginAction = publicFormAction({
  schema: signInSchema,
  functionName: 'Login Action',
  serverFn: async ({ data, logger }) => {
    const user = await getUserByEmail(data.email)

    if (!user) {
      logger.warn(`Login failed: user not found (${data.email})`)
      return {
        success: false,
        errors: { errors: ['No account found with the given email/password combination.'] },
      }
    }

    const validPassword = verifyPassword(user.password, data.password)
    if (!validPassword) {
      logger.warn(`Login failed: invalid password (${data.email})`)
      return {
        success: false,
        errors: { errors: ['No account found with the given email/password combination.'] },
      }
    }

    const session = await startSession(user.id, user.role)
    await setSessionCookie(session)

    logger.info(`User logged in: ${user.id}`)
    redirect('/dashboard')
  },
})

// ---------------------------
// REGISTER ACTION
// ---------------------------
export const registerAction = publicFormAction({
  schema: registerSchema,
  functionName: 'Register Action',
  serverFn: async ({ data: { passwordConfirmation: _, ...data }, logger }) => {
    const existing = await getUserByEmail(data.email)
    if (existing) {
      return {
        success: false,
        errors: { errors: ['User already exists with this email.'] },
      }
    }

    const user = await createUser({
      email: data.email,
      password: data.password,
      username: `${data.firstName} ${data.lastName}`,
      role: 'User',
    })

    const session = await startSession(user.id, user.role)
    await setSessionCookie(session)

    logger.info(`New user registered: ${user.id}`)
    redirect('/dashboard')
  },
})

// ---------------------------
// UPDATE PROFILE ACTION
// ---------------------------
export const updateProfileAction = protectedFormAction({
  schema: updateUserSchema,
  functionName: 'Update Profile Action',
  serverFn: async ({ data, profile }) => {
    await updateUser({ ...data, id: profile.id })
    revalidatePath('/', 'layout')
  },
})

// ---------------------------
// LOGOUT ACTION (Robuuste Versie)
// ---------------------------
// We gebruiken hier GEEN wrapper, zodat je altijd kunt uitloggen
export async function logoutAction() {
  try {
    const sessionId = await getSessionId()
    if (sessionId) {
      // Probeer netjes te stoppen in de DB
      await stopSession(sessionId).catch(() => {}) 
    }
  } catch (error) {
    // Negeer errors, we willen gewoon uitloggen
    console.error("Error during db logout:", error)
  }

  // ALTIJD de cookie verwijderen en redirecten
  await clearSessionCookie()
  redirect('/login')
}