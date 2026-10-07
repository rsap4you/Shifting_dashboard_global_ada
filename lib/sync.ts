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
const pad = (n: number) => String(n).padStart(2, '0');

const DAY = 86400000;
const MON: Record<string, number> = { JAN: 0, FEB: 1, MAR: 2, APR: 3, MAY: 4, JUN: 5, JUL: 6, AUG: 7, SEP: 8, OCT: 9, NOV: 10, DEC: 11 };

// valid calendar date -> UTC ms, otherwise 0 (so month 22 or day 31 in a 30-day month is rejected, not rolled over)
const mk = (y: number, m: number, d: number) => {
  const t = Date.UTC(y, m, d), x = new Date(t);
  return x.getUTCFullYear() === y && x.getUTCMonth() === m && x.getUTCDate() === d ? t : 0;
};
const fmtTs = (ts: number) => { const d = new Date(ts); return `${pad(d.getUTCDate())}/${pad(d.getUTCMonth() + 1)}/${d.getUTCFullYear()}`; };

type Kind = 'serial' | 'iso' | 'name' | 'dmy' | 'mdy' | 'ambiguous' | 'none';

// Reads a date cell. Real sheet dates arrive as serial numbers (no ambiguity).
// Text dates: use the only valid reading; if both d/m and m/d are valid, drop future dates,
// then pick the one closest to the last reliable date in this tab, else assume d/m.
function resolveDate(v: Cell, ref: number, now: number): { ts: number; kind: Kind } {
  if (typeof v === 'number') {
    if (v > 20000 && v < 80000) return { ts: Date.UTC(1899, 11, 30) + Math.floor(v) * DAY, kind: 'serial' };
    return { ts: 0, kind: 'none' };
  }
  const s = txt(v);
  if (!s) return { ts: 0, kind: 'none' };

  let m = /^(\d{4})[\/\-.](\d{1,2})[\/\-.](\d{1,2})/.exec(s);
  if (m) { const t = mk(+m[1], +m[2] - 1, +m[3]); return t ? { ts: t, kind: 'iso' } : { ts: 0, kind: 'none' }; }

  m = /^(\d{1,2})[\/\-. ]([A-Za-z]{3})[A-Za-z]*[\/\-. ,]*(\d{2,4})/.exec(s);
  if (m && MON[m[2].toUpperCase()] !== undefined) {
    const y = m[3].length === 2 ? 2000 + +m[3] : +m[3];
    const t = mk(y, MON[m[2].toUpperCase()], +m[1]);
    if (t) return { ts: t, kind: 'name' };
  }

  m = /^(\d{1,2})[\/\-.](\d{1,2})[\/\-.](\d{2,4})/.exec(s);
  if (m) {
    const a = +m[1], b = +m[2], y = m[3].length === 2 ? 2000 + +m[3] : +m[3];
    const dmy = mk(y, b - 1, a), mdy = mk(y, a - 1, b);
    if (dmy && !mdy) return { ts: dmy, kind: 'dmy' };
    if (mdy && !dmy) return { ts: mdy, kind: 'mdy' };
    if (dmy && mdy) {
      if (dmy === mdy) return { ts: dmy, kind: 'dmy' };
      const lim = now + 2 * DAY, okD = dmy <= lim, okM = mdy <= lim;
      if (okD && !okM) return { ts: dmy, kind: 'ambiguous' };
      if (okM && !okD) return { ts: mdy, kind: 'ambiguous' };
      if (ref) return { ts: Math.abs(dmy - ref) <= Math.abs(mdy - ref) ? dmy : mdy, kind: 'ambiguous' };
      return { ts: dmy, kind: 'ambiguous' };
    }
  }
  const t = Date.parse(s);
  return isNaN(t) ? { ts: 0, kind: 'none' } : { ts: t, kind: 'iso' };
}

// Sheet times arrive as a fraction of a day (0.5236 = 12:34)
function timeStr(v: Cell): string {
  if (typeof v === 'number') {
    const f = v - Math.floor(v), mins = Math.round(f * 1440) % 1440;
    return `${pad(Math.floor(mins / 60))}:${pad(mins % 60)}`;
  }
  return txt(v);
}

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

export type TabStat = {
  tab: string;
  sheetRows: number;
  kept: number;
  emptySkipped: number;
  noDate: number;
  amountZero: number;
  headerRow: number;
  map: Record<string, number>;
  dateKinds: Record<string, number>; // serial / dmy / mdy / ambiguous / iso / name / none
  dateSamples: string[];             // examples of mdy + ambiguous dates and how they were read
};

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
  const now = Date.now();

  const trips: Trip[] = [], skipped: string[] = [], stats: TabStat[] = [];
  for (const tab of tabs) {
    // SERIAL_NUMBER: real date cells come back as numbers, so there is no d/m vs m/d guessing for them
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: id, range: `'${tab}'`, valueRenderOption: 'UNFORMATTED_VALUE', dateTimeRenderOption: 'SERIAL_NUMBER',
    });
    const vals = (res.data.values || []) as Cell[][];
    const L = getLayout(vals);
    if (!L) { skipped.push(tab); continue; }
    const byWt = WEIGHT_RATE_KEYWORDS.some(k => tab.toUpperCase().includes(k)) && !!L.wt && !!L.rate;
    const c = (row: Cell[], k: string) => (L[k] ? row[L[k] - 1] : undefined);
    const g = (row: Cell[], k: string) => num(c(row, k));

    const st: TabStat = {
      tab, sheetRows: Math.max(0, vals.length - L.headerRow), kept: 0, emptySkipped: 0, noDate: 0, amountZero: 0,
      headerRow: L.headerRow, map: Object.fromEntries(Object.entries(L).filter(([k]) => k !== 'headerRow')) as Record<string, number>,
      dateKinds: {}, dateSamples: [],
    };
    let ref = 0; // last reliable date seen in this tab

    for (let i = L.headerRow; i < vals.length; i++) {
      const row = vals[i] || [];
      const veh = txt(c(row, 'vehicle'));
      const amount = byWt ? round(g(row, 'wt') * g(row, 'rate')) : (g(row, 'amount') || g(row, 'rate'));
      let tds: number;
      if (byWt) tds = round(amount * TDS_RATE);
      else if (L.tds && /%/.test(txt(c(row, 'tds')))) { const p = g(row, 'tds'); tds = round(amount * (p > 1 ? p / 100 : p)); }
      else tds = g(row, 'tds');
      const qty = g(row, 'dieselQty'), dAmt = g(row, 'dieselAmt');
      const net = byWt ? round(amount - tds - g(row, 'deduction') - dAmt) : (L.net ? g(row, 'net') : amount - tds - dAmt);
      if (!veh && !(amount || dAmt || net)) { st.emptySkipped++; continue; }

      const rawDue = c(row, 'dueAmt');
      const hasDue = !!L.dueAmt && txt(rawDue) !== '';
      const dueAmt = hasDue ? num(rawDue) : round(net - g(row, 'paidAmt'));
      const paidAmt = hasDue ? round(net - dueAmt) : g(row, 'paidAmt');

      const raw1 = c(row, 'date'), raw2 = c(row, 'date2');
      const raw = txt(raw1) !== '' ? raw1 : raw2;
      const r = resolveDate(raw, ref, now);
      if (r.kind === 'serial' || r.kind === 'dmy' || r.kind === 'mdy' || r.kind === 'iso' || r.kind === 'name') ref = r.ts;
      st.dateKinds[r.kind] = (st.dateKinds[r.kind] || 0) + 1;
      if ((r.kind === 'mdy' || r.kind === 'ambiguous') && st.dateSamples.length < 10) st.dateSamples.push(`${txt(raw)} -> ${fmtTs(r.ts)} (${r.kind})`);
      const dateTs = r.ts, date = dateTs ? fmtTs(dateTs) : txt(raw);
      if (!dateTs) st.noDate++;
      if (!amount) st.amountZero++;
      st.kept++;

      trips.push({
        tab, date, dateTs, challan: txt(c(row, 'challan')), vehicle: veh || '(NO VEHICLE)',
        wt: g(row, 'wt'), transporter: txt(c(row, 'transporter')), plant: txt(c(row, 'plant')).toUpperCase() || '(BLANK)',
        amount, tds, qty, dAmt, net, oth: round(amount - tds - dAmt - net), paidAmt, dueAmt,
        pump: txt(c(row, 'pump')), time: timeStr(c(row, 'time')), rtype: txt(c(row, 'rowType')),
      });
    }
    stats.push(st);
  }
  const db = await getDb();
  // Replace data only if at least one trip was read, so a failed read never wipes the DB
  if (trips.length) {
    await db.collection('trips').deleteMany({});
    await db.collection('trips').insertMany(trips as any[]);
  }
  await db.collection('meta').updateOne({ _id: 'sync' as any }, { $set: { at: new Date(), count: trips.length, skipped, stats } }, { upsert: true });
  return { count: trips.length, tabs: tabs.length, skipped, stats };
}