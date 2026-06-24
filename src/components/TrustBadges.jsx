import './TrustBadges.css'

const BADGES = [
  { icon: '✅', label: 'Verified', desc: 'Every vendor is manually reviewed.' },
  { icon: '⭐', label: 'Reviewed', desc: 'Real ratings from real users.' },
  { icon: '👍', label: 'Helpful', desc: 'AI-powered, community-tested.' },
  { icon: '🎁', label: '100% Free', desc: 'No fees to browse or discover.' },
  { icon: '🔒', label: 'Privacy-safe', desc: 'Your data stays yours.' },
]

function TrustBadges() {
  return (
    <section className="trust-badges">
      <p className="trust-label">Every vendor on Ikaze goes through a manual review process before going live.</p>
      <div className="badges-grid">
        {BADGES.map(({ icon, label, desc }) => (
          <div key={label} className="badge">
            <div className="badge-icon">{icon}</div>
            <span className="badge-label">{label}</span>
            <span className="badge-desc">{desc}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrustBadges