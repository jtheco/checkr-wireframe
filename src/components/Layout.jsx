import Nav from './Nav'
import Footer from './Footer'
import Breadcrumb from './Breadcrumb'

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <Breadcrumb />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}
