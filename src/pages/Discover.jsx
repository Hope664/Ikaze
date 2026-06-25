import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './Discover.css'

const CATEGORIES = ['Accommodation', 'Food & Dining', 'Tourism']

const MOCK_RESULTS = [
  {
    id: '1',
    name: 'Kigali View Hotel',
    category: 'Accommodation',
    description: 'Luxury accommodation with panoramic views of the city\'s rolling hills.',
    price: '$120',
    priceUnit: '/night',
    distance: '1.2 km away',
    rating: 4.9,
    isVerified: true,
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
  },
  {
    id: '2',
    name: 'Heaven Restaurant',
    category: 'Food & Dining',
    description: 'Fusion cuisine celebrating local flavors with a sophisticated modern twist.',
    price: '$$',
    priceUnit: '/range',
    distance: '0.5 km away',
    rating: 4.7,
    isVerified: true,
    imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
  },
  {
    id: '3',
    name: 'Virunga Inn',
    category: 'Accommodation',
    description: 'Quiet retreat nestled in the prestigious hills of Nyarutarama district.',
    price: '$85',
    priceUnit: '/night',
    distance: '2.4 km away',
    rating: 4.8,
    isVerified: true,
    imageUrl: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80',
  },
]

function DiscoverCard({ result }) {
  const navigate = useNavigate()

  return (
    <div className="discover-card">
      <div className="discover-card-image">
        <img src={result.imageUrl} alt={result.name} />
        {result.isVerified && <span className="dc-verified">✅ Verified</span>}
        <span className="dc-rating">{result.rating} ★</span>
      </div>
      <div className="discover-card-body">
        <div className="dc-name-price">
          <h3>{result.name}</h3>
          <div className="dc-price">
            <span className="dc-price-amount">{result.price}</span>
            <span className="dc-price-unit">{result.priceUnit}</span>
          </div>
        </div>
        <p className="dc-desc">{result.description}</p>
        <div className="dc-footer">
          <span className="dc-distance">✈ {result.distance}</span>
          <button onClick={() => navigate(`/vendor/${result.id}`)} className="dc-view-btn">
            View Details →
          </button>
        </div>
      </div>
    </div>
  )
}

function Discover() {
  const [activeCategory, setActiveCategory] = useState('Accommodation')
  const [search, setSearch] = useState('')

  const filtered = MOCK_RESULTS.filter(r =>
    r.name.toLowerCase().includes(search.toLowerCase()) ||
    r.description.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="discover-page">
      <Navbar />
      <div className="discover-body">
        {/* Left: Map + filters */}
        <div className="discover-left">
          <div className="discover-filters">
            <div className="discover-search">
              <span>🔍</span>
              <input
                type="text"
                placeholder="Search for hotels, dining in Kigali..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
            <div className="discover-cats">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={activeCategory === cat ? 'dcat active' : 'dcat'}
                >
                  {cat === 'Accommodation' ? '🛏' : cat === 'Food & Dining' ? '🍽' : '🧭'} {cat}
                </button>
              ))}
            </div>
            <div className="discover-budget">
              <span>Budget: <strong>Any Price ∨</strong></span>
              <button className="filters-btn">⚙ Filters</button>
            </div>
          </div>
          {/* Map placeholder */}
          <div className="discover-map">
            <div className="map-pin pin-green">🛏</div>
            <div className="map-pin pin-blue">🍽</div>
            <div className="map-pin pin-outline">📍</div>
          </div>
        </div>

        {/* Right: Results */}
        <div className="discover-right">
          <div className="discover-results-header">
            <h2>Results in Kigali</h2>
            <span className="results-count">{filtered.length} found</span>
          </div>
          <div className="discover-results">
            {filtered.map(r => (
              <DiscoverCard key={r.id} result={r} />
            ))}
          </div>
          <button className="fab-btn">+</button>
        </div>
      </div>
    </div>
  )
}

export default Discover