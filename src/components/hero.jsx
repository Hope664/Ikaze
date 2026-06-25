import { useNavigate } from 'react-router-dom'
import './Hero.css'

function Hero() {
  const navigate = useNavigate()

  return (
    <section className="hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1>Discover. Connect. Experience.</h1>
        <p>Smart AI recommendations for trusted places and local services tailored just for you.</p>
        <div className="hero-buttons">
          <button className="btn-getstarted" onClick={() => navigate('/auth?step=signup')}>Get started ✦</button>
          <button className="btn-register" onClick={() => navigate('/auth?step=signup')}>
            <span className="btn-register-dot" /> Register business
          </button>
        </div>
      </div>
      <div className="hero-search-bar">
        <span className="search-icon">🔍</span>
        <input type="text" placeholder="Search for places, services, districts..." />
        <button>🔍</button>
      </div>
    </section>
  )
}

export default Hero