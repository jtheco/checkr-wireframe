import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import CTABanner from '../components/CTABanner'

const relatedArticles = [
  { title: 'Navigating the Future of Car Rentals: Insights from the 2025 International Car Rental Show', tag: 'Industry Events', date: 'Jan 28, 2026', to: '/blog/car-rental-show-2025' },
  { title: "The True Cost of a High-Risk Guest: What STR Platforms Need to Know", tag: 'Short-Term Rentals', date: 'Nov 19, 2025', to: '/blog/str-high-risk-guests' },
  { title: 'KYx vs. KYC: Understanding the Difference and Why It Matters', tag: 'Education', date: 'Sep 30, 2025', to: '/blog/kyx-vs-kyc' },
]

export default function BlogArticle() {
  return (
    <Layout>
      <section className="py-20">
        <div className="content-wrap">
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            {/* Eyebrow + H1 */}
            <span className="label mb-4 block">Product News</span>
            <h1 className="mb-5">
              Checkr Trust launches Driver Checks to help vehicle rental companies reduce fraud, mitigate risks, and boost profitability.
            </h1>

            {/* Author + date */}
            <div className="flex items-center gap-4 mb-4 text-sm text-[#666]">
              <span>Checkr Trust Team</span>
              <span className="text-[#ccc]">|</span>
              <span>March 10, 2026</span>
            </div>

            {/* Share bar */}
            <div className="flex items-center gap-3 mb-8 text-sm text-[#888]">
              <span>Share:</span>
              <a href="#" className="hover:text-[#111] transition-colors">Facebook</a>
              <span className="text-[#ccc]">|</span>
              <a href="#" className="hover:text-[#111] transition-colors">X</a>
              <span className="text-[#ccc]">|</span>
              <a href="#" className="hover:text-[#111] transition-colors">LinkedIn</a>
              <span className="text-[#ccc]">|</span>
              <a href="#" className="hover:text-[#111] transition-colors">Email</a>
            </div>

            {/* Article image */}
            <div className="w-full aspect-video bg-[#e5e5e5] rounded-[6px] flex items-center justify-center text-sm text-[#999] mb-8">
              Article image
            </div>

            {/* Article body */}
            <p className="mb-6" style={{ color: '#444' }}>
              Today, Checkr Trust is announcing Driver Checks—a new product that gives vehicle rental and sharing platforms real-time access to license status and driving history data in one unified API. Built on the same infrastructure that powers Checkr's industry-leading background checks, Driver Checks is designed to help mobility businesses screen faster, reduce incidents, and grow more profitably.
            </p>

            <h2 className="mb-3">What Driver Checks includes</h2>
            <p className="mb-6" style={{ color: '#444' }}>
              Driver Checks includes two core products: Motor Vehicle Reports (MVRs) and Driver's License Status Checks. MVRs provide a comprehensive view of a driver's history—violations, suspensions, DUIs, and crash data—giving platforms the full picture before handing over a vehicle. Driver's License Status Checks offer a faster, lower-cost alternative when platforms simply need to confirm a license is valid and active, with savings of up to 100% on DMV transaction fees.
            </p>

            <h2 className="mb-3">Built for vehicle rental and sharing</h2>
            <p className="mb-6" style={{ color: '#444' }}>
              Whether you're managing a traditional rental fleet or running a peer-to-peer car sharing marketplace, Driver Checks is designed for your workflow. The API is flexible, fast, and built to scale—so you can approve good drivers instantly, flag high-risk ones early, and keep your fleet moving. Paired with Checkr Trust's criminal record and identity verification products, platforms now have access to a complete risk intelligence stack in one integration.
            </p>

            <h2 className="mb-3">Get started</h2>
            <p className="mb-8" style={{ color: '#444' }}>
              Driver Checks is available now for all Checkr Trust customers. If you're ready to reduce theft, lower insurance costs, and improve fleet utilization, we'd love to show you how it works.{' '}
              <Link to="/get-a-demo" className="underline text-[#111]">Request a demo</Link> to see Driver Checks in action.
            </p>
          </div>
        </div>
      </section>

      {/* Related articles */}
      <section className="bg-[#f8f8f7] py-16">
        <div className="content-wrap">
          <h2 className="mb-8">Related articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {relatedArticles.map((article) => (
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
        </div>
      </section>

      <CTABanner />
    </Layout>
  )
}
