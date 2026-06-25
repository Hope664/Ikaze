
import './Navbar.css'
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">ikaze</div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/discover">Discover</a></li>
        <li><a href="/about">About</a></li>
      </ul>
      <div className="navbar-auth">
        <a href="/sign-in" className="btn-signin">Sign in</a>
        <a href="/sign-up" className="btn-signup">Sign up</a>
        <a href="/auth" className="btn-signin">Sign in</a>
        <a href="/auth" className="btn-signup">Sign up</a>
      </div>
    </nav>
  )
}

export default Navbar