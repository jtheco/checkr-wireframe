import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import CTABanner from '../../components/CTABanner'
import BlogModule from '../../components/BlogModule'
import ApiModule from '../../components/ApiModule'
import DashboardModule from '../../components/DashboardModule'

export default function VisitorManagement() {
  return (
    <Layout>
      {/* HERO */}
      <section style={{ background: '#fff', padding: '96px 0' }}>
        <div className="content-wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <div>
              <span className="eyebrow">KYx for Visitor Management Systems</span>
              <h1 style={{ marginBottom: 24 }}>Bring risk intelligence to every check-in.</h1>
              <p style={{ fontSize: 18, color: '#555', marginBottom: 32, lineHeight: 1.7 }}>
                Every access decision is a risk decision, especially when children, seniors, or other vulnerable groups are on-site. Knowing who's entering your buildings and whether they pose a threat is critical. Checkr Trust brings together real-time identity and criminal record checks to Visitor Management Systems, so you can flag high-risk individuals and prevent incidents before they happen, without adding friction.
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
            <h2 style={{ marginBottom: 16 }}>A name alone doesn't reveal risk.</h2>
            <p style={{ fontSize: 18, color: '#555', lineHeight: 1.7 }}>
              Most VMS platforms rely on self-reported info, but fake names, synthetic identities, and missed criminal history can lead to real harm. Checkr Trust adds verified identity and criminal screening to your check-in flow, giving you the holistic risk intelligence to stop threats without slowing access.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURE GRID (Products) */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div className="content-wrap">
          <h2 style={{ marginBottom: 16 }}>The KYx safety stack for Visitor Management Systems.</h2>
          <p style={{ maxWidth: 640, color: '#555', marginBottom: 40 }}>
            Checkr Trust delivers real-time insights from multiple layers of customer risk—criminal, sex offender, identity, and watchlist data—all through one flexible integration.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              {
                title: 'National Criminal Database',
                desc: 'Protect your sites by flagging individuals with violent, sexual, or fraud-related charges, including warrant and arrest data, using 2,400+ data sources across all US jurisdictions.',
                to: '/products/criminal-and-public-records-checks',
              },
              {
                title: 'Sex Offender Registries',
                desc: "Search sex offender registries across all 50 states, Washington DC, and all US territories and tribes. Reports include key context like the individual's date of registration and current status.",
                to: '/products/criminal-and-public-records-checks',
              },
              {
                title: 'Global Watchlists',
                desc: 'Screen individuals against FBI, OFAC, Interpol, and other domestic and international watchlists to maintain compliance and block high-risk actors.',
                to: '/products/criminal-and-public-records-checks',
              },
              {
                title: 'Identity Checks',
                desc: 'Confirm that a visitor is who they say they are by matching submitted info against 9B+ verified records—no document upload needed for most users.',
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
              "Verkada's customers depend on our cloud-based physical security solutions to safeguard their people and places. Checkr Trust helps us deliver actionable criminal data, enabling our customers to quickly identify potential risks during the visitor check-in process."
            </blockquote>
            <div style={{ fontSize: 14, fontWeight: 500, color: '#333' }}>Grace Wang</div>
            <div style={{ fontSize: 13, color: '#888', marginTop: 4 }}>Software Engineering Manager, Verkada</div>
          </div>
        </div>
      </section>

      <ApiModule
        body="Checkr Trust's API lets visitor management systems layer in real-time identity and criminal screening during the check-in process. You get fast, accurate trust signals, without disrupting throughput or experience at the front desk."
      />

      <DashboardModule />

      {/* STATS */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div className="content-wrap">
          <h2 style={{ marginBottom: 40 }}>Why leading VMS and security platforms choose Checkr Trust.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, marginBottom: 40 }}>
            {[
              { stat: '99%', label: 'US identity verification coverage' },
              { stat: '2,400+', label: 'criminal data sources in real time' },
              { stat: 'Instant', label: 'seamless API integration into check-in flows' },
            ].map((item) => (
              <div key={item.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 48, fontWeight: 600, color: '#111', lineHeight: 1, marginBottom: 8 }}>{item.stat}</div>
                <div style={{ fontSize: 14, color: '#666' }}>{item.label}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              'Designed for high-traffic environments—schools, hospitals, offices, live events',
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
        headline="Ready to make trusted visitors your competitive advantage?"
        body="Get a live walkthrough to see how Checkr Trust can help you verify visitors, reduce risk, and keep sites safe."
      />
    </Layout>
  )
}
