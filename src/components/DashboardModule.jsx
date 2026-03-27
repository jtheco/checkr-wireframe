import { Link } from 'react-router-dom'

export default function DashboardModule() {
  return (
    <section className="bg-[#f8f8f7] py-16">
      <div className="content-wrap">
        <div style={{ maxWidth: 680 }}>
          <h2 className="mb-3">Start screening in minutes, with no integration needed.</h2>
          <p className="mb-8" style={{ color: '#666' }}>
            Whether you're investigating a single user or screening in batches, our dashboard gives you instant access to criminal record and identity checks, with no engineering support needed. Designed for smaller teams, it delivers full US coverage, configurable filters, and actionable risk signals in just a few clicks.
          </p>
          <Link
            to="/get-a-demo"
            className="inline-flex items-center px-5 py-2.5 bg-[#111] text-white text-sm rounded-[6px] hover:bg-[#333] transition-colors"
          >
            Get started
          </Link>
        </div>
      </div>
    </section>
  )
}
