import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import './HowItWorks.css'

export default function HowItWorks() {
  const navigate = useNavigate()

  return (
    <div className="hiw-page">
      <Navbar />

      {/* Header */}
      <div className="hiw-header">
        <span className="hiw-tag">PLATFORM JOURNEY</span>
        <h1>How it Works</h1>
        <p>Discover how IKAZA bridges local Rwandan excellence with global standards through a verified, human-centric discovery process.</p>
      </div>

      {/* Bento grid */}
      <div className="hiw-content">
        <div className="hiw-grid">
          {/* Card 1 - white */}
          <div className="hiw-card white">
            <span className="hiw-num-icon">📋</span>
            <h2>01. Personalized Discovery</h2>
            <p>Our intelligent AI Assistant learns your preferences to curate a bespoke selection of Rwandan experiences and services. Whether you are looking for hidden art galleries in Kigali or eco-lodges in Musanze, we find the perfect match.</p>
            <div className="hiw-tags">
              <span>AI Curation</span>
              <span>Preference Quiz</span>
            </div>
          </div>

          {/* Center image */}
          <div className="hiw-card image-card">
            <img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80" alt="room" />
          </div>

          {/* Card 2 - green */}
          <div className="hiw-card green">
            <span className="hiw-num-icon green-icon">✅</span>
            <h2>02. Human-Reviewed Safety</h2>
            <p>Trust is our currency. Every vendor on IKAZA undergoes a rigorous physical and digital vetting process. Our local team personally reviews certifications, quality of service, and safety protocols to ensure absolute peace of mind.</p>
            <div className="hiw-verified-badge">
              <span>✅</span>
              <span>Verified with Rwandan Standards Board</span>
            </div>
          </div>

          {/* Card 3 - dark */}
          <div className="hiw-card dark">
            <span className="hiw-num-icon dark-icon">⚡</span>
            <h2>03. Direct Connection</h2>
            <p>No middlemen, no hidden fees. Once verified, you get direct access to chat, book, and pay with the vendor. Our platform handles the secure transaction, ensuring your funds are protected until the service is successfully delivered.</p>
            <div className="hiw-connection-bar">
              <span className="conn-icon">💬</span>
              <div className="conn-line">
                <div className="conn-dot" />
              </div>
              <span className="conn-icon">💳</span>
            </div>
          </div>

          {/* Ready card */}
          <div className="hiw-card ready-card">
            <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80" alt="Rwanda" />
            <div className="ready-body">
              <h3>Ready for your next discovery?</h3>
              <p>Continue exploring Rwanda's hidden gems with your personalized AI assistant and verified vendor network.</p>
              <div className="ready-btns">
                <button className="ready-btn-primary" onClick={() => navigate('/discover')}>Explore Recommendations →</button>
                <button className="ready-btn-secondary">Watch Video</button>
              </div>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="hiw-trust">
          <h3>Built on Trust and Quality</h3>
          <div className="hiw-trust-items">
            {[
              { icon: '⚖️', label: 'Licensed Ops' },
              { icon: '🎧', label: '24/7 Support' },
              { icon: '🔒', label: 'Secure Escrow' },
              { icon: '⭐', label: 'Curated Quality' },
            ].map((t, i) => (
              <div key={i} className="hiw-trust-item">
                <span className="hiw-trust-icon">{t.icon}</span>
                <span>{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}