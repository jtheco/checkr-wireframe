import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import CTABanner from '../../components/CTABanner'
import BlogModule from '../../components/BlogModule'
import ApiModule from '../../components/ApiModule'
import DashboardModule from '../../components/DashboardModule'

export default function VisitorManagement() {
  return (
    <Layout>
      {/* HERO */}
      <section className="py-20 bg-white">
        <div className="content-wrap">
          <h1 className="mb-5" style={{ maxWidth: '42rem' }}>Bring risk intelligence to every check-in.</h1>
          <p className="mb-8" style={{ maxWidth: '42rem', color: '#666' }}>
            Every access decision is a risk decision, especially when children, seniors, or other vulnerable groups are on-site. Knowing who's entering your buildings and whether they pose a threat is critical. Checkr Trust brings together real-time identity and criminal record checks to Visitor Management Systems, so you can flag high-risk individuals and prevent incidents before they happen, without adding friction.
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
          <h2 className="mb-3">A name alone doesn't reveal risk.</h2>
          <p style={{ maxWidth: '640px', color: '#666' }}>
            Most VMS platforms rely on self-reported info, but fake names, synthetic identities, and missed criminal history can lead to real harm. Checkr Trust adds verified identity and criminal screening to your check-in flow, giving you the holistic risk intelligence to stop threats without slowing access.
          </p>
        </div>
      </section>

      {/* FEATURE-GRID */}
      <section className="py-16 bg-white">
        <div className="content-wrap">
          <h2 className="mb-3">The KYx safety stack for Visitor Management Systems.</h2>
          <p className="mb-8" style={{ maxWidth: '640px', color: '#666' }}>
            Checkr Trust delivers real-time insights from multiple layers of customer risk—criminal, sex offender, identity, and watchlist data—all through one flexible integration.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: 'National Criminal Database',
                desc: 'Protect your sites by flagging individuals with violent, sexual, or fraud-related charges, including warrant and arrest data, using 2,400+ data sources across all US jurisdictions.',
                to: '/products/criminal-and-public-records-checks',
              },
              {
                title: 'Sex Offender Registries',
                desc: "Search sex offender registries across all 50 states, Washington DC, and all US territories and tribes. Reports include key context like the individual's date of registration and current status.",
                to: '/products/criminal-and-public-records-checks',
              },
              {
                title: 'Global Watchlists',
                desc: 'Screen individuals against FBI, OFAC, Interpol, and other domestic and international watchlists to maintain compliance and block high-risk actors.',
                to: '/products/criminal-and-public-records-checks',
              },
              {
                title: 'Identity Checks',
                desc: 'Confirm that a visitor is who they say they are by matching submitted info against 9B+ verified records—no document upload needed for most users.',
                to: '/products/identity-checks',
              },
              {
                title: 'Biometric and Document Verification',
                desc: 'Prevent impersonation, deepfakes, and identity spoofing at scale by adding selfie-to-ID verification with 99% detection rate and near-zero false positives.',
                to: '/products/identity-checks',
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

      {/* QUOTE-01 (Verkada) */}
      <section className="bg-[#f8f8f7] py-16">
        <div className="content-wrap">
          <blockquote className="border-l-4 border-[#e5e5e5] pl-5 italic text-[#444]" style={{ maxWidth: 640 }}>
            "Verkada's customers depend on our cloud-based physical security solutions to safeguard their people and places. Checkr Trust helps us deliver actionable criminal data, enabling our customers to quickly identify potential risks during the visitor check-in process."
          </blockquote>
          <p className="mt-4 text-sm text-[#666]">— Grace Wang, Software Engineering Manager, Verkada</p>
        </div>
      </section>

      <ApiModule
        body="Checkr Trust's API lets visitor management systems layer in real-time identity and criminal screening during the check-in process. You get fast, accurate trust signals, without disrupting throughput or experience at the front desk."
      />

      <DashboardModule />

      {/* STATS-01 */}
      <section className="py-16 bg-[#f8f8f7]">
        <div className="content-wrap">
          <h2 className="mb-6">Why leading VMS and security platforms choose Checkr Trust.</h2>
          <ul className="space-y-2">
            {[
              '99% US identity verification coverage',
              '2,400+ criminal data sources in real time',
              'Seamless API integration into check-in flows',
              'Designed for high-traffic environments—schools, hospitals, offices, live events',
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
        headline="Ready to make trusted visitors your competitive advantage?"
        body="Get a live walkthrough to see how Checkr Trust can help you verify visitors, reduce risk, and keep sites safe."
      />
    </Layout>
  )
}
