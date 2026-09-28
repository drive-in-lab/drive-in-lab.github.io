import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/research', label: 'Research' },
  { to: '/projects', label: 'Project' },
  { to: '/facilities', label: 'Facilities' },
  { to: '/team', label: 'People' },
  { to: '/news', label: 'News' },
  { to: '/contact', label: 'Contact' },
]

const useRemoteLogoFallback = (event) => {
  if (event.currentTarget.dataset.fallbackApplied) return
  event.currentTarget.dataset.fallbackApplied = 'true'
  event.currentTarget.src = 'https://www.jyu.fi/themes/custom/jyu/images/logos/jyu-logo-en.svg'
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('hashchange', close)
    return () => window.removeEventListener('hashchange', close)
  }, [])

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <div className="container navbar-inner">
          <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
            <img
              className="brand-logo"
              src="/themes/custom/jyu/images/logos/jyu-logo-en.svg"
              alt="University of Jyväskylä"
              onError={useRemoteLogoFallback}
            />
            <span className="brand-lab">
              <small>Research laboratory</small>
              Drive-In Lab
            </span>
          </NavLink>

          <button
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="primary-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>

          <ul id="primary-nav" className={`nav-links ${open ? 'nav-links-open' : ''}`}>
            {LINKS.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end={link.end} onClick={() => setOpen(false)}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}
