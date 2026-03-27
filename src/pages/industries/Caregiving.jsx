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
      <section className="py-20 bg-white">
        <div className="content-wrap">
          <h1 className="mb-5" style={{ maxWidth: '42rem' }}>Protect caregivers before they step inside.</h1>
          <p className="mb-8" style={{ maxWidth: '42rem', color: '#666' }}>
            Caregivers aren't just entering homes, they're entering unknown environments. Your platform is responsible for keeping them safe, and identity verification alone isn't enough. Checkr Trust helps you screen entire households for risk—everyone associated with an address—so you can prevent harm before it happens.
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
          <h2 className="mb-3">Caregivers' risk is business risk.</h2>
          <p style={{ maxWidth: '640px', color: '#666' }}>
            A missed red flag can have devastating consequences for caregivers, your brand, and the trust that holds your platform together. Checkr Trust delivers real-time identity and criminal record checks to help caregiving platforms reduce risk without adding friction to your verification process flow.
          </p>
        </div>
      </section>

      {/* FEATURE-GRID */}
      <section className="py-16 bg-white">
        <div className="content-wrap">
          <h2 className="mb-3">The KYx safety stack for caregiving businesses.</h2>
          <p className="mb-8" style={{ maxWidth: '640px', color: '#666' }}>
            Checkr Trust delivers real-time insights from multiple layers of customer risk—criminal, sex offender, and identity data—all through one flexible integration.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
            "Checkr Trust's solution was exactly what we needed. It's simple, straightforward, and low cost. The implementation was super easy, and having a screening process makes trust and safety an advantage in our partner and sales conversations."
          </blockquote>
          <p className="mt-4 text-sm text-[#666]">— Leslie Borrell, Founder and CEO, Carefully</p>
        </div>
      </section>

      <ApiModule
        body="Checkr Trust connects to your caregiving platform via API, enabling real-time household-level sex offender screening. Individual identity and criminal history checks flow seamlessly into your verification process, so you can protect caregivers without slowing growth."
      />

      <DashboardModule />

      {/* STATS-01 */}
      <section className="py-16 bg-[#f8f8f7]">
        <div className="content-wrap">
          <h2 className="mb-6">Why leading caregiving platforms choose Checkr Trust.</h2>
          <ul className="space-y-2">
            {[
              '99% US identity verification coverage',
              '2,400+ criminal data sources in real time',
              'Up to 40% reduction in manual reviews',
              'Fully API-driven for seamless integration',
              'Trusted by platforms that serve millions',
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
        headline="Ready to make trust your competitive advantage?"
        body="Get a live walkthrough to see how Checkr Trust can help you verify users, reduce risk, and protect caregivers."
      />
    </Layout>
  )
}
