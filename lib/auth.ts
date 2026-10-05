import { SignJWT, jwtVerify } from 'jose';
import { NextRequest } from 'next/server';
const key = () => new TextEncoder().encode(process.env.JWT_SECRET!);
export const signToken = (sub: string) =>
  new SignJWT({}).setProtectedHeader({ alg: 'HS256' }).setSubject(sub).setExpirationTime('7d').sign(key());
export async function verifyReq(req: NextRequest): Promise<string | null> {
  const h = req.headers.get('authorization');
  const t = h?.startsWith('Bearer ') ? h.slice(7) : req.cookies.get('token')?.value;
  if (!t) return null;
  try { return (await jwtVerify(t, key())).payload.sub ?? null; } catch { return null; }
}
