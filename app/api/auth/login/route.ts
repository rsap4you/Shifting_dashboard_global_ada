import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { getDb } from '@/lib/db';
import { signToken } from '@/lib/auth';
export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  const user = await (await getDb()).collection('users').findOne({ email: String(email).toLowerCase() });
  if (!user || !(await bcrypt.compare(String(password), user.hash))) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  const token = await signToken(user.email);
  const res = NextResponse.json({ token });
  res.cookies.set('token', token, { httpOnly: true, sameSite: 'lax', secure: process.env.NODE_ENV === 'production', maxAge: 604800, path: '/' });
  return res;
}
