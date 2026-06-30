import { useNavigate } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const navigate = useNavigate()

  const storedUser = JSON.parse(localStorage.getItem('ikaze_user') || 'null')
  const isLoggedIn = !!storedUser
  const displayName = storedUser?.name || ''

  const handleLogout = () => {
    localStorage.removeItem('ikaze_user')
    navigate('/')
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
        {isLoggedIn ? 'IKAZE' : 'ikaze'}
      </div>
      <ul className="navbar-links">
        {isLoggedIn ? (
          <>
            <li><span onClick={() => navigate('/discover')}>Explore</span></li>
            <li><span onClick={() => navigate('/categories')}>Categories</span></li>
            <li><span onClick={() => navigate('/quiz')}>AI Assistant</span></li>
            <li><span onClick={() => navigate('/how-it-works')}>How it works</span></li>
          </>
        ) : (
          <>
            <li><span onClick={() => navigate('/')}>Home</span></li>
            <li><span onClick={() => navigate('/discover')}>Discover</span></li>
            <li><span onClick={() => navigate('/how-it-works')}>How it works</span></li>
            <li><span onClick={() => navigate('/ai-assistant')}>AI Assistant</span></li>
          </>
        )}
      </ul>
      <div className="navbar-auth">
        {isLoggedIn ? (
          <div className="user-menu">
            <div className="user-pill" onClick={() => navigate('/user/dashboard')}>
              <div className="user-avatar">👤</div>
              <span>{displayName}</span>
            </div>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <>
            <span className="btn-signin" onClick={() => navigate('/auth?step=login')}>Sign in</span>
            <span className="btn-signup" onClick={() => navigate('/auth?step=signup&role=user')}>Sign up</span>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar