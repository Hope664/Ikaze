import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import VendorDetail from './pages/VendorDetail'
import Discover from './pages/Discover'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vendor/:id" element={<VendorDetail />} />
      <Route path="/discover" element={<Discover />} />
    </Routes>
  )
}

export default App