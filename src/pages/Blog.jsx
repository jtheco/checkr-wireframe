import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import CTABanner from '../components/CTABanner'

const articles = [
  { title: 'Navigating the Future of Car Rentals: Insights from the 2025 International Car Rental Show', tag: 'Industry Events', date: 'Jan 28, 2026', to: '/blog/car-rental-show-2025' },
  { title: 'Securing Our Spaces: Reflections from ISC West 2025', tag: 'Industry Events', date: 'Mar 12, 2026', to: '/blog/isc-west-2025' },
  { title: 'Why Real-Time Criminal Screening Is the New Standard for Visitor Management', tag: 'Visitor Management', date: 'Feb 18, 2026', to: '/blog/criminal-screening-vms' },
  { title: 'How Dating Platforms Are Winning Users by Prioritizing Safety', tag: 'Online Dating', date: 'Dec 10, 2025', to: '/blog/dating-platform-safety' },
  { title: 'The True Cost of a High-Risk Guest: What STR Platforms Need to Know', tag: 'Short-Term Rentals', date: 'Nov 19, 2025', to: '/blog/str-high-risk-guests' },
  { title: 'Identity Verification in 2026: What KYx Means for Fintechs', tag: 'Financial Services', date: 'Jan 7, 2026', to: '/blog/kyc-fintech-2026' },
  { title: 'From Check-In to Check-Out: Building Trust in Short-Term Rentals', tag: 'Short-Term Rentals', date: 'Oct 23, 2025', to: '/blog/str-trust-building' },
  { title: 'KYx vs. KYC: Understanding the Difference and Why It Matters', tag: 'Education', date: 'Sep 30, 2025', to: '/blog/kyx-vs-kyc' },
  { title: 'How Caregiving Platforms Screen for Household Risk—Not Just Individuals', tag: 'Caregiving', date: 'Feb 27, 2026', to: '/blog/caregiving-household-screening' },
]

export default function Blog() {
  return (
    <Layout>
      {/* HERO */}
      <section className="py-20">
        <div className="content-wrap">
          <h1 className="mb-5" style={{ maxWidth: '42rem' }}>Blog</h1>
          <p style={{ maxWidth: '42rem', color: '#666' }}>
            Explore the latest insights on how KYx risk intelligence helps businesses prevent harm, protect their brand, and create safer digital and physical spaces.
          </p>
        </div>
      </section>

      {/* Featured article */}
      <section className="bg-[#f8f8f7] py-16">
        <div className="content-wrap">
          <div className="border border-[#e5e5e5] rounded-[10px] p-5 bg-white">
            <div className="w-full aspect-video bg-[#e5e5e5] rounded-[6px] flex items-center justify-center text-sm text-[#999] mb-4">
              Article image
            </div>
            <span className="label mb-3 block">Featured</span>
            <h2 className="mb-3" style={{ maxWidth: 640 }}>
              Checkr Trust launches Driver Checks to help vehicle rental companies reduce fraud, mitigate risks, and boost profitability.
            </h2>
            <p className="mb-4" style={{ maxWidth: 640, color: '#666' }}>
              A new addition to the Checkr Trust platform, Driver Checks combines license status, MVR data, and violation history into one real-time API to help vehicle platforms reduce theft, lower costs, and grow safely.
            </p>
            <Link to="/blog/driver-checks-launch" className="text-sm text-[#111] hover:text-[#333] transition-colors">
              Read article →
            </Link>
          </div>
        </div>
      </section>

      {/* Article grid */}
      <section className="py-16">
        <div className="content-wrap">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {articles.map((article) => (
              <div key={article.to} className="border border-[#e5e5e5] rounded-[10px] p-5 bg-white flex flex-col">
                <div className="w-full aspect-video bg-[#e5e5e5] rounded-[6px] flex items-center justify-center text-sm text-[#999] mb-3">
                  Article image
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="label">{article.tag}</span>
                  <span className="text-[#bbb] text-xs">·</span>
                  <span className="text-xs text-[#999]">{article.date}</span>
                </div>
                <h3 className="mb-3 flex-1">{article.title}</h3>
                <Link to={article.to} className="text-sm text-[#111] hover:text-[#333] transition-colors">
                  Read article →
                </Link>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center gap-3 text-sm text-[#555]">
            <span className="font-medium text-[#111]">1</span>
            <Link to="/blog?page=2" className="hover:text-[#111] transition-colors">2</Link>
            <Link to="/blog?page=3" className="hover:text-[#111] transition-colors">3</Link>
            <Link to="/blog?page=2" className="hover:text-[#111] transition-colors">Next →</Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  )
}
