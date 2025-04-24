'use client'

export default function Navbar() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="nav-links">
          <li>
            <a 
              href="#" 
              className="nav-link" 
              onClick={(e) => handleScroll(e, 'home')}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#skills" 
              className="nav-link" 
              onClick={(e) => handleScroll(e, 'skills')}
            >
              Skills
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className="nav-link" 
              onClick={(e) => handleScroll(e, 'projects')}
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className="nav-link" 
              onClick={(e) => handleScroll(e, 'contact')}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
} 