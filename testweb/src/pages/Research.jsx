import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import { publications, researchAreas } from '../content/research'
import './Research.css'

export default function Research() {
  return (
    <>
      <PageHero
        eyebrow="Research"
        title="Attention, interaction, and safety"
        subtitle="We investigate the cognitive processes of drivers and the attention demands created by in-car technologies."
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Research themes"
            title="Studying inattention in context"
            subtitle="The Drive-In Lab brings together cognitive science, engineering, and human–technology interaction."
          />
          <div className="grid grid-2 research-theme-grid">
            {researchAreas.map((area, index) => (
              <article className="research-theme" key={area.title}>
                <div className="research-theme-number">0{index + 1}</div>
                <div>
                  <span className="tag">{area.tag}</span>
                  <h3>{area.title}</h3>
                  <p>{area.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-grey publications">
        <div className="container">
          <SectionHeading
            eyebrow="Selected output"
            title="Drive-In Lab publications"
            subtitle="Recent work introducing the facility and advancing context-sensitive measures of driver attention."
          />
          <ol className="publication-list">
            {publications.map((publication) => (
              <li key={publication.title} className="publication-item">
                <span className="publication-year">{publication.year}</span>
                <div className="publication-content">
                  <h3>{publication.title}</h3>
                  <p>{publication.authors}</p>
                  <small>{publication.venue}</small>
                </div>
                <a
                  href={publication.link}
                  className="publication-link"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open publication: ${publication.title}`}
                >
                  <span aria-hidden="true">&#8599;</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
