import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Layout from '../components/Layout'

export default function GetADemo() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    company: '',
    jobTitle: '',
    email: '',
    volume: '',
    industry: '',
    message: '',
  })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    navigate('/get-a-demo/success')
  }

  const inputClass = 'w-full border border-[#e5e5e5] rounded-[6px] px-3 py-2 text-sm text-[#111] bg-white focus:outline-none focus:border-[#999] transition-colors'
  const labelClass = 'block text-sm font-medium text-[#333] mb-1'

  return (
    <Layout>
      <section className="py-20 bg-white">
        <div className="content-wrap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left column */}
            <div>
              <h1 className="mb-5" style={{ maxWidth: '38rem' }}>Use KYx risk intelligence to make safer, faster, growth decisions.</h1>
              <p className="mb-6" style={{ color: '#666' }}>
                Get a live walkthrough to see how Checkr Trust can help you prevent harm, reduce fraud, and drive growth, without slowing down.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  'Criminal, identity, and driver data in one flexible API',
                  'Real-time results from 2,400+ public record sources',
                  '99% US identity verification coverage',
                  'License and violation checks with less cost and friction',
                  'Built for scale: 99.9% uptime and enterprise-grade performance',
                  'Trusted by top platforms in caregiving, mobility, dating, and beyond',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="icon-sm mt-0.5" style={{ flexShrink: 0 }} />
                    <p style={{ color: '#444' }}>{item}</p>
                  </li>
                ))}
              </ul>

              {/* Product tiles */}
              <div className="grid grid-cols-1 gap-3">
                {[
                  { title: 'Criminal and Public Records Checks', desc: 'Flag high-risk actors with 2,400+ sources and 99% US coverage.', to: '/products/criminal-and-public-records-checks' },
                  { title: 'Identity Checks', desc: 'Verify real identities instantly using 9B+ authoritative records.', to: '/products/identity-checks' },
                  { title: 'Driver Checks', desc: 'Access license status and driving history for safer fleet decisions.', to: '/products/driver-checks' },
                ].map((product) => (
                  <Link key={product.to} to={product.to} className="border border-[#e5e5e5] rounded-[10px] p-4 bg-white block no-underline" style={{ color: 'inherit', textDecoration: 'none' }}>
                    <h3 className="mb-1">{product.title}</h3>
                    <p className="text-sm mb-2" style={{ color: '#666' }}>{product.desc}</p>
                    <span className="text-xs text-[#888]">
                      Learn more →
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right column — form */}
            <div>
              <h2 className="mb-6">Connect with our sales team to schedule your demo.</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className={labelClass}>First name</label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={form.firstName}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className={labelClass}>Last name</label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={form.lastName}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className={labelClass}>Company name</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    required
                    value={form.company}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="jobTitle" className={labelClass}>Job title</label>
                  <input
                    id="jobTitle"
                    name="jobTitle"
                    type="text"
                    required
                    value={form.jobTitle}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>Work email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="volume" className={labelClass}>Est. annual volume of checks</label>
                  <select
                    id="volume"
                    name="volume"
                    value={form.volume}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select...</option>
                    <option>Less than 40k</option>
                    <option>40k-100k</option>
                    <option>100k-200k</option>
                    <option>200k-500k</option>
                    <option>500k+</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="industry" className={labelClass}>Industry</label>
                  <select
                    id="industry"
                    name="industry"
                    value={form.industry}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select...</option>
                    <option>VMS</option>
                    <option>Identity Verification</option>
                    <option>Caregiving</option>
                    <option>Hospitality/Travel</option>
                    <option>Online Dating</option>
                    <option>Car Rental/Ride Sharing</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className={labelClass}>What should we cover when we meet?</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-5 py-2.5 bg-[#111] text-white text-sm rounded-[6px] hover:bg-[#333] transition-colors"
                >
                  Request a demo
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
