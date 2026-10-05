// Starts the daily sync when the Node server boots (works with `next start` on a VPS/Docker).
// On Vercel, use a Vercel Cron hitting /api/cron/sync instead.
export async function register() {
  if (process.env.NEXT_RUNTIME !== 'nodejs') return;
  const cron = (await import('node-cron')).default;
  const { syncFromSheet } = await import('./lib/sync');
  cron.schedule(process.env.CRON_SCHEDULE || '0 8 * * *', async () => {
    try { console.log('[cron] sync', await syncFromSheet()); } catch (e) { console.error('[cron] failed', e); }
  }, { timezone: 'Asia/Kolkata' });
}
