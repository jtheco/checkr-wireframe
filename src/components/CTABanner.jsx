import { Link } from 'react-router-dom'

export default function CTABanner({
  headline = 'Know your risk. Grow with confidence.',
  body = 'Get a live walkthrough to see how Checkr Trust KYx products reduce risk, protect users, and unlock growth.',
}) {
  return (
    <section className="bg-[#f8f8f7] py-16">
      <div className="content-wrap">
        <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
          <h2 className="mb-3">{headline}</h2>
          <p className="mb-8" style={{ color: '#666' }}>{body}</p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Link
              to="/get-a-demo"
              className="inline-flex items-center px-5 py-2.5 bg-[#111] text-white text-sm rounded-[6px] hover:bg-[#333] transition-colors"
            >
              Get a demo
            </Link>
            <a
              href="https://docs.checkrtrust.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 border border-[#333] text-[#333] text-sm rounded-[6px] hover:border-[#111] hover:text-[#111] transition-colors"
            >
              See API Docs
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
