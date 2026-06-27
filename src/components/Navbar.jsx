import { useNavigate } from 'react-router-dom'
import './Navbar.css'

function Navbar({ loggedIn = false, userName = '' }) {
  const navigate = useNavigate()

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
        {loggedIn ? 'IKAZE' : 'ikaze'}
      </div>
      <ul className="navbar-links">
        {loggedIn ? (
          <>
            <li><span onClick={() => navigate('/discover')}>Explore</span></li>
            <li><span onClick={() => navigate('/discover')}>Categories</span></li>
            <li><span onClick={() => navigate('/quiz')}>AI Assistant</span></li>
            <li><span>How it works</span></li>
          </>
        ) : (
          <>
            <li><span onClick={() => navigate('/')}>Home</span></li>
            <li><span onClick={() => navigate('/discover')}>Discover</span></li>
            <li><span onClick={() => navigate('/about')}>About</span></li>
          </>
        )}
      </ul>
      <div className="navbar-auth">
        {loggedIn ? (
          <div className="user-pill" onClick={() => navigate('/dashboard')}>
            <div className="user-avatar">👤</div>
            <span>{userName}</span>
          </div>
        ) : (
          <>
            <span className="btn-signin" onClick={() => navigate('/auth?step=login')}>Sign in</span>
            <span className="btn-signup" onClick={() => navigate('/auth?step=signup')}>Sign up</span>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar