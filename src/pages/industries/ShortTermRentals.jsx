import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import CTABanner from '../../components/CTABanner'
import BlogModule from '../../components/BlogModule'
import ApiModule from '../../components/ApiModule'
import DashboardModule from '../../components/DashboardModule'

export default function ShortTermRentals() {
  return (
    <Layout>
      {/* HERO */}
      <section className="py-20 bg-white">
        <div className="content-wrap">
          <h1 className="mb-5" style={{ maxWidth: '42rem' }}>Protect each stay before it starts.</h1>
          <p className="mb-8" style={{ maxWidth: '42rem', color: '#666' }}>
            Every guest and host is a potential risk to your properties, platform, and brand. From fake identities to criminal records, Checkr Trust helps short-term rental platforms screen users so you can reduce incidents, prevent chargebacks, and earn trust at scale.
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
          <h2 className="mb-3">One bad booking can damage more than property.</h2>
          <p style={{ maxWidth: '640px', color: '#666' }}>
            Property damage, fraud, and safety incidents aren't just operational costs—they drive away users and limit your platform's growth. Checkr Trust helps protect your customers and inventory by flagging risk at sign-up, combining identity verification and criminal record screening in one real-time API. When guests and hosts feel safe, they book more and list more, which means more users and revenue.
          </p>
        </div>
      </section>

      {/* FEATURE-GRID */}
      <section className="py-16 bg-white">
        <div className="content-wrap">
          <h2 className="mb-3">The KYx safety stack for short-term rentals.</h2>
          <p className="mb-8" style={{ maxWidth: '640px', color: '#666' }}>
            Checkr Trust delivers real-time insights from multiple layers of customer risk—criminal and identity data—all through one flexible integration.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: 'National Criminal Database',
                desc: 'Instantly flag guests and hosts with sex trafficking, drug trafficking, theft, or fraud-related offenses using 2,400+ sources across all US jurisdictions. Prevent repeat offenders from abusing your platform.',
                to: '/products/criminal-and-public-records-checks',
              },
              {
                title: 'Identity Checks',
                desc: 'Match submitted identity info to 9B+ verified records to confirm legitimacy and catch synthetic or fake identities—no document upload required for most users.',
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

      {/* QUOTE-01 */}
      <section className="bg-[#f8f8f7] py-16">
        <div className="content-wrap">
          <blockquote className="border-l-4 border-[#e5e5e5] pl-5 italic text-[#444]" style={{ maxWidth: 640 }}>
            "Trust is everything in this business. With Checkr Trust, we don't just hand over the keys—we hand them to someone we can actually trust."
          </blockquote>
          <p className="mt-4 text-sm text-[#666]">— Risk Manager, Short-Term Rental Platform</p>
        </div>
      </section>

      <ApiModule
        body="Checkr Trust integrates with your platform via API to verify guests and hosts and flag risk before check-in. Instantly screen for identity and criminal history in one seamless flow—helping you reduce fraud, chargebacks, and property damage."
      />

      <DashboardModule />

      {/* STATS-01 */}
      <section className="py-16 bg-[#f8f8f7]">
        <div className="content-wrap">
          <h2 className="mb-6">Why leading short-term rental platforms choose Checkr Trust.</h2>
          <ul className="space-y-2">
            {[
              '99% US identity verification coverage',
              '2,400+ criminal data sources in real time',
              '40% fewer manual reviews with passive PII checks',
              'Designed for high-speed, high-value bookings',
              'Trusted by platforms managing millions of hosts and homes',
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
        headline="Ready to make trusted guests and hosts your competitive advantage?"
        body="Get a live walkthrough to see how Checkr Trust can help you verify users, reduce risk, and protect every stay."
      />
    </Layout>
  )
}
