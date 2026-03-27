export default function ApiModule({ headline = 'Real-time risk intelligence, built into your workflow.', body }) {
  return (
    <section className="section-lg" style={{ background: '#fff' }}>
      <div className="content-wrap">
        <div className="grid-hero">
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
