import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import CTABanner from '../../components/CTABanner'
import BlogModule from '../../components/BlogModule'
import ApiModule from '../../components/ApiModule'
import DashboardModule from '../../components/DashboardModule'

export default function ShortTermRentals() {
  return (
    <Layout>
      {/* HERO */}
      <section style={{ background: '#fff', padding: '96px 0' }}>
        <div className="content-wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <div>
              <span className="eyebrow">KYx for Short-Term Rentals</span>
              <h1 style={{ marginBottom: 24 }}>Protect each stay before it starts.</h1>
              <p style={{ fontSize: 18, color: '#555', marginBottom: 32, lineHeight: 1.7 }}>
                Every guest and host is a potential risk to your properties, platform, and brand. From fake identities to criminal records, Checkr Trust helps short-term rental platforms screen users so you can reduce incidents, prevent chargebacks, and earn trust at scale.
              </p>
              <Link to="/get-a-demo" className="btn-primary">Get a demo</Link>
            </div>
            <div>
              <div className="img-placeholder img-placeholder-hero">[Industry screenshot]</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM/SOLUTION */}
      <section style={{ background: '#f8f8f7', padding: '80px 0' }}>
        <div className="content-wrap">
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ marginBottom: 16 }}>One bad booking can damage more than property.</h2>
            <p style={{ fontSize: 18, color: '#555', lineHeight: 1.7 }}>
              Property damage, fraud, and safety incidents aren't just operational costs—they drive away users and limit your platform's growth. Checkr Trust helps protect your customers and inventory by flagging risk at sign-up, combining identity verification and criminal record screening in one real-time API. When guests and hosts feel safe, they book more and list more, which means more users and revenue.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURE GRID (Products) */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div className="content-wrap">
          <h2 style={{ marginBottom: 16 }}>The KYx safety stack for short-term rentals.</h2>
          <p style={{ maxWidth: 640, color: '#555', marginBottom: 40 }}>
            Checkr Trust delivers real-time insights from multiple layers of customer risk—criminal and identity data—all through one flexible integration.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              {
                title: 'National Criminal Database',
                desc: 'Instantly flag guests and hosts with sex trafficking, drug trafficking, theft, or fraud-related offenses using 2,400+ sources across all US jurisdictions. Prevent repeat offenders from abusing your platform.',
                to: '/products/criminal-and-public-records-checks',
              },
              {
                title: 'Identity Checks',
                desc: 'Match submitted identity info to 9B+ verified records to confirm legitimacy and catch synthetic or fake identities—no document upload required for most users.',
                to: '/products/identity-checks',
              },
              {
                title: 'Biometric and Document Verification',
                desc: 'Prevent impersonation, deepfakes, and identity spoofing at scale by adding selfie-to-ID verification with 99% detection rate and near-zero false positives.',
                to: '/products/identity-checks',
              },
            ].map((card) => (
              <div key={card.title} style={{ border: '1px solid #e5e5e5', borderRadius: 16, padding: 28, background: '#fff', display: 'flex', flexDirection: 'column' }}>
                <div className="icon-placeholder" />
                <h3 style={{ marginBottom: 8 }}>{card.title}</h3>
                <p style={{ color: '#666', marginBottom: 16, flex: 1 }}>{card.desc}</p>
                <Link to={card.to} style={{ fontSize: 14, fontWeight: 500, color: '#111', textDecoration: 'none' }}>
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section style={{ background: '#f8f8f7', padding: '80px 0' }}>
        <div className="content-wrap">
          <div className="quote-block" style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <div style={{ width: 52, height: 52, borderRadius: '50%', background: '#e0e0e0', margin: '0 auto 24px' }} />
            <blockquote style={{ fontStyle: 'italic', fontSize: 20, fontWeight: 500, lineHeight: 1.6, color: '#1a1a1a', marginBottom: 24 }}>
              "Trust is everything in this business. With Checkr Trust, we don't just hand over the keys—we hand them to someone we can actually trust."
            </blockquote>
            <div style={{ fontSize: 14, fontWeight: 500, color: '#333' }}>Risk Manager</div>
            <div style={{ fontSize: 13, color: '#888', marginTop: 4 }}>Short-Term Rental Platform</div>
          </div>
        </div>
      </section>

      <ApiModule
        body="Checkr Trust integrates with your platform via API to verify guests and hosts and flag risk before check-in. Instantly screen for identity and criminal history in one seamless flow—helping you reduce fraud, chargebacks, and property damage."
      />

      <DashboardModule />

      {/* STATS */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div className="content-wrap">
          <h2 style={{ marginBottom: 40 }}>Why leading short-term rental platforms choose Checkr Trust.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, marginBottom: 40 }}>
            {[
              { stat: '99%', label: 'US identity verification coverage' },
              { stat: '2,400+', label: 'criminal data sources in real time' },
              { stat: '40%', label: 'fewer manual reviews with passive PII checks' },
            ].map((item) => (
              <div key={item.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 48, fontWeight: 600, color: '#111', lineHeight: 1, marginBottom: 8 }}>{item.stat}</div>
                <div style={{ fontSize: 14, color: '#666' }}>{item.label}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              'Designed for high-speed, high-value bookings',
              'Trusted by platforms managing millions of hosts and homes',
            ].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <div className="icon-sm" style={{ marginTop: 3 }} />
                <p style={{ color: '#444' }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BlogModule />
      <CTABanner
        headline="Ready to make trusted guests and hosts your competitive advantage?"
        body="Get a live walkthrough to see how Checkr Trust can help you verify users, reduce risk, and protect every stay."
      />
    </Layout>
  )
}
