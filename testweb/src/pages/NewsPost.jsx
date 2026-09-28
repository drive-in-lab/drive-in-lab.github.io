import { Link, Navigate, useParams } from 'react-router-dom'
import { getPostBySlug } from '../lib/posts'
import './NewsPost.css'

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

export default function NewsPost() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) {
    return <Navigate to="/news" replace />
  }

  const { Component } = post
  const dateMark = getDateMark(post)

  return (
    <article className="post-page">
      <div className="container post-detail">
        <Link to="/news" className="back-link">&larr; Back to news</Link>

        <header className="post-detail-header">
          <div>
            {post.tag && <span className="tag">{post.tag}</span>}
            <h1>{post.title}</h1>
            <div className="post-detail-meta">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              {post.author && <span>&middot; {post.author}</span>}
            </div>
          </div>
          <div className="post-date-mark" aria-hidden="true">
            <strong>{dateMark.day}</strong>
            <span>{dateMark.label}</span>
          </div>
        </header>

        <div className="post-body-layout">
          <div className="prose">
            <Component />
          </div>

          <aside className="event-card" aria-label="Event details">
            <span className="event-card-label">Event details</span>
            <dl>
              {post.eventDate && <div><dt>Date</dt><dd>{post.eventDate}</dd></div>}
              {post.location && <div><dt>Location</dt><dd>{post.location}</dd></div>}
              <div><dt>Event</dt><dd>DDI 2026</dd></div>
            </dl>
            {post.externalUrl && (
              <a className="btn btn-primary" href={post.externalUrl} target="_blank" rel="noreferrer">
                DDI 2026 website
              </a>
            )}
          </aside>
        </div>
      </div>
    </article>
  )
}
