import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import CTABanner from '../../components/CTABanner'
import BlogModule from '../../components/BlogModule'

const industryLinks = [
  { title: 'Caregiving', desc: 'Screen households before caregivers enter.', to: '/industries/caregiving' },
  { title: 'Financial Institutions', desc: 'Prevent fraud and meet compliance standards.', to: '/industries/financial-institutions' },
  { title: 'Online Dating', desc: 'Flag violent and fraudulent actors at sign-up.', to: '/industries/online-dating' },
  { title: 'Ridesharing', desc: 'Protect drivers from high-risk passengers.', to: '/industries/ridesharing' },
  { title: 'Short-Term Rentals', desc: 'Prevent property damage and platform abuse.', to: '/industries/short-term-rentals' },
  { title: 'Vehicle Rental and Sharing', desc: 'Reduce theft and incidents before the keys are handed over.', to: '/industries/vehicle-rental-and-sharing' },
  { title: 'Visitor Management Systems', desc: 'Flag risk before entry into sensitive sites.', to: '/industries/visitor-management-systems' },
]

export default function CriminalRecords() {
  return (
    <Layout>
      {/* HERO */}
      <section style={{ background: '#fff', padding: '96px 0' }}>
        <div className="content-wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <div>
              <span className="eyebrow">Criminal and Public Records Checks</span>
              <h1 style={{ marginBottom: 24 }}>The criminal data layer for trust, safety, and speed.</h1>
              <p style={{ fontSize: 18, color: '#555', marginBottom: 32, lineHeight: 1.7 }}>
                Checkr Trust delivers holistic KYx risk intelligence through criminal and public record checks covering 99% of the US population. Identity verification tells you who someone is, criminal data tells you what they've done. Together they help high-trust businesses reduce harm and make faster, smarter growth decisions.
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

      {/* PROBLEM/SOLUTION */}
      <section style={{ background: '#f8f8f7', padding: '80px 0' }}>
        <div className="content-wrap">
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ marginBottom: 16 }}>You can't see the full risk picture without criminal history.</h2>
            <p style={{ fontSize: 18, color: '#555', lineHeight: 1.7 }}>
              Criminal data is one of the strongest signals of risk. Other providers rely on static watchlists that miss real-world context. Checkr Trust gives you immediate, direct-to-source access to the most comprehensive criminal and public records, so you can see the full risk profile for every individual.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div className="content-wrap">
          <h2 style={{ marginBottom: 40 }}>Built for risk reduction, not red tape.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
            {[
              { h3: 'Cut risk and cost.', p: 'Surface clear risk signals with precision and speed to prevent fraud, loss, and platform abuse.' },
              { h3: 'Drive new revenue.', p: 'Enter high-trust markets, onboard users faster, and offer premium experiences by turning trust and safety into competitive advantages.' },
              { h3: 'Protect your brand.', p: 'Avoid headlines, lawsuits, and lost users. Safety is the standard customers expect, KYx risk intelligence helps deliver it.' },
              { h3: 'Make smarter decisions, faster.', p: 'Use filters to surface only the records that matter to your business, so you can reduce review time and act with confidence.' },
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
      <section style={{ background: '#f8f8f7', padding: '80px 0' }}>
        <div className="content-wrap">
          <h2 style={{ marginBottom: 16 }}>Risk signals, tailored by industry.</h2>
          <p style={{ maxWidth: 640, color: '#555', marginBottom: 40 }}>
            Whether you're sending someone into a home, handing over a $50k vehicle, or enabling in-person interactions, you need insight into who's on your platform to protect your users and business. We tailor criminal data to match the risks that matter in your industry.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {industryLinks.map((item) => (
              <div key={item.to} style={{ border: '1px solid #e5e5e5', borderRadius: 12, padding: 20, background: '#fff', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ marginBottom: 8 }}>{item.title}</h3>
                <p style={{ marginBottom: 16, flex: 1, fontSize: 14, color: '#666' }}>{item.desc}</p>
                <Link to={item.to} style={{ fontSize: 14, fontWeight: 500, color: '#111', textDecoration: 'none' }}>
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE GRID */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div className="content-wrap">
          <h2 style={{ marginBottom: 16 }}>Criminal data with no delays or guesswork.</h2>
          <p style={{ maxWidth: 640, color: '#555', marginBottom: 16 }}>
            Checkr Trust pulls from 2,400+ direct data sources, including criminal databases, sex offender registries, and global watchlists, so you can screen users with full context and full confidence.
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
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            {[
              {
                title: 'National Criminal Database',
                desc: 'Get real time access to a proprietary database of 900M+ records aggregated from court records, arrest records, warrants, and more.',
              },
              {
                title: 'Sex Offender Registries',
                desc: "Search sex offender registries across all 50 states, Washington DC, and all US territories and tribes. Reports include key context like the individual's date of registration and current status.",
              },
              {
                title: 'Sex Offender Search by Address',
                desc: 'Go beyond the individual on record by checking for any registered sex offenders associated with an address to help ensure homes are safe to enter.',
              },
              {
                title: 'Global Watchlists',
                desc: 'Screen against global and domestic watchlists for criminal activity, terrorism, and financial sanctions. Sources include FBI and Interpol Most Wanted lists, OFAC, the Department of State sanction lists, and more.',
              },
            ].map((card) => (
              <div key={card.title} style={{ border: '1px solid #e5e5e5', borderRadius: 16, padding: 28, background: '#fff' }}>
                <div className="icon-placeholder" />
                <h3 style={{ marginBottom: 8 }}>{card.title}</h3>
                <p style={{ color: '#666' }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CREDIBILITY */}
      <section style={{ background: '#f8f8f7', padding: '80px 0' }}>
        <div className="content-wrap">
          <h2 style={{ marginBottom: 16 }}>The industry's most trusted criminal data.</h2>
          <p style={{ maxWidth: 640, color: '#555', marginBottom: 48 }}>
            Checkr Trust powers over 10 million user screens every month using the industry's most comprehensive criminal and public record data. It's high-signal risk intelligence delivered through flexible APIs and tailored to your policies. No one knows criminal data better.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, textAlign: 'center', marginBottom: 48 }}>
            {[
              { stat: '10M+', label: 'user screens per month' },
              { stat: '2,400+', label: 'criminal data sources' },
              { stat: '99%', label: 'US population coverage' },
            ].map((item) => (
              <div key={item.label}>
                <div style={{ fontSize: 48, fontWeight: 600, color: '#111', lineHeight: 1, marginBottom: 8 }}>{item.stat}</div>
                <div style={{ fontSize: 14, color: '#666' }}>{item.label}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              { h3: 'Unmatched data coverage.', p: '2,400+ sources across every US jurisdiction. Arrest records, court and warrant data, watchlists, sex offender registries—all in one API.' },
              { h3: 'Signal, not noise.', p: 'Our filters let you define what counts as risk so you can focus only on what matters to your business.' },
              { h3: 'Built for scale.', p: 'With 99.9% uptime, real-time access, and fast implementation, Checkr Trust is built to meet the demands of high-volume, safety-critical businesses.' },
            ].map((item) => (
              <div key={item.h3}>
                <h3 style={{ marginBottom: 8 }}>{item.h3}</h3>
                <p style={{ color: '#666' }}>{item.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUCCESS STORY (Verkada) */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div className="content-wrap">
          <div style={{ border: '1px solid #e5e5e5', borderRadius: 20, overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
              <div style={{ padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ height: 32, width: 96, borderRadius: 6, background: '#e8e8e8', marginBottom: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 600, color: '#aaa' }}>Verkada</div>
                <h2 style={{ marginBottom: 24 }}>Verkada protects schools with real-time visitor screening.</h2>
                <Link to="/resources/customer-stories/verkada" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
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
      <section style={{ background: '#f8f8f7', padding: '80px 0' }}>
        <div className="content-wrap">
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <div className="quote-block">
              <div style={{ width: 52, height: 52, borderRadius: '50%', background: '#e0e0e0', margin: '0 auto 24px' }} />
              <blockquote style={{ fontStyle: 'italic', fontSize: 21, fontWeight: 500, lineHeight: 1.65, color: '#1a1a1a', marginBottom: 24 }}>
                "With Checkr Trust, we're able to extend protection further by preventing undesired guests from even entering buildings."
              </blockquote>
              <div style={{ fontSize: 14, fontWeight: 600, color: '#222' }}>Grace Wang</div>
              <div style={{ fontSize: 13, color: '#888', marginTop: 4 }}>Software Engineering Manager, Verkada</div>
            </div>
          </div>
        </div>
      </section>

      <BlogModule />
      <CTABanner />
    </Layout>
  )
}
