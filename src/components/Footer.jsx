import { Link } from 'react-router-dom'

const COLUMNS = [
  {
    heading: 'Products',
    links: [
      { label: 'Criminal and Public Records Checks', to: '/products/criminal-and-public-records-checks' },
      { label: 'Identity Checks', to: '/products/identity-checks' },
      { label: 'Driver Checks', to: '/products/driver-checks' },
    ],
  },
  {
    heading: 'Industries',
    links: [
      { label: 'Caregiving', to: '/industries/caregiving' },
      { label: 'Financial Institutions', to: '/industries/financial-institutions' },
      { label: 'Online Dating', to: '/industries/online-dating' },
      { label: 'Ridesharing', to: '/industries/ridesharing' },
      { label: 'Short Term Rentals', to: '/industries/short-term-rentals' },
      { label: 'Vehicle Rental and Sharing', to: '/industries/vehicle-rental-and-sharing' },
      { label: 'Visitor Management Systems', to: '/industries/visitor-management-systems' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Customer Stories', to: '/resources/customer-stories' },
      { label: 'Blog', to: '/blog' },
      { label: 'API Documentation', to: 'https://docs.checkrtrust.com', external: true },
    ],
  },
  {
    heading: 'Get Started',
    links: [
      { label: 'Get a Demo', to: '/get-a-demo' },
      { label: 'Log in', to: '#' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Tessera Privacy Policy', to: '/legal/tessera-privacy-policy' },
      { label: 'Inflection Privacy Policy', to: '/legal/inflection-privacy-policy' },
    ],
  },
]

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-[#e5e5e5] bg-[#f8f8f7] mt-auto">
      <div className="content-wrap py-12">
        {/* Top row: logo + columns */}
        <div className="grid grid-cols-2 md:grid-cols-[auto_repeat(5,1fr)] gap-8 mb-10">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="text-[15px] font-semibold text-[#111]">
              Checkr Trust
            </Link>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <p className="label mb-3">{col.heading}</p>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.to}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[13px] text-[#555] hover:text-[#111] transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.to}
                        className="text-[13px] text-[#555] hover:text-[#111] transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 pt-6 border-t border-[#e5e5e5]">
          <p className="text-[12px] text-[#999]">
            © 2025 Tessera Data, Inc. and Inflection Risk Solutions, LLC. All Rights Reserved.
          </p>
          <a
            href="https://www.linkedin.com/company/checkrtrust"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#666] hover:text-[#111] transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </footer>
  )
}
