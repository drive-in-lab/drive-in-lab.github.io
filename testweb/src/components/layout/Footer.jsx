import { Link } from 'react-router-dom'
import './Footer.css'

const useRemoteLogoFallback = (event) => {
  if (event.currentTarget.dataset.fallbackApplied) return
  event.currentTarget.dataset.fallbackApplied = 'true'
  event.currentTarget.src = 'https://www.jyu.fi/themes/custom/jyu/images/logos/jyu-logo-en.svg'
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img
            src="/themes/custom/jyu/images/logos/jyu-logo-en.svg"
            alt="University of Jyväskylä"
            onError={useRemoteLogoFallback}
          />
          <h2>Drive-In Lab</h2>
          <p>Researching driver attention and safer in-car interaction.</p>
        </div>

        <div className="footer-location">
          <h3>Visit the lab</h3>
          <address>
            Mattilanniemi 2<br />
            40100 Jyväskylä<br />
            Finland
          </address>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          <h3>Explore</h3>
          <ul>
            <li><Link to="/research">Research</Link></li>
            <li><Link to="/facilities">Facilities</Link></li>
            <li><Link to="/team">People</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>

      <div className="container footer-bottom">
        <span>&copy; 2026 Drive-in-lab, University of Jyväskylä</span>
        <a href="https://www.jyu.fi/en/projects/drive-in-lab" target="_blank" rel="noreferrer">
          Official project page <span aria-hidden="true">&#8599;</span>
        </a>
      </div>
    </footer>
  )
}
