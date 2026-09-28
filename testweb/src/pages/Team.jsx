import PageHero from '../components/ui/PageHero'
import { team } from '../content/team'
import './Team.css'

export default function Team() {
  return (
    <>
      <PageHero
        eyebrow="People"
        title="Meet the Drive-In Lab team"
        subtitle="Researchers from Educational Technology and Cognitive Science at the University of Jyväskylä’s Faculty of Information Technology."
        marker="Project team"
      />

      <section className="section">
        <div className="container team-list">
          {team.map((member, index) => (
            <article className="team-member" key={member.name}>
              <div className="team-index" aria-hidden="true">0{index + 1}</div>
              <div className="team-photo">
                {member.photo ? (
                  <img src={member.photo} alt={`Portrait of ${member.name}`} />
                ) : (
                  <span>{member.name.split(' ').map((part) => part[0]).join('').slice(0, 2)}</span>
                )}
              </div>
              <div className="team-content">
                <h2>{member.name}</h2>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
                <div className="team-contact">
                  <a href={`mailto:${member.email}`}>{member.email}</a>
                  {member.phone && <a href={`tel:${member.phone.replace(/\s/g, '')}`}>{member.phone}</a>}
                </div>
              </div>
              <a
                className="team-profile"
                href={member.profile}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${member.name}'s JYU profile`}
              >
                JYU profile <span aria-hidden="true">&#8599;</span>
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
