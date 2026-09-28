import './PageHero.css'

export default function PageHero({ eyebrow, title, subtitle, marker = 'Research at JYU' }) {
  return (
    <header className="page-hero">
      <div className="page-hero-art" aria-hidden="true">
        <span className="marker-label">{marker}</span>
      </div>
      <div className="container page-hero-inner">
        <div className="page-hero-text">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1>{title}</h1>
          {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
        </div>
      </div>
    </header>
  )
}
