import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import CTABanner from '../../components/CTABanner'
import BlogModule from '../../components/BlogModule'
import ApiModule from '../../components/ApiModule'
import DashboardModule from '../../components/DashboardModule'

export default function Ridesharing() {
  return (
    <Layout>
      {/* HERO */}
      <section className="section-hero" style={{ background: '#fff' }}>
        <div className="content-wrap">
          <div className="grid-hero">
            <div>
              <span className="eyebrow">KYx for Ridesharing</span>
              <h1 style={{ marginBottom: 24 }}>Keep drivers safe and your platform growing.</h1>
              <p style={{ fontSize: 18, color: '#555', marginBottom: 32, lineHeight: 1.7 }}>
                Rideshare platforms are responsible for protecting drivers from harm, especially when unknown passengers get in the car. Checkr Trust helps you screen riders for risk to reduce incidents and keep your drivers safe, satisfied, and active. This foundation of trust strengthens your brand, attracts more drivers, and fuels sustainable revenue growth.
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
      <section className="section-lg" style={{ background: '#f8f8f7' }}>
        <div className="content-wrap">
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ marginBottom: 16 }}>Drivers don't get behind the wheel if they don't feel safe.</h2>
            <p style={{ fontSize: 18, color: '#555', lineHeight: 1.7 }}>
              When safety breaks down, driver retention follows. From fraud to physical harm, one high-risk passenger can trigger lasting damage. Checkr Trust flags risk at sign-up—combining identity verification and criminal history into one flexible API—so your drivers stay protected and your platform stays strong.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURE GRID (Products) */}
      <section className="section-lg" style={{ background: '#fff' }}>
        <div className="content-wrap">
          <h2 style={{ marginBottom: 16 }}>The KYx safety stack for rideshare platforms.</h2>
          <p style={{ maxWidth: 640, color: '#555', marginBottom: 40 }}>
            Checkr Trust delivers real-time insights from multiple layers of customer risk—criminal, sex offender, and identity data—all through one flexible integration.
          </p>
          <div className="grid-2col-cards">
            {[
              {
                title: 'National Criminal Database',
                desc: 'Instantly flag users with violent or threat-related offenses using 2,400+ sources across all US jurisdictions. Keep dangerous passengers off your platform with real-time criminal data.',
                to: '/products/criminal-and-public-records-checks',
              },
              {
                title: 'Sex Offender Registries',
                desc: "Search sex offender registries across all 50 states, Washington DC, and all US territories and tribes. Reports include key context like the individual's date of registration and current status.",
                to: '/products/criminal-and-public-records-checks',
              },
              {
                title: 'Identity Checks',
                desc: 'Confirm rider identity in real time by matching submitted information to 9B+ authoritative records—no document upload required for most users.',
                to: '/products/identity-checks',
              },
              {
                title: 'Biometric and Document Verification',
                desc: 'Prevent impersonation, catfishing, deepfakes, and identity spoofing at scale by adding selfie-to-ID verification with 99% detection rate and near-zero false positives.',
                to: '/products/identity-checks',
              },
            ].map((card) => (
              <Link key={card.title} to={card.to} style={{ border: '1px solid #e5e5e5', borderRadius: 16, padding: 28, background: '#fff', display: 'flex', flexDirection: 'column', textDecoration: 'none', color: 'inherit' }}>
                <div className="icon-placeholder" />
                <h3 style={{ marginBottom: 8 }}>{card.title}</h3>
                <p style={{ color: '#666', marginBottom: 16, flex: 1 }}>{card.desc}</p>
                <span style={{ fontSize: 14, fontWeight: 500, color: '#111' }}>
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="section-lg" style={{ background: '#f8f8f7' }}>
        <div className="content-wrap">
          <div className="quote-block" style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <div style={{ width: 52, height: 52, borderRadius: '50%', background: '#e0e0e0', margin: '0 auto 24px' }} />
            <blockquote style={{ fontStyle: 'italic', fontSize: 20, fontWeight: 500, lineHeight: 1.6, color: '#1a1a1a', marginBottom: 24 }}>
              "Driver safety is everything. If they don't feel protected, they won't stay on the road. Checkr Trust helps us spot risk and respond fast."
            </blockquote>
            <div style={{ fontSize: 14, fontWeight: 500, color: '#333' }}>Head of Risk Operations</div>
            <div style={{ fontSize: 13, color: '#888', marginTop: 4 }}>Ridesharing Platform</div>
          </div>
        </div>
      </section>

      <ApiModule
        body="Checkr Trust connects to your rideshare platform via API to screen passengers in real time using identity verification and criminal record data. One integration. No added lag. Just safer trips and stronger driver retention."
      />

      <DashboardModule />

      {/* STATS */}
      <section className="section-lg" style={{ background: '#fff' }}>
        <div className="content-wrap">
          <h2 style={{ marginBottom: 40 }}>Why leading rideshare platforms choose Checkr Trust.</h2>
          <div className="grid-3col" style={{ marginBottom: 40 }}>
            {[
              { stat: '99%', label: 'US identity verification coverage' },
              { stat: '2,400+', label: 'criminal data sources in real time' },
              { stat: '<2s', label: 'sub-2-second identity verification' },
            ].map((item) => (
              <div key={item.label} style={{ textAlign: 'center' }}>
                <div className="stat-number" style={{ fontSize: 48, fontWeight: 600, color: '#111', lineHeight: 1, marginBottom: 8 }}>{item.stat}</div>
                <div style={{ fontSize: 14, color: '#666' }}>{item.label}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              'Built for platforms with high-volume, real-time workflows',
              'Trusted by mobility leaders who prioritize driver safety',
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
        headline="Ready to make trusted passengers your competitive advantage?"
        body="Get a live walkthrough to see how Checkr Trust can help protect drivers, reduce risk, and drive platform growth."
      />
    </Layout>
  )
}
