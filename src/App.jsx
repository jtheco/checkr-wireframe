import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import CriminalRecords from './pages/products/CriminalRecords'
import IdentityChecks from './pages/products/IdentityChecks'
import DriverChecks from './pages/products/DriverChecks'
import Caregiving from './pages/industries/Caregiving'
import FinancialInstitutions from './pages/industries/FinancialInstitutions'
import OnlineDating from './pages/industries/OnlineDating'
import Ridesharing from './pages/industries/Ridesharing'
import ShortTermRentals from './pages/industries/ShortTermRentals'
import VehicleRental from './pages/industries/VehicleRental'
import VisitorManagement from './pages/industries/VisitorManagement'
import CustomerStories from './pages/resources/CustomerStories'
import CustomerStoryDetail from './pages/resources/CustomerStoryDetail'
import Blog from './pages/Blog'
import BlogArticle from './pages/BlogArticle'
import GetADemo from './pages/GetADemo'
import DemoSuccess from './pages/DemoSuccess'
import TesseraPrivacy from './pages/legal/TesseraPrivacy'
import InflectionPrivacy from './pages/legal/InflectionPrivacy'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Products */}
        <Route path="/products/criminal-and-public-records-checks" element={<CriminalRecords />} />
        <Route path="/products/identity-checks" element={<IdentityChecks />} />
        <Route path="/products/driver-checks" element={<DriverChecks />} />

        {/* Industries */}
        <Route path="/industries/caregiving" element={<Caregiving />} />
        <Route path="/industries/financial-institutions" element={<FinancialInstitutions />} />
        <Route path="/industries/online-dating" element={<OnlineDating />} />
        <Route path="/industries/ridesharing" element={<Ridesharing />} />
        <Route path="/industries/short-term-rentals" element={<ShortTermRentals />} />
        <Route path="/industries/vehicle-rental-and-sharing" element={<VehicleRental />} />
        <Route path="/industries/visitor-management-systems" element={<VisitorManagement />} />

        {/* Resources */}
        <Route path="/resources/customer-stories" element={<CustomerStories />} />
        <Route path="/resources/customer-stories/:slug" element={<CustomerStoryDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogArticle />} />

        {/* Get a Demo */}
        <Route path="/get-a-demo" element={<GetADemo />} />
        <Route path="/get-a-demo/success" element={<DemoSuccess />} />

        {/* Legal */}
        <Route path="/legal/tessera-privacy-policy" element={<TesseraPrivacy />} />
        <Route path="/legal/inflection-privacy-policy" element={<InflectionPrivacy />} />
      </Routes>
    </BrowserRouter>
  )
}
