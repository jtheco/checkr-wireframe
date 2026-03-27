export default function ApiModule({ headline = 'Real-time risk intelligence, built into your workflow.', body }) {
  return (
    <section style={{ background: '#fff', padding: '80px 0' }}>
      <div className="content-wrap">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <span className="eyebrow">API-first platform</span>
            <h2 style={{ marginBottom: 16 }}>{headline}</h2>
            <p style={{ marginBottom: 32 }}>{body}</p>
            <a href="https://docs.checkrtrust.com" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              See API documentation →
            </a>
          </div>
          <div>
            <div className="img-placeholder img-placeholder-wide">[API / code snippet]</div>
          </div>
        </div>
      </div>
    </section>
  )
}
