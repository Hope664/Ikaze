import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1>Discover. Connect. Experience.</h1>
        <p>Ikaze helps you find safe, trusted, and highly reviewed places and service providers all across Rwanda.</p>
        <div className="hero-search">
          <input type="text" placeholder="Search restaurants, hotels, mechanics..." />
          <select>
            <option>All</option>
            <option>Accommodation</option>
            <option>Transport</option>
            <option>Restaurant</option>
            <option>Tourism</option>
            <option>Mechanics</option>
          </select>
          <button>Search</button>
        </div>
      </div>
    </section>
  )
}

export default Hero