import { useNavigate } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const navigate = useNavigate()

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>ikaze</div>
      <ul className="navbar-links">
        <li><span onClick={() => navigate('/')}>Home</span></li>
        <li><span onClick={() => navigate('/discover')}>Discover</span></li>
        <li><span onClick={() => navigate('/about')}>About</span></li>
      </ul>
      <div className="navbar-auth">
        <span className="btn-signin" onClick={() => navigate('/auth?step=login')}>Sign in</span>
        <span className="btn-signup" onClick={() => navigate('/auth?step=signup')}>Sign up</span>
      </div>
    </nav>
  )
}

export default Navbar