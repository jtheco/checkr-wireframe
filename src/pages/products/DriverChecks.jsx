import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import CTABanner from '../../components/CTABanner'
import BlogModule from '../../components/BlogModule'

export default function DriverChecks() {
  return (
    <Layout>
      {/* HERO */}
      <section className="py-20">
        <div className="content-wrap">
          <h1 className="mb-5" style={{ maxWidth: '42rem' }}>The driver data layer for safer and more profitable operations.</h1>
          <p className="mb-8" style={{ maxWidth: '42rem', color: '#666' }}>
            Checkr Trust delivers holistic driver risk intelligence by combining license status, violation history, and crash data. Instantly verify drivers, reduce incidents, and protect vehicles, users, and margins at scale.
          </p>
          <Link
            to="/get-a-demo"
            className="inline-flex items-center px-5 py-2.5 bg-[#111] text-white text-sm rounded-[6px] hover:bg-[#333] transition-colors"
          >
            Get a demo
          </Link>
        </div>
      </section>

      {/* PROBLEM-SOLUTION */}
      <section className="bg-[#f8f8f7] py-16">
        <div className="content-wrap">
          <h2 className="mb-3">Leading mobility platforms know that driver risk is business risk.</h2>
          <p style={{ maxWidth: '640px', color: '#666' }}>
            Top vehicle rental businesses and sharing platforms use integrated Driver Checks to reduce fraud, lower insurance costs, and grow faster. It's not a regulatory box to check, it's a competitive advantage. Checkr Trust gives you the data and tools to configure your risk thresholds and act instantly to protect your business.
          </p>
        </div>
      </section>

      {/* BENEFITS-01 */}
      <section className="py-16">
        <div className="content-wrap">
          <h2 className="mb-8">Built to reduce friction, fraud, and financial risk.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { h3: 'Reduce theft and damage.', p: 'Verify license status and flag risk before the keys are ever handed over.' },
              { h3: 'Cut insurance costs and claims.', p: 'Lower insurance premiums and reduce costly claims by keeping high-risk drivers off the road.' },
              { h3: 'Boost vehicle utilization and margins.', p: 'Verify drivers instantly so you can quickly approve more good users and maximize your fleet uptime.' },
            ].map((item) => (
              <div key={item.h3}>
                <h3 className="mb-2">{item.h3}</h3>
                <p style={{ color: '#666' }}>{item.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CROSS-LINKS */}
      <section className="bg-[#f8f8f7] py-16">
        <div className="content-wrap">
          <h2 className="mb-3">Tailored for vehicle rental and sharing models.</h2>
          <p className="mb-8" style={{ maxWidth: '640px', color: '#666' }}>
            Whether you're managing a rental fleet or a peer-to-peer marketplace, Checkr Trust tailors driver checks to your model, so you can onboard faster, prevent costly incidents, and operate with confidence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-[#e5e5e5] rounded-[10px] p-5 bg-white flex flex-col">
              <h3 className="mb-2">Vehicle Rentals</h3>
              <p className="mb-4 flex-1 text-sm" style={{ color: '#666' }}>
                Verify licenses in real time to reduce incidents, protect your fleet, and create faster, safer rental experiences across every location.
              </p>
              <Link to="/industries/vehicle-rental-and-sharing" className="text-sm text-[#111] hover:text-[#333] transition-colors">
                Learn more →
              </Link>
            </div>
            <div className="border border-[#e5e5e5] rounded-[10px] p-5 bg-white flex flex-col">
              <h3 className="mb-2">Vehicle Sharing</h3>
              <p className="mb-4 flex-1 text-sm" style={{ color: '#666' }}>
                Protect hosts, reduce financial risk, and deliver a seamless driver check experience with embedded, reliable screening.
              </p>
              <Link to="/industries/vehicle-rental-and-sharing" className="text-sm text-[#111] hover:text-[#333] transition-colors">
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE-GRID */}
      <section className="py-16">
        <div className="content-wrap">
          <h2 className="mb-3">Driver insights, built for scale.</h2>
          <p className="mb-3" style={{ maxWidth: '640px', color: '#666' }}>
            Our KYx platform lets you choose which checks to run, how often, and what thresholds matter for your business. Everything runs through a single, flexible API.
          </p>
          <a
            href="https://docs.checkrtrust.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#111] hover:text-[#333] transition-colors mb-8 inline-block"
          >
            See API documentation →
          </a>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-2">
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
              <div key={card.title} className="border border-[#e5e5e5] rounded-[10px] p-5 bg-white">
                <div className="w-7 h-7 bg-[#e5e5e5] rounded mb-3" />
                <h3 className="mb-2">{card.title}</h3>
                <p style={{ color: '#666' }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CREDIBILITY-01 */}
      <section className="bg-[#f8f8f7] py-16">
        <div className="content-wrap">
          <h2 className="mb-3">Driver intelligence from the team that invented modern background checks.</h2>
          <p className="mb-8" style={{ maxWidth: '640px', color: '#666' }}>
            Checkr Trust powers over 10 million user screens every month—including license and driving data at scale. With direct access to real-time license and driving history data, we help mobility platforms verify drivers, protect assets, reduce theft and damage, and scale operations with confidence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { h3: 'Real-time risk insight.', p: 'Deliver results in seconds so you can move as fast as your customers demand.' },
              { h3: 'Cost-effective at scale.', p: 'Save up to 100% on DMV fees for driver\'s license status checks.' },
              { h3: 'Built for high-volume mobility.', p: '99.9% uptime, advanced filters, and seamless integration for teams managing risk at volume.' },
            ].map((item) => (
              <div key={item.h3}>
                <h3 className="mb-2">{item.h3}</h3>
                <p style={{ color: '#666' }}>{item.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUCCESS-STORY-01 (Turo) */}
      <section className="py-16">
        <div className="content-wrap">
          <span className="inline-flex items-center px-3 py-1.5 bg-[#f0f0f0] rounded text-sm font-medium text-[#555] mb-5">
            Turo
          </span>
          <h2 className="mb-5">Turo creates a trusted environment for vehicle hosts and guests.</h2>
          <Link to="/resources/customer-stories/turo" className="text-sm text-[#111] hover:text-[#333] transition-colors">
            Read story →
          </Link>
        </div>
      </section>

      {/* QUOTE-01 (Turo) */}
      <section className="bg-[#f8f8f7] py-16">
        <div className="content-wrap">
          <blockquote className="border-l-4 border-[#e5e5e5] pl-5 italic text-[#444]" style={{ maxWidth: 640 }}>
            "At Turo, our commitment to creating a trusted and safe environment for both vehicle hosts and guests is paramount. By partnering with Checkr Trust, we're leveraging cutting-edge technology to identify potential risks early on to mitigate downstream business impacts. This reinforces Turo as a brand that vehicle owners can trust with their valuable assets."
          </blockquote>
          <p className="mt-4 text-sm text-[#666]">— Mike Wilkins, VP of Trust and Safety, Turo</p>
        </div>
      </section>

      <BlogModule />
      <CTABanner />
    </Layout>
  )
}
