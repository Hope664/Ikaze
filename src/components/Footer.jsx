import './Footer.css'

const LINKS = {
  Services: ['Accommodation', 'Food & Dining', 'Guides', 'Transportation'],
  Company: ['About Us', 'Partner With Us', 'Careers', 'Contact'],
  Support: ['Help Center', 'Trust & Safety', 'Terms of Service', 'Privacy Policy'],
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <span className="footer-logo">Ikaze</span>
          <p>Discover verified Services, Powered by AI. Connect with trusted providers for accommodation, dining, tourism, and transportation. Smart recommendations based on your needs.</p>
        </div>
        {Object.entries(LINKS).map(([section, items]) => (
          <div key={section} className="footer-col">
            <p className="footer-col-title">{section}</p>
            <ul>
              {items.map(item => (
                <li key={item}><a href="#">{item}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <p>© 2026 Ikaze. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer