import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import CTABanner from '../../components/CTABanner'
import BlogModule from '../../components/BlogModule'
import ApiModule from '../../components/ApiModule'
import DashboardModule from '../../components/DashboardModule'

export default function VehicleRental() {
  return (
    <Layout>
      {/* HERO */}
      <section className="section-hero" style={{ background: '#fff' }}>
        <div className="content-wrap">
          <div className="grid-hero">
            <div>
              <span className="eyebrow">KYx for Vehicle Rental and Sharing</span>
              <h1 style={{ marginBottom: 24 }}>Protect your fleet and the people who power it.</h1>
              <p style={{ fontSize: 18, color: '#555', marginBottom: 32, lineHeight: 1.7 }}>
                Whether it's a $50,000 vehicle or a two-door loaner, every key you hand off carries risk. Checkr Trust helps vehicle rental and sharing platforms screen users before they get behind the wheel, so you can prevent fraud, reduce theft and incidents, and protect your business.
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
            <h2 style={{ marginBottom: 16 }}>Unchecked drivers put your users and platform at risk.</h2>
            <p style={{ fontSize: 18, color: '#555', lineHeight: 1.7 }}>
              A single high-risk driver can result in stolen vehicles, insurance claims, or worse. Checkr Trust combines real-time identity verification and criminal record screening to help vehicle rental and sharing platforms stop fraud and reduce operational risk, without slowing down your operations.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURE GRID (Products) */}
      <section className="section-lg" style={{ background: '#fff' }}>
        <div className="content-wrap">
          <h2 style={{ marginBottom: 16 }}>The KYx safety stack for vehicle rental and sharing platforms.</h2>
          <p style={{ maxWidth: 640, color: '#555', marginBottom: 40 }}>
            Checkr Trust delivers real-time insights from multiple layers of customer risk—criminal, identity, and driver data—all through one flexible integration.
          </p>
          <div className="grid-2col-cards">
            {[
              {
                title: 'National Criminal Database',
                desc: 'Instantly flag DUI, reckless driving, hit and run, grand theft auto, and carjacking offenses using 2,400+ data sources across all US jurisdictions. Protect your fleet and your users with real-time criminal intelligence.',
                to: '/products/criminal-and-public-records-checks',
              },
              {
                title: 'Identity Checks',
                desc: 'Match submitted PII against 9B+ verified records to confirm legitimacy—without document uploads for most users. Reduce drop-off, detect synthetic identities, and onboard faster.',
                to: '/products/identity-checks',
              },
              {
                title: 'Motor Vehicle Reports (MVRs)',
                desc: "Get a full picture of a driver's history, including violations, suspensions, and crash data. Ideal for platforms that need comprehensive insight before handing over the keys.",
                to: '/products/driver-checks',
              },
              {
                title: "Driver's License Status Check",
                desc: "Quickly confirm if a license is valid and eligible for use, with no friction and up to 100% savings on DMV fees.",
                to: '/products/driver-checks',
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
              "At Turo, our commitment to creating a trusted and safe environment for both vehicle hosts and guests is paramount. By partnering with Checkr Trust, we're leveraging cutting-edge technology to identify potential risks early on to mitigate downstream business impacts. This reinforces Turo as a brand that vehicle owners can trust with their valuable assets."
            </blockquote>
            <div style={{ fontSize: 14, fontWeight: 500, color: '#333' }}>Mike Wilkins</div>
            <div style={{ fontSize: 13, color: '#888', marginTop: 4 }}>VP of Trust and Safety, Turo</div>
          </div>
        </div>
      </section>

      <ApiModule
        body="From user sign-up to ignition, Checkr Trust delivers criminal, identity, and driving data in real time via a single API. Designed for vehicle rental and sharing platforms that need to screen fast, reduce incidents, and scale without friction."
      />

      <DashboardModule />

      {/* STATS */}
      <section className="section-lg" style={{ background: '#fff' }}>
        <div className="content-wrap">
          <h2 style={{ marginBottom: 40 }}>Why leading vehicle rental and sharing platforms choose Checkr Trust.</h2>
          <div className="grid-3col" style={{ marginBottom: 40 }}>
            {[
              { stat: '99%', label: 'US identity verification coverage' },
              { stat: '2,400+', label: 'criminal data sources in real time' },
              { stat: '40%', label: 'fewer manual reviews' },
            ].map((item) => (
              <div key={item.label} style={{ textAlign: 'center' }}>
                <div className="stat-number" style={{ fontSize: 48, fontWeight: 600, color: '#111', lineHeight: 1, marginBottom: 8 }}>{item.stat}</div>
                <div style={{ fontSize: 14, color: '#666' }}>{item.label}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              "Save up to 100% on DMV transaction fees with Driver's License Status Checks",
              'Trusted by vehicle platforms with high-volume, high-value assets',
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
        headline="Ready to make trusted drivers your competitive advantage?"
        body="Get a live walkthrough to see how Checkr Trust can help you verify users, reduce risk, and keep your fleet moving safely."
      />
    </Layout>
  )
}
