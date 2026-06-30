import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import './MyBookings.css'

const BOOKINGS = [
  {
    id: '1',
    status: 'confirmed',
    name: 'Gorilla Trekking Adventure',
    location: 'Musanze, Northern Province',
    price: '$1,500',
    checkIn: 'Oct 24, 2026',
    guests: '2 Adults',
    imageUrl: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=400&q=80',
  },
  {
    id: '2',
    status: 'pending',
    name: 'Luxury City Suite',
    location: 'Kigali, Nyarugenge',
    price: '$320',
    checkIn: 'Nov 02, 2026',
    awaitingHost: true,
    imageUrl: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=400&q=80',
  },
]

const TABS = ['Upcoming Bookings', 'Past Visits', 'Saved Places']

export default function MyBookings() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('Upcoming Bookings')
  const [search, setSearch] = useState('')

  return (
    <div className="mb-page">
      <Navbar />

      <div className="mb-header">
        <div className="mb-header-left">
          <h1>My Bookings & Activity</h1>
          <div className="mb-search">
            <span>🔍</span>
            <input
              type="text"
              placeholder="Search Kigali..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="verified-traveler-badge">
          <span>✅</span>
          <div>
            <p className="vt-title">Verified Traveler</p>
            <p className="vt-sub">MEMBER SINCE 2023</p>
          </div>
        </div>
      </div>

      <p className="mb-subtitle">Manage your upcoming journeys, revisit your favorite spots in Rwanda, and explore your past adventures in one place.</p>

      <div className="mb-tabs">
        {TABS.map(tab => (
          <button
            key={tab}
            className={activeTab === tab ? 'mb-tab active' : 'mb-tab'}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mb-content">
        {activeTab === 'Upcoming Bookings' && (
          <div className="mb-bookings-grid">
            {BOOKINGS.map(b => (
              <div key={b.id} className="mb-booking-card">
                <div className="mb-booking-image">
                  <img src={b.imageUrl} alt={b.name} />
                  <span className={`mb-status ${b.status}`}>
                    {b.status === 'confirmed' ? '✅ CONFIRMED' : '🕐 PENDING'}
                  </span>
                </div>
                <div className="mb-booking-body">
                  <div className="mb-booking-top">
                    <div>
                      <h3>{b.name}</h3>
                      <p className="mb-location">📍 {b.location}</p>
                    </div>
                    <span className="mb-price">{b.price}</span>
                  </div>
                  <div className="mb-booking-info">
                    <div>
                      <p className="mb-info-label">CHECK-IN</p>
                      <p className="mb-info-value">{b.checkIn}</p>
                    </div>
                    {b.guests && (
                      <div>
                        <p className="mb-info-label">GUESTS</p>
                        <p className="mb-info-value">{b.guests}</p>
                      </div>
                    )}
                    {b.awaitingHost && (
                      <div>
                        <p className="mb-info-label">STATUS</p>
                        <p className="mb-info-value awaiting">Awaiting Host</p>
                      </div>
                    )}
                  </div>
                  <div className="mb-booking-actions">
                    {b.status === 'confirmed' ? (
                      <>
                        <button className="mb-link-btn" onClick={() => navigate(`/vendor/${b.id}`)}>View Details ›</button>
                        <button className="mb-primary-btn">Get Tickets</button>
                      </>
                    ) : (
                      <>
                        <button className="mb-link-btn">Message Host ✉️</button>
                        <button className="mb-secondary-btn">Manage Booking</button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'Past Visits' && (
          <p className="mb-empty">No past visits yet. Start exploring Rwanda today!</p>
        )}

        {activeTab === 'Saved Places' && (
          <p className="mb-empty">You haven't saved any places yet.</p>
        )}
      </div>
    </div>
  )
}