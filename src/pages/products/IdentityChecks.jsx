import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import CTABanner from '../../components/CTABanner'
import BlogModule from '../../components/BlogModule'

const industryLinks = [
  { title: 'Caregiving', desc: 'Verify identities of everyone in a household.', to: '/industries/caregiving' },
  { title: 'Financial Institutions', desc: 'Meet CIP and CDD compliance requirements.', to: '/industries/financial-institutions' },
  { title: 'Online Dating', desc: 'Stop fake profiles and synthetic identities.', to: '/industries/online-dating' },
  { title: 'Ridesharing', desc: 'Confirm rider identity before every trip.', to: '/industries/ridesharing' },
  { title: 'Short-Term Rentals', desc: 'Verify guests and hosts before check-in.', to: '/industries/short-term-rentals' },
  { title: 'Vehicle Rental and Sharing', desc: 'Reduce drop-off and detect synthetic identities.', to: '/industries/vehicle-rental-and-sharing' },
  { title: 'Visitor Management Systems', desc: 'Confirm visitor identity at check-in.', to: '/industries/visitor-management-systems' },
]

export default function IdentityChecks() {
  return (
    <Layout>
      {/* HERO */}
      <section className="section-hero" style={{ background: '#fff' }}>
        <div className="content-wrap">
          <div className="grid-hero">
            <div>
              <span className="eyebrow">Identity Checks</span>
              <h1 style={{ marginBottom: 24 }}>The identity data layer for safer, smarter verification.</h1>
              <p style={{ fontSize: 18, color: '#555', marginBottom: 32, lineHeight: 1.7 }}>
                Checkr Trust delivers holistic KYx risk intelligence through real-time identity verification, paired with criminal data—all in one flexible platform. Confirm legitimacy, stop synthetic fraud, and accelerate verification with confidence to keep high-risk users out of your ecosystem.
              </p>
              <Link to="/get-a-demo" className="btn-primary">Get a demo</Link>
            </div>
            <div>
              <div className="img-placeholder img-placeholder-hero">[Product screenshot]</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM/SOLUTION */}
      <section className="section-lg" style={{ background: '#f8f8f7' }}>
        <div className="content-wrap">
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ marginBottom: 16 }}>Identity verification alone is not enough.</h2>
            <p style={{ fontSize: 18, color: '#555', lineHeight: 1.7 }}>
              Traditional identity checks can show you who someone is, but not what they've done. Over half of fraud offenders have prior convictions, and identity verification alone doesn't flag them. Checkr Trust brings together verification and criminal data to deliver risk intelligence others miss. All in one integrated platform.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section-lg" style={{ background: '#fff' }}>
        <div className="content-wrap">
          <h2 style={{ marginBottom: 40 }}>Built to reduce friction, fraud, and false trust.</h2>
          <div className="grid-2col">
            {[
              { h3: 'Stop synthetic and stolen identities.', p: 'Validate identity data against authoritative sources and flag mismatches before fraud reaches your business.' },
              { h3: 'Increase conversion without increasing risk.', p: 'Verify most users passively—without document uploads—to reduce drop-off without sacrificing trust.' },
              { h3: 'Automate fraud detection at scale.', p: 'Configure match rules and scoring to trigger reviews only when needed, cutting manual work and false positives.' },
              { h3: 'Pair identity with criminal history.', p: "Understand not just who someone is, but whether they're safe—through one integrated platform." },
            ].map((item) => (
              <div key={item.h3} style={{ display: 'flex', gap: 16 }}>
                <div className="icon-sm" style={{ marginTop: 3 }} />
                <div>
                  <h3 style={{ marginBottom: 8 }}>{item.h3}</h3>
                  <p style={{ color: '#666' }}>{item.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CROSS-LINKS */}
      <section className="section-lg" style={{ background: '#f8f8f7' }}>
        <div className="content-wrap">
          <h2 style={{ marginBottom: 40 }}>Tailored for high-trust use cases.</h2>
          <div className="grid-4col">
            {industryLinks.map((item) => (
              <Link key={item.to} to={item.to} style={{ border: '1px solid #e5e5e5', borderRadius: 12, padding: 20, background: '#fff', display: 'flex', flexDirection: 'column', textDecoration: 'none', color: 'inherit' }}>
                <h3 style={{ marginBottom: 8 }}>{item.title}</h3>
                <p style={{ marginBottom: 16, flex: 1, fontSize: 14, color: '#666' }}>{item.desc}</p>
                <span style={{ fontSize: 14, fontWeight: 500, color: '#111' }}>
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE GRID */}
      <section className="section-lg" style={{ background: '#fff' }}>
        <div className="content-wrap">
          <h2 style={{ marginBottom: 16 }}>Two layers of trust. One flexible platform.</h2>
          <p style={{ maxWidth: 640, color: '#555', marginBottom: 16 }}>
            Checkr Trust offers passive PII validation and document verification through a flexible API so you can configure identity checks to fit your risk level, use case, or workflow.
          </p>
          <a
            href="https://docs.checkrtrust.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ marginBottom: 40, display: 'inline-flex' }}
          >
            See API documentation →
          </a>
          <div className="grid-2col-cards">
            <div style={{ border: '1px solid #e5e5e5', borderRadius: 16, padding: 28, background: '#fff' }}>
              <div className="icon-placeholder" />
              <h3 style={{ marginBottom: 8 }}>PII Validation</h3>
              <p style={{ color: '#666', marginBottom: 16 }}>
                Validate names, DOB, and at least one identifier (email, phone, address) against a graph of 9B+ records from verified sources.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                {[
                  'Real-time identity resolution',
                  'Confidence match scoring',
                  '40% reduction in manual reviews',
                  '95% coverage of Gen Z',
                  'CIP and CDD compliant',
                ].map((bullet) => (
                  <li key={bullet} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 14, color: '#555' }}>
                    <span style={{ color: '#888', marginTop: 2 }}>—</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ border: '1px solid #e5e5e5', borderRadius: 16, padding: 28, background: '#fff' }}>
              <div className="icon-placeholder" />
              <h3 style={{ marginBottom: 8 }}>Biometric and Document Verification (DocV)</h3>
              <p style={{ color: '#666', marginBottom: 16 }}>
                Authenticate government-issued IDs and verify facial biometrics with 99% detection rate and near-zero false positives.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                {[
                  'Sub-2-second verification',
                  '95% conclusive outcomes',
                  'NIST PAD L2 and IAL2 compliant',
                  'Global document support',
                  'Designed for high-risk, age-restricted, and two-sided marketplaces',
                ].map((bullet) => (
                  <li key={bullet} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 14, color: '#555' }}>
                    <span style={{ color: '#888', marginTop: 2 }}>—</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CREDIBILITY */}
      <section className="section-lg" style={{ background: '#f8f8f7' }}>
        <div className="content-wrap">
          <h2 style={{ marginBottom: 16 }}>Real identity. Proven infrastructure. Beyond fast.</h2>
          <p style={{ maxWidth: 640, color: '#555', marginBottom: 40 }}>
            Checkr Trust powers over 10 million user screens every month. It brings enterprise-grade identity verification to your platform by combining authoritative data, document checks, and biometrics in one seamless flow.
          </p>
          <div className="grid-3col-cards">
            {[
              { h3: 'High-scale identity decisions.', p: 'Sub-second performance across PII and biometric checks, so you reduce drop-off without compromising confidence.' },
              { h3: 'Holistic risk intelligence.', p: "Pair identity verification with criminal screening to understand not just who someone is, but whether they're safe." },
              { h3: 'Flexible, developer-ready APIs.', p: 'Easily embed checks into your onboarding or fraud flows with full documentation and support.' },
            ].map((item) => (
              <div key={item.h3}>
                <h3 style={{ marginBottom: 8 }}>{item.h3}</h3>
                <p style={{ color: '#666' }}>{item.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUCCESS STORY (Tawkify) */}
      <section className="section-lg" style={{ background: '#fff' }}>
        <div className="content-wrap">
          <div style={{ border: '1px solid #e5e5e5', borderRadius: 20, overflow: 'hidden' }}>
            <div className="grid-story">
              <div style={{ padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ height: 32, width: 96, borderRadius: 6, background: '#e8e8e8', marginBottom: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 600, color: '#aaa' }}>Tawkify</div>
                <h2 style={{ marginBottom: 24 }}>Tawkify sets a new standard in dating safety.</h2>
                <Link to="/resources/customer-stories/tawkify" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
                  Read story →
                </Link>
              </div>
              <div style={{ background: '#f8f8f7', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 40 }}>
                <div className="img-placeholder img-placeholder-hero">[Product screenshot]</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="section-lg" style={{ background: '#f8f8f7' }}>
        <div className="content-wrap">
          <div className="quote-block" style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <div style={{ width: 52, height: 52, borderRadius: '50%', background: '#e0e0e0', margin: '0 auto 24px' }} />
            <blockquote style={{ fontStyle: 'italic', fontSize: 20, fontWeight: 500, lineHeight: 1.6, color: '#1a1a1a', marginBottom: 24 }}>
              "Working with Checkr Trust has been seamless. Their ongoing efforts to improve the product have made our process more efficient and reliable, which we greatly appreciate."
            </blockquote>
            <div style={{ fontSize: 14, fontWeight: 500, color: '#333' }}>Chris Kumar</div>
            <div style={{ fontSize: 13, color: '#888', marginTop: 4 }}>CEO, Tawkify</div>
          </div>
        </div>
      </section>

      <BlogModule />
      <CTABanner />
    </Layout>
  )
}
