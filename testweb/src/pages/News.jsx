import { Link } from 'react-router-dom'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import { posts } from '../lib/posts'
import './News.css'

const formatDate = (date) => new Date(`${date}T12:00:00`).toLocaleDateString('en-GB', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})

const getDateMark = (post) => {
  if (post.eventDate) {
    const [day, ...label] = post.eventDate.split(' ')
    return { day, label: label.join(' ') }
  }

  const date = new Date(`${post.date}T12:00:00`)
  return {
    day: date.getDate(),
    label: date.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' }),
  }
}

export default function News() {
  return (
    <>
      <PageHero
        eyebrow="News"
        title="News from Drive-In Lab"
        subtitle="Conference participation, research milestones, publications, and announcements from the laboratory."
        marker="Latest updates"
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Latest"
            title="From the lab"
            subtitle="Follow our research and meet us at upcoming events."
          />

          {posts.length === 0 ? (
            <p>No news has been published yet.</p>
          ) : (
            <ul className="news-grid">
              {posts.map((post) => {
                const dateMark = getDateMark(post)

                return (
                  <li key={post.slug}>
                    <Link to={`/news/${post.slug}`} className="news-card">
                      <div className="news-card-visual" aria-hidden="true">
                        <span className="news-card-day">{dateMark.day}</span>
                        <span className="news-card-month">{dateMark.label}</span>
                        <div className="news-road" />
                      </div>
                      <div className="news-card-content">
                        <div className="news-card-meta">
                          {post.tag && <span className="tag">{post.tag}</span>}
                          <time dateTime={post.date}>{formatDate(post.date)}</time>
                        </div>
                        <h2>{post.title}</h2>
                        <p>{post.excerpt}</p>
                        <div className="news-event-meta">
                          {post.eventDate && <span>{post.eventDate}</span>}
                          {post.location && <span>{post.location}</span>}
                        </div>
                        <span className="news-read-more">Read announcement <b aria-hidden="true">&#8594;</b></span>
                      </div>
                    </Link>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </section>
    </>
  )
}
