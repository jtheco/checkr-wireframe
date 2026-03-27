import { Link } from 'react-router-dom'

const articles = [
  {
    title: 'How Real-Time Criminal Data Reduces Fraud in Vehicle Sharing',
    tag: 'Vehicle Sharing',
    date: 'Jan 14, 2026',
    slug: 'criminal-data-vehicle-sharing',
  },
  {
    title: "Why Identity Verification Alone Isn't Enough for Dating Platforms",
    tag: 'Online Dating',
    date: 'Feb 3, 2026',
    slug: 'identity-verification-dating',
  },
  {
    title: 'The ROI of Trust: Screening Guests Before Check-In Pays Off',
    tag: 'Short-Term Rentals',
    date: 'Mar 5, 2026',
    slug: 'roi-of-trust-str',
  },
]

export default function BlogModule() {
  return (
    <section className="section-lg" style={{ background: '#f8f8f7' }}>
      <div className="content-wrap">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <span className="eyebrow">From the blog</span>
            <h2 style={{ margin: 0 }}>Explore the latest insights on KYx risk intelligence.</h2>
          </div>
          <Link to="/blog" style={{ fontSize: 14, fontWeight: 600, color: '#111', textDecoration: 'none', whiteSpace: 'nowrap' }}>
            All blog articles →
          </Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
          {articles.map((a) => (
            <Link key={a.slug} to={`/blog/${a.slug}`} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', background: '#fff', borderRadius: 16, border: '1px solid #e5e5e5', overflow: 'hidden', transition: 'border-color 0.15s' }}>
              <div className="img-placeholder img-placeholder-wide" style={{ borderRadius: '12px 12px 0 0' }}>
                [Article image]
              </div>
              <div style={{ padding: '20px 24px 24px' }}>
                <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#999', display: 'block', marginBottom: 8 }}>{a.tag}</span>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: '#111', lineHeight: 1.4, marginBottom: 12 }}>{a.title}</h3>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 13, color: '#aaa' }}>{a.date}</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#555' }}>Read article →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
