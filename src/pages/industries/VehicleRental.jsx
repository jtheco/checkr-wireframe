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
      <section className="py-20">
        <div className="content-wrap">
          <h1 className="mb-5" style={{ maxWidth: '42rem' }}>Protect your fleet and the people who power it.</h1>
          <p className="mb-8" style={{ maxWidth: '42rem', color: '#666' }}>
            Whether it's a $50,000 vehicle or a two-door loaner, every key you hand off carries risk. Checkr Trust helps vehicle rental and sharing platforms screen users before they get behind the wheel, so you can prevent fraud, reduce theft and incidents, and protect your business.
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
          <h2 className="mb-3">Unchecked drivers put your users and platform at risk.</h2>
          <p style={{ maxWidth: '640px', color: '#666' }}>
            A single high-risk driver can result in stolen vehicles, insurance claims, or worse. Checkr Trust combines real-time identity verification and criminal record screening to help vehicle rental and sharing platforms stop fraud and reduce operational risk, without slowing down your operations.
          </p>
        </div>
      </section>

      {/* FEATURE-GRID */}
      <section className="py-16">
        <div className="content-wrap">
          <h2 className="mb-3">The KYx safety stack for vehicle rental and sharing platforms.</h2>
          <p className="mb-8" style={{ maxWidth: '640px', color: '#666' }}>
            Checkr Trust delivers real-time insights from multiple layers of customer risk—criminal, identity, and driver data—all through one flexible integration.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
              <div key={card.title} className="border border-[#e5e5e5] rounded-[10px] p-5 bg-white flex flex-col">
                <div className="w-7 h-7 bg-[#e5e5e5] rounded mb-3" />
                <h3 className="mb-2">{card.title}</h3>
                <p className="mb-4 flex-1" style={{ color: '#666' }}>{card.desc}</p>
                <Link to={card.to} className="text-sm text-[#111] hover:text-[#333] transition-colors">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
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

      <ApiModule
        body="From user sign-up to ignition, Checkr Trust delivers criminal, identity, and driving data in real time via a single API. Designed for vehicle rental and sharing platforms that need to screen fast, reduce incidents, and scale without friction."
      />

      <DashboardModule />

      {/* STATS-01 */}
      <section className="py-16">
        <div className="content-wrap">
          <h2 className="mb-6">Why leading vehicle rental and sharing platforms choose Checkr Trust.</h2>
          <ul className="space-y-2">
            {[
              '99% US identity verification coverage',
              '2,400+ criminal data sources in real time',
              'Up to 40% fewer manual reviews',
              "Save up to 100% on DMV transaction fees with Driver's License Status Checks",
              'Trusted by vehicle platforms with high-volume, high-value assets',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#888] mt-0.5">—</span>
                <p style={{ color: '#444' }}>{item}</p>
              </li>
            ))}
          </ul>
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
