import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section container" style={{ textAlign: 'center', paddingTop: 160 }}>
      <span className="eyebrow">404</span>
      <h1>Page not found</h1>
      <p>The page you're looking for doesn't exist or has moved.</p>
      <Link to="/" className="btn btn-primary">Back to home</Link>
    </section>
  )
}
