import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './Auth.css'

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function isValidPhone(phone) {
  return /^(\+?250|0)7[2389]\d{7}$/.test(phone.replace(/\s/g, ''))
}

const GORILLA_IMG = 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&q=80'

function AuthLayout({ children, onBack }) {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-image">
          <img src={GORILLA_IMG} alt="ikaze" />
          <button className="auth-back" onClick={onBack}>‹</button>
        </div>
        <div className="auth-body">
          {children}
        </div>
      </div>
    </div>
  )
}

function AccountType({ onSelect }) {
  return (
    <div className="auth-account-type">
      <p className="auth-brand">IKAZE</p>
      <p className="auth-tagline">Explore. Connect. Experience</p>
      <p className="auth-choose">choose your account to get started</p>
      <button className="btn-account-user" onClick={() => onSelect('user')}>
        I am a user/client
      </button>
      <button className="btn-account-vendor" onClick={() => onSelect('vendor')}>
        I am a vendor
      </button>
    </div>
  )
}

// ✅ role is now properly passed as a prop
function Login({ onForgot, onSignup, role = 'user' }) {
  const [showPass, setShowPass] = useState(false)
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()
  const location = useLocation()

  const validate = () => {
    const newErrors = {}
    if (!identifier) {
      newErrors.identifier = 'Email or phone is required'
    } else if (!isValidEmail(identifier) && !isValidPhone(identifier)) {
      newErrors.identifier = 'Enter a valid email or Rwandan phone number (e.g. 0781234567)'
    }
    if (!password) {
      newErrors.password = 'Password is required'
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }
    return newErrors
  }

  const handleLogin = () => {
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    localStorage.setItem('ikaze_user', JSON.stringify({
      name: 'Umurerwa Jane',
      email: identifier,
      role: role
    }))
    const from = location.state?.from?.pathname || (role === 'vendor' ? '/vendor/dashboard' : '/user/dashboard')
    navigate(from, { replace: true })
  }

  return (
    <div className="auth-form">
      <h2>Welcome back</h2>
      <p className="auth-sub">Sign in your account</p>
      <div className="form-group">
        <label>Email or Phone number*</label>
        <input
          type="text"
          placeholder="email@example.com or 0781234567"
          value={identifier}
          onChange={e => {
            setIdentifier(e.target.value)
            setErrors({ ...errors, identifier: '' })
          }}
          className={errors.identifier ? 'input-error' : ''}
        />
        {errors.identifier && <span className="error-msg">{errors.identifier}</span>}
      </div>
      <div className="form-group">
        <label>Password*</label>
        <div className="input-with-icon">
          <input
            type={showPass ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={e => {
              setPassword(e.target.value)
              setErrors({ ...errors, password: '' })
            }}
            className={errors.password ? 'input-error' : ''}
          />
          <button className="eye-btn" onClick={() => setShowPass(!showPass)}>
            {showPass ? '🙈' : '👁'}
          </button>
        </div>
        {errors.password && <span className="error-msg">{errors.password}</span>}
      </div>
      <div className="form-row">
        <label className="remember-me">
          <input type="checkbox" /> Remember me
        </label>
        <button className="forgot-link" onClick={onForgot}>Forgot password?</button>
      </div>
      <button className="btn-primary" onClick={handleLogin}>Login</button>
      <p className="auth-switch">
        Don't have an account? <button onClick={onSignup}>Sign up</button>
      </p>
    </div>
  )
}

function SignUp({ onLogin, role = 'user' }) {
  const [showPass, setShowPass] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()

  const update = (field, value) => {
    setForm({ ...form, [field]: value })
    setErrors({ ...errors, [field]: '' })
  }

  const validate = () => {
    const e = {}
    if (!form.fullName.trim() || form.fullName.trim().length < 3)
      e.fullName = 'Full name must be at least 3 characters'
    if (!form.phone)
      e.phone = 'Phone number is required'
    else if (!isValidPhone(form.phone))
      e.phone = 'Enter a valid Rwandan phone number (e.g. 0781234567)'
    if (form.email && !isValidEmail(form.email))
      e.email = 'Enter a valid email address'
    if (!form.password)
      e.password = 'Password is required'
    else if (form.password.length < 8)
      e.password = 'Password must be at least 8 characters'
    else if (!/\d/.test(form.password))
      e.password = 'Password must contain at least 1 number'
    else if (!/[^a-zA-Z0-9]/.test(form.password))
      e.password = 'Password must contain at least 1 special character'
    if (!form.confirmPassword)
      e.confirmPassword = 'Please confirm your password'
    else if (form.password !== form.confirmPassword)
      e.confirmPassword = 'Passwords do not match'
    return e
  }

  const handleSignUp = () => {
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    localStorage.setItem('ikaze_user', JSON.stringify({
      name: form.fullName,
      phone: form.phone,
      email: form.email,
      role: role
    }))
    navigate(role === 'vendor' ? '/vendor/dashboard' : '/user/dashboard')
  }

  return (
    <div className="auth-form">
      <h2>{role === 'vendor' ? 'Register your business' : 'Create your account'}</h2>
      <div className="form-group">
        <label>{role === 'vendor' ? 'Business / Owner Name*' : 'Full Name*'}</label>
        <input
          type="text"
          placeholder="Full name"
          value={form.fullName}
          onChange={e => update('fullName', e.target.value)}
          className={errors.fullName ? 'input-error' : ''}
        />
        {errors.fullName && <span className="error-msg">{errors.fullName}</span>}
      </div>
      <div className="form-group">
        <label>Phone number*</label>
        <input
          type="tel"
          placeholder="07xxxxxxxx"
          value={form.phone}
          onChange={e => update('phone', e.target.value)}
          className={errors.phone ? 'input-error' : ''}
        />
        {errors.phone && <span className="error-msg">{errors.phone}</span>}
      </div>
      <div className="form-group">
        <label>Email (optional)</label>
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={e => update('email', e.target.value)}
          className={errors.email ? 'input-error' : ''}
        />
        {errors.email && <span className="error-msg">{errors.email}</span>}
      </div>
      <div className="form-group">
        <label>Create password*</label>
        <div className="input-with-icon">
          <input
            type={showPass ? 'text' : 'password'}
            placeholder="Password"
            value={form.password}
            onChange={e => update('password', e.target.value)}
            className={errors.password ? 'input-error' : ''}
          />
          <button className="eye-btn" onClick={() => setShowPass(!showPass)}>
            {showPass ? '🙈' : '👁'}
          </button>
        </div>
        {errors.password && <span className="error-msg">{errors.password}</span>}
      </div>
      <div className="form-group">
        <label>Confirm password*</label>
        <div className="input-with-icon">
          <input
            type={showConfirm ? 'text' : 'password'}
            placeholder="Confirm password"
            value={form.confirmPassword}
            onChange={e => update('confirmPassword', e.target.value)}
            className={errors.confirmPassword ? 'input-error' : ''}
          />
          <button className="eye-btn" onClick={() => setShowConfirm(!showConfirm)}>
            {showConfirm ? '🙈' : '👁'}
          </button>
        </div>
        {errors.confirmPassword && <span className="error-msg">{errors.confirmPassword}</span>}
      </div>
      <button className="btn-primary" onClick={handleSignUp}>
        {role === 'vendor' ? 'Register Business' : 'Sign Up'}
      </button>
      <p className="auth-switch">
        Already have an account? <button onClick={onLogin}>Login</button>
      </p>
    </div>
  )
}

function ForgotPassword({ onNext }) {
  return (
    <div className="auth-form">
      <div className="auth-icon-circle">🔐</div>
      <h2>Forgot Password?</h2>
      <p className="auth-sub">Enter your phone number to get a code to reset your password.</p>
      <div className="form-group">
        <label>Phone number*</label>
        <input type="tel" placeholder="Enter phone number" />
      </div>
      <button className="btn-primary" onClick={onNext}>request verification code</button>
      <p className="auth-switch"><button onClick={onNext}>Back to Signin</button></p>
    </div>
  )
}

function OTPVerify({ onNext }) {
  const [otp, setOtp] = useState(['', '', '', '', '', ''])

  const handleChange = (val, i) => {
    const next = [...otp]
    next[i] = val.slice(-1)
    setOtp(next)
    if (val && i < 5) {
      document.getElementById(`otp-${i + 1}`)?.focus()
    }
  }

  return (
    <div className="auth-form">
      <div className="auth-icon-circle">✉️</div>
      <h2>check your message</h2>
      <p className="auth-sub">
        We've sent a 6-digit verification code to +250780000000.
        <strong> please enter it to proceed</strong>
      </p>
      <div className="otp-boxes">
        {otp.map((val, i) => (
          <input
            key={i}
            id={`otp-${i}`}
            type="text"
            maxLength={1}
            value={val}
            onChange={e => handleChange(e.target.value, i)}
            className={`otp-box ${i === 0 ? 'otp-active' : ''}`}
          />
        ))}
      </div>
      <button className="btn-primary" onClick={onNext}>Verify Code</button>
      <p className="auth-switch">
        Didn't receive message, <button className="resend-link">Resend code</button>
      </p>
    </div>
  )
}

function CreatePassword() {
  const [showNew, setShowNew] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const checks = {
    length: password.length >= 8,
    number: /\d/.test(password),
    special: /[^a-zA-Z0-9]/.test(password),
  }

  return (
    <div className="auth-form">
      <div className="auth-icon-circle">🔐</div>
      <h2>Create New Password</h2>
      <p className="auth-sub">Your new password must be different from previously used passwords.</p>
      <div className="form-group">
        <label>New Password*</label>
        <div className="input-with-icon">
          <input
            type={showNew ? 'text' : 'password'}
            placeholder="••••••••"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button className="eye-btn" onClick={() => setShowNew(!showNew)}>
            {showNew ? '🙈' : '👁'}
          </button>
        </div>
      </div>
      <div className="form-group">
        <label>Confirm New Password*</label>
        <div className="input-with-icon">
          <input type={showConfirm ? 'text' : 'password'} placeholder="••••••••" />
          <button className="eye-btn" onClick={() => setShowConfirm(!showConfirm)}>
            {showConfirm ? '🙈' : '👁'}
          </button>
        </div>
      </div>
      <div className="password-requirements">
        <p><strong>Password Requirements:</strong></p>
        <p className={checks.length ? 'req met' : 'req'}>◯ 8+ characters</p>
        <p className={checks.number ? 'req met' : 'req'}>◯ At least 1 number</p>
        <p className={checks.special ? 'req met' : 'req'}>◯ At least 1 special character</p>
      </div>
      <button className="btn-primary" onClick={() => navigate('/')}>Update Password →</button>
    </div>
  )
}

export default function Auth() {
  const navigate = useNavigate()
  const params = new URLSearchParams(window.location.search)
  const urlRole = params.get('role')
  const initialStep = params.get('step') || (urlRole ? 'signup' : 'account')
  const [step, setStep] = useState(initialStep)
  const [role, setRole] = useState(urlRole || 'user')

  const handleBack = () => {
    if (step === 'account') navigate('/')
    else if (step === 'login' || step === 'signup') setStep('account')
    else if (step === 'forgot') setStep('login')
    else if (step === 'otp') setStep('forgot')
    else if (step === 'newpass') setStep('otp')
  }

  return (
    <AuthLayout onBack={handleBack}>
      {step === 'account' && (
        <AccountType onSelect={(type) => {
          setRole(type)
          setStep(type === 'vendor' ? 'signup' : 'login')
        }} />
      )}
      {step === 'login' && <Login onForgot={() => setStep('forgot')} onSignup={() => setStep('signup')} role={role} />}
      {step === 'signup' && <SignUp onLogin={() => setStep('login')} role={role} />}
      {step === 'forgot' && <ForgotPassword onNext={() => setStep('otp')} />}
      {step === 'otp' && <OTPVerify onNext={() => setStep('newpass')} />}
      {step === 'newpass' && <CreatePassword />}
    </AuthLayout>
  )
}