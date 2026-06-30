import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import './Profile.css'

export default function Profile() {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('ikaze_user') || '{}')

  const handleLogout = () => {
    localStorage.removeItem('ikaze_user')
    navigate('/')
  }

  return (
    <div className="profile-page">
      <Navbar />

      <div className="profile-container">
        <div className="profile-topbar">
          <button className="profile-back" onClick={() => navigate(-1)}>← Profile</button>
          <div className="profile-topbar-right">
            <span className="profile-gear">⚙️</span>
            <div className="profile-mini-avatar">👤</div>
          </div>
        </div>

        {/* Avatar + name */}
        <div className="profile-hero">
          <div className="profile-avatar-wrap">
            <div className="profile-avatar">👤</div>
            <button className="avatar-edit-btn" onClick={() => navigate('/user/profile/edit')}>✏️</button>
          </div>
          <h2>{user?.name || 'Guest User'}</h2>
          <p className="profile-location">📍 {user?.location || 'Kigali, Rwanda'}</p>
          <button className="edit-profile-btn" onClick={() => navigate('/user/profile/edit')}>Edit Profile</button>
        </div>

        {/* Personal Information */}
        <div className="profile-card">
          <div className="card-title-row">
            <span className="card-icon">👤</span>
            <h3>Personal Information</h3>
          </div>
          <div className="info-row">
            <p className="info-label">EMAIL</p>
            <p className="info-value">{user?.email || 'Not provided'}</p>
          </div>
          <div className="info-row">
            <p className="info-label">PHONE NUMBER</p>
            <p className="info-value">{user?.phone || 'Not provided'}</p>
          </div>
        </div>

        {/* Discovery Preferences */}
        <div className="profile-card">
          <div className="card-title-row">
            <span className="card-icon">🧭</span>
            <h3>Discovery Preferences</h3>
          </div>
          <div className="info-row">
            <p className="info-label">INTERESTS</p>
            <div className="pill-list">
              {(user?.interests || ['Coffee Culture', 'Nature Safaris', 'Artisanal Crafts']).map((tag, i) => (
                <span key={i} className="pref-pill">{tag}</span>
              ))}
            </div>
          </div>
          <div className="info-row">
            <p className="info-label">ATMOSPHERE</p>
            <p className="info-value">{user?.atmosphere || 'Quiet & Minimalist'}</p>
          </div>
        </div>

        {/* Account Settings */}
        <div className="profile-card">
          <div className="card-title-row">
            <span className="card-icon">⚙️</span>
            <h3>Account Settings</h3>
          </div>
          <button className="settings-item">
            <span>🔒 Change Password</span>
            <span>›</span>
          </button>
          <button className="settings-item">
            <span>🔔 Notifications</span>
            <span>›</span>
          </button>
          <button className="settings-item">
            <span>🛡️ Privacy</span>
            <span>›</span>
          </button>
        </div>

        {/* Support */}
        <div className="profile-card">
          <div className="card-title-row">
            <span className="card-icon">❓</span>
            <h3>Support</h3>
          </div>
          <button className="settings-item">
            <span>❓ Help Center</span>
            <span>›</span>
          </button>
          <button className="settings-item">
            <span>📄 Terms of Service</span>
            <span>›</span>
          </button>
        </div>

        <button className="logout-link" onClick={handleLogout}>⏏ Log Out</button>
      </div>
    </div>
  )
}