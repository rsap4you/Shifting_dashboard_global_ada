'use client';
import { useState } from 'react';
export default function Login() {
  const [email, setEmail] = useState(''); const [password, setPassword] = useState(''); const [err, setErr] = useState('');
  async function submit() {
    const r = await fetch('/api/auth/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) });
    if (r.ok) location.href = '/'; else setErr((await r.json()).error);
  }
  const inp = { display: 'block', width: '100%', padding: 9, margin: '10px 0', border: '1px solid #cbd5e1', borderRadius: 8 } as const;
  return (
    <div style={{ maxWidth: 340, margin: '12vh auto', background: '#fff', padding: 28, borderRadius: 12 }}>
      <h2>🚚 Shifting Dashboard</h2>
      <input style={inp} placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input style={inp} type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} onKeyDown={e => e.key === 'Enter' && submit()} />
      {err && <p style={{ color: '#dc2626' }}>{err}</p>}
      <button onClick={submit} style={{ ...inp, background: '#0d9488', color: '#fff', border: 0, cursor: 'pointer', fontWeight: 600 }}>Sign in</button>
    </div>
  );
}
