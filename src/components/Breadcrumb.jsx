import { Link, useLocation } from 'react-router-dom'

const labelMap = {
  products: 'Products',
  industries: 'Industries',
  resources: 'Resources',
  blog: 'Blog',
  legal: 'Legal',
  'get-a-demo': 'Get a Demo',
  'criminal-and-public-records-checks': 'Criminal & Public Records Checks',
  'identity-checks': 'Identity Checks',
  'driver-checks': 'Driver Checks',
  caregiving: 'Caregiving',
  'financial-institutions': 'Financial Institutions',
  'online-dating': 'Online Dating',
  ridesharing: 'Ridesharing',
  'short-term-rentals': 'Short-Term Rentals',
  'vehicle-rental-and-sharing': 'Vehicle Rental & Sharing',
  'visitor-management-systems': 'Visitor Management',
  'customer-stories': 'Customer Stories',
  success: 'Success',
  'tessera-privacy-policy': 'Tessera Privacy Policy',
  'inflection-privacy-policy': 'Inflection Privacy Policy',
}

function toLabel(slug) {
  return labelMap[slug] || slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}

export default function Breadcrumb() {
  const { pathname } = useLocation()

  if (pathname === '/') return null

  const segments = pathname.split('/').filter(Boolean)

  const crumbs = segments.map((seg, i) => {
    const path = '/' + segments.slice(0, i + 1).join('/')
    return { label: toLabel(seg), path }
  })

  return (
    <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-200">
      <div className="content-wrap">
        <ol className="flex items-center gap-2 py-3 text-sm text-gray-500">
          <li>
            <Link to="/" className="hover:text-gray-700 transition-colors">Home</Link>
          </li>
          {crumbs.map((crumb, i) => (
            <li key={crumb.path} className="flex items-center gap-2">
              <span className="text-gray-300">/</span>
              {i === crumbs.length - 1 ? (
                <span className="text-gray-700 font-medium">{crumb.label}</span>
              ) : (
                <Link to={crumb.path} className="hover:text-gray-700 transition-colors">
                  {crumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
