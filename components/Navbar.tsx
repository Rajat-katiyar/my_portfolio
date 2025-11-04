export function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-brand">
          <a href="#hero" className="brand-link">
            <span className="brand-text">Portfolio</span>
          </a>
        </div>
        
        <div className="nav-menu">
          <ul className="nav-links">
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#experience" className="nav-link">Experience</a></li>
            <li><a href="#projects" className="nav-link">Projects</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
          
          <div className="nav-actions">
            <a href="#contact" className="btn btn-outline">Let&apos;s Talk</a>
          </div>
        </div>
        
        <button className="mobile-menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

