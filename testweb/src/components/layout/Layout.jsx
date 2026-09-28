import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import PageLoader from './PageLoader'
import './PageLoader.css'

export default function Layout() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <ScrollToTop />
      <Navbar />
      <main id="main-content">
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
