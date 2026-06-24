import './HowItWorks.css'

const STEPS = [
  { icon: '🔍', title: 'Search or describe', desc: 'Type what you are looking for or take our AI quiz to describe your needs.' },
  { icon: '✨', title: 'AI matches you', desc: 'Our engine scores verified vendors based on your budget, location, and preferences.' },
  { icon: '📍', title: 'Connect and go', desc: 'View results on a map, read reviews, and contact the right provider directly.' },
]

function HowItWorks() {
  return (
    <section className="how-it-works">
      <p className="how-label">How Ikaze works</p>
      <h2>Safe, simple, and transparent discovery in three steps.</h2>
      <div className="steps-grid">
        {STEPS.map((step, i) => (
          <div key={i} className="step">
            <div className="step-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks