import { Link } from 'react-router-dom'

export default function DashboardModule() {
  return (
    <section className="section-lg" style={{ background: '#f8f8f7' }}>
      <div className="content-wrap">
        <div className="grid-hero">
          <div>
            <span className="eyebrow">No integration required</span>
            <h2 style={{ marginBottom: 16 }}>Start screening in minutes, with no integration needed.</h2>
            <p style={{ marginBottom: 32 }}>Whether you're investigating a single user or screening in batches, our dashboard gives you instant access to criminal record and identity checks, with no engineering support needed. Designed for smaller teams, it delivers full US coverage, configurable filters, and actionable risk signals in just a few clicks.</p>
            <Link to="/get-a-demo" className="btn-primary">Get started</Link>
          </div>
          <div>
            <div className="img-placeholder img-placeholder-wide">[Dashboard screenshot]</div>
          </div>
        </div>
      </div>
    </section>
  )
}
