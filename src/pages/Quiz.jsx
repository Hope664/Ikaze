import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Quiz.css'

const QUESTIONS = [
  {
    id: 1,
    label: 'QUESTION 1',
    title: 'What are you in the mood for?',
    subtitle: 'What kind of experience are you looking for?',
    options: [
      { label: 'Outdoor & Nature', desc: 'Parks, trails, and hills' },
      { label: 'Food & Culture', desc: 'Local tastes and crafts' },
      { label: 'Relaxation', desc: 'Spas and quiet escapes' },
      { label: 'Active & Sport', desc: 'Biking and water sports' },
    ],
  },
  {
    id: 2,
    label: 'QUESTION 2',
    title: 'Your travel budget?',
    subtitle: 'What is your budget?',
    options: [
      { label: 'Budget-friendly', desc: 'Make every franc count' },
      { label: 'Comfortable', desc: 'Quality without excess' },
      { label: 'Premium', desc: 'The best of Rwanda' },
    ],
  },
  {
    id: 3,
    label: 'QUESTION 3',
    title: 'Match your energy',
    subtitle: 'How would you describe your energy on a trip?',
    options: [
      { label: 'Full throttle', desc: 'Early starts, long trails, more' },
      { label: 'Gentle space', desc: 'Leisure, rest, and slow moments' },
    ],
  },
  {
    id: 4,
    label: 'QUESTION 4',
    title: 'Your company on the trip',
    subtitle: 'Who are you traveling with?',
    options: [
      { label: 'Solo', desc: 'On my own company' },
      { label: 'Couple', desc: 'Romantic escape' },
      { label: 'Family', desc: 'Making memories together' },
    ],
  },
  {
    id: 5,
    label: 'QUESTION 5',
    title: 'Experience more',
    subtitle: 'What do you want to experience?',
    options: [
      { label: 'Nature & Wildlife', desc: 'Forests, animals, landscapes' },
      { label: 'History & Heritage', desc: 'Stories, culture, memory' },
      { label: 'Food & Markets', desc: 'Flavours, people, everyday life' },
    ],
  },
]

const MATCHES = [
  {
    id: '1',
    name: 'The Ikawa Sanctuary',
    location: 'Kimihurura',
    distance: '1.2 km away',
    price: '$70',
    matchScore: 98,
    insight: 'Matches your preference for quiet atmospheres and minimalist architectural details. It\'s the highest-rated spot for deep-focus work sessions today.',
    imageUrl: 'https://images.unsplash.com/photo-1600011689032-8b628b8a8747?w=800&q=80',
    btnLabel: 'View Details & Book',
  },
  {
    id: '2',
    name: 'Ubumwe Garden Retreat',
    location: 'Kiyovu',
    distance: '2.4 km away',
    price: '$50',
    matchScore: 94,
    insight: 'This retreat matches your history of visiting places with botanical gardens and secluded seating areas.',
    imageUrl: 'https://images.unsplash.com/photo-1540541338-2a61b4caa6f1?w=800&q=80',
    btnLabel: 'Explore Space',
  },
]

function MatchingPage() {
  const navigate = useNavigate()

  return (
    <div className="quiz-page">
      <Navbar />
      <div className="matching-container">
        {/* Left sidebar */}
        <div className="matching-sidebar">
          <div className="ai-tag">✦ AI-POWERED RECOMMENDATIONS</div>
          <div className="matching-card">
            <h2>Your Ikaze Match</h2>
            <p>Based on your quiz preferences for quiet atmospheres, artisanal coffee, and minimalist aesthetics, we've found your perfect spots in Kigali.</p>
          </div>
          <div className="not-finding-card">
            <div className="nf-icon">🤖</div>
            <h3>Not finding what you're looking for?</h3>
            <p>Talk to the Ikaze Assistant to refine your matches or describe a specific vibe you're after.</p>
            <button className="launch-assistant-btn">Launch Assistant ⚡</button>
          </div>
        </div>

        {/* Center: match cards + filters */}
        <div className="matching-main">
          <div className="matching-filters">
            <button className="filter-btn active">⚡ Match Score</button>
            <button className="filter-btn">Price: $$ ∨</button>
            <button className="filter-btn">Distance: &lt; 5km</button>
          </div>
          <div className="match-cards">
            {MATCHES.map(m => (
              <div key={m.id} className="match-card">
                <div className="match-card-image">
                  <img src={m.imageUrl} alt={m.name} />
                  <span className="match-score">⚡ {m.matchScore}% Match</span>
                  <span className="match-verified">✅ Verified</span>
                  <button className="match-save">♡</button>
                </div>
                <div className="match-card-info">
                  <div className="match-name-price">
                    <h3>{m.name}</h3>
                    <span className="match-price">{m.price}</span>
                  </div>
                  <p className="match-location">📍 {m.location} • {m.distance}</p>
                  <div className="kaze-insight">
                    <p className="insight-label">✦ KAZE INSIGHT</p>
                    <p className="insight-text">"{m.insight}"</p>
                  </div>
                  <button
                    className="match-cta-btn"
                    onClick={() => navigate(`/vendor/${m.id}`)}
                  >
                    {m.btnLabel}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Ikaze AI section */}
      <div className="why-ikaze">
        <div className="why-left">
          <img src="https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=800&q=80" alt="Kigali" />
          <div className="verified-overlay">
            <span>✅ Verified Marketplace</span>
            <p>"We only recommend businesses that meet our rigorous human-reviewed standard for quality and safety."</p>
          </div>
        </div>
        <div className="why-right">
          <h2>Why use Ikaze AI?</h2>
          <div className="why-item">
            <span className="why-icon">▼</span>
            <div>
              <h4>Smart Filtering</h4>
              <p>Bypass the clutter. Our algorithm removes generic options to show you exactly what matters to your itinerary.</p>
            </div>
          </div>
          <div className="why-item">
            <span className="why-icon">🛡</span>
            <div>
              <h4>Trust-First Approach</h4>
              <p>Every restaurant, hotel, and tour operator on Ikaze has been physically visited and verified by our local team.</p>
            </div>
          </div>
          <div className="why-item">
            <span className="why-icon">💬</span>
            <div>
              <h4>Direct Contact</h4>
              <p>We don't take commissions. We connect you directly with the vendors to ensure you get the best local pricing.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default function Quiz() {
  const navigate = useNavigate()
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState({})
  const [done, setDone] = useState(false)

  const question = QUESTIONS[current]
  const total = QUESTIONS.length
  const selected = answers[question.id]

  const handleSelect = (label) => {
    setAnswers({ ...answers, [question.id]: label })
  }

  const handleNext = () => {
    if (current < total - 1) setCurrent(current + 1)
    else setDone(true)
  }

  const handleBack = () => {
    if (current > 0) setCurrent(current - 1)
    else navigate('/')
  }

  if (done) return <MatchingPage />

  return (
    <div className="quiz-page">
      <Navbar />
      <div className="quiz-wrapper">
        <div className="quiz-container">
          {/* Progress bar */}
          <div className="quiz-progress">
            {QUESTIONS.map((_, i) => (
              <div
                key={i}
                className={`progress-segment ${i <= current ? 'filled' : ''}`}
              />
            ))}
          </div>

          {/* Question */}
          <div className="quiz-body">
            <p className="question-label">{question.label}</p>
            <h2 className="question-title">{question.title}</h2>
            <p className="question-subtitle">{question.subtitle}</p>

            <div className="options-list">
              {question.options.map((opt) => (
                <div
                  key={opt.label}
                  className={`option-item ${selected === opt.label ? 'selected' : ''}`}
                  onClick={() => handleSelect(opt.label)}
                >
                  <div className={`option-radio ${selected === opt.label ? 'checked' : ''}`} />
                  <div>
                    <p className="option-label">{opt.label}</p>
                    <p className="option-desc">{opt.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="quiz-actions">
            <button className="quiz-btn-back" onClick={handleBack}>← Back</button>
            <button className="quiz-btn-create" onClick={() => navigate('/auth?step=signup')}>Create Account</button>
            <button className="quiz-btn-next" onClick={handleNext}>
              {current === total - 1 ? 'See Results' : 'Skip'} →
            </button>
          </div>
        </div>
      </div>

      {/* Why Ikaze AI */}
      <div className="why-ikaze">
        <div className="why-left">
          <img src="https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=800&q=80" alt="Kigali" />
          <div className="verified-overlay">
            <span>✅ Verified Marketplace</span>
            <p>"We only recommend businesses that meet our rigorous human-reviewed standard for quality and safety."</p>
          </div>
        </div>
        <div className="why-right">
          <h2>Why use Ikaze AI?</h2>
          <div className="why-item">
            <span className="why-icon">▼</span>
            <div>
              <h4>Smart Filtering</h4>
              <p>Bypass the clutter. Our algorithm removes generic options to show you exactly what matters to your itinerary.</p>
            </div>
          </div>
          <div className="why-item">
            <span className="why-icon">🛡</span>
            <div>
              <h4>Trust-First Approach</h4>
              <p>Every restaurant, hotel, and tour operator on Ikaze has been physically visited and verified by our local team.</p>
            </div>
          </div>
          <div className="why-item">
            <span className="why-icon">💬</span>
            <div>
              <h4>Direct Contact</h4>
              <p>We don't take commissions. We connect you directly with the vendors to ensure you get the best local pricing.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}