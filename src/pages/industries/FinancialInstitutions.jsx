import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import CTABanner from '../../components/CTABanner'
import BlogModule from '../../components/BlogModule'
import ApiModule from '../../components/ApiModule'
import DashboardModule from '../../components/DashboardModule'

export default function FinancialInstitutions() {
  return (
    <Layout>
      {/* HERO */}
      <section style={{ background: '#fff', padding: '96px 0' }}>
        <div className="content-wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <div>
              <span className="eyebrow">KYx for Financial Institutions</span>
              <h1 style={{ marginBottom: 24 }}>Stop fraud before it disrupts your business.</h1>
              <p style={{ fontSize: 18, color: '#555', marginBottom: 32, lineHeight: 1.7 }}>
                From consumer onboarding to business account approvals, financial institutions face mounting pressure to prevent fraud and meet compliance requirements, while moving fast. Checkr Trust helps you verify identities and screen for criminal history in real time, so you can make smarter decisions before risk turns into loss.
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
            <h2 style={{ marginBottom: 16 }}>KYC isn't enough if it stops at identity.</h2>
            <p style={{ fontSize: 18, color: '#555', lineHeight: 1.7 }}>
              Traditional identity checks can show you who someone is, but not what they've done. Over half of fraud offenders have prior convictions, but ID checks and watchlists won't catch them. Checkr Trust adds real-time criminal data to your verification process and risk stack so you can prevent fraud, stay compliant, and protect revenue.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURE GRID (Products) */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div className="content-wrap">
          <h2 style={{ marginBottom: 16 }}>The KYx risk stack for financial institutions.</h2>
          <p style={{ maxWidth: 640, color: '#555', marginBottom: 40 }}>
            Checkr Trust delivers real-time insights from multiple layers of customer risk—criminal, watchlist, and identity data—all through one flexible integration.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            {[
              {
                title: 'National Criminal Database',
                desc: 'Surface prior convictions tied to fraud, theft, and financial crimes from 900M+ public records across courts, corrections, and more.',
                to: '/products/criminal-and-public-records-checks',
              },
              {
                title: 'Global Watchlists',
                desc: 'Screen individuals against FBI, OFAC, Interpol, and other domestic and international watchlists to maintain compliance and block high-risk actors.',
                to: '/products/criminal-and-public-records-checks',
              },
              {
                title: 'Identity Checks',
                desc: 'Match submitted identity info to 9B+ verified records to confirm legitimacy, catch synthetic or fake identities, and prevent fraud—no document upload required for most users.',
                to: '/products/identity-checks',
              },
              {
                title: 'Biometric and Document Verification',
                desc: 'Protect high-risk, high-value transactions by stopping impersonation, deepfakes, and identity spoofing. Add selfie-to-ID verification with a 99% detection rate and near-zero false positives.',
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

      <ApiModule
        body="Checkr Trust integrates with your platform via API to deliver real-time insights on identity, criminal history, and watchlist data. Build custom flows that match your risk thresholds without slowing customer acquisition."
      />

      <DashboardModule />

      {/* STATS */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div className="content-wrap">
          <h2 style={{ marginBottom: 40 }}>Why leading financial institutions choose Checkr Trust.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, marginBottom: 40 }}>
            {[
              { stat: '99%', label: 'US identity verification coverage' },
              { stat: '2,400+', label: 'criminal data sources in real time' },
              { stat: 'Global', label: 'watchlists across sanctions and enforcement agencies' },
            ].map((item) => (
              <div key={item.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 48, fontWeight: 600, color: '#111', lineHeight: 1, marginBottom: 8 }}>{item.stat}</div>
                <div style={{ fontSize: 14, color: '#666' }}>{item.label}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              'Built for KYC, KYB, BSA, AML, CIP, and CDD compliance',
              'Trusted by leading financial services providers and fintechs',
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
        headline="Ready to protect revenue by screening for more than identity?"
        body="Get a live walkthrough to see how Checkr Trust can help you reduce fraud and loss, meet compliance standards, and protect critical revenue streams."
      />
    </Layout>
  )
}
