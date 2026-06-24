import './Footer.css'

const LINKS = {
  Product: ['Discover', 'AI Quiz', 'Map view', 'Categories'],
  Company: ['About Ikaze', 'Blog', 'Careers', 'Contact'],
  Vendors: ['Register your business', 'Verification process', 'Vendor dashboard'],
  Legal: ['Privacy policy', 'Terms of use', 'Cookie policy'],
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <span className="footer-logo">ikaze</span>
          <p>Rwanda's trusted platform for discovering verified local services.</p>
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
        <p>© {new Date().getFullYear()} Ikaze AI. All rights reserved.</p>
        <p>Made with care in Rwanda 🇷🇼</p>
      </div>
    </footer>
  )
}

export default Footer