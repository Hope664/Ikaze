import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import VendorDetail from './pages/VendorDetail'
import Discover from './pages/Discover'
import Auth from './pages/Auth'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vendor/:id" element={<VendorDetail />} />
      <Route path="/discover" element={<Discover />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  )
}

export default App