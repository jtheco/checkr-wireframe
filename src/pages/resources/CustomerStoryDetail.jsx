import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import CTABanner from '../../components/CTABanner'

const relatedStories = [
  { logo: 'Carefully', headline: 'Carefully builds a trusted ecosystem for childcare.', to: '/resources/customer-stories/carefully' },
  { logo: 'Verkada', headline: 'Verkada protects schools with real-time visitor screening.', to: '/resources/customer-stories/verkada' },
  { logo: 'Alert Enterprise', headline: 'Alert Enterprise streamlines visitor management with instant criminal data.', to: '/resources/customer-stories/alert-enterprise' },
]

export default function CustomerStoryDetail() {
  return (
    <Layout>
      <section className="py-20">
        <div className="content-wrap">
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            {/* Category tag + H1 */}
            <span className="label mb-4 block">Online Dating</span>
            <h1 className="mb-6">Tawkify sets a new standard in dating safety.</h1>

            {/* Intro */}
            <p className="mb-8" style={{ color: '#666' }}>
              Tawkify is a premium matchmaking service that connects singles through a curated, human-guided process. With trust and safety central to their brand, Tawkify partnered with Checkr Trust to verify users and screen for criminal history—raising the bar for safety in the online dating space.
            </p>

            {/* About Customer inset */}
            <div className="border border-[#e5e5e5] rounded-[10px] p-5 bg-[#f8f8f7] mb-8">
              <span className="inline-flex items-center px-3 py-1.5 bg-[#f0f0f0] rounded text-sm font-medium text-[#555] mb-4">
                Tawkify
              </span>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-[#888] mb-1">Industry</p>
                  <p style={{ color: '#333' }}>Online Dating</p>
                </div>
                <div>
                  <p className="text-[#888] mb-1">Market</p>
                  <p style={{ color: '#333' }}>US</p>
                </div>
                <div className="col-span-2">
                  <p className="text-[#888] mb-1">About</p>
                  <p style={{ color: '#333' }}>Tawkify is a premium matchmaking and dating service that pairs clients with personal matchmakers to find meaningful relationships.</p>
                </div>
              </div>
            </div>

            {/* The Challenge */}
            <h2 className="mb-3">The Challenge</h2>
            <p className="mb-8" style={{ color: '#666' }}>
              As Tawkify's client base grew, so did the need to ensure every match was between safe, verified individuals. Manual review processes were slow and inconsistent, and the team needed a scalable solution that could keep pace with growth without adding friction to the user experience.
            </p>

            {/* Pullquote */}
            <blockquote className="border-l-4 border-[#e5e5e5] pl-5 italic text-[#444] mb-8">
              "It's one of the key reasons why they choose Tawkify—they trust us to prioritize their safety and well-being." — Chris Kumar, CEO
            </blockquote>

            {/* The Solution */}
            <h2 className="mb-3">The Solution</h2>
            <p className="mb-8" style={{ color: '#666' }}>
              Checkr Trust integrated directly into Tawkify's onboarding flow, enabling real-time identity verification and criminal record screening. Users are screened automatically and flagged for review only when signals warrant attention—reducing manual work and creating a faster, safer experience.
            </p>

            {/* The Results */}
            <h2 className="mb-4">The Results</h2>
            <ul className="space-y-2 mb-8">
              {[
                'Faster, more consistent screening at scale',
                'Reduced manual review burden for the trust and safety team',
                'Increased client confidence and retention',
                'New competitive differentiator in premium matchmaking',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#888] mt-0.5">—</span>
                  <p style={{ color: '#444' }}>{item}</p>
                </li>
              ))}
            </ul>

            {/* Why It Matters */}
            <h2 className="mb-3">Why It Matters</h2>
            <p className="mb-10" style={{ color: '#666' }}>
              In a market where trust is the product, Tawkify's investment in screening is an investment in growth. By partnering with Checkr Trust, they've made safety a feature—one that users actively choose the platform for.
            </p>

            {/* Featured quote block */}
            <blockquote className="border-l-4 border-[#e5e5e5] pl-5 italic text-[#444] mb-2">
              "Our clients truly appreciate this added layer of security. It's one of the key reasons why they choose Tawkify—they trust us to prioritize their safety and well-being while helping them build meaningful, lasting connections with others."
            </blockquote>
            <p className="text-sm text-[#666] mb-12">— Chris Kumar, CEO, Tawkify</p>
          </div>
        </div>
      </section>

      {/* More customer stories */}
      <section className="bg-[#f8f8f7] py-16">
        <div className="content-wrap">
          <h2 className="mb-8">More customer stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {relatedStories.map((story) => (
              <div key={story.to} className="border border-[#e5e5e5] rounded-[10px] p-5 bg-white flex flex-col">
                <span className="inline-flex items-center px-3 py-1.5 bg-[#f0f0f0] rounded text-sm font-medium text-[#555] mb-4 self-start">
                  {story.logo}
                </span>
                <h3 className="mb-4 flex-1">{story.headline}</h3>
                <Link to={story.to} className="text-sm text-[#111] hover:text-[#333] transition-colors">
                  Read story →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  )
}
