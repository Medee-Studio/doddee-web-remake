import { jwtVerify, type JWTPayload } from 'jose'

export async function verifyToken(token: string): Promise<JWTPayload | null> {
    if (!token || !process.env.SUPABASE_JWT_SECRET) {
      return null
    }
    try {
      const secret = new TextEncoder().encode(process.env.SUPABASE_JWT_SECRET)
      const { payload } = await jwtVerify(token, secret)
      return payload
    } catch {
      console.warn('Token verification failed')
      return null
    }
  }