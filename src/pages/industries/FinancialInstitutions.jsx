import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import CTABanner from '../../components/CTABanner'
import BlogModule from '../../components/BlogModule'
import ApiModule from '../../components/ApiModule'
import DashboardModule from '../../components/DashboardModule'

export default function FinancialInstitutions() {
  return (
    <Layout>
      {/* HERO */}
      <section className="py-20 bg-white">
        <div className="content-wrap">
          <h1 className="mb-5" style={{ maxWidth: '42rem' }}>Stop fraud before it disrupts your business.</h1>
          <p className="mb-8" style={{ maxWidth: '42rem', color: '#666' }}>
            From consumer onboarding to business account approvals, financial institutions face mounting pressure to prevent fraud and meet compliance requirements, while moving fast. Checkr Trust helps you verify identities and screen for criminal history in real time, so you can make smarter decisions before risk turns into loss.
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
          <h2 className="mb-3">KYC isn't enough if it stops at identity.</h2>
          <p style={{ maxWidth: '640px', color: '#666' }}>
            Traditional identity checks can show you who someone is, but not what they've done. Over half of fraud offenders have prior convictions, but ID checks and watchlists won't catch them. Checkr Trust adds real-time criminal data to your verification process and risk stack so you can prevent fraud, stay compliant, and protect revenue.
          </p>
        </div>
      </section>

      {/* FEATURE-GRID */}
      <section className="py-16 bg-white">
        <div className="content-wrap">
          <h2 className="mb-3">The KYx risk stack for financial institutions.</h2>
          <p className="mb-8" style={{ maxWidth: '640px', color: '#666' }}>
            Checkr Trust delivers real-time insights from multiple layers of customer risk—criminal, watchlist, and identity data—all through one flexible integration.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                title: 'National Criminal Database',
                desc: 'Surface prior convictions tied to fraud, theft, and financial crimes from 900M+ public records across courts, corrections, and more.',
                to: '/products/criminal-and-public-records-checks',
              },
              {
                title: 'Global Watchlists',
                desc: 'Screen individuals against FBI, OFAC, Interpol, and other domestic and international watchlists to maintain compliance and block high-risk actors.',
                to: '/products/criminal-and-public-records-checks',
              },
              {
                title: 'Identity Checks',
                desc: 'Match submitted identity info to 9B+ verified records to confirm legitimacy, catch synthetic or fake identities, and prevent fraud—no document upload required for most users.',
                to: '/products/identity-checks',
              },
              {
                title: 'Biometric and Document Verification',
                desc: 'Protect high-risk, high-value transactions by stopping impersonation, deepfakes, and identity spoofing. Add selfie-to-ID verification with a 99% detection rate and near-zero false positives.',
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

      <ApiModule
        body="Checkr Trust integrates with your platform via API to deliver real-time insights on identity, criminal history, and watchlist data. Build custom flows that match your risk thresholds without slowing customer acquisition."
      />

      <DashboardModule />

      {/* STATS-01 */}
      <section className="py-16 bg-[#f8f8f7]">
        <div className="content-wrap">
          <h2 className="mb-6">Why leading financial institutions choose Checkr Trust.</h2>
          <ul className="space-y-2">
            {[
              '99% US identity verification coverage',
              '2,400+ criminal data sources in real time',
              'Watchlists across global sanctions and enforcement agencies',
              'Built for KYC, KYB, BSA, AML, CIP, and CDD compliance',
              'Trusted by leading financial services providers and fintechs',
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
        headline="Ready to protect revenue by screening for more than identity?"
        body="Get a live walkthrough to see how Checkr Trust can help you reduce fraud and loss, meet compliance standards, and protect critical revenue streams."
      />
    </Layout>
  )
}
