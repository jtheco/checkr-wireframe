import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import CTABanner from '../../components/CTABanner'
import BlogModule from '../../components/BlogModule'

const industryLinks = [
  { title: 'Caregiving', desc: 'Verify identities of everyone in a household.', to: '/industries/caregiving' },
  { title: 'Financial Institutions', desc: 'Meet CIP and CDD compliance requirements.', to: '/industries/financial-institutions' },
  { title: 'Online Dating', desc: 'Stop fake profiles and synthetic identities.', to: '/industries/online-dating' },
  { title: 'Ridesharing', desc: 'Confirm rider identity before every trip.', to: '/industries/ridesharing' },
  { title: 'Short-Term Rentals', desc: 'Verify guests and hosts before check-in.', to: '/industries/short-term-rentals' },
  { title: 'Vehicle Rental and Sharing', desc: 'Reduce drop-off and detect synthetic identities.', to: '/industries/vehicle-rental-and-sharing' },
  { title: 'Visitor Management Systems', desc: 'Confirm visitor identity at check-in.', to: '/industries/visitor-management-systems' },
]

export default function IdentityChecks() {
  return (
    <Layout>
      {/* HERO */}
      <section className="py-20 bg-white">
        <div className="content-wrap">
          <h1 className="mb-5" style={{ maxWidth: '42rem' }}>The identity data layer for safer, smarter verification.</h1>
          <p className="mb-8" style={{ maxWidth: '42rem', color: '#666' }}>
            Checkr Trust delivers holistic KYx risk intelligence through real-time identity verification, paired with criminal data—all in one flexible platform. Confirm legitimacy, stop synthetic fraud, and accelerate verification with confidence to keep high-risk users out of your ecosystem.
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
          <h2 className="mb-3">Identity verification alone is not enough.</h2>
          <p style={{ maxWidth: '640px', color: '#666' }}>
            Traditional identity checks can show you who someone is, but not what they've done. Over half of fraud offenders have prior convictions, and identity verification alone doesn't flag them. Checkr Trust brings together verification and criminal data to deliver risk intelligence others miss. All in one integrated platform.
          </p>
        </div>
      </section>

      {/* BENEFITS-01 */}
      <section className="py-16 bg-white">
        <div className="content-wrap">
          <h2 className="mb-8">Built to reduce friction, fraud, and false trust.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { h3: 'Stop synthetic and stolen identities.', p: 'Validate identity data against authoritative sources and flag mismatches before fraud reaches your business.' },
              { h3: 'Increase conversion without increasing risk.', p: 'Verify most users passively—without document uploads—to reduce drop-off without sacrificing trust.' },
              { h3: 'Automate fraud detection at scale.', p: 'Configure match rules and scoring to trigger reviews only when needed, cutting manual work and false positives.' },
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
          <h2 className="mb-8">Tailored for high-trust use cases.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {industryLinks.map((item) => (
              <div key={item.to} className="border border-[#e5e5e5] rounded-[10px] p-5 bg-white flex flex-col">
                <h3 className="mb-2">{item.title}</h3>
                <p className="mb-4 flex-1 text-sm" style={{ color: '#666' }}>{item.desc}</p>
                <Link to={item.to} className="text-sm text-[#111] hover:text-[#333] transition-colors">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE-GRID */}
      <section className="py-16 bg-white">
        <div className="content-wrap">
          <h2 className="mb-3">Two layers of trust. One flexible platform.</h2>
          <p className="mb-3" style={{ maxWidth: '640px', color: '#666' }}>
            Checkr Trust offers passive PII validation and document verification through a flexible API so you can configure identity checks to fit your risk level, use case, or workflow.
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
            <div className="border border-[#e5e5e5] rounded-[10px] p-5 bg-white">
              <div className="w-7 h-7 bg-[#e5e5e5] rounded mb-3" />
              <h3 className="mb-2">PII Validation</h3>
              <p className="mb-4" style={{ color: '#666' }}>
                Validate names, DOB, and at least one identifier (email, phone, address) against a graph of 9B+ records from verified sources.
              </p>
              <ul className="space-y-1">
                {[
                  'Real-time identity resolution',
                  'Confidence match scoring',
                  '40% reduction in manual reviews',
                  '95% coverage of Gen Z',
                  'CIP and CDD compliant',
                ].map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 text-sm text-[#555]">
                    <span className="text-[#888] mt-0.5">—</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-[#e5e5e5] rounded-[10px] p-5 bg-white">
              <div className="w-7 h-7 bg-[#e5e5e5] rounded mb-3" />
              <h3 className="mb-2">Biometric and Document Verification (DocV)</h3>
              <p className="mb-4" style={{ color: '#666' }}>
                Authenticate government-issued IDs and verify facial biometrics with 99% detection rate and near-zero false positives.
              </p>
              <ul className="space-y-1">
                {[
                  'Sub-2-second verification',
                  '95% conclusive outcomes',
                  'NIST PAD L2 and IAL2 compliant',
                  'Global document support',
                  'Designed for high-risk, age-restricted, and two-sided marketplaces',
                ].map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 text-sm text-[#555]">
                    <span className="text-[#888] mt-0.5">—</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CREDIBILITY-01 */}
      <section className="bg-[#f8f8f7] py-16">
        <div className="content-wrap">
          <h2 className="mb-3">Real identity. Proven infrastructure. Beyond fast.</h2>
          <p className="mb-8" style={{ maxWidth: '640px', color: '#666' }}>
            Checkr Trust powers over 10 million user screens every month. It brings enterprise-grade identity verification to your platform by combining authoritative data, document checks, and biometrics in one seamless flow.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { h3: 'High-scale identity decisions.', p: 'Sub-second performance across PII and biometric checks, so you reduce drop-off without compromising confidence.' },
              { h3: 'Holistic risk intelligence.', p: 'Pair identity verification with criminal screening to understand not just who someone is, but whether they\'re safe.' },
              { h3: 'Flexible, developer-ready APIs.', p: 'Easily embed checks into your onboarding or fraud flows with full documentation and support.' },
            ].map((item) => (
              <div key={item.h3}>
                <h3 className="mb-2">{item.h3}</h3>
                <p style={{ color: '#666' }}>{item.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUCCESS-STORY-01 (Tawkify) */}
      <section className="py-16 bg-white">
        <div className="content-wrap">
          <span className="inline-flex items-center px-3 py-1.5 bg-[#f0f0f0] rounded text-sm font-medium text-[#555] mb-5">
            Tawkify
          </span>
          <h2 className="mb-5">Tawkify sets a new standard in dating safety.</h2>
          <Link to="/resources/customer-stories/tawkify" className="text-sm text-[#111] hover:text-[#333] transition-colors">
            Read story →
          </Link>
        </div>
      </section>

      {/* QUOTE-01 (Tawkify) */}
      <section className="bg-[#f8f8f7] py-16">
        <div className="content-wrap">
          <blockquote className="border-l-4 border-[#e5e5e5] pl-5 italic text-[#444]" style={{ maxWidth: 640 }}>
            "Working with Checkr Trust has been seamless. Their ongoing efforts to improve the product have made our process more efficient and reliable, which we greatly appreciate."
          </blockquote>
          <p className="mt-4 text-sm text-[#666]">— Chris Kumar, CEO, Tawkify</p>
        </div>
      </section>

      <BlogModule />
      <CTABanner />
    </Layout>
  )
}
