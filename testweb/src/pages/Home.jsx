import { Link } from 'react-router-dom'
import SectionHeading from '../components/ui/SectionHeading'
import { researchAreas } from '../content/research'
import { team } from '../content/team'
import './Home.css'

const projectUrl = 'https://www.jyu.fi/en/projects/drive-in-lab'
const heroImage = 'https://www.jyu.fi/sites/default/files/styles/16_9_max_1440px/public/2024-05/JYU_Ajosimulaattori_025.jpg?h=be5bcf52&itok=r2Yr8iPb'

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero-copy">
          <span className="eyebrow">University of Jyväskylä</span>
          <h1>Understanding attention behind the wheel.</h1>
          <p>
            Drive-In Lab studies driver attention and tests how in-car information and
            entertainment systems affect inattention in traffic.
          </p>
          <div className="home-hero-actions">
            <Link to="/research" className="btn btn-light">Explore our research</Link>
            <Link to="/team" className="home-hero-link">Meet the people <span aria-hidden="true">&#8594;</span></Link>
          </div>
        </div>

        <figure className="home-hero-media">
          <img src={heroImage} alt="A passenger car connected to the Drive-In Lab simulation" />
          <figcaption>Drive-In Lab at the University of Jyväskylä. Photo: Petteri Kivimäki.</figcaption>
        </figure>
      </section>

      <section className="fact-band" aria-label="Project facts">
        <div className="container fact-grid">
          <div><strong>180°</strong><span>front-view projection</span></div>
          <div><strong>Any car</strong><span>can join the simulation</span></div>
          <div><strong>2024–2034</strong><span>project duration</span></div>
          <div><strong>4 methods</strong><span>logs, gaze, video, questionnaires</span></div>
        </div>
      </section>

      <section className="section home-intro">
        <div className="container home-intro-grid">
          <SectionHeading
            eyebrow="The laboratory"
            title="Real cars. Controlled conditions. Human-centred research."
          />
          <div className="home-intro-copy">
            <p>
              Any passenger car can be linked to our driving simulation. A 180-degree front
              projection and a rear projection viewed through the mirrors create realistic
              distances to surrounding traffic while keeping the study controlled and safe.
            </p>
            <p>
              This makes it possible to examine the cognitive processes that matter for safe
              driving and to measure the distraction potential of real in-car interfaces.
            </p>
            <a className="text-link" href={projectUrl} target="_blank" rel="noreferrer">
              View the official JYU project page
            </a>
          </div>
        </div>
      </section>

      <section className="section section-grey">
        <div className="container">
          <SectionHeading
            eyebrow="Research"
            title="How technology shapes driver attention"
            subtitle="Our work connects cognitive science, human–technology interaction, and traffic safety."
          />
          <div className="grid grid-4 home-research-grid">
            {researchAreas.map((area, index) => (
              <article className="card research-card" key={area.title}>
                <span className="research-number">0{index + 1}</span>
                <h3>{area.title}</h3>
                <p>{area.summary}</p>
              </article>
            ))}
          </div>
          <div className="home-section-link">
            <Link to="/research" className="btn">See our research</Link>
          </div>
        </div>
      </section>

      <section className="section facility-preview">
        <div className="container facility-panel">
          <div className="facility-copy">
            <span className="eyebrow">Facility</span>
            <h2>Built around the car, not a mock-up.</h2>
            <p>
              Researchers can collect driving logs, eye-movement measurements, video, and
              questionnaire data while participants use a real vehicle in a simulated traffic scenario.
            </p>
            <Link to="/facilities" className="btn">Inside the lab</Link>
          </div>
          <div className="facility-measures">
            <span className="eyebrow">Measurements</span>
            <ul>
              <li><span>01</span><strong>Driving logs</strong></li>
              <li><span>02</span><strong>Eye movements</strong></li>
              <li><span>03</span><strong>Video recordings</strong></li>
              <li><span>04</span><strong>Questionnaires</strong></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-grey people-preview">
        <div className="container">
          <SectionHeading eyebrow="People" title="The Drive-In Lab team" />
          <div className="grid grid-4 people-preview-grid">
            {team.map((member) => (
              <a
                className="people-preview-card"
                key={member.name}
                href={member.profile}
                target="_blank"
                rel="noreferrer"
              >
                <span>{member.name}</span>
                <small>{member.role}</small>
                <b aria-hidden="true">&#8599;</b>
              </a>
            ))}
          </div>
          <div className="home-section-link">
            <Link to="/team" className="btn">Meet the team</Link>
          </div>
        </div>
      </section>

      <section className="section section-blue home-contact">
        <div className="container home-contact-inner">
          <div>
            <span className="eyebrow">Mattilanniemi, Jyväskylä</span>
            <h2>Interested in our research?</h2>
            <p>Get in touch about collaboration, study participation, or the laboratory.</p>
          </div>
          <Link to="/contact" className="btn btn-light">Contact the lab</Link>
        </div>
      </section>
    </>
  )
}
