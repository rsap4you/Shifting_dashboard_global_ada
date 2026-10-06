import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(req: NextRequest) {
  const t = req.cookies.get('token')?.value;
  if (!t) return NextResponse.redirect(new URL('/login?err=no-cookie', req.url));
  try {
    await jwtVerify(t, new TextEncoder().encode(process.env.JWT_SECRET ?? ''));
    return NextResponse.next();
  } catch (e: any) {
    const msg = encodeURIComponent(`${e?.code ?? ''} ${e?.message ?? e}`);
    return NextResponse.redirect(new URL(`/login?err=${msg}`, req.url));
  }
}
export const config = { matcher: ['/'] };