import bcrypt from 'bcryptjs';
import { getDb } from '../lib/db';
(async () => {
  const db = await getDb();
  const email = process.env.ADMIN_EMAIL!.toLowerCase();
  await db.collection('users').updateOne({ email }, { $set: { email, hash: await bcrypt.hash(process.env.ADMIN_PASSWORD!, 10) } }, { upsert: true });
  console.log('Admin ready:', email); process.exit(0);
})();


