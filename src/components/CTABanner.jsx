import { Link } from 'react-router-dom'

export default function CTABanner({
  headline = 'Know your risk. Grow with confidence.',
  body = 'Get a live walkthrough to see how Checkr Trust KYx products reduce risk, protect users, and unlock growth.',
}) {
  return (
    <section style={{ background: '#0a0a0a', padding: '80px 0' }}>
      <div className="content-wrap" style={{ maxWidth: 720, textAlign: 'center' }}>
        <h2 style={{ color: '#fff', marginBottom: 16 }}>{headline}</h2>
        <p style={{ color: '#888', fontSize: 17, marginBottom: 36, lineHeight: 1.7 }}>{body}</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/get-a-demo" style={{
            display: 'inline-flex', alignItems: 'center', padding: '12px 24px',
            background: '#fff', color: '#111', fontWeight: 600, fontSize: 15,
            borderRadius: 8, border: '1.5px solid #fff', textDecoration: 'none',
            transition: 'background 0.15s'
          }}>Get a demo</Link>
          <a href="https://docs.checkrtrust.com" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', padding: '12px 24px',
            background: 'transparent', color: '#aaa', fontWeight: 500, fontSize: 15,
            borderRadius: 8, border: '1.5px solid #444', textDecoration: 'none',
            transition: 'border-color 0.15s, color 0.15s'
          }}>See API docs →</a>
        </div>
      </div>
    </section>
  )
}
