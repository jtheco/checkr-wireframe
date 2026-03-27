import { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const PRODUCTS = [
  { label: 'Criminal and Public Records Checks', to: '/products/criminal-and-public-records-checks' },
  { label: 'Identity Checks', to: '/products/identity-checks' },
  { label: 'Driver Checks', to: '/products/driver-checks' },
]

const INDUSTRIES = [
  { label: 'Caregiving', to: '/industries/caregiving' },
  { label: 'Financial Institutions', to: '/industries/financial-institutions' },
  { label: 'Online Dating', to: '/industries/online-dating' },
  { label: 'Ridesharing', to: '/industries/ridesharing' },
  { label: 'Short Term Rentals', to: '/industries/short-term-rentals' },
  { label: 'Vehicle Rental and Sharing', to: '/industries/vehicle-rental-and-sharing' },
  { label: 'Visitor Management Systems', to: '/industries/visitor-management-systems' },
]

const RESOURCES = [
  { label: 'Customer Stories', to: '/resources/customer-stories' },
  { label: 'Blog', to: '/blog' },
  { label: 'API Documentation', to: 'https://docs.checkrtrust.com', external: true },
  { label: 'Ebooks and Guides', disabled: true },
  { label: 'Webinars and Events', disabled: true },
]

function Dropdown({ items }) {
  return (
    <div
      className="absolute top-full left-0 mt-1 bg-white border border-[#e5e5e5] rounded-[6px] shadow-lg py-1 min-w-[240px] z-50"
    >
      {items.map((item) => {
        if (item.disabled) {
          return (
            <div
              key={item.label}
              className="flex items-center justify-between px-4 py-2 text-[14px] text-[#bbb] cursor-default select-none"
            >
              {item.label}
              <span className="text-[10px] font-medium tracking-wide uppercase ml-3 text-[#ccc]">Coming soon</span>
            </div>
          )
        }
        if (item.external) {
          return (
            <a
              key={item.label}
              href={item.to}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-[14px] text-[#333] hover:bg-[#f8f8f7] transition-colors"
            >
              {item.label}
            </a>
          )
        }
        return (
          <Link
            key={item.label}
            to={item.to}
            className="block px-4 py-2 text-[14px] text-[#333] hover:bg-[#f8f8f7] transition-colors"
          >
            {item.label}
          </Link>
        )
      })}
    </div>
  )
}

function NavDropdown({ label, items }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function handler(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="flex items-center gap-1 text-[14px] text-[#333] hover:text-[#111] py-1 transition-colors"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {label}
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`transition-transform ${open ? 'rotate-180' : ''}`}>
          <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {open && <Dropdown items={items} />}
    </div>
  )
}

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState(null)

  return (
    <nav className="sticky top-0 z-40 bg-white border-b border-[#e5e5e5]">
      <div className="content-wrap flex items-center justify-between h-[60px]">
        {/* Logo */}
        <Link to="/" className="text-[16px] font-semibold text-[#111] shrink-0">
          Checkr Trust
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <NavDropdown label="Products" items={PRODUCTS} />
          <NavDropdown label="Industries" items={INDUSTRIES} />
          <NavDropdown label="Resources" items={RESOURCES} />
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#"
            className="text-[14px] text-[#333] border border-[#e5e5e5] rounded-[6px] px-4 py-1.5 hover:border-[#999] transition-colors"
          >
            Log in
          </a>
          <Link
            to="/get-a-demo"
            className="text-[14px] text-white bg-[#111] rounded-[6px] px-4 py-1.5 hover:bg-[#333] transition-colors"
          >
            Get a Demo
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-[#333] transition-transform ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-[#333] transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-[#333] transition-transform ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#e5e5e5] bg-white px-5 py-4 flex flex-col gap-3">
          {[
            { label: 'Products', items: PRODUCTS },
            { label: 'Industries', items: INDUSTRIES },
            { label: 'Resources', items: RESOURCES },
          ].map(({ label, items }) => (
            <div key={label}>
              <button
                className="flex items-center justify-between w-full text-[14px] font-medium text-[#111] py-1"
                onClick={() => setMobileSection(mobileSection === label ? null : label)}
              >
                {label}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`transition-transform ${mobileSection === label ? 'rotate-180' : ''}`}>
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {mobileSection === label && (
                <div className="ml-3 mt-1 flex flex-col gap-1">
                  {items.map((item) => {
                    if (item.disabled) {
                      return (
                        <span key={item.label} className="text-[13px] text-[#bbb] py-1">
                          {item.label} <span className="text-[10px] uppercase tracking-wide">— coming soon</span>
                        </span>
                      )
                    }
                    if (item.external) {
                      return (
                        <a key={item.label} href={item.to} target="_blank" rel="noopener noreferrer"
                          className="text-[13px] text-[#444] py-1"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label} ↗
                        </a>
                      )
                    }
                    return (
                      <Link key={item.label} to={item.to} className="text-[13px] text-[#444] py-1"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>
          ))}
          <div className="flex gap-3 mt-2 pt-3 border-t border-[#e5e5e5]">
            <a href="#" className="flex-1 text-center text-[14px] text-[#333] border border-[#e5e5e5] rounded-[6px] px-4 py-2">
              Log in
            </a>
            <Link to="/get-a-demo" className="flex-1 text-center text-[14px] text-white bg-[#111] rounded-[6px] px-4 py-2"
              onClick={() => setMobileOpen(false)}
            >
              Get a Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
