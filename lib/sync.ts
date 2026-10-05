import { google } from 'googleapis';
import { getDb, Trip } from './db';

const TAB_KEYWORDS = ['SHILA', 'PUNDRI', 'BAGODAR', 'TRIVENI', 'ARAJU'];
const WEIGHT_RATE_KEYWORDS = ['BAGODAR'];
const TDS_RATE = 0.02, HEADER_SCAN_ROWS = 15;
const HEADERS: Record<string, string[]> = {
  date: ['LOADINGDATE', 'DATE'], date2: ['UNLOADINGDATE', 'UNLADINGDATE'], wt: ['NETWTMT'], deduction: ['DEDUCTION'],
  vehicle: ['VEHICLENO', 'VEHICLENUMBER', 'VEHICLE', 'TRUCKNO', 'TRUCKNUMBER', 'TRUCK', 'VEHNO', 'VEHICALNO', 'VEHICLENO1'],
  rate: ['RATETRIPS', 'TRIPRATE', 'RATETRIP', 'RATEPERTRIP', 'RATE'],
  amount: ['PURCHASEAMOUNT', 'AMOUNT', 'TOTALAMOUNT', 'AMT'], tds: ['TDS2', 'TDS', 'TDS1'],
  dieselQty: ['DIESELQTY', 'DIESELQUANTITY', 'DIESELLTR', 'DIESELLITRE'],
  dieselAmt: ['TOTALDIESELAMT', 'DIESELAMT', 'DIESELAMOUNT', 'TOTALDIESEL'],
  net: ['NETAMT', 'NETPAYABLE', 'NETAMOUNT', 'NET'], challan: ['CHALLANNO', 'CHALLAN'],
  transporter: ['TRANSPORTERNAME', 'TRANSPORTER'], plant: ['PLANTNAME', 'PLANT'], pump: ['PUMPNAME'],
  time: ['UNLOADINGTIME', 'UNLADINGTIME'], rowType: ['TYPE'], paidAmt: ['PAIDAMT'], dueAmt: ['DUEAMT'],
};
type Layout = Record<string, number> & { headerRow: number };
type Cell = string | number | boolean | null | undefined;

const norm = (s: Cell) => String(s ?? '').toUpperCase().replace(/[^A-Z0-9]/g, '');
const num = (v: Cell) => { if (typeof v === 'number') return v; const x = parseFloat(String(v ?? '').replace(/,/g, '')); return isNaN(x) ? 0 : x; };
const round = (x: number) => Math.round(x * 100) / 100;
const txt = (v: Cell) => String(v ?? '').trim();

function isTripSheet(name: string) {
  const u = name.toUpperCase();
  return !u.includes('ALL OVER') && TAB_KEYWORDS.some(k => u.includes(k));
}

function getLayout(vals: Cell[][]): Layout | null {
  for (let r = 0; r < Math.min(HEADER_SCAN_ROWS, vals.length); r++) {
    const n = vals[r].map(norm);
    const map: Record<string, number> = {};
    for (const key in HEADERS) for (const h of HEADERS[key]) { const i = n.indexOf(h); if (i >= 0) { map[key] = i + 1; break; } }
    if (!map.vehicle) { const vi = n.findIndex(h => /VEH|TRUCK|LORRY|REGNO|REGISTRATION/.test(h)); if (vi >= 0) map.vehicle = vi + 1; }
    if (!map.rate && !map.amount) { const ai = n.findIndex(h => h.includes('AMOUNT') || h.includes('RATE')); if (ai >= 0) map.amount = ai + 1; }
    if (map.vehicle && (map.rate || map.amount)) return { ...map, headerRow: r + 1 } as Layout;
  }
  return null;
}

// dd/mm/yyyy, dd-Mon-yy, ISO
function parseTs(s: string): number {
  const mon: Record<string, number> = { JAN: 0, FEB: 1, MAR: 2, APR: 3, MAY: 4, JUN: 5, JUL: 6, AUG: 7, SEP: 8, OCT: 9, NOV: 10, DEC: 11 };
  const m = /^(\d{1,2})[\/\-]([A-Za-z]{3}|\d{1,2})[\/\-](\d{2,4})/.exec(s);
  if (m) {
    const mo = /^[A-Za-z]/.test(m[2]) ? mon[m[2].toUpperCase()] : parseInt(m[2], 10) - 1;
    const y = m[3].length === 2 ? 2000 + +m[3] : +m[3];
    if (mo !== undefined && !isNaN(mo)) return new Date(Date.UTC(y, mo, +m[1])).getTime();
  }
  const t = Date.parse(s); return isNaN(t) ? 0 : t;
}

export async function syncFromSheet() {
  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_CLIENT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });
  const sheets = google.sheets({ version: 'v4', auth });
  const id = process.env.SHEET_ID!;
  const meta = await sheets.spreadsheets.get({ spreadsheetId: id, fields: 'sheets.properties.title' });
  const tabs = (meta.data.sheets || []).map(s => s.properties!.title!).filter(isTripSheet);

  const trips: Trip[] = [], skipped: string[] = [];
  for (const tab of tabs) {
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: id, range: `'${tab}'`, valueRenderOption: 'UNFORMATTED_VALUE', dateTimeRenderOption: 'FORMATTED_STRING',
    });
    const vals = (res.data.values || []) as Cell[][];
    const L = getLayout(vals);
    if (!L) { skipped.push(tab); continue; }
    const byWt = WEIGHT_RATE_KEYWORDS.some(k => tab.toUpperCase().includes(k)) && !!L.wt && !!L.rate;
    const c = (row: Cell[], k: string) => (L[k] ? row[L[k] - 1] : undefined);
    const g = (row: Cell[], k: string) => num(c(row, k));

    for (let i = L.headerRow; i < vals.length; i++) {
      const row = vals[i];
      const veh = txt(c(row, 'vehicle'));
      const amount = byWt ? round(g(row, 'wt') * g(row, 'rate')) : (g(row, 'amount') || g(row, 'rate'));
      let tds: number;
      if (byWt) tds = round(amount * TDS_RATE);
      else if (L.tds && /%/.test(txt(c(row, 'tds')))) { const p = g(row, 'tds'); tds = round(amount * (p > 1 ? p / 100 : p)); }
      else tds = g(row, 'tds');
      const qty = g(row, 'dieselQty'), dAmt = g(row, 'dieselAmt');
      const net = byWt ? round(amount - tds - g(row, 'deduction') - dAmt) : (L.net ? g(row, 'net') : amount - tds - dAmt);
      if (!veh && !(amount || dAmt || net)) continue;

      const rawDue = c(row, 'dueAmt');
      const hasDue = !!L.dueAmt && txt(rawDue) !== '';
      const dueAmt = hasDue ? num(rawDue) : round(net - g(row, 'paidAmt'));
      const paidAmt = hasDue ? round(net - dueAmt) : g(row, 'paidAmt');
      const d1 = txt(c(row, 'date')), d2 = txt(c(row, 'date2'));
      const date = d1 || d2;
      trips.push({
        tab, date, dateTs: date ? parseTs(date) : 0, challan: txt(c(row, 'challan')), vehicle: veh || '(NO VEHICLE)',
        wt: g(row, 'wt'), transporter: txt(c(row, 'transporter')), plant: txt(c(row, 'plant')).toUpperCase() || '(BLANK)',
        amount, tds, qty, dAmt, net, oth: round(amount - tds - dAmt - net), paidAmt, dueAmt,
        pump: txt(c(row, 'pump')), time: txt(c(row, 'time')), rtype: txt(c(row, 'rowType')),
      });
    }
  }
  const db = await getDb();
  // Replace atomically-ish: only swap data if the read succeeded
  await db.collection('trips').deleteMany({});
  if (trips.length) await db.collection('trips').insertMany(trips as any[]);
  await db.collection('meta').updateOne({ _id: 'sync' as any }, { $set: { at: new Date(), count: trips.length, skipped } }, { upsert: true });
  return { count: trips.length, tabs: tabs.length, skipped };
}
