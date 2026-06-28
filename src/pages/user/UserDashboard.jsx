import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import './UserDashboard.css'

const RECENT = [
  { id: '1', name: 'The Retreat Kigali', location: 'Kiyovu, Kigali', imageUrl: 'https://images.unsplash.com/photo-1540541338-2a61b4caa6f1?w=400&q=80' },
  { id: '2', name: 'Heaven Restaurant', location: 'Central Kigali', imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80' },
  { id: '3', name: 'Nyungwe Lodge', location: 'Western Province', imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80' },
  { id: '4', name: 'Kigali Elite Rides', location: 'City-wide', imageUrl: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&q=80' },
]

export default function Dashboard() {
  const navigate = useNavigate()

  return (
    <div className="dashboard-page">
      <Navbar loggedIn={true} userName="Umurerwa Jane" />

      {/* Welcome hero */}
      <div className="dash-hero">
        <h1>Welcome back, Jane.</h1>
        <p>Ready for your next Rwandan adventure? We've updated your dashboard with new verified services based on your travel profile.</p>
        <div className="dash-hero-btns">
          <button className="dash-btn-primary" onClick={() => navigate('/quiz')}>Start AI Recommendation chat →</button>
          <button className="dash-btn-secondary" onClick={() => navigate('/bookings')}>View My Bookings</button>
        </div>
      </div>

      <div className="dashboard-content">
        {/* Recent Discoveries */}
        <section className="dash-section">
          <div className="dash-section-header">
            <div>
              <h2>Your Recent Discoveries</h2>
              <p>Based on the places you visited last week in Kigali.</p>
            </div>
            <a href="/discover" className="dash-view-all">View all ↗</a>
          </div>
          <div className="recent-grid">
            {RECENT.map(item => (
              <div key={item.id} className="recent-card" onClick={() => navigate(`/vendor/${item.id}`)}>
                <div className="recent-card-img">
                  <img src={item.imageUrl} alt={item.name} />
                  <span className="verified-tag">✅ VERIFIED</span>
                  <span className="top-rated-tag">⭐ TOP RATED</span>
                </div>
                <div className="recent-card-body">
                  <h4>{item.name}</h4>
                  <p>📍 {item.location}</p>
                  <button className="details-btn" onClick={() => navigate(`/vendor/${item.id}`)}>Details</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recommended for You */}
        <section className="dash-section">
          <h2>Recommended for You</h2>
          <p className="dash-sub">Personalized picks from our AI Assistant based on your profile.</p>

          <div className="recommended-grid">
            {/* Featured big card */}
            <div className="rec-featured">
              <img src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80" alt="Bisate" />
              <span className="verified-tag">✅ VERIFIED</span>
              <div className="rec-featured-body">
                <p className="editors-choice">⭐ EDITOR'S CHOICE</p>
                <h2>Bisate Lodge Adventure</h2>
                <p>Experience the ultimate luxury volcano trekking journey. Rated as the #1 sustainable tourism destination in Musanze for 2025.</p>
                <div className="rec-featured-footer">
                  <div>
                    <p className="from-label">From RWF</p>
                    <p className="from-price">450k/night</p>
                  </div>
                  <button className="book-now-btn" onClick={() => navigate('/booking/1')}>Book Now →</button>
                </div>
              </div>
            </div>

            {/* Inka Steakhouse */}
            <div className="rec-card">
              <div className="rec-card-icon">🍽️</div>
              <h3>Inka Steakhouse</h3>
              <p>Best rated steak in Kigali for two years running. Recommended for your anniversary next month.</p>
              <div className="rec-avatars">
                <span className="avatar">👤</span>
                <span className="avatar">👤</span>
                <span className="avatar-count">+12 people went here</span>
              </div>
              <button className="reserve-btn">Reserve Table</button>
            </div>

            {/* AI Tip */}
            <div className="rec-ai-tip">
              <p className="ai-tip-label">AI Assistant Tip</p>
              <p>"Jane, based on your love for nature, there's a new Gishwati-Mukura tour opening next week with certified local guides."</p>
              <a href="#" className="remind-me">Remind Me ☆</a>
            </div>

            {/* Inzora */}
            <div className="rec-small-card">
              <img src="https://images.unsplash.com/photo-1545389336-cf090694435e?w=400&q=80" alt="Inzora" />
              <div className="rec-small-body">
                <h4>Inzora Rooftop Yoga</h4>
                <p>Wellness & Mindfulness</p>
                <span className="trusted-badge">✅ TRUSTED VENDOR</span>
              </div>
            </div>

            {/* Question Coffee */}
            <div className="rec-small-card">
              <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80" alt="Coffee" />
              <div className="rec-small-body">
                <h4>Question Coffee</h4>
                <p>Café & Local Experience</p>
                <span className="trusted-badge">✅ TRUSTED VENDOR</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}