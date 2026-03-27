import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import CTABanner from '../components/CTABanner'
import BlogModule from '../components/BlogModule'

const industryLinks = [
  {
    eyebrow: 'Know your household.',
    desc: 'Keep caregivers safe by screening entire households for risk.',
    cta: 'KYx products for Caregiving →',
    to: '/industries/caregiving',
  },
  {
    eyebrow: 'Know your customer.',
    desc: 'Prevent fraud and protect revenue by screening for identity and criminal risks.',
    cta: 'KYx products for Financial Institutions →',
    to: '/industries/financial-institutions',
  },
  {
    eyebrow: 'Know your date.',
    desc: 'Protect users from violent or fraudulent actors in online and app-based dating.',
    cta: 'KYx products for Online Dating →',
    to: '/industries/online-dating',
  },
  {
    eyebrow: 'Know your rider.',
    desc: 'Keep your drivers safe and protect your business from liability by screening passengers before they ride.',
    cta: 'KYx products for Ridesharing →',
    to: '/industries/ridesharing',
  },
  {
    eyebrow: 'Know your guest.',
    desc: 'Stop property damage and chargebacks before check-in.',
    cta: 'KYx products for Short Term Rentals →',
    to: '/industries/short-term-rentals',
  },
  {
    eyebrow: 'Know your driver.',
    desc: 'Lower incident risk, reduce theft, and improve margins in vehicle rental and sharing.',
    cta: 'KYx products for Vehicle Rental and Sharing →',
    to: '/industries/vehicle-rental-and-sharing',
  },
  {
    eyebrow: 'Know your visitor.',
    desc: 'Secure physical spaces with real-time identity and criminal records screening.',
    cta: 'KYx products for Visitor Management Systems →',
    to: '/industries/visitor-management-systems',
  },
]

const customerStories = [
  { company: 'Tawkify', headline: 'Tawkify sets a new standard in dating safety', to: '/resources/customer-stories/tawkify' },
  { company: 'Carefully', headline: 'Carefully builds a trusted ecosystem for childcare', to: '/resources/customer-stories/carefully' },
  { company: 'Verkada', headline: 'Verkada protects schools with real-time visitor screening', to: '/resources/customer-stories/verkada' },
  { company: 'Alert Enterprise', headline: 'Alert Enterprise streamlines visitor management with instant criminal data', to: '/resources/customer-stories/alert-enterprise' },
  { company: 'Hulah', headline: 'Hulah keeps dangerous predators off its dating platform', to: '/resources/customer-stories/hulah' },
]

export default function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section style={{ background: '#fff', padding: '96px 0' }}>
        <div className="content-wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <div>
              <span className="eyebrow">KYx Risk Intelligence Platform</span>
              <h1 style={{ marginBottom: 24 }}>Risk intelligence for every use case.</h1>
              <p style={{ fontSize: 18, color: '#555', marginBottom: 32, lineHeight: 1.7 }}>
                Checkr Trust is a KYx risk intelligence platform, built on industry-leading criminal, identity, and driving data, that helps businesses protect customers, drive revenue, and scale with confidence.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                <Link to="/get-a-demo" className="btn-primary">Get a demo</Link>
                <a href="https://docs.checkrtrust.com" target="_blank" rel="noopener noreferrer" className="btn-secondary">See API docs</a>
              </div>
            </div>
            <div>
              <div className="img-placeholder img-placeholder-hero">[Product screenshot]</div>
            </div>
          </div>
        </div>
      </section>

      {/* LOGO BAR */}
      <div style={{ borderTop: '1px solid #e5e5e5', borderBottom: '1px solid #e5e5e5', padding: '24px 0', background: '#fff' }}>
        <div className="content-wrap">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 24 }}>
            <p style={{ fontSize: 13, color: '#888', marginRight: 8, flexShrink: 0 }}>Trusted by leading platforms:</p>
            {['Envoy', 'Carefully', 'Turo', 'Tawkify', 'Hulah'].map((name) => (
              <div key={name} style={{ height: 32, width: 96, borderRadius: 6, background: '#e8e8e8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 600, color: '#aaa' }} title={name}>{name}</div>
            ))}
          </div>
        </div>
      </div>

      {/* FEATURE GRID (Products) */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="content-wrap">
          <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{ marginBottom: 16 }}>Turn uncertainty into clarity with full-profile KYx products.</h2>
            <p style={{ color: '#555' }}>
              Checkr Trust combines criminal, identity, and driving data into a complete trust profile, so you can assess individual risk, protect your business, and make faster, safer decisions at scale.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            <div style={{ border: '1px solid #e5e5e5', borderRadius: 16, padding: 28, background: '#fff' }}>
              <div className="icon-placeholder" />
              <h3 style={{ marginBottom: 8 }}>Criminal and Public Records</h3>
              <p style={{ fontSize: 15, marginBottom: 16 }}>Flag high-risk and violent actors with unmatched coverage and clarity.</p>
              <Link to="/products/criminal-and-public-records-checks" style={{ fontSize: 14, fontWeight: 500, color: '#111', textDecoration: 'none' }}>More about Criminal and Public Records Checks →</Link>
            </div>
            <div style={{ border: '1px solid #e5e5e5', borderRadius: 16, padding: 28, background: '#fff' }}>
              <div className="icon-placeholder" />
              <h3 style={{ marginBottom: 8 }}>Identity Verification</h3>
              <p style={{ fontSize: 15, marginBottom: 16 }}>Reduce fraud by confirming real identities using billions of authoritative records with 99% US coverage.</p>
              <Link to="/products/identity-checks" style={{ fontSize: 14, fontWeight: 500, color: '#111', textDecoration: 'none' }}>More about Identity Checks →</Link>
            </div>
            <div style={{ border: '1px solid #e5e5e5', borderRadius: 16, padding: 28, background: '#fff' }}>
              <div className="icon-placeholder" />
              <h3 style={{ marginBottom: 8 }}>Driving History</h3>
              <p style={{ fontSize: 15, marginBottom: 16 }}>Reduce accidents, fraud, and theft by screening drivers for license status, violations, and crash history.</p>
              <Link to="/products/driver-checks" style={{ fontSize: 14, fontWeight: 500, color: '#111', textDecoration: 'none' }}>More about Driver Checks →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ROLLOVER STRIP */}
      <section style={{ padding: '64px 0', background: '#f8f8f7' }}>
        <div className="content-wrap">
          <h2 style={{ marginBottom: 32 }}>Customers who chose trust as a growth strategy.</h2>
          <div style={{ borderTop: '1px solid #e5e5e5' }}>
            {customerStories.map((story) => (
              <Link
                key={story.to}
                to={story.to}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 16px', margin: '0 -16px', gap: 24, borderBottom: '1px solid #e5e5e5', textDecoration: 'none', borderRadius: 8, transition: 'background 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.background = '#f4f4f3'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <span style={{ fontSize: 12, fontWeight: 700, color: '#999', flexShrink: 0, width: 120, letterSpacing: '0.04em', textTransform: 'uppercase' }}>{story.company}</span>
                <span style={{ fontSize: 16, fontWeight: 500, color: '#111', flex: 1 }}>{story.headline}</span>
                <span style={{ color: '#999', flexShrink: 0, fontSize: 18 }}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CREDIBILITY */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="content-wrap">
          <div style={{ maxWidth: 640, marginBottom: 48 }}>
            <h2 style={{ marginBottom: 16 }}>Built for decision-makers who can't afford blindspots.</h2>
            <p style={{ color: '#555' }}>
              Checkr built one of the industry's fastest, most accurate background check infrastructures. Checkr Trust gives businesses access to the same best-in-class criminal, identity, and driving data so you can screen customers quickly and confidently, with zero guesswork.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
            {[
              { h3: 'Unmatched criminal data coverage', p: '2,400+ sources across every US jurisdiction, 99% coverage of the US population in our database' },
              { h3: 'Frictionless identity checks', p: '9B+ authoritative records, near-instant returns' },
              { h3: 'Real-time driver checks', p: "Access Motor Vehicle Record data in seconds and save on DMV fees with Driver's License Status Checks" },
              { h3: 'Enterprise-ready', p: '99.9% uptime, flexible filters, scalable across workflows' },
              { h3: 'Built for your stack', p: 'Clean APIs and fast implementation support' },
              { h3: 'Easy to search', p: 'Launch with a simple dashboard—no integration or coding required' },
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

      {/* CROSS-LINKS (Industries) */}
      <section style={{ padding: '80px 0', background: '#f8f8f7' }}>
        <div className="content-wrap">
          <h2 style={{ marginBottom: 40 }}>Risk looks different in every industry. We tailor KYx to match.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {industryLinks.map((item) => (
              <div key={item.to} style={{ border: '1px solid #e5e5e5', borderRadius: 12, padding: 20, background: '#fff', display: 'flex', flexDirection: 'column' }}>
                <span className="eyebrow">{item.eyebrow}</span>
                <p style={{ marginBottom: 16, flex: 1, fontSize: 14, color: '#666' }}>{item.desc}</p>
                <Link to={item.to} style={{ fontSize: 14, fontWeight: 500, color: '#111', textDecoration: 'none' }}>
                  {item.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API MODULE (homepage variant with numbered steps) */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="content-wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'flex-start' }}>
            <div>
              <span className="eyebrow">Developer-first</span>
              <h2 style={{ marginBottom: 16 }}>Clear signal. Low friction. High volume.</h2>
              <p style={{ fontSize: 17, color: '#555', marginBottom: 32, lineHeight: 1.7 }}>
                Checkr Trust is a unified KYx platform that delivers actionable risk intelligence through one API, in real time and configured to your workflow.
              </p>
              <a
                href="https://docs.checkrtrust.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                See API documentation →
              </a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {[
                { num: '01', title: 'Integrate via API', desc: 'Fast, flexible implementation designed for modern platforms.' },
                { num: '02', title: 'Set your filters', desc: 'Choose the data signals and thresholds that align with your risk model.' },
                { num: '03', title: 'Make the call', desc: 'Get real-time, decision-ready insights at scale, without added friction.' },
              ].map((step) => (
                <div key={step.num} style={{ display: 'flex', gap: 20 }}>
                  <span style={{ flexShrink: 0, width: 36, height: 36, borderRadius: '50%', border: '2px solid #e5e5e5', color: '#999', fontSize: 11, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'monospace', fontWeight: 700 }}>
                    {step.num}
                  </span>
                  <div style={{ paddingTop: 4 }}>
                    <h3 style={{ marginBottom: 4 }}>{step.title}</h3>
                    <p style={{ color: '#666' }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMER STORIES PREVIEW */}
      <section style={{ padding: '80px 0', background: '#f8f8f7' }}>
        <div className="content-wrap">
          <div style={{ maxWidth: 640, marginBottom: 32 }}>
            <h2 style={{ marginBottom: 16 }}>Go from guessing to knowing to results.</h2>
            <p style={{ color: '#555' }}>
              Checkr Trust helps high-trust businesses reduce fraud, increase revenue, and protect their brand. Screen customers at scale to get risk intelligence that boosts revenue, growth, and retention.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 32 }}>
            {[
              'Reduce fraud and chargebacks in high-value rentals',
              'Improve user safety and retention',
              'Increase margins by preventing incidents and reducing manual reviews',
              'Protect brand reputation by keeping out high-risk users',
              'Strengthen underwriting and support BSA compliance for financial services',
              'Streamline operations with seamless API integration',
            ].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <div className="icon-sm" style={{ marginTop: 3 }} />
                <p style={{ color: '#444' }}>{item}</p>
              </div>
            ))}
          </div>
          <Link to="/resources/customer-stories" style={{ fontSize: 14, fontWeight: 600, color: '#111', textDecoration: 'none' }}>
            See all customer stories →
          </Link>
        </div>
      </section>

      {/* FEATURED STORY (Tawkify) */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="content-wrap">
          <div style={{ border: '1px solid #e5e5e5', borderRadius: 20, overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
              <div style={{ padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ height: 32, width: 96, borderRadius: 6, background: '#e8e8e8', marginBottom: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 600, color: '#aaa' }}>Tawkify</div>
                <h2 style={{ marginBottom: 16 }}>Tawkify sets a new standard in dating safety.</h2>
                <blockquote style={{ fontStyle: 'italic', color: '#555', fontSize: 17, lineHeight: 1.7, marginBottom: 24 }}>
                  "Our clients truly appreciate this added layer of security. It's one of the key reasons why they choose Tawkify—they trust us to prioritize their safety and well-being while helping them build meaningful, lasting connections with others."
                </blockquote>
                <p style={{ fontSize: 13, color: '#666', marginBottom: 24 }}>Chris Kumar, CEO, Tawkify</p>
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

      <BlogModule />
      <CTABanner />
    </Layout>
  )
}
