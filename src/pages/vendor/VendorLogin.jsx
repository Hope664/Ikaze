import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './VendorLogin.css'

const NATURE_IMG = 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80'

export default function VendorLogin() {
  const navigate = useNavigate()
  const [showPass, setShowPass] = useState(false)
  const [form, setForm] = useState({ businessName: '', managerName: '', password: '' })
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.businessName) e.businessName = 'Business name is required'
    if (!form.managerName) e.managerName = 'Manager name is required'
    if (!form.password || form.password.length < 6) e.password = 'Min 6 characters'
    return e
  }

  const handleLogin = () => {
    const e = validate()
    if (Object.keys(e).length > 0) { setErrors(e); return }
    localStorage.setItem('ikaze_user', JSON.stringify({
      name: form.managerName,
      businessName: form.businessName,
      role: 'vendor'
    }))
    navigate('/vendor/dashboard')
  }

  return (
    <div className="vl-page">
      <div className="vl-image">
        <img src={NATURE_IMG} alt="nature" />
        <button className="vl-back" onClick={() => navigate('/')}>‹</button>
      </div>
      <div className="vl-card">
        <div className="vl-icon">🛡️</div>
        <h2>Vendor Login</h2>
        <p className="vl-sub">🔒 Secure Vendor Access</p>

        <div className="vl-field">
          <label>BUSINESS NAME *</label>
          <input
            type="text"
            placeholder="Enter your registered business name"
            value={form.businessName}
            onChange={e => { setForm({ ...form, businessName: e.target.value }); setErrors({ ...errors, businessName: '' }) }}
            className={errors.businessName ? 'vl-error' : ''}
          />
          {errors.businessName && <span className="vl-err">{errors.businessName}</span>}
        </div>

        <div className="vl-field">
          <label>MANAGER'S NAME *</label>
          <input
            type="text"
            placeholder="Primary contact name"
            value={form.managerName}
            onChange={e => { setForm({ ...form, managerName: e.target.value }); setErrors({ ...errors, managerName: '' }) }}
            className={errors.managerName ? 'vl-error' : ''}
          />
          {errors.managerName && <span className="vl-err">{errors.managerName}</span>}
        </div>

        <div className="vl-field">
          <div className="vl-pass-header">
            <label>PASSWORD *</label>
            <button className="vl-forgot" onClick={() => navigate('/auth?step=forgot')}>Forgot Password?</button>
          </div>
          <div className="vl-pass-wrap">
            <input
              type={showPass ? 'text' : 'password'}
              placeholder="••••••••"
              value={form.password}
              onChange={e => { setForm({ ...form, password: e.target.value }); setErrors({ ...errors, password: '' }) }}
              className={errors.password ? 'vl-error' : ''}
            />
            <button className="vl-eye" onClick={() => setShowPass(!showPass)}>
              {showPass ? '🙈' : '👁'}
            </button>
          </div>
          {errors.password && <span className="vl-err">{errors.password}</span>}
        </div>

        <button className="vl-login-btn" onClick={handleLogin}>Login →</button>

        <p className="vl-switch">
          Don't have an account? <span onClick={() => navigate('/vendor/onboarding')}>Register business</span>
        </p>
      </div>
    </div>
  )
}