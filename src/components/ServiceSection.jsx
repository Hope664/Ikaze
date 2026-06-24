import { useEffect, useState } from 'react'
import VendorCard from './VendorCard'
import './ServiceSection.css'

function ServiceSection({ title, endpoint }) {
  const [vendors, setVendors] = useState([])
  const [loading, setLoading] = useState(true)

  const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3001'

  useEffect(() => {
    fetch(`${API_BASE}${endpoint}`)
      .then(res => res.json())
      .then(data => {
        setVendors(Array.isArray(data) ? data : data.data ?? [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [endpoint])

  return (
    <section className="service-section">
      <div className="service-section-header">
        <h2>{title}</h2>
        <a href="/discover">See all →</a>
      </div>
      {loading ? (
        <div className="service-grid">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="vendor-skeleton" />
          ))}
        </div>
      ) : vendors.length > 0 ? (
        <div className="service-grid">
          {vendors.map(v => <VendorCard key={v.id} vendor={v} />)}
        </div>
      ) : (
        <p className="no-vendors">No vendors available yet.</p>
      )}
    </section>
  )
}

export default ServiceSection