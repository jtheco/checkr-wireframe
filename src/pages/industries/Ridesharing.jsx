import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import CTABanner from '../../components/CTABanner'
import BlogModule from '../../components/BlogModule'
import ApiModule from '../../components/ApiModule'
import DashboardModule from '../../components/DashboardModule'

export default function Ridesharing() {
  return (
    <Layout>
      {/* HERO */}
      <section className="py-20">
        <div className="content-wrap">
          <h1 className="mb-5" style={{ maxWidth: '42rem' }}>Keep drivers safe and your platform growing.</h1>
          <p className="mb-8" style={{ maxWidth: '42rem', color: '#666' }}>
            Rideshare platforms are responsible for protecting drivers from harm, especially when unknown passengers get in the car. Checkr Trust helps you screen riders for risk to reduce incidents and keep your drivers safe, satisfied, and active. This foundation of trust strengthens your brand, attracts more drivers, and fuels sustainable revenue growth.
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
          <h2 className="mb-3">Drivers don't get behind the wheel if they don't feel safe.</h2>
          <p style={{ maxWidth: '640px', color: '#666' }}>
            When safety breaks down, driver retention follows. From fraud to physical harm, one high-risk passenger can trigger lasting damage. Checkr Trust flags risk at sign-up—combining identity verification and criminal history into one flexible API—so your drivers stay protected and your platform stays strong.
          </p>
        </div>
      </section>

      {/* FEATURE-GRID */}
      <section className="py-16">
        <div className="content-wrap">
          <h2 className="mb-3">The KYx safety stack for rideshare platforms.</h2>
          <p className="mb-8" style={{ maxWidth: '640px', color: '#666' }}>
            Checkr Trust delivers real-time insights from multiple layers of customer risk—criminal, sex offender, and identity data—all through one flexible integration.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                title: 'National Criminal Database',
                desc: 'Instantly flag users with violent or threat-related offenses using 2,400+ sources across all US jurisdictions. Keep dangerous passengers off your platform with real-time criminal data.',
                to: '/products/criminal-and-public-records-checks',
              },
              {
                title: 'Sex Offender Registries',
                desc: "Search sex offender registries across all 50 states, Washington DC, and all US territories and tribes. Reports include key context like the individual's date of registration and current status.",
                to: '/products/criminal-and-public-records-checks',
              },
              {
                title: 'Identity Checks',
                desc: 'Confirm rider identity in real time by matching submitted information to 9B+ authoritative records—no document upload required for most users.',
                to: '/products/identity-checks',
              },
              {
                title: 'Biometric and Document Verification',
                desc: 'Prevent impersonation, catfishing, deepfakes, and identity spoofing at scale by adding selfie-to-ID verification with 99% detection rate and near-zero false positives.',
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

      {/* QUOTE-01 */}
      <section className="bg-[#f8f8f7] py-16">
        <div className="content-wrap">
          <blockquote className="border-l-4 border-[#e5e5e5] pl-5 italic text-[#444]" style={{ maxWidth: 640 }}>
            "Driver safety is everything. If they don't feel protected, they won't stay on the road. Checkr Trust helps us spot risk and respond fast."
          </blockquote>
          <p className="mt-4 text-sm text-[#666]">— Head of Risk Operations, Ridesharing Platform</p>
        </div>
      </section>

      <ApiModule
        body="Checkr Trust connects to your rideshare platform via API to screen passengers in real time using identity verification and criminal record data. One integration. No added lag. Just safer trips and stronger driver retention."
      />

      <DashboardModule />

      {/* STATS-01 */}
      <section className="py-16">
        <div className="content-wrap">
          <h2 className="mb-6">Why leading rideshare platforms choose Checkr Trust.</h2>
          <ul className="space-y-2">
            {[
              '99% US identity verification coverage',
              '2,400+ criminal data sources in real time',
              'Sub-2-second identity verification',
              'Built for platforms with high-volume, real-time workflows',
              'Trusted by mobility leaders who prioritize driver safety',
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
        headline="Ready to make trusted passengers your competitive advantage?"
        body="Get a live walkthrough to see how Checkr Trust can help protect drivers, reduce risk, and drive platform growth."
      />
    </Layout>
  )
}
