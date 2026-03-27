import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import CTABanner from '../../components/CTABanner'
import BlogModule from '../../components/BlogModule'

const stories = [
  {
    industry: 'Online Dating',
    logo: 'Tawkify',
    headline: 'Tawkify sets a new standard in dating safety.',
    to: '/resources/customer-stories/tawkify',
    quote: "Our clients truly appreciate this added layer of security. It's one of the key reasons why they choose Tawkify—they trust us to prioritize their safety and well-being while helping them build meaningful, lasting connections with others.",
    attribution: 'Chris Kumar, CEO, Tawkify',
  },
  {
    industry: 'Caregiving',
    logo: 'Carefully',
    headline: 'Carefully builds a trusted ecosystem for childcare.',
    to: '/resources/customer-stories/carefully',
    quote: "Checkr Trust's solution is simple, straightforward, and low cost. The implementation was super easy, and having a screening process makes trust and safety an advantage in our partner and sales conversations.",
    attribution: 'Leslie Borrell, Founder and CEO, Carefully',
  },
  {
    industry: 'Visitor Management Systems',
    logo: 'Verkada',
    headline: 'Verkada protects schools with real-time visitor screening.',
    to: '/resources/customer-stories/verkada',
    quote: "With Checkr Trust, we're able to extend protection further by preventing undesired guests from even entering buildings. We deliver actionable criminal data, enabling our customers to quickly identify potential risks during the visitor check-in process.",
    attribution: 'Grace Wang, Software Engineering Manager, Verkada',
  },
  {
    industry: 'Visitor Management Systems',
    logo: 'Alert Enterprise',
    headline: 'Alert Enterprise streamlines visitor management with instant criminal data.',
    to: '/resources/customer-stories/alert-enterprise',
    quote: "Our partnership with Checkr Trust ensures that visitors are screened in real time without added friction, giving organizations peace of mind. This is especially critical for places like children's hospitals, where protecting vulnerable patients and their families is non-negotiable.",
    attribution: 'Shane Butler, SVP of Global Sales, Alert Enterprise',
  },
]

export default function CustomerStories() {
  return (
    <Layout>
      {/* HERO */}
      <section className="py-20 bg-white">
        <div className="content-wrap">
          <h1 className="mb-5" style={{ maxWidth: '42rem' }}>See how leading businesses use KYx to turn trust and safety into growth.</h1>
          <p style={{ maxWidth: '42rem', color: '#666' }}>
            From dating apps to financial institutions, explore how our customers use KYx risk intelligence to prevent harm, reduce fraud, and drive growth, all without slowing down.
          </p>
        </div>
      </section>

      {/* LISTING */}
      <section className="bg-[#f8f8f7] py-16">
        <div className="content-wrap">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {stories.map((story) => (
              <div key={story.to} className="border border-[#e5e5e5] rounded-[10px] p-5 bg-white flex flex-col">
                <span className="label mb-3">{story.industry}</span>
                <span className="inline-flex items-center px-3 py-1.5 bg-[#f0f0f0] rounded text-sm font-medium text-[#555] mb-4 self-start">
                  {story.logo}
                </span>
                <h2 className="mb-4">{story.headline}</h2>
                <blockquote className="border-l-4 border-[#e5e5e5] pl-4 italic text-[#444] text-sm mb-4 flex-1">
                  "{story.quote}"
                </blockquote>
                <p className="text-xs text-[#888] mb-4">— {story.attribution}</p>
                <Link to={story.to} className="text-sm text-[#111] hover:text-[#333] transition-colors">
                  Read story →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BlogModule />
      <CTABanner />
    </Layout>
  )
}
