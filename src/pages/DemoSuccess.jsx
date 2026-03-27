import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

export default function DemoSuccess() {
  return (
    <Layout>
      <section className="py-28 bg-white">
        <div className="content-wrap">
          <div style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center' }}>
            {/* Success icon placeholder */}
            <div style={{ width: 72, height: 72, borderRadius: '50%', background: '#e8e8e8', margin: '0 auto 32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#ccc' }} />
            </div>
            <span className="eyebrow" style={{ marginBottom: 16 }}>You're all set</span>
            <h1 className="mb-5">Thanks for your interest in Checkr Trust.</h1>
            <p className="mb-12" style={{ color: '#666', fontSize: 18, lineHeight: 1.7 }}>
              A member of our team will reach out shortly to schedule your demo. You'll get a live walkthrough of how KYx risk intelligence can help your business reduce fraud, prevent harm, and make faster, safer, growth decisions.
            </p>
            <div style={{ border: '1px solid #e5e5e5', borderRadius: 12, padding: '24px 28px', background: '#f8f8f7', marginBottom: 32, textAlign: 'left' }}>
              <h3 style={{ marginBottom: 12 }}>Have questions in the meantime?</h3>
              <p style={{ color: '#666', marginBottom: 0 }}>
                Reach out to{' '}
                <a href="mailto:sales@checkrtrust.com" className="text-[#111] underline hover:text-[#333] transition-colors">
                  sales@checkrtrust.com
                </a>
              </p>
            </div>
            <Link
              to="/"
              className="text-sm text-[#666] hover:text-[#111] transition-colors"
            >
              ← Back to home
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
