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
      <section style={{ background: '#fff', padding: '80px 0', textAlign: 'center' }}>
        <div className="content-wrap">
          <div style={{ maxWidth: 640, margin: '0 auto' }}>
            <span className="eyebrow">Customer Stories</span>
            <h1 style={{ marginBottom: 20 }}>See how leading businesses use KYx to turn trust and safety into growth.</h1>
            <p style={{ color: '#666' }}>
              From dating apps to financial institutions, explore how our customers use KYx risk intelligence to prevent harm, reduce fraud, and drive growth, all without slowing down.
            </p>
          </div>
        </div>
      </section>

      {/* STORY GRID */}
      <section style={{ background: '#f8f8f7', padding: '80px 0' }}>
        <div className="content-wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            {stories.map((story) => (
              <div key={story.to} style={{ border: '1px solid #e5e5e5', borderRadius: 20, overflow: 'hidden', background: '#fff', display: 'flex', flexDirection: 'column' }}>
                <div className="img-placeholder img-placeholder-wide" style={{ borderRadius: '12px 12px 0 0' }}>
                  [Story image]
                </div>
                <div style={{ padding: '24px 28px 28px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#999', display: 'block', marginBottom: 12 }}>{story.industry}</span>
                  <div style={{ height: 32, width: 112, borderRadius: 6, background: '#e8e8e8', marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 600, color: '#aaa' }}>{story.logo}</div>
                  <h2 style={{ fontSize: 22, marginBottom: 16 }}>{story.headline}</h2>
                  <Link to={story.to} style={{ fontSize: 14, fontWeight: 600, color: '#111', textDecoration: 'none', marginBottom: 20 }}>Read story →</Link>
                  <blockquote style={{ borderLeft: '4px solid #e5e5e5', paddingLeft: 16, fontStyle: 'italic', color: '#444', fontSize: 14, lineHeight: 1.7, flex: 1 }}>
                    "{story.quote}"
                  </blockquote>
                  <p style={{ fontSize: 13, color: '#888', marginTop: 12 }}>— {story.attribution}</p>
                </div>
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
