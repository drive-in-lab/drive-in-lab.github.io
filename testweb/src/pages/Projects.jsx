import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import { project, projectGoals } from '../content/projects'
import './Projects.css'

export default function Projects() {
  return (
    <>
      <PageHero
        eyebrow="The project"
        title="Drive-In Lab, 2024–2034"
        subtitle="A University of Jyväskylä research project developing reliable methods for evaluating driver inattention and in-car interfaces."
        marker="Research project"
      />

      <section className="section">
        <div className="container project-overview">
          <div>
            <span className="eyebrow">Project description</span>
            <h2>Connecting real vehicles to controlled driving simulation</h2>
            <p className="project-lead">
              The laboratory makes it possible to study drivers’ behaviour with authentic car
              systems while preserving the repeatability and safety of simulation.
            </p>
            <p>
              Its front and rear projections support realistic distances to other traffic. Data
              from driving logs, eye movements, video, and questionnaires can then be used to
              understand how different in-car tasks affect attention and potential crash risk.
            </p>
            <a className="btn" href={project.officialUrl} target="_blank" rel="noreferrer">
              Official project page
            </a>
          </div>

          <aside className="project-meta" aria-label="Project information">
            <dl className="detail-list">
              <div><dt>Duration</dt><dd>{project.duration}</dd></div>
              <div><dt>Faculty</dt><dd>{project.faculty}</dd></div>
              <div><dt>Funding</dt><dd>{project.funding}</dd></div>
              <div><dt>Core field</dt><dd>{project.coreField}</dd></div>
              <div><dt>Research areas</dt><dd>{project.areas}</dd></div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="section section-grey">
        <div className="container">
          <SectionHeading eyebrow="Objectives" title="What the project enables" />
          <div className="grid grid-3 project-goal-grid">
            {projectGoals.map((goal, index) => (
              <article className="card project-goal" key={goal.title}>
                <span>0{index + 1}</span>
                <h3>{goal.title}</h3>
                <p>{goal.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section project-highlight">
        <div className="container project-highlight-inner">
          <div className="award-mark" aria-hidden="true">1%</div>
          <div>
            <span className="eyebrow">Research recognition</span>
            <h2>Best Paper Award at CHI 2025</h2>
            <p>
              The article introducing Drive-In Lab and its first evaluations received a Best Paper
              Award at the ACM CHI Conference—recognition given to the top one percent of submissions.
            </p>
            <a
              className="text-link"
              href="https://doi.org/10.1145/3706598.3713590"
              target="_blank"
              rel="noreferrer"
            >
              Read the publication
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
