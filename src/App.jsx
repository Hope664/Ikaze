import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Quiz from './pages/user/Quiz'
import Discover from './pages/user/Discover'
import VendorDetail from './pages/user/VendorDetail'
import Categories from './pages/user/Categories'
import HowItWorks from './pages/user/HowItWorks'
import AIAssistant from './pages/user/AIAssistant'
import UserDashboard from './pages/user/UserDashboard'
import MyBookings from './pages/user/MyBookings'
import Booking from './pages/user/Booking'
import BookingConfirmed from './pages/user/BookingConfirmed'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <Routes>
      {/* ===== PUBLIC - everyone ===== */}
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/discover" element={<Discover />} />
      <Route path="/vendor/:id" element={<VendorDetail />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/ai-assistant" element={<AIAssistant />} />

      {/* ===== USER - must be logged in ===== */}
      <Route path="/user/dashboard" element={
        <ProtectedRoute><UserDashboard /></ProtectedRoute>
      } />
      <Route path="/user/bookings" element={
        <ProtectedRoute><MyBookings /></ProtectedRoute>
      } />
      <Route path="/user/booking/:id" element={
        <ProtectedRoute><Booking /></ProtectedRoute>
      } />
      <Route path="/user/booking-confirmed" element={
        <ProtectedRoute><BookingConfirmed /></ProtectedRoute>
      } />

      {/* ===== VENDOR - coming soon ===== */}
      {/* <Route path="/vendor/dashboard" element={<ProtectedRoute><VendorDashboard /></ProtectedRoute>} /> */}

      {/* ===== ADMIN - coming soon ===== */}
      {/* <Route path="/admin/dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} /> */}
    </Routes>
  )
}

export default App