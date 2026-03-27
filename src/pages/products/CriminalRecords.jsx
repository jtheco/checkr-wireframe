import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import CTABanner from '../../components/CTABanner'
import BlogModule from '../../components/BlogModule'

const industryLinks = [
  { title: 'Caregiving', desc: 'Screen households before caregivers enter.', to: '/industries/caregiving' },
  { title: 'Financial Institutions', desc: 'Prevent fraud and meet compliance standards.', to: '/industries/financial-institutions' },
  { title: 'Online Dating', desc: 'Flag violent and fraudulent actors at sign-up.', to: '/industries/online-dating' },
  { title: 'Ridesharing', desc: 'Protect drivers from high-risk passengers.', to: '/industries/ridesharing' },
  { title: 'Short-Term Rentals', desc: 'Prevent property damage and platform abuse.', to: '/industries/short-term-rentals' },
  { title: 'Vehicle Rental and Sharing', desc: 'Reduce theft and incidents before the keys are handed over.', to: '/industries/vehicle-rental-and-sharing' },
  { title: 'Visitor Management Systems', desc: 'Flag risk before entry into sensitive sites.', to: '/industries/visitor-management-systems' },
]

export default function CriminalRecords() {
  return (
    <Layout>
      {/* HERO */}
      <section className="py-20 bg-white">
        <div className="content-wrap">
          <h1 className="mb-5" style={{ maxWidth: '42rem' }}>The criminal data layer for trust, safety, and speed.</h1>
          <p className="mb-8" style={{ maxWidth: '42rem', color: '#666' }}>
            Checkr Trust delivers holistic KYx risk intelligence through criminal and public record checks covering 99% of the US population. Identity verification tells you who someone is, criminal data tells you what they've done. Together they help high-trust businesses reduce harm and make faster, smarter growth decisions.
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
          <h2 className="mb-3">You can't see the full risk picture without criminal history.</h2>
          <p style={{ maxWidth: '640px', color: '#666' }}>
            Criminal data is one of the strongest signals of risk. Other providers rely on static watchlists that miss real-world context. Checkr Trust gives you immediate, direct-to-source access to the most comprehensive criminal and public records, so you can see the full risk profile for every individual.
          </p>
        </div>
      </section>

      {/* BENEFITS-01 */}
      <section className="py-16 bg-white">
        <div className="content-wrap">
          <h2 className="mb-8">Built for risk reduction, not red tape.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { h3: 'Cut risk and cost.', p: 'Surface clear risk signals with precision and speed to prevent fraud, loss, and platform abuse.' },
              { h3: 'Drive new revenue.', p: 'Enter high-trust markets, onboard users faster, and offer premium experiences by turning trust and safety into competitive advantages.' },
              { h3: 'Protect your brand.', p: 'Avoid headlines, lawsuits, and lost users. Safety is the standard customers expect, KYx risk intelligence helps deliver it.' },
              { h3: 'Make smarter decisions, faster.', p: 'Use filters to surface only the records that matter to your business, so you can reduce review time and act with confidence.' },
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
          <h2 className="mb-3">Risk signals, tailored by industry.</h2>
          <p className="mb-8" style={{ maxWidth: '640px', color: '#666' }}>
            Whether you're sending someone into a home, handing over a $50k vehicle, or enabling in-person interactions, you need insight into who's on your platform to protect your users and business. We tailor criminal data to match the risks that matter in your industry.
          </p>
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
          <h2 className="mb-3">Criminal data with no delays or guesswork.</h2>
          <p className="mb-3" style={{ maxWidth: '640px', color: '#666' }}>
            Checkr Trust pulls from 2,400+ direct data sources, including criminal databases, sex offender registries, and global watchlists, so you can screen users with full context and full confidence.
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
                title: 'National Criminal Database',
                desc: 'Get real time access to a proprietary database of 900M+ records aggregated from court records, arrest records, warrants, and more.',
              },
              {
                title: 'Sex Offender Registries',
                desc: 'Search sex offender registries across all 50 states, Washington DC, and all US territories and tribes. Reports include key context like the individual\'s date of registration and current status.',
              },
              {
                title: 'Sex Offender Search by Address',
                desc: 'Go beyond the individual on record by checking for any registered sex offenders associated with an address to help ensure homes are safe to enter.',
              },
              {
                title: 'Global Watchlists',
                desc: 'Screen against global and domestic watchlists for criminal activity, terrorism, and financial sanctions. Sources include FBI and Interpol Most Wanted lists, OFAC, the Department of State sanction lists, and more.',
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
          <h2 className="mb-3">The industry's most trusted criminal data.</h2>
          <p className="mb-8" style={{ maxWidth: '640px', color: '#666' }}>
            Checkr Trust powers over 10 million user screens every month using the industry's most comprehensive criminal and public record data. It's high-signal risk intelligence delivered through flexible APIs and tailored to your policies. No one knows criminal data better.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { h3: 'Unmatched data coverage.', p: '2,400+ sources across every US jurisdiction. Arrest records, court and warrant data, watchlists, sex offender registries—all in one API.' },
              { h3: 'Signal, not noise.', p: 'Our filters let you define what counts as risk so you can focus only on what matters to your business.' },
              { h3: 'Built for scale.', p: 'With 99.9% uptime, real-time access, and fast implementation, Checkr Trust is built to meet the demands of high-volume, safety-critical businesses.' },
            ].map((item) => (
              <div key={item.h3}>
                <h3 className="mb-2">{item.h3}</h3>
                <p style={{ color: '#666' }}>{item.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUCCESS-STORY-01 (Verkada) */}
      <section className="py-16 bg-white">
        <div className="content-wrap">
          <span className="inline-flex items-center px-3 py-1.5 bg-[#f0f0f0] rounded text-sm font-medium text-[#555] mb-5">
            Verkada
          </span>
          <h2 className="mb-5">Verkada protects schools with real-time visitor screening.</h2>
          <Link to="/resources/customer-stories/verkada" className="text-sm text-[#111] hover:text-[#333] transition-colors">
            Read story →
          </Link>
        </div>
      </section>

      {/* QUOTE-01 (Verkada) */}
      <section className="bg-[#f8f8f7] py-16">
        <div className="content-wrap">
          <blockquote className="border-l-4 border-[#e5e5e5] pl-5 italic text-[#444]" style={{ maxWidth: 640 }}>
            "With Checkr Trust, we're able to extend protection further by preventing undesired guests from even entering buildings."
          </blockquote>
          <p className="mt-4 text-sm text-[#666]">— Grace Wang, Software Engineering Manager, Verkada</p>
        </div>
      </section>

      <BlogModule />
      <CTABanner />
    </Layout>
  )
}
