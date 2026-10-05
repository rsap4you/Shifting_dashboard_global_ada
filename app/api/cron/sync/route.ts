import { NextRequest, NextResponse } from 'next/server';
import { syncFromSheet } from '@/lib/sync';
import { verifyReq } from '@/lib/auth';
export const maxDuration = 300;
// Callable by external cron (Authorization: Bearer CRON_SECRET) or by a logged-in user (Refresh button)
export async function GET(req: NextRequest) {
  const okCron = req.headers.get('authorization') === `Bearer ${process.env.CRON_SECRET}`;
  if (!okCron && !(await verifyReq(req))) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try { return NextResponse.json(await syncFromSheet()); }
  catch (e: any) { return NextResponse.json({ error: e.message }, { status: 500 }); }
}
