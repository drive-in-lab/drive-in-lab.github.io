import PageHero from '../components/ui/PageHero'
import './Contact.css'

const projectUrl = 'https://www.jyu.fi/en/projects/drive-in-lab'

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s talk about driver attention"
        subtitle="Contact the Drive-In Lab about research collaboration, the facility, or participation in upcoming studies."
        marker="Jyväskylä, Finland"
      />

      <section className="section">
        <div className="container contact-layout">
          <div className="contact-primary">
            <span className="eyebrow">Project contact</span>
            <h2>Tuomo Kujala</h2>
            <p className="contact-role">Professor · Drive-In Lab project leader</p>
            <a className="contact-email" href="mailto:tuomo.kujala@jyu.fi">
              tuomo.kujala@jyu.fi
            </a>
            <a className="contact-phone" href="tel:+358400247392">+358 40 024 7392</a>
            <a
              className="text-link"
              href="https://www.jyu.fi/en/people/tuomo-kujala"
              target="_blank"
              rel="noreferrer"
            >
              View JYU profile
            </a>
          </div>

          <div className="contact-visit">
            <span className="eyebrow">Visit the lab</span>
            <h2>Mattilanniemi</h2>
            <address>
              Mattilanniemi 2<br />
              40100 Jyväskylä<br />
              Finland
            </address>
            <a
              className="text-link"
              href="https://www.jyu.fi/en/about-us/maps"
              target="_blank"
              rel="noreferrer"
            >
              JYU maps and visitor information
            </a>
          </div>
        </div>
      </section>

      <section className="section section-grey contact-project">
        <div className="container contact-project-inner">
          <div>
            <span className="eyebrow">Official information</span>
            <h2>Drive-In Lab at JYU.fi</h2>
            <p>
              Find the current project description, research group, related news, and official
              University of Jyväskylä project information on JYU.fi.
            </p>
          </div>
          <a className="btn btn-primary" href={projectUrl} target="_blank" rel="noreferrer">
            Open project page
          </a>
        </div>
      </section>
    </>
  )
}
