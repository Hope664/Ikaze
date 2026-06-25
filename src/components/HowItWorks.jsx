import './HowItWorks.css'

const STEPS = [
  { num: '1', title: 'Search or Browse', desc: 'Find destinations, experiences, or local services near you across Rwanda and Africa.' },
  { num: '2', title: 'Review & Compare', desc: 'See trust scores, ratings, and verification badges before you decide.' },
  { num: '3', title: 'Connect & Go', desc: 'Contact verified vendors directly or get directions to your destination.' },
]

function HowItWorks() {
  return (
    <section className="how-it-works">
      <p className="how-label">How Ikaze Works</p>
      <h2>Safe, simple, and transparent discovery in three steps.</h2>
      <div className="steps-grid">
        {STEPS.map((step, i) => (
          <div key={i} className="step-box">
            <div className="step-num">{step.num}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
      <div className="shield-icon">🛡️</div>
    </section>
  )
}

export default HowItWorks