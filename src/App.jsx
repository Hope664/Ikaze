import Navbar from './components/Navbar'
import Hero from './components/Hero'
import QuizBanner from './components/QuizBanner'
import CategoryTabs from './components/CategoryTabs'
import PopularCategories from './components/PopularCategories'
import ServiceSection from './components/ServiceSection'
import NotFinding from './components/NotFinding'
import HowItWorks from './components/HowItWorks'
import TrustBadges from './components/TrustBadges'
import Footer from './components/Footer'
import VendorDetail from './pages/VendorDetail'

function App() {
  const isVendorPage = window.location.pathname.startsWith('/vendor/')

  if (isVendorPage) return <VendorDetail />

  return (
    <div>
      <Navbar />
      <Hero />
      <QuizBanner />
      <CategoryTabs />
      <PopularCategories />
      <ServiceSection title="Top rated accommodations" endpoint="/api/vendors?category=accommodation&limit=4" />
      <ServiceSection title="Top rated driving companies" endpoint="/api/vendors?category=transport&limit=4" />
      <ServiceSection title="Top rated restaurants" endpoint="/api/vendors?category=restaurant&limit=4" />
      <ServiceSection title="Top rated travelling places" endpoint="/api/vendors?category=tourism&limit=4" />
      <NotFinding />
      <HowItWorks />
      <TrustBadges />
      <Footer />
    </div>
  )
}

export default App