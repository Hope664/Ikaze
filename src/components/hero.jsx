import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1>Discover. Connect. Experience.</h1>
        <p>Smart AI recommendations for trusted places and local services tailored just for you.</p>
        <div className="hero-buttons">
          <a href="/quiz" className="btn-getstarted">Get started ✦</a>
          <a href="/register-business" className="btn-register">
            <span className="btn-register-dot" /> Register business
          </a>
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