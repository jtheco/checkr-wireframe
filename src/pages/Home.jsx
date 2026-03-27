import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import CTABanner from '../components/CTABanner'
import BlogModule from '../components/BlogModule'

const industryLinks = [
  {
    eyebrow: 'Know your household.',
    desc: 'Keep caregivers safe by screening entire households for risk.',
    cta: 'KYx products for Caregiving →',
    to: '/industries/caregiving',
  },
  {
    eyebrow: 'Know your customer.',
    desc: 'Prevent fraud and protect revenue by screening for identity and criminal risks.',
    cta: 'KYx products for Financial Institutions →',
    to: '/industries/financial-institutions',
  },
  {
    eyebrow: 'Know your date.',
    desc: 'Protect users from violent or fraudulent actors in online and app-based dating.',
    cta: 'KYx products for Online Dating →',
    to: '/industries/online-dating',
  },
  {
    eyebrow: 'Know your rider.',
    desc: 'Keep your drivers safe and protect your business from liability by screening passengers before they ride.',
    cta: 'KYx products for Ridesharing →',
    to: '/industries/ridesharing',
  },
  {
    eyebrow: 'Know your guest.',
    desc: 'Stop property damage and chargebacks before check-in.',
    cta: 'KYx products for Short Term Rentals →',
    to: '/industries/short-term-rentals',
  },
  {
    eyebrow: 'Know your driver.',
    desc: 'Lower incident risk, reduce theft, and improve margins in vehicle rental and sharing.',
    cta: 'KYx products for Vehicle Rental and Sharing →',
    to: '/industries/vehicle-rental-and-sharing',
  },
  {
    eyebrow: 'Know your visitor.',
    desc: 'Secure physical spaces with real-time identity and criminal records screening.',
    cta: 'KYx products for Visitor Management Systems →',
    to: '/industries/visitor-management-systems',
  },
]

export default function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section className="py-20">
        <div className="content-wrap">
          <h1 className="mb-5" style={{ maxWidth: '42rem' }}>Risk intelligence for every use case.</h1>
          <p className="mb-8" style={{ maxWidth: '42rem', color: '#666' }}>
            Checkr Trust is a KYx risk intelligence platform, built on industry-leading criminal, identity, and driving data, that helps businesses protect customers, drive revenue, and scale with confidence.
          </p>
          <Link
            to="/get-a-demo"
            className="inline-flex items-center px-5 py-2.5 bg-[#111] text-white text-sm rounded-[6px] hover:bg-[#333] transition-colors"
          >
            Get a demo
          </Link>
        </div>
      </section>

      {/* FEATURE-GRID */}
      <section className="bg-[#f8f8f7] py-16">
        <div className="content-wrap">
          <h2 className="mb-3">Turn uncertainty into clarity with full-profile KYx products.</h2>
          <p className="mb-8" style={{ maxWidth: '640px', color: '#666' }}>
            Checkr Trust combines criminal, identity, and driving data into a complete trust profile, so you can assess individual risk, protect your business, and make faster, safer decisions at scale.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="border border-[#e5e5e5] rounded-[10px] p-5 bg-white flex flex-col">
              <div className="w-7 h-7 bg-[#e5e5e5] rounded mb-3" />
              <h3 className="mb-2">Criminal and Public Records</h3>
              <p className="mb-4 flex-1">Flag high-risk and violent actors with unmatched coverage and clarity.</p>
              <Link to="/products/criminal-and-public-records-checks" className="text-sm text-[#111] hover:text-[#333] transition-colors">
                More about Criminal and Public Records Checks →
              </Link>
            </div>
            <div className="border border-[#e5e5e5] rounded-[10px] p-5 bg-white flex flex-col">
              <div className="w-7 h-7 bg-[#e5e5e5] rounded mb-3" />
              <h3 className="mb-2">Identity Verification</h3>
              <p className="mb-4 flex-1">Reduce fraud by confirming real identities using billions of authoritative records with 99% US coverage.</p>
              <Link to="/products/identity-checks" className="text-sm text-[#111] hover:text-[#333] transition-colors">
                More about Identity Checks →
              </Link>
            </div>
            <div className="border border-[#e5e5e5] rounded-[10px] p-5 bg-white flex flex-col">
              <div className="w-7 h-7 bg-[#e5e5e5] rounded mb-3" />
              <h3 className="mb-2">Driving History</h3>
              <p className="mb-4 flex-1">Reduce accidents, fraud, and theft by screening drivers for license status, violations, and crash history.</p>
              <Link to="/products/driver-checks" className="text-sm text-[#111] hover:text-[#333] transition-colors">
                More about Driver Checks →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* LOGO-01 */}
      <section className="py-12">
        <div className="content-wrap">
          <p className="text-sm text-[#888] mb-5">Trusted by:</p>
          <div className="flex flex-wrap gap-3">
            {['Envoy', 'Carefully', 'Turo', 'Tawkify', 'Hulah'].map((name) => (
              <span key={name} className="inline-flex items-center px-3 py-1.5 bg-[#f0f0f0] rounded text-sm font-medium text-[#555]">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ROLLOVER-LOGO-01 */}
      <section className="bg-[#f8f8f7] py-16">
        <div className="content-wrap">
          <div className="space-y-4">
            <Link to="/resources/customer-stories/tawkify" className="flex items-center justify-between border border-[#e5e5e5] rounded-[10px] px-5 py-4 bg-white hover:border-[#ccc] transition-colors">
              <span className="text-sm font-medium">Tawkify sets a new standard in dating safety</span>
              <span className="text-[#888]">→</span>
            </Link>
            <Link to="/resources/customer-stories/carefully" className="flex items-center justify-between border border-[#e5e5e5] rounded-[10px] px-5 py-4 bg-white hover:border-[#ccc] transition-colors">
              <span className="text-sm font-medium">Carefully builds a trusted ecosystem for childcare</span>
              <span className="text-[#888]">→</span>
            </Link>
            <Link to="/resources/customer-stories/verkada" className="flex items-center justify-between border border-[#e5e5e5] rounded-[10px] px-5 py-4 bg-white hover:border-[#ccc] transition-colors">
              <span className="text-sm font-medium">Verkada protects schools with real-time visitor screening</span>
              <span className="text-[#888]">→</span>
            </Link>
            <Link to="/resources/customer-stories/alert-enterprise" className="flex items-center justify-between border border-[#e5e5e5] rounded-[10px] px-5 py-4 bg-white hover:border-[#ccc] transition-colors">
              <span className="text-sm font-medium">Alert Enterprise streamlines visitor management with instant criminal data</span>
              <span className="text-[#888]">→</span>
            </Link>
            <Link to="/resources/customer-stories/hulah" className="flex items-center justify-between border border-[#e5e5e5] rounded-[10px] px-5 py-4 bg-white hover:border-[#ccc] transition-colors">
              <span className="text-sm font-medium">Hulah keeps dangerous predators off its dating platform</span>
              <span className="text-[#888]">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CREDIBILITY-01 */}
      <section className="py-16">
        <div className="content-wrap">
          <h2 className="mb-3">Built for decision-makers who can't afford blindspots.</h2>
          <p className="mb-10" style={{ maxWidth: '640px', color: '#666' }}>
            Checkr built one of the industry's fastest, most accurate background check infrastructures. Checkr Trust gives businesses access to the same best-in-class criminal, identity, and driving data so you can screen customers quickly and confidently, with zero guesswork.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { h3: 'Unmatched criminal data coverage', p: '2,400+ sources across every US jurisdiction, 99% coverage of the US population in our database' },
              { h3: 'Frictionless identity checks', p: '9B+ authoritative records, near-instant returns' },
              { h3: 'Real-time driver checks', p: 'Access Motor Vehicle Record data in seconds and save on DMV fees with Driver\'s License Status Checks' },
              { h3: 'Enterprise-ready', p: '99.9% uptime, flexible filters, scalable across workflows' },
              { h3: 'Built for your stack', p: 'Clean APIs and fast implementation support' },
              { h3: 'Easy to search', p: 'Launch with a simple dashboard—no integration or coding required' },
            ].map((item) => (
              <div key={item.h3}>
                <h3 className="mb-2">{item.h3}</h3>
                <p style={{ color: '#666' }}>{item.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CROSS-LINKS (Industries) */}
      <section className="bg-[#f8f8f7] py-16">
        <div className="content-wrap">
          <h2 className="mb-10">Risk looks different in every industry. We tailor KYx to match.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {industryLinks.map((item) => (
              <div key={item.to} className="border border-[#e5e5e5] rounded-[10px] p-5 bg-white flex flex-col">
                <h3 className="mb-2">{item.eyebrow}</h3>
                <p className="mb-4 flex-1 text-sm" style={{ color: '#666' }}>{item.desc}</p>
                <Link to={item.to} className="text-sm text-[#111] hover:text-[#333] transition-colors">
                  {item.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API-MODULE (homepage variant with numbered steps) */}
      <section className="py-16">
        <div className="content-wrap">
          <div style={{ maxWidth: 680 }}>
            <h2 className="mb-3">Clear signal. Low friction. High volume.</h2>
            <p className="mb-8" style={{ color: '#666' }}>
              Checkr Trust is a unified KYx platform that delivers actionable risk intelligence through one API, in real time and configured to your workflow.
            </p>
            <ol className="space-y-5 mb-8">
              {[
                { title: 'Integrate via API', desc: 'Fast, flexible implementation designed for modern platforms.' },
                { title: 'Set your filters', desc: 'Choose the data signals and thresholds that align with your risk model.' },
                { title: 'Make the call', desc: 'Get real-time, decision-ready insights at scale, without added friction.' },
              ].map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#111] text-white text-xs flex items-center justify-center font-medium">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="mb-1">{step.title}</h3>
                    <p style={{ color: '#666' }}>{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
            <a
              href="https://docs.checkrtrust.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 bg-[#111] text-white text-sm rounded-[6px] hover:bg-[#333] transition-colors"
            >
              See API documentation →
            </a>
          </div>
        </div>
      </section>

      {/* RESOURCES-01 */}
      <section className="bg-[#f8f8f7] py-16">
        <div className="content-wrap">
          <h2 className="mb-3">Go from guessing to knowing to results.</h2>
          <p className="mb-3" style={{ maxWidth: '640px', color: '#666' }}>
            Checkr Trust helps high-trust businesses reduce fraud, increase revenue, and protect their brand. Screen customers at scale to get risk intelligence that boosts revenue, growth, and retention.
          </p>
          <Link to="/resources/customer-stories" className="text-sm text-[#111] hover:text-[#333] transition-colors mb-8 inline-block">
            See all customer stories →
          </Link>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
            {[
              'Reduce fraud and chargebacks in high-value rentals',
              'Improve user safety and retention',
              'Increase margins by preventing incidents and reducing manual reviews',
              'Protect brand reputation by keeping out high-risk users',
              'Strengthen underwriting and support BSA compliance for financial services',
              'Streamline operations with seamless API integration',
            ].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <span className="text-[#888] mt-0.5">—</span>
                <p style={{ color: '#444' }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUCCESS-STORY-01 (Tawkify) */}
      <section className="py-16">
        <div className="content-wrap">
          <span className="inline-flex items-center px-3 py-1.5 bg-[#f0f0f0] rounded text-sm font-medium text-[#555] mb-5">
            Tawkify
          </span>
          <h3 className="mb-4" style={{ fontSize: 22, fontWeight: 500 }}>Tawkify sets a new standard in dating safety.</h3>
          <blockquote className="border-l-4 border-[#e5e5e5] pl-5 italic text-[#444] mb-5" style={{ maxWidth: 600 }}>
            "Our clients truly appreciate this added layer of security. It's one of the key reasons why they choose Tawkify—they trust us to prioritize their safety and well-being while helping them build meaningful, lasting connections with others."
          </blockquote>
          <p className="text-sm text-[#666] mb-5">Chris Kumar, CEO, Tawkify</p>
          <Link to="/resources/customer-stories/tawkify" className="text-sm text-[#111] hover:text-[#333] transition-colors">
            Read story →
          </Link>
        </div>
      </section>

      <BlogModule />
      <CTABanner />
    </Layout>
  )
}
