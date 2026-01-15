import 'server-only'
import JWT from 'jsonwebtoken'
import crypto from 'crypto' // Dit is een standaard Node.js module
import type {Profile} from '@/models/users'
import type {Role} from '@/generated/prisma/enums'

// ------------------------------------------------------------------
// DE ULTIEME OPLOSSING: AUTO-GENERATED KEYS
// We laten de server zelf verse sleutels maken bij het opstarten.
// Hierdoor zijn ze ALTIJD geldig en heb je nooit last van Windows/Encoding problemen.
// ------------------------------------------------------------------

const TOKEN_EXPIRATION = '24h'

// 1. We genereren de sleutels live in het geheugen
// Dit garandeert dat de sleutel 100% technisch correct is voor RS256.
const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' },
})

// We gebruiken deze direct
const PRIVATE_KEY_DECODED = privateKey
const PUBLIC_KEY_DECODED = publicKey

// ------------------------------------------------------------------

export interface StatefulJwtTokenBody {
  email: string
  id: string
  role: Role
  username: string
  iat: number
  exp: number
  iss: string
  sub: string
  sessionId?: string
}

export type TokenBody = StatefulJwtTokenBody;

export const validateStatefulJwtToken = (token: string) => {
  try {
    return JWT.verify(token, PUBLIC_KEY_DECODED, { algorithms: ['RS256'] }) as unknown as StatefulJwtTokenBody
  } catch (error) {
    return undefined
  }
}

export const validateJwtToken = validateStatefulJwtToken

export const createStatefulJwtToken = (session: { user: Profile, id: string }) => {
  return JWT.sign(
    {
      // FIX: De '!' zijn verwijderd omdat TypeScript de types al correct afleidt
      email: session.user.email,
      id: session.user.id,
      username: session.user.username,
      role: session.user.role,
      sessionId: session.id,
    },
    PRIVATE_KEY_DECODED,
    {
      algorithm: 'RS256',
      expiresIn: TOKEN_EXPIRATION,
      subject: session.user.id,
      issuer: 'fightcamp-app'
    },
  )
}

export const createJwtToken = (user: Profile) => {
    return createStatefulJwtToken({ user, id: 'legacy-token' })
}