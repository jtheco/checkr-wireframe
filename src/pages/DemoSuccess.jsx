import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

export default function DemoSuccess() {
  return (
    <Layout>
      <section className="py-20 bg-white">
        <div className="content-wrap">
          <div style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center' }}>
            <h1 className="mb-5">Thanks for your interest in Checkr Trust.</h1>
            <p className="mb-10" style={{ color: '#666' }}>
              A member of our team will reach out shortly to schedule your demo. You'll get a live walkthrough of how KYx risk intelligence can help your business reduce fraud, prevent harm, and make faster, safer, growth decisions.
            </p>
            <h2 className="mb-3">Have questions in the meantime?</h2>
            <p className="mb-8" style={{ color: '#666' }}>
              Reach out to{' '}
              <a href="mailto:sales@checkrtrust.com" className="text-[#111] underline hover:text-[#333] transition-colors">
                sales@checkrtrust.com
              </a>
            </p>
            <Link
              to="/"
              className="text-sm text-[#111] hover:text-[#333] transition-colors"
            >
              ← Back to home
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
