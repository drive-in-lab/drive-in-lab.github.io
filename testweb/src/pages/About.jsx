import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import './About.css'

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About the lab"
        title="A new way to study attention in real cars"
        subtitle="Drive-In Lab is a research facility at the University of Jyväskylä’s Faculty of Information Technology."
      />

      <section className="section">
        <div className="container about-layout">
          <div className="about-copy">
            <p className="lead">
              We examine driver behaviour in controlled driving conditions without removing
              the vehicle interfaces people actually use.
            </p>
            <p>
              Any passenger car can be linked to the simulation. The 180-degree front-view
              projection and rear-view projection through the mirrors make it possible to
              simulate authentic distances to other traffic and focus on the cognitive processes
              that are pivotal for safe driving.
            </p>
            <p>
              The laboratory provides a reliable method for measuring inattention and associated
              crash potential in a simulated traffic scenario. It lets researchers test how the
              use of a car’s information and entertainment systems affects attention, and use the
              findings to assess and improve driver interfaces.
            </p>
          </div>

          <aside className="about-facts" aria-label="Project details">
            <h2>At a glance</h2>
            <dl className="detail-list">
              <div><dt>Duration</dt><dd>1 May 2024 – 1 May 2034</dd></div>
              <div><dt>Faculty</dt><dd>Information Technology</dd></div>
              <div><dt>Research areas</dt><dd>Learning and Cognitive Sciences · Engineering</dd></div>
              <div><dt>Funding</dt><dd>Research Council of Finland</dd></div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="section section-grey">
        <div className="container">
          <SectionHeading eyebrow="Our approach" title="From controlled measurement to safer interaction" />
          <div className="grid grid-3">
            <article className="card principle-card">
              <span>01</span>
              <h3>Real vehicles</h3>
              <p>Study the systems and controls as they exist in a passenger car.</p>
            </article>
            <article className="card principle-card">
              <span>02</span>
              <h3>Repeatable scenarios</h3>
              <p>Compare interfaces and tasks under controlled simulated traffic conditions.</p>
            </article>
            <article className="card principle-card">
              <span>03</span>
              <h3>Applied evidence</h3>
              <p>Use research results to evaluate interfaces and develop safer designs.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
