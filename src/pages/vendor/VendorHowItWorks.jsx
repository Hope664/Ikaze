import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './VendorHowItWorks.css'

const FAQS = [
  { q: 'What documents are required for registration?', a: 'You need your RDB Registration Certificate, a valid National ID or Passport, and optionally a VAT Certificate.' },
  { q: 'How long does the verification process take?', a: 'Our team manually reviews every application within 24-48 hours of submission.' },
  { q: 'Are there any upfront fees to join?', a: 'No upfront fees. Joining Ikaze is completely free. We only take a small commission on confirmed bookings.' },
  { q: 'Can I manage multiple business locations?', a: 'Yes! Once verified, you can add multiple locations from your vendor dashboard.' },
]

export default function VendorHowItWorks() {
  const navigate = useNavigate()
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div className="vhiw-page">
      {/* Navbar */}
      <nav className="onb-navbar">
        <span className="onb-logo" onClick={() => navigate('/')}>IKAZE</span>
        <span className="hiw-nav-active">How it works</span>
      </nav>

      {/* Hero */}
      <div className="vhiw-hero">
        <div className="vhiw-hero-left">
          <span className="vhiw-hero-tag">✅ Partner with Excellence</span>
          <h1>Grow Your Business<br />with <span className="green-text">IKAZE</span></h1>
          <p>Join Rwanda's premier digital gateway. Connect with global travelers and local clients looking for verified, high-quality services.</p>
          <div className="vhiw-hero-btns">
            <button className="vhiw-register-btn" onClick={() => navigate('/vendor/onboarding')}>Register Now →</button>
            <button className="vhiw-dashboard-btn" onClick={() => navigate('/vendor/dashboard')}>View Dashboard</button>
          </div>
        </div>
        <div className="vhiw-hero-right">
          <div className="vhiw-hero-mockup">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80" alt="dashboard" />
            <div className="revenue-badge">
              <span>📈</span>
              <div>
                <p className="rb-title">45% Revenue Growth</p>
                <p className="rb-sub">Average for verified partners</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3-Step Process */}
      <div className="vhiw-steps-section">
        <h2>The Simple 3-Step Process</h2>
        <p>Becoming a verified partner is straightforward. We prioritize trust and quality at every stage of the journey.</p>
        <div className="vhiw-steps-grid">
          {[
            { num: 1, icon: '🖥️', title: 'Digital Registration', desc: 'Create your account and upload your business credentials, trade licenses, and supporting documents via our secure portal.' },
            { num: 2, icon: '🛡️', title: 'Human Verification', desc: 'Our dedicated team manually reviews every application to ensure trust and authenticity across the ecosystem.' },
            { num: 3, icon: '🚀', title: 'Go Live & Scale', desc: 'Receive your "Verified" badge, start appearing in searches, and manage your bookings through our intuitive dashboard.' },
          ].map(step => (
            <div key={step.num} className="vhiw-step">
              <div className="vhiw-step-num">{step.num}</div>
              <div className="vhiw-step-icon">{step.icon}</div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Partner */}
      <div className="vhiw-why-section">
        <div className="vhiw-why-header">
          <div>
            <h2>Why Partner With Us?</h2>
            <p>We provide the tools and visibility you need to stand out in the competitive Rwandan market.</p>
          </div>
          <button className="see-all-btn">See all benefits ›</button>
        </div>
        <div className="vhiw-benefits-grid">
          <div className="benefit-card large">
            <span className="benefit-icon">🛡️</span>
            <h3>Verified Partner Status</h3>
            <p>Our verification shield is more than a badge—it's a mark of excellence. It signals trust to every user, resulting in a 3x increase in booking confidence compared to unverified listings.</p>
            <div className="benefit-list">
              <p>✅ Instant Credibility</p>
              <p>✅ Higher Search Priority</p>
              <p>✅ Global Recognition</p>
            </div>
          </div>
          <div className="benefit-cards-right">
            <div className="benefit-card small">
              <span className="benefit-icon">🤖</span>
              <h3>AI Discovery</h3>
              <p>Our intelligent recommendation engine matches your services with the clients most likely to book, based on travel intent and preferences.</p>
            </div>
            <div className="benefit-card small">
              <span className="benefit-icon">📊</span>
              <h3>Detailed Analytics</h3>
              <p>Access real-time data on views, clicks, and conversion rates. Understand your audience and optimize your profile for better results.</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="vhiw-faq-section">
        <h2>Frequently Asked Questions</h2>
        <p>Everything you need to know about joining our network.</p>
        <div className="faq-list">
          {FAQS.map((faq, i) => (
            <div key={i} className="faq-item">
              <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <span>{faq.q}</span>
                <span className="faq-arrow">{openFaq === i ? '∧' : '∨'}</span>
              </button>
              {openFaq === i && <p className="faq-answer">{faq.a}</p>}
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="vhiw-cta">
        <h2>Ready to scale your business?</h2>
        <p>Join the thousands of Rwandan vendors reaching a global audience today.</p>
        <button className="vhiw-cta-btn" onClick={() => navigate('/vendor/onboarding')}>Register Your Business</button>
        <div className="vhiw-stats">
          <div className="vhiw-stat">
            <h3>10k+</h3>
            <p>Active Monthly Users</p>
          </div>
          <div className="vhiw-stat">
            <h3>500+</h3>
            <p>Verified Partners</p>
          </div>
          <div className="vhiw-stat">
            <h3>4.8/5</h3>
            <p>Vendor Satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  )
}