import { MongoClient, Db } from 'mongodb';
const g = globalThis as unknown as { _mongo?: Promise<MongoClient> };
export async function getDb(): Promise<Db> {
  if (!g._mongo) g._mongo = new MongoClient(process.env.MONGODB_URI!).connect();
  return (await g._mongo).db(process.env.MONGODB_DB || 'trip_dashboard');
}
export interface Trip {
  tab: string; date: string; dateTs: number; challan: string; vehicle: string; wt: number;
  transporter: string; plant: string; amount: number; tds: number; qty: number; dAmt: number;
  net: number; oth: number; paidAmt: number; dueAmt: number; pump: string; time: string; rtype: string;
}
