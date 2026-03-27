import { Link } from 'react-router-dom'

const articles = [
  {
    slug: 'vehicle-sharing-criminal-data',
    tag: 'Vehicle Sharing',
    date: 'Jan 14, 2026',
    title: 'How Real-Time Criminal Data Reduces Fraud in Vehicle Sharing',
  },
  {
    slug: 'dating-identity-verification',
    tag: 'Online Dating',
    date: 'Feb 3, 2026',
    title: "Why Identity Verification Alone Isn't Enough for Dating Platforms",
  },
  {
    slug: 'str-roi-of-trust',
    tag: 'Short-Term Rentals',
    date: 'Mar 5, 2026',
    title: 'The ROI of Trust: Screening Guests Before Check-In Pays Off',
  },
]

export default function BlogModule() {
  return (
    <section className="py-16 bg-[#f8f8f7]">
      <div className="content-wrap">
        <div className="flex items-end justify-between mb-8">
          <h2 style={{ maxWidth: 480 }}>Explore the latest insights on KYx risk intelligence.</h2>
          <Link
            to="/blog"
            className="text-sm text-[#111] hover:text-[#333] transition-colors whitespace-nowrap ml-6"
          >
            All Blog articles →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {articles.map((article) => (
            <div
              key={article.slug}
              className="border border-[#e5e5e5] rounded-[10px] p-5 bg-white flex flex-col"
            >
              <div className="w-full aspect-video bg-[#e5e5e5] rounded-[6px] flex items-center justify-center text-sm text-[#999] mb-3">
                Article image
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="label">{article.tag}</span>
                <span className="text-[#bbb] text-xs">·</span>
                <span className="text-xs text-[#999]">{article.date}</span>
              </div>
              <h3 className="mb-3 flex-1">{article.title}</h3>
              <Link
                to={`/blog/${article.slug}`}
                className="text-sm text-[#111] hover:text-[#333] transition-colors"
              >
                Read article →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
