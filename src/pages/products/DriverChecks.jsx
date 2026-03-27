import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import CTABanner from '../../components/CTABanner'
import BlogModule from '../../components/BlogModule'

export default function DriverChecks() {
  return (
    <Layout>
      {/* HERO */}
      <section style={{ background: '#fff', padding: '96px 0' }}>
        <div className="content-wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <div>
              <span className="eyebrow">Driver Checks</span>
              <h1 style={{ marginBottom: 24 }}>The driver data layer for safer and more profitable operations.</h1>
              <p style={{ fontSize: 18, color: '#555', marginBottom: 32, lineHeight: 1.7 }}>
                Checkr Trust delivers holistic driver risk intelligence by combining license status, violation history, and crash data. Instantly verify drivers, reduce incidents, and protect vehicles, users, and margins at scale.
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
      <section style={{ background: '#f8f8f7', padding: '80px 0' }}>
        <div className="content-wrap">
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ marginBottom: 16 }}>Leading mobility platforms know that driver risk is business risk.</h2>
            <p style={{ fontSize: 18, color: '#555', lineHeight: 1.7 }}>
              Top vehicle rental businesses and sharing platforms use integrated Driver Checks to reduce fraud, lower insurance costs, and grow faster. It's not a regulatory box to check, it's a competitive advantage. Checkr Trust gives you the data and tools to configure your risk thresholds and act instantly to protect your business.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div className="content-wrap">
          <h2 style={{ marginBottom: 40 }}>Built to reduce friction, fraud, and financial risk.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
            {[
              { h3: 'Reduce theft and damage.', p: 'Verify license status and flag risk before the keys are ever handed over.' },
              { h3: 'Cut insurance costs and claims.', p: 'Lower insurance premiums and reduce costly claims by keeping high-risk drivers off the road.' },
              { h3: 'Boost vehicle utilization and margins.', p: 'Verify drivers instantly so you can quickly approve more good users and maximize your fleet uptime.' },
              { h3: 'Screen at the speed of business.', p: 'Real-time results through a single API so you can move as fast as your customers demand.' },
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
      <section style={{ background: '#f8f8f7', padding: '80px 0' }}>
        <div className="content-wrap">
          <h2 style={{ marginBottom: 16 }}>Tailored for vehicle rental and sharing models.</h2>
          <p style={{ maxWidth: 640, color: '#555', marginBottom: 40 }}>
            Whether you're managing a rental fleet or a peer-to-peer marketplace, Checkr Trust tailors driver checks to your model, so you can onboard faster, prevent costly incidents, and operate with confidence.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <Link to="/industries/vehicle-rental-and-sharing" style={{ border: '1px solid #e5e5e5', borderRadius: 12, padding: 20, background: '#fff', display: 'flex', flexDirection: 'column', textDecoration: 'none', color: 'inherit' }}>
              <h3 style={{ marginBottom: 8 }}>Vehicle Rentals</h3>
              <p style={{ marginBottom: 16, flex: 1, fontSize: 14, color: '#666' }}>
                Verify licenses in real time to reduce incidents, protect your fleet, and create faster, safer rental experiences across every location.
              </p>
              <span style={{ fontSize: 14, fontWeight: 500, color: '#111' }}>
                Learn more →
              </span>
            </Link>
            <Link to="/industries/vehicle-rental-and-sharing" style={{ border: '1px solid #e5e5e5', borderRadius: 12, padding: 20, background: '#fff', display: 'flex', flexDirection: 'column', textDecoration: 'none', color: 'inherit' }}>
              <h3 style={{ marginBottom: 8 }}>Vehicle Sharing</h3>
              <p style={{ marginBottom: 16, flex: 1, fontSize: 14, color: '#666' }}>
                Protect hosts, reduce financial risk, and deliver a seamless driver check experience with embedded, reliable screening.
              </p>
              <span style={{ fontSize: 14, fontWeight: 500, color: '#111' }}>
                Learn more →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURE GRID */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div className="content-wrap">
          <h2 style={{ marginBottom: 16 }}>Driver insights, built for scale.</h2>
          <p style={{ maxWidth: 640, color: '#555', marginBottom: 16 }}>
            Our KYx platform lets you choose which checks to run, how often, and what thresholds matter for your business. Everything runs through a single, flexible API.
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
                title: 'Motor Vehicle Reports (MVRs)',
                desc: 'Access full driving history, including license type, violations, suspensions, and crash data.',
              },
              {
                title: "Driver's License Status Checks",
                desc: "Verify that a driver's license is valid and active, with up to 100% savings on state fees compared to MVRs.",
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
          <h2 style={{ marginBottom: 16 }}>Driver intelligence from the team that invented modern background checks.</h2>
          <p style={{ maxWidth: 640, color: '#555', marginBottom: 40 }}>
            Checkr Trust powers over 10 million user screens every month—including license and driving data at scale. With direct access to real-time license and driving history data, we help mobility platforms verify drivers, protect assets, reduce theft and damage, and scale operations with confidence.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              { h3: 'Real-time risk insight.', p: 'Deliver results in seconds so you can move as fast as your customers demand.' },
              { h3: 'Cost-effective at scale.', p: "Save up to 100% on DMV fees for driver's license status checks." },
              { h3: 'Built for high-volume mobility.', p: '99.9% uptime, advanced filters, and seamless integration for teams managing risk at volume.' },
            ].map((item) => (
              <div key={item.h3}>
                <h3 style={{ marginBottom: 8 }}>{item.h3}</h3>
                <p style={{ color: '#666' }}>{item.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUCCESS STORY (Turo) */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div className="content-wrap">
          <div style={{ border: '1px solid #e5e5e5', borderRadius: 20, overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
              <div style={{ padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ height: 32, width: 96, borderRadius: 6, background: '#e8e8e8', marginBottom: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 600, color: '#aaa' }}>Turo</div>
                <h2 style={{ marginBottom: 24 }}>Turo creates a trusted environment for vehicle hosts and guests.</h2>
                <Link to="/resources/customer-stories/turo" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
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

      <BlogModule />
      <CTABanner />
    </Layout>
  )
}
