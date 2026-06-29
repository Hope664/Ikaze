import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import './Categories.css'

const CATEGORIES = [
  {
    tag: '🏨 Stay',
    title: 'Accommodation',
    desc: 'Verified boutique hotels, eco-lodges, and luxury apartments across Rwanda.',
    imageUrl: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80',
    link: '/discover?category=accommodation'
  },
  {
    tag: '🍽 Eat',
    title: 'Food & Dining',
    desc: 'From traditional flavors to international fusion, discover the best tables in town.',
    imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
    link: '/discover?category=food'
  },
  {
    tag: '🧭 Explore',
    title: 'Tourism',
    desc: 'Cultural tours, volcano trekking, and wildlife safaris led by certified guides.',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
    link: '/discover?category=tourism'
  },
  {
    tag: '🚗 Move',
    title: 'Transportation',
    desc: 'Premium car rentals, private chauffeurs, and reliable airport transfers.',
    imageUrl: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&q=80',
    link: '/discover?category=transport'
  },
  {
    tag: '🔧 Fix',
    title: 'Tech & Repair',
    desc: 'Expert laptop, phone, and software support from certified Rwandan technicians.',
    imageUrl: 'https://images.unsplash.com/photo-1588702547919-26089e690ecc?w=600&q=80',
    link: '/discover?category=repair'
  },
  {
    tag: '💆 Heal',
    title: 'Wellness',
    desc: 'Spas, fitness centers, and holistic health practitioners focused on your well-being.',
    imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80',
    link: '/discover?category=wellness'
  },
]

const TRUST = [
  { icon: '🛡️', title: 'Vetted Partners', desc: 'Every vendor undergoes a multi-step background check and quality review.' },
  { icon: '🎧', title: '24/7 Support', desc: 'Local experts available around the clock to assist your journey.' },
  { icon: '💳', title: 'Secure Payments', desc: 'Escrow protection for all high-value services and professional bookings.' },
]

export default function Categories() {
  const navigate = useNavigate()

  return (
    <div className="categories-page">
      <Navbar />

      {/* Hero */}
      <div className="cat-hero">
        <div className="cat-hero-overlay" />
        <div className="cat-hero-content">
          <h1>Explore Categories</h1>
          <p>Discover Rwanda's best services, from luxury stays to verified tech repair.</p>
          <div className="cat-search">
            <span>🔍</span>
            <input type="text" placeholder="Search for 'Kigali hotels' or 'Safari tours'..." />
            <button onClick={() => navigate('/discover')}>Search →</button>
          </div>
        </div>
      </div>

      {/* Browse by Industry */}
      <div className="cat-content">
        <div className="cat-industry-header">
          <div>
            <h2>Browse by Industry</h2>
            <p>All vendors are human-verified for your peace of mind.</p>
          </div>
          <span className="verified-experts-badge">✅ Verified Experts</span>
        </div>

        <div className="cat-grid">
          {CATEGORIES.map((cat, i) => (
            <div key={i} className="cat-card" onClick={() => navigate(cat.link)}>
              <div className="cat-card-image">
                <img src={cat.imageUrl} alt={cat.title} />
                <span className="cat-tag">{cat.tag}</span>
              </div>
              <div className="cat-card-body">
                <h3>{cat.title}</h3>
                <p>{cat.desc}</p>
                <span className="cat-view-all">View all ›</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust strip */}
      <div className="cat-trust-strip">
        {TRUST.map((t, i) => (
          <div key={i} className="trust-item">
            <span className="trust-icon">{t.icon}</span>
            <h4>{t.title}</h4>
            <p>{t.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA section */}
      <div className="cat-cta-section">
        <div className="cat-cta-left">
          <h2>Don't see what you're looking for?</h2>
          <p>Tell our AI assistant what you need, and we'll match you with the perfect Rwandan specialist in minutes.</p>
          <button className="cat-ai-btn" onClick={() => navigate('/quiz')}>Talk to AI Assistant ✦</button>
        </div>
        <div className="cat-cta-right">
          <div className="partner-card">
            <span className="partner-icon">🤝</span>
            <h4>Partner with us</h4>
            <p>Become a verified vendor today.</p>
            <a href="#" className="apply-now">Apply Now</a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}