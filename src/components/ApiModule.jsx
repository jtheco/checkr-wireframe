export default function ApiModule({
  h2 = 'Real-time risk intelligence, built into your workflow.',
  body,
}) {
  return (
    <section className="py-16">
      <div className="content-wrap">
        <div style={{ maxWidth: 680 }}>
          <h2 className="mb-3">{h2}</h2>
          <p className="mb-8" style={{ color: '#666' }}>{body}</p>
          <a
            href="https://docs.checkrtrust.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 bg-[#111] text-white text-sm rounded-[6px] hover:bg-[#333] transition-colors"
          >
            See API documentation
          </a>
        </div>
      </div>
    </section>
  )
}
