import './TrustBadges.css'

const BADGES = [
  { label: 'Verified' },
  { label: 'Reviewed' },
  { label: 'Trusted' },
  { label: 'Local-first' },
  { label: 'Privacy-aware' },
]

function TrustBadges() {
  return (
    <section className="trust-badges">
      <p className="trust-title">Every vendor on Ikaze goes through a human-reviewed verification process.</p>
      <p className="trust-subtitle">Pending vendors are hidden from the public until approved. Suspicious listings can be reported and suspended immediately.</p>
      <div className="badges-row">
        {BADGES.map(({ label }) => (
          <div key={label} className="badge">
            <span className="badge-check">✅</span>
            <span className="badge-label">{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrustBadges