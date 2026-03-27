import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import CTABanner from '../../components/CTABanner'
import BlogModule from '../../components/BlogModule'
import ApiModule from '../../components/ApiModule'
import DashboardModule from '../../components/DashboardModule'

export default function OnlineDating() {
  return (
    <Layout>
      {/* HERO */}
      <section className="py-20 bg-white">
        <div className="content-wrap">
          <h1 className="mb-5" style={{ maxWidth: '42rem' }}>Keep bad actors off your dating platform.</h1>
          <p className="mb-8" style={{ maxWidth: '42rem', color: '#666' }}>
            Users count on your platform to meet people who are safe and trustworthy. Checkr Trust helps you screen users fast and flag fraud early, before high-risk individuals enter your ecosystem. By raising the bar on trust and safety, you attract more paying users, reduce churn, and create a premium experience that drives revenue.
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
          <h2 className="mb-3">You can't scale if users don't feel safe.</h2>
          <p style={{ maxWidth: '640px', color: '#666' }}>
            If users don't feel safe, they leave, and so does your platform's value. From financial fraud and catfishing to repeat scammers and violent offenses, threats come in many forms. Today's brands are held accountable in headlines and social feeds, making inaction not just risky, but a real liability. Checkr Trust helps you stay ahead by flagging identity fraud and criminal risk at sign-up through a fast, flexible API.
          </p>
        </div>
      </section>

      {/* FEATURE-GRID */}
      <section className="py-16 bg-white">
        <div className="content-wrap">
          <h2 className="mb-3">The KYx safety stack for online dating platforms.</h2>
          <p className="mb-8" style={{ maxWidth: '640px', color: '#666' }}>
            Checkr Trust delivers real-time insights from multiple layers of customer risk—criminal, sex offender, and identity data—all through one flexible integration.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                title: 'National Criminal Database',
                desc: 'Protect your users by flagging individuals with violent, sexual, or fraud-related charges, including warrant and arrest data, using 2,400+ data sources across all US jurisdictions.',
                to: '/products/criminal-and-public-records-checks',
              },
              {
                title: 'Sex Offender Registries',
                desc: "Search sex offender registries across all 50 states, Washington DC, and all US territories and tribes. Reports include key context like the individual's date of registration and current status.",
                to: '/products/criminal-and-public-records-checks',
              },
              {
                title: 'Identity Checks',
                desc: 'Confirm that users are who they say they are by matching submitted PII against 9B+ authoritative records. Detect fake profiles and synthetic identities to prevent catfishing and romantic financial fraud on your platform.',
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

      {/* QUOTE-01 (Tawkify) */}
      <section className="bg-[#f8f8f7] py-16">
        <div className="content-wrap">
          <blockquote className="border-l-4 border-[#e5e5e5] pl-5 italic text-[#444]" style={{ maxWidth: 640 }}>
            "Our clients truly appreciate this added layer of security. It's one of the key reasons why they choose Tawkify—they trust us to prioritize their safety and well-being while helping them build meaningful, lasting connections with others."
          </blockquote>
          <p className="mt-4 text-sm text-[#666]">— Chris Kumar, CEO, Tawkify</p>
        </div>
      </section>

      <ApiModule
        body="Checkr Trust integrates with your dating platform to verify identity and screen for criminal history in seconds. Our flexible API gives you the trust signals you need to drive safety, without adding friction to your onboarding flow."
      />

      <DashboardModule />

      {/* STATS-01 */}
      <section className="py-16 bg-[#f8f8f7]">
        <div className="content-wrap">
          <h2 className="mb-6">Why leading online dating platforms choose Checkr Trust.</h2>
          <ul className="space-y-2">
            {[
              '99% US identity verification coverage',
              '2,400+ criminal data sources in real time',
              '40% fewer manual reviews with passive PII checks',
              'Sub-2-second biometric verification (when needed)',
              'Trusted by platforms that prioritize safety, growth, and reputation',
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
        headline="Ready to make trusted dates your competitive advantage?"
        body="Get a live walkthrough to see how Checkr Trust can help you verify users, reduce risk, and add trust to your dating platform."
      />
    </Layout>
  )
}
