import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Auth.css'

const GORILLA_IMG = 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&q=80'

function AuthLayout({ children, onBack }) {
  return (
    <div className="auth-page">
      <div className="auth-image">
        <img src={GORILLA_IMG} alt="ikaze" />
        <button className="auth-back" onClick={onBack}>‹</button>
      </div>
      <div className="auth-card">{children}</div>
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

function Login({ onForgot, onSignup }) {
  const [showPass, setShowPass] = useState(false)
  const navigate = useNavigate()

  return (
    <div className="auth-form">
      <h2>Welcome back</h2>
      <p className="auth-sub">Sign in your account</p>
      <div className="form-group">
        <label>Username*</label>
        <input type="text" placeholder="Full Username" />
      </div>
      <div className="form-group">
        <label>Password*</label>
        <div className="input-with-icon">
          <input type={showPass ? 'text' : 'password'} placeholder="Password" />
          <button className="eye-btn" onClick={() => setShowPass(!showPass)}>
            {showPass ? '🙈' : '👁'}
          </button>
        </div>
      </div>
      <div className="form-row">
        <label className="remember-me">
          <input type="checkbox" /> Remember me
        </label>
        <button className="forgot-link" onClick={onForgot}>Forgot password?</button>
      </div>
      <button className="btn-primary" onClick={() => navigate('/')}>Login</button>
      <p className="auth-switch">
        Don't have an account? <button onClick={onSignup}>Sign up</button>
      </p>
    </div>
  )
}

function SignUp({ onLogin }) {
  return (
    <div className="auth-form">
      <div className="form-group">
        <label>Full Name*</label>
        <input type="text" placeholder="Full name" />
      </div>
      <div className="form-group">
        <label>Phone number*</label>
        <input type="tel" placeholder="07xxxxxxxx" />
      </div>
      <div className="form-group">
        <label>Email (optional)</label>
        <input type="email" placeholder="Email" />
      </div>
      <div className="form-group">
        <label>Create password*</label>
        <input type="password" placeholder="Password" />
      </div>
      <div className="form-group">
        <label>Confirm password*</label>
        <input type="password" placeholder="confirm password" />
      </div>
      <button className="btn-primary">Sign Up</button>
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
  const [step, setStep] = useState('account')

  const handleBack = () => {
    if (step === 'account') navigate('/')
    else if (step === 'login' || step === 'signup') setStep('account')
    else if (step === 'forgot') setStep('login')
    else if (step === 'otp') setStep('forgot')
    else if (step === 'newpass') setStep('otp')
  }

  return (
    <AuthLayout onBack={handleBack}>
      {step === 'account' && <AccountType onSelect={() => setStep('login')} />}
      {step === 'login' && <Login onForgot={() => setStep('forgot')} onSignup={() => setStep('signup')} />}
      {step === 'signup' && <SignUp onLogin={() => setStep('login')} />}
      {step === 'forgot' && <ForgotPassword onNext={() => setStep('otp')} />}
      {step === 'otp' && <OTPVerify onNext={() => setStep('newpass')} />}
      {step === 'newpass' && <CreatePassword />}
    </AuthLayout>
  )
}