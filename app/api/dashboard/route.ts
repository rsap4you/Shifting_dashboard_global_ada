import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { verifyReq } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  if (!(await verifyReq(req))) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const db = await getDb();
  const trips = await db.collection('trips').find({}, { projection: { _id: 0 } }).toArray();
  const meta: any = await db.collection('meta').findOne({ _id: 'sync' as any });
  const tabs = Array.from(new Set(trips.map((t: any) => t.tab))).sort().map(tab => ({ tab }));

  return NextResponse.json({
    trips,
    tabs,
    updated: meta?.at ? new Date(meta.at).toLocaleString('en-IN') : '—',
    skipped: meta?.skipped || [],
  });
}