import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './EditProfile.css'

const ATMOSPHERE_OPTIONS = ['Quiet & Minimalist', 'Elite & Sophisticated', 'Lively & Social', 'Family Friendly']
const SUGGESTED_INTERESTS = ['Hiking', 'Coffee Culture', 'Art Galleries', 'Eco-Tourism', 'Nightlife']

export default function EditProfile() {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('ikaze_user') || '{}')

  const [form, setForm] = useState({
    fullName: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    location: user?.location || '',
    atmosphere: user?.atmosphere || 'Elite & Sophisticated',
  })
  const [interests, setInterests] = useState(user?.interests || ['Hiking', 'Coffee Culture', 'Eco-Tourism'])

  const toggleInterest = (interest) => {
    setInterests(prev =>
      prev.includes(interest) ? prev.filter(i => i !== interest) : [...prev, interest]
    )
  }

  const handleSave = () => {
    localStorage.setItem('ikaze_user', JSON.stringify({
      ...user,
      name: form.fullName,
      email: form.email,
      phone: form.phone,
      location: form.location,
      atmosphere: form.atmosphere,
      interests,
    }))
    navigate('/user/profile')
  }

  return (
    <div className="edit-profile-page">
      <div className="edit-topbar">
        <button className="cancel-btn" onClick={() => navigate('/user/profile')}>Cancel</button>
        <h2>Edit Profile</h2>
        <button className="save-btn" onClick={handleSave}>Save</button>
      </div>

      <div className="edit-container">
        <div className="edit-avatar-section">
          <div className="edit-avatar">👤</div>
          <button className="change-photo-btn">📷</button>
          <p className="change-photo-label">CHANGE PHOTO</p>
        </div>

        <div className="edit-form-group">
          <label>Full Name</label>
          <input
            type="text"
            value={form.fullName}
            onChange={e => setForm({ ...form, fullName: e.target.value })}
          />
        </div>

        <div className="edit-form-group">
          <label>Email Address</label>
          <input
            type="email"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
          />
        </div>

        <div className="edit-form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            value={form.phone}
            onChange={e => setForm({ ...form, phone: e.target.value })}
          />
        </div>

        <div className="edit-form-group">
          <label>Location</label>
          <div className="location-input-wrap">
            <input
              type="text"
              value={form.location}
              onChange={e => setForm({ ...form, location: e.target.value })}
            />
            <span>📍</span>
          </div>
        </div>

        {/* Personal Preferences */}
        <div className="prefs-card">
          <div className="prefs-title">
            <span>⚙️</span>
            <h3>Personal Preferences</h3>
          </div>

          <p className="prefs-label">Interests & Hobbies</p>
          <div className="interest-pills">
            {SUGGESTED_INTERESTS.map(interest => (
              <button
                key={interest}
                className={interests.includes(interest) ? 'interest-pill active' : 'interest-pill'}
                onClick={() => toggleInterest(interest)}
              >
                {interest}
              </button>
            ))}
            <button className="add-new-pill">+ Add New</button>
          </div>

          <p className="prefs-label">Preferred Atmosphere</p>
          <select
            value={form.atmosphere}
            onChange={e => setForm({ ...form, atmosphere: e.target.value })}
            className="atmosphere-select"
          >
            {ATMOSPHERE_OPTIONS.map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          <p className="prefs-hint">This helps 'Ikaze' curate your personalized discovery feed.</p>
        </div>

        <button className="deactivate-btn">🗑 Deactivate Account</button>
      </div>
    </div>
  )
}