import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './VendorOnboarding.css'

const STEPS = [
  { id: 1, label: 'Business Info' },
  { id: 2, label: 'Verification Docs' },
  { id: 3, label: 'Profile Media' },
  { id: 4, label: 'Review & Submit' },
  { id: 5, label: 'How it works' },
]

const CATEGORIES = [
  'Accommodation', 'Food & Dining', 'Tourism', 'Transportation',
  'Tech & Repair', 'Wellness', 'Other'
]

// ── Step 1 ──────────────────────────────────────────────
function StepBusinessInfo({ onNext }) {
  const [form, setForm] = useState({
    businessName: '', category: '', address: '',
    fullName: '', email: '', phone: '',
    password: '', confirmPassword: ''
  })
  const [fileName, setFileName] = useState(null)
const fileRef = useRef(null)

  const update = (field, val) => setForm({ ...form, [field]: val })

  const validate = () => {
    const e = {}
    if (!form.businessName) e.businessName = 'Required'
    if (!form.category) e.category = 'Required'
    if (!form.address) e.address = 'Required'
    if (!form.fullName) e.fullName = 'Required'
    if (!form.email) e.email = 'Required'
    if (!form.phone) e.phone = 'Required'
    if (!form.password || form.password.length < 8) e.password = 'Min 8 characters'
    if (form.password !== form.confirmPassword) e.confirmPassword = 'Passwords do not match'
    return e
  }

  const handleNext = () => {
    const e = validate()
    if (Object.keys(e).length > 0) { setErrors(e); return }
    onNext(form)
  }

  return (
    <div className="step-content">
      <h1>Onboarding & Registration</h1>
      <p className="step-desc">Start your journey as a verified Ikaze partner. This information will help us categorize your services correctly for local and international visitors.</p>

      {/* Business Details */}
      <div className="onb-card">
        <h3>Business Details</h3>
        <div className="form-grid-2">
          <div className="onb-field">
            <label>BUSINESS NAME *</label>
            <input placeholder="e.g. Kigali Heights Cafe" value={form.businessName}
              onChange={e => update('businessName', e.target.value)}
              className={errors.businessName ? 'field-error' : ''} />
            {errors.businessName && <span className="err">{errors.businessName}</span>}
          </div>
          <div className="onb-field">
            <label>CATEGORY *</label>
            <select value={form.category} onChange={e => update('category', e.target.value)}
              className={errors.category ? 'field-error' : ''}>
              <option value="">Select Category</option>
              {CATEGORIES.map(c => <option key={c}>{c}</option>)}
            </select>
            {errors.category && <span className="err">{errors.category}</span>}
          </div>
        </div>
        <div className="onb-field">
          <label>PHYSICAL ADDRESS *</label>
          <div className="input-icon-wrap">
            <span>📍</span>
            <input placeholder="Plot 234, KG 7 Ave, Kigali, Rwanda" value={form.address}
              onChange={e => update('address', e.target.value)}
              className={errors.address ? 'field-error' : ''} />
          </div>
          {errors.address && <span className="err">{errors.address}</span>}
        </div>
      </div>

      {/* Personal Details */}
      <div className="onb-card">
        <h3>Personal Details (Manager Contact)</h3>
        <div className="form-grid-2">
          <div className="onb-field">
            <label>FULL NAME *</label>
            <input placeholder="e.g. John Doe" value={form.fullName}
              onChange={e => update('fullName', e.target.value)}
              className={errors.fullName ? 'field-error' : ''} />
            {errors.fullName && <span className="err">{errors.fullName}</span>}
          </div>
          <div className="onb-field">
            <label>EMAIL ADDRESS *</label>
            <input type="email" placeholder="john@example.com" value={form.email}
              onChange={e => update('email', e.target.value)}
              className={errors.email ? 'field-error' : ''} />
            {errors.email && <span className="err">{errors.email}</span>}
          </div>
        </div>
        <div className="onb-field">
          <label>PHONE NUMBER *</label>
          <div className="input-icon-wrap">
            <span>📞</span>
            <input placeholder="+250 788 000 000" value={form.phone}
              onChange={e => update('phone', e.target.value)}
              className={errors.phone ? 'field-error' : ''} />
          </div>
          {errors.phone && <span className="err">{errors.phone}</span>}
        </div>
      </div>

      {/* Account Security */}
      <div className="onb-card">
        <h3>Account Security</h3>
        <div className="form-grid-2">
          <div className="onb-field">
            <label>PASSWORD *</label>
            <input type="password" placeholder="••••••••" value={form.password}
              onChange={e => update('password', e.target.value)}
              className={errors.password ? 'field-error' : ''} />
            {errors.password && <span className="err">{errors.password}</span>}
          </div>
          <div className="onb-field">
            <label>CONFIRM PASSWORD *</label>
            <input type="password" placeholder="••••••••" value={form.confirmPassword}
              onChange={e => update('confirmPassword', e.target.value)}
              className={errors.confirmPassword ? 'field-error' : ''} />
            {errors.confirmPassword && <span className="err">{errors.confirmPassword}</span>}
          </div>
        </div>
      </div>

      {/* File Upload */}
      <div className="onb-card">
        <label className="upload-label">BUSINESS LICENSE (RDB CERTIFICATE)</label>
        <p className="upload-hint">Please upload a clear PDF or high-resolution image of your official registration document.</p>
        <div className={`upload-dropzone ${fileName ? 'dropped' : ''}`}
  onClick={() => fileRef.current.click()}
  onDragOver={e => e.preventDefault()}
  onDrop={e => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file) setFileName(file.name)
  }}
>
  <input
    ref={fileRef}
    type="file"
    accept=".pdf,.jpg,.jpeg,.png"
    style={{ display: 'none' }}
    onChange={e => e.target.files[0] && setFileName(e.target.files[0].name)}
  />
  <span className="upload-icon">📄</span>
  <p><strong>{fileName || 'Drag & drop your file here'}</strong></p>
  <p className="upload-sub">or <span className="browse-link">browse files</span> from your computer</p>
  <div className="upload-tags">
    <span>PDF (Max 10MB)</span>
    <span>JPG/PNG</span>
  </div>
</div>
      </div>

      <div className="step-footer">
        <div className="save-hint">
          <span>⚠️</span>
          <p>You can save your progress and return later.</p>
        </div>
        <div className="step-footer-btns">
          <button className="save-draft-btn">Save Draft</button>
          <button className="continue-btn" onClick={handleNext}>Continue to Docs →</button>
        </div>
      </div>

      {/* Promise card */}
      <div className="promise-card">
        <div className="promise-icon">🛡️</div>
        <div>
          <h4>Ikaze Verification Promise</h4>
          <p>Once you complete the onboarding, our team of Rwandan experts manually reviews your submission. This process ensures high standards for our community and increases your conversion rate by up to 40% with the "Verified" badge.</p>
        </div>
      </div>
    </div>
  )
}
function StepVerificationDocs({ onNext, onBack }) {
  const [docs, setDocs] = useState({ rdb: null, vat: null, id: null })
  const refs = { rdb: useRef(null), vat: useRef(null), id: useRef(null) }

  const DOC_LIST = [
    { key: 'rdb', icon: '📄', title: 'RDB Registration Certificate', desc: 'Official company registration document from Rwanda Development Board.', note: 'PDF, PNG, JPG (Max 5MB)' },
    { key: 'vat', icon: '🧾', title: 'VAT Certificate', optional: true, desc: 'Value Added Tax registration certificate if your business is registered for VAT.', note: 'PDF, PNG, JPG (Max 5MB)' },
    { key: 'id', icon: '🪪', title: 'ID of the Business Owner', desc: 'National ID Card or Passport bio-data page of the legal representative.', note: 'Both sides for National ID' },
  ]

  return (
    <div className="step-content">
      <p className="trust-label">🛡️ TRUST & SECURITY</p>
      <h1>Compliance & Verification</h1>
      <p className="step-desc">To maintain a high-trust marketplace, we require all vendors to provide valid Rwandan business registration documents. Our team manually reviews each submission within 24 hours.</p>

      <div className="docs-list">
        {DOC_LIST.map(doc => (
          <div key={doc.key} className="doc-card">
            <input
              ref={refs[doc.key]}
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              style={{ display: 'none' }}
              onChange={e => {
                if (e.target.files[0]) setDocs({ ...docs, [doc.key]: e.target.files[0].name })
              }}
            />
            <span className="doc-icon">{doc.icon}</span>
            <div className="doc-info">
              <div className="doc-title-row">
                <h4>{doc.title}</h4>
                {doc.optional && <span className="optional-badge">OPTIONAL</span>}
              </div>
              <p>{doc.desc}</p>
              <span className={docs[doc.key] ? 'doc-status uploaded' : 'doc-status'}>
                {docs[doc.key] ? `✅ ${docs[doc.key]}` : '⚠️ Not Uploaded'}
              </span>
            </div>
            <div className="doc-upload-col">
              <button className="upload-doc-btn" onClick={() => refs[doc.key].current.click()}>⬆ Upload</button>
              <span className="doc-note">{doc.note}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="why-verify-card">
        <span>✅</span>
        <div>
          <h4>Why we verify?</h4>
          <p>Verification ensures that every vendor on IKAZE is a legitimate business. This builds trust with international and local customers, leading to higher conversion rates for your services. Once verified, you will receive the 'Verified Vendor' badge on your profile.</p>
        </div>
      </div>

      <div className="step-footer">
        <button className="back-btn" onClick={onBack}>← Back to Business Info</button>
        <button className="continue-btn" onClick={onNext}>Continue to Media →</button>
      </div>
    </div>
  )
}
// ── Step 2 ──────────────────────────────────────────────


// ── Step 3 ──────────────────────────────────────────────
function StepBusinessMedia({ onNext, onBack }) {
  const [heroFile, setHeroFile] = useState(null)
  const [logoFile, setLogoFile] = useState(null)
  const [gallery, setGallery] = useState(Array(6).fill(null))
  const heroRef = useRef(null)
  const logoRef = useRef(null)
  const galleryRefs = useRef(Array(6).fill(null).map(() => React.createRef()))

  const handleGalleryUpload = (i, file) => {
    const updated = [...gallery]
    updated[i] = file.name
    setGallery(updated)
  }

  const uploadedCount = gallery.filter(Boolean).length

  return (
    <div className="step-content">
      <h1>Business Media</h1>
      <p className="step-desc">Visuals are the first thing customers see. Upload high-quality photos that capture the authentic spirit of your Rwandan business or service.</p>

      {/* Hero Image */}
      <div className="media-card">
        <div className="media-card-header">
          <div>
            <h3>Hero Image</h3>
            <p>This will be the main banner on your profile page.</p>
          </div>
          <span className="required-badge">REQUIRED</span>
        </div>
        <input ref={heroRef} type="file" accept="image/*" style={{ display: 'none' }}
          onChange={e => e.target.files[0] && setHeroFile(e.target.files[0].name)} />
        <div
          className={`hero-dropzone ${heroFile ? 'dropped' : ''}`}
          onClick={() => heroRef.current.click()}
          onDragOver={e => e.preventDefault()}
          onDrop={e => {
            e.preventDefault()
            const file = e.dataTransfer.files[0]
            if (file) setHeroFile(file.name)
          }}
        >
          <span className="upload-cam-icon">📷</span>
          <p><strong>{heroFile || 'Click to upload or drag and drop'}</strong></p>
          <p className="upload-sub">High-resolution JPEG or PNG (Min 1200×600px)</p>
        </div>
      </div>

      {/* Logo + Gallery */}
      <div className="media-bottom-grid">
        <div className="media-card">
          <h3>Business Logo</h3>
          <p>Square aspect ratio preferred.</p>
          <input ref={logoRef} type="file" accept="image/*" style={{ display: 'none' }}
            onChange={e => e.target.files[0] && setLogoFile(e.target.files[0].name)} />
          <div
            className={`logo-dropzone ${logoFile ? 'dropped' : ''}`}
            onClick={() => logoRef.current.click()}
            onDragOver={e => e.preventDefault()}
            onDrop={e => {
              e.preventDefault()
              const file = e.dataTransfer.files[0]
              if (file) setLogoFile(file.name)
            }}
          >
            <span>⬆</span>
            <p>{logoFile || 'Upload Logo'}</p>
          </div>
        </div>

        <div className="media-card">
          <div className="media-card-header">
            <div>
              <h3>Gallery</h3>
              <p>Add up to 6 photos showcasing your work.</p>
            </div>
            <span className="gallery-count">{uploadedCount} / 6</span>
          </div>
          <div className="gallery-grid">
            {gallery.map((item, i) => (
              <div key={i}>
                <input
                  ref={galleryRefs.current[i]}
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={e => e.target.files[0] && handleGalleryUpload(i, e.target.files[0])}
                />
                <div
                  className={`gallery-slot ${item ? 'filled' : ''}`}
                  onClick={() => galleryRefs.current[i].current.click()}
                >
                  {item ? <span className="gallery-filled-icon">🖼️</span> : <span>+</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="shield-notice">
        <span className="shield-icon">🛡️</span>
        <div>
          <p className="shield-title">Verification Shield</p>
          <p>Photos of your premises or equipment help us verify your business faster.</p>
        </div>
      </div>

      <div className="step-footer">
        <button className="back-btn" onClick={onBack}>← Back</button>
        <button className="continue-btn" onClick={onNext}>Continue to Review →</button>
      </div>
    </div>
  )
}

// ── Step 4 ──────────────────────────────────────────────
function StepReviewSubmit({ onBack, formData }) {
  const navigate = useNavigate()

  const handleSubmit = () => {
    localStorage.setItem('ikaze_user', JSON.stringify({
      ...JSON.parse(localStorage.getItem('ikaze_user') || '{}'),
      onboarded: true,
    }))
    navigate('/vendor/dashboard')
  }

  return (
    <div className="step-content">
      <h1>Review & Submit</h1>
      <p className="step-desc">Please review your information before submitting. Our team will manually verify your application within 24 hours.</p>

      <div className="review-card">
        <h3>Business Information</h3>
        <div className="review-row"><span>Business Name</span><strong>{formData?.businessName || '—'}</strong></div>
        <div className="review-row"><span>Category</span><strong>{formData?.category || '—'}</strong></div>
        <div className="review-row"><span>Address</span><strong>{formData?.address || '—'}</strong></div>
        <div className="review-row"><span>Contact Name</span><strong>{formData?.fullName || '—'}</strong></div>
        <div className="review-row"><span>Email</span><strong>{formData?.email || '—'}</strong></div>
        <div className="review-row"><span>Phone</span><strong>{formData?.phone || '—'}</strong></div>
      </div>

      <div className="review-card">
        <h3>Documents</h3>
        <div className="review-row"><span>RDB Certificate</span><strong className="status-pending">Uploaded</strong></div>
        <div className="review-row"><span>VAT Certificate</span><strong className="status-optional">Optional</strong></div>
        <div className="review-row"><span>Owner ID</span><strong className="status-pending">Uploaded</strong></div>
      </div>

      <div className="review-card">
        <h3>Media</h3>
        <div className="review-row"><span>Hero Image</span><strong className="status-pending">Uploaded</strong></div>
        <div className="review-row"><span>Business Logo</span><strong className="status-pending">Uploaded</strong></div>
        <div className="review-row"><span>Gallery</span><strong>2 / 6 photos</strong></div>
      </div>

      <div className="submit-notice">
        <span>🛡️</span>
        <p>By submitting, you agree to Ikaze's vendor terms. Your listing will be <strong>hidden from public view</strong> until our team completes the verification process.</p>
      </div>

      <div className="step-footer">
        <button className="back-btn" onClick={onBack}>← Back</button>
        <button className="submit-btn" onClick={handleSubmit}>Submit Application →</button>
      </div>
    </div>
  )
}

// ── Main Component ───────────────────────────────────────
export default function VendorOnboarding() {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({})

  const next = (data) => {
    if (data) setFormData({ ...formData, ...data })
    setCurrentStep(s => Math.min(s + 1, 4))
  }

  const back = () => setCurrentStep(s => Math.max(s - 1, 1))

  return (
    <div className="onboarding-page">
      {/* Navbar */}
      <nav className="onb-navbar">
        <span className="onb-logo" onClick={() => navigate('/')}>IKAZE</span>
        <button className="onb-login-btn" onClick={() => navigate('/auth?step=login')}>Login</button>
      </nav>

      <div className="onboarding-layout">
        {/* Sidebar */}
        <aside className="onb-sidebar">
          <div>
            <h3>Vendor Onboarding</h3>
            <p>Step {currentStep} of 4</p>
          </div>
          <ul className="onb-steps-list">
            {STEPS.map(step => (
              <li
                key={step.id}
                className={`onb-step-item ${currentStep === step.id ? 'active' : ''} ${currentStep > step.id ? 'done' : ''}`}
              >
                <span className="step-dot">
                  {currentStep > step.id ? '✓' : step.id}
                </span>
                {step.label}
              </li>
            ))}
          </ul>
          <div className="sidebar-security">
            <span>🛡️</span>
            <p>Your data is secured with AES-256 encryption.</p>
          </div>
          <button className="save-progress-btn">Save Progress</button>
        </aside>

        {/* Main content */}
        <main className="onb-main">
          {currentStep === 1 && <StepBusinessInfo onNext={next} />}
          {currentStep === 2 && <StepVerificationDocs onNext={() => next()} onBack={back} />}
          {currentStep === 3 && <StepBusinessMedia onNext={() => next()} onBack={back} />}
          {currentStep === 4 && <StepReviewSubmit onBack={back} formData={formData} />}
        </main>
      </div>
    </div>
  )
}