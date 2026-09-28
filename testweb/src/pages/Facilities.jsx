import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import { facilities } from '../content/facilities'
import './Facilities.css'

const labImage = 'https://www.jyu.fi/sites/default/files/styles/16_9_max_1440px/public/2024-05/JYU_Ajosimulaattori_025.jpg?h=be5bcf52&itok=r2Yr8iPb'

export default function Facilities() {
  return (
    <>
      <PageHero
        eyebrow="Facilities"
        title="A real car inside the simulation"
        subtitle="The Drive-In Lab combines a participant’s own driving environment with controlled, repeatable traffic scenarios."
        marker="Laboratory"
      />

      <section className="facility-photo-section">
        <div className="container">
          <figure className="facility-photo">
            <img src={labImage} alt="Passenger car positioned in the Drive-In Lab projection space" />
            <figcaption>
              Any passenger car can be linked to the driving simulation. Photo: Petteri Kivimäki.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Capabilities"
            title="Designed for authentic, measurable interaction"
            subtitle="The facility preserves real controls and interfaces while providing the consistency needed for experimental comparison."
          />
          <div className="facility-list">
            {facilities.map((facility) => (
              <article className="facility-item" key={facility.title}>
                <span>{facility.number}</span>
                <h3>{facility.title}</h3>
                <p>{facility.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-blue facility-methods">
        <div className="container facility-methods-inner">
          <div>
            <span className="eyebrow">Data collection</span>
            <h2>Multiple views of driver behaviour</h2>
          </div>
          <ul>
            <li>Driving logs</li>
            <li>Eye-movement measurements</li>
            <li>Video recordings</li>
            <li>Questionnaires</li>
          </ul>
        </div>
      </section>
    </>
  )
}
