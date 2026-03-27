import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import CTABanner from '../../components/CTABanner'
import BlogModule from '../../components/BlogModule'
import ApiModule from '../../components/ApiModule'
import DashboardModule from '../../components/DashboardModule'

export default function OnlineDating() {
  return (
    <Layout>
      {/* HERO */}
      <section style={{ background: '#fff', padding: '96px 0' }}>
        <div className="content-wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <div>
              <span className="eyebrow">KYx for Online Dating</span>
              <h1 style={{ marginBottom: 24 }}>Keep bad actors off your dating platform.</h1>
              <p style={{ fontSize: 18, color: '#555', marginBottom: 32, lineHeight: 1.7 }}>
                Users count on your platform to meet people who are safe and trustworthy. Checkr Trust helps you screen users fast and flag fraud early, before high-risk individuals enter your ecosystem. By raising the bar on trust and safety, you attract more paying users, reduce churn, and create a premium experience that drives revenue.
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
            <h2 style={{ marginBottom: 16 }}>You can't scale if users don't feel safe.</h2>
            <p style={{ fontSize: 18, color: '#555', lineHeight: 1.7 }}>
              If users don't feel safe, they leave, and so does your platform's value. From financial fraud and catfishing to repeat scammers and violent offenses, threats come in many forms. Today's brands are held accountable in headlines and social feeds, making inaction not just risky, but a real liability. Checkr Trust helps you stay ahead by flagging identity fraud and criminal risk at sign-up through a fast, flexible API.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURE GRID (Products) */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div className="content-wrap">
          <h2 style={{ marginBottom: 16 }}>The KYx safety stack for online dating platforms.</h2>
          <p style={{ maxWidth: 640, color: '#555', marginBottom: 40 }}>
            Checkr Trust delivers real-time insights from multiple layers of customer risk—criminal, sex offender, and identity data—all through one flexible integration.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            {[
              {
                title: 'National Criminal Database',
                desc: 'Protect your users by flagging individuals with violent, sexual, or fraud-related charges, including warrant and arrest data, using 2,400+ data sources across all US jurisdictions.',
                to: '/products/criminal-and-public-records-checks',
              },
              {
                title: 'Sex Offender Registries',
                desc: "Search sex offender registries across all 50 states, Washington DC, and all US territories and tribes. Reports include key context like the individual's date of registration and current status.",
                to: '/products/criminal-and-public-records-checks',
              },
              {
                title: 'Identity Checks',
                desc: 'Confirm that users are who they say they are by matching submitted PII against 9B+ authoritative records. Detect fake profiles and synthetic identities to prevent catfishing and romantic financial fraud on your platform.',
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
      <section style={{ background: '#f8f8f7', padding: '80px 0' }}>
        <div className="content-wrap">
          <div className="quote-block" style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <div style={{ width: 52, height: 52, borderRadius: '50%', background: '#e0e0e0', margin: '0 auto 24px' }} />
            <blockquote style={{ fontStyle: 'italic', fontSize: 20, fontWeight: 500, lineHeight: 1.6, color: '#1a1a1a', marginBottom: 24 }}>
              "Our clients truly appreciate this added layer of security. It's one of the key reasons why they choose Tawkify—they trust us to prioritize their safety and well-being while helping them build meaningful, lasting connections with others."
            </blockquote>
            <div style={{ fontSize: 14, fontWeight: 500, color: '#333' }}>Chris Kumar</div>
            <div style={{ fontSize: 13, color: '#888', marginTop: 4 }}>CEO, Tawkify</div>
          </div>
        </div>
      </section>

      <ApiModule
        body="Checkr Trust integrates with your dating platform to verify identity and screen for criminal history in seconds. Our flexible API gives you the trust signals you need to drive safety, without adding friction to your onboarding flow."
      />

      <DashboardModule />

      {/* STATS */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div className="content-wrap">
          <h2 style={{ marginBottom: 40 }}>Why leading online dating platforms choose Checkr Trust.</h2>
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
              'Sub-2-second biometric verification (when needed)',
              'Trusted by platforms that prioritize safety, growth, and reputation',
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
        headline="Ready to make trusted dates your competitive advantage?"
        body="Get a live walkthrough to see how Checkr Trust can help you verify users, reduce risk, and add trust to your dating platform."
      />
    </Layout>
  )
}
