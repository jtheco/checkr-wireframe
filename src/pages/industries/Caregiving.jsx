import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import CTABanner from '../../components/CTABanner'
import BlogModule from '../../components/BlogModule'
import ApiModule from '../../components/ApiModule'
import DashboardModule from '../../components/DashboardModule'

export default function Caregiving() {
  return (
    <Layout>
      {/* HERO */}
      <section className="section-hero" style={{ background: '#fff' }}>
        <div className="content-wrap">
          <div className="grid-hero">
            <div>
              <span className="eyebrow">KYx for Caregiving</span>
              <h1 style={{ marginBottom: 24 }}>Protect caregivers before they step inside.</h1>
              <p style={{ fontSize: 18, color: '#555', marginBottom: 32, lineHeight: 1.7 }}>
                Caregivers aren't just entering homes, they're entering unknown environments. Your platform is responsible for keeping them safe, and identity verification alone isn't enough. Checkr Trust helps you screen entire households for risk—everyone associated with an address—so you can prevent harm before it happens.
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
            <h2 style={{ marginBottom: 16 }}>Caregivers' risk is business risk.</h2>
            <p style={{ fontSize: 18, color: '#555', lineHeight: 1.7 }}>
              A missed red flag can have devastating consequences for caregivers, your brand, and the trust that holds your platform together. Checkr Trust delivers real-time identity and criminal record checks to help caregiving platforms reduce risk without adding friction to your verification process flow.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURE GRID (Products) */}
      <section className="section-lg" style={{ background: '#fff' }}>
        <div className="content-wrap">
          <h2 style={{ marginBottom: 16 }}>The KYx safety stack for caregiving businesses.</h2>
          <p style={{ maxWidth: 640, color: '#555', marginBottom: 40 }}>
            Checkr Trust delivers real-time insights from multiple layers of customer risk—criminal, sex offender, and identity data—all through one flexible integration.
          </p>
          <div className="grid-2col-cards">
            {[
              {
                title: 'National Criminal Database',
                desc: 'Flag violent, sexual, or theft-related offenses through real time access to a proprietary database of 900M+ records aggregated from data sources across all US jurisdictions.',
                to: '/products/criminal-and-public-records-checks',
              },
              {
                title: 'Sex Offender Search by Address',
                desc: 'Go beyond the individual on record by checking for any registered sex offender associated with an address to ensure the homes your caregivers enter are safe.',
                to: '/products/criminal-and-public-records-checks',
              },
              {
                title: 'PII Validation',
                desc: 'Instantly verify that the identity is a real person—not a bot—by validating names, DOB, and at least one personal identifier against a graph of 9B+ records from verified sources.',
                to: '/products/identity-checks',
              },
              {
                title: 'Biometric and Document Verification',
                desc: 'Prevent impersonation, catfishing, deepfakes, and identity spoofing at scale by adding selfie-to-ID document verification with 99% detection rate and near-zero false positives.',
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
              "Checkr Trust's solution was exactly what we needed. It's simple, straightforward, and low cost. The implementation was super easy, and having a screening process makes trust and safety an advantage in our partner and sales conversations."
            </blockquote>
            <div style={{ fontSize: 14, fontWeight: 500, color: '#333' }}>Leslie Borrell</div>
            <div style={{ fontSize: 13, color: '#888', marginTop: 4 }}>Founder and CEO, Carefully</div>
          </div>
        </div>
      </section>

      <ApiModule
        body="Checkr Trust connects to your caregiving platform via API, enabling real-time household-level sex offender screening. Individual identity and criminal history checks flow seamlessly into your verification process, so you can protect caregivers without slowing growth."
      />

      <DashboardModule />

      {/* STATS */}
      <section className="section-lg" style={{ background: '#fff' }}>
        <div className="content-wrap">
          <h2 style={{ marginBottom: 40 }}>Why leading caregiving platforms choose Checkr Trust.</h2>
          <div className="grid-3col" style={{ marginBottom: 40 }}>
            {[
              { stat: '99%', label: 'US identity verification coverage' },
              { stat: '2,400+', label: 'criminal data sources in real time' },
              { stat: '40%', label: 'reduction in manual reviews' },
            ].map((item) => (
              <div key={item.label} style={{ textAlign: 'center' }}>
                <div className="stat-number">{item.stat}</div>
                <div style={{ fontSize: 14, color: '#666' }}>{item.label}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              'Fully API-driven for seamless integration',
              'Trusted by platforms that serve millions',
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
        headline="Ready to make trust your competitive advantage?"
        body="Get a live walkthrough to see how Checkr Trust can help you verify users, reduce risk, and protect caregivers."
      />
    </Layout>
  )
}
