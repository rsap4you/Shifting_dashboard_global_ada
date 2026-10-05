export const metadata = { title: 'Shifting Dashboard' };
export default function Root({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body style={{ margin: 0, font: '14px system-ui', background: '#eef2f5', color: '#0f2942' }}>{children}</body></html>;
}
