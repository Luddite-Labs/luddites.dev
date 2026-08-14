import { SectionHeading } from '@/components/content/SectionHeading'
import { Prose } from '@/components/content/Prose'
import { Reveal } from '@/components/motion/Reveal'

export function HomePromise() {
  return (
    <section className="ll-section">
      <div className="ll-container ll-promise">
        <Reveal>
          <SectionHeading
            eyebrow="The promise"
            title="We slow down where it matters so your software can move faster later."
          />
        </Reveal>
        <Reveal>
          <Prose>
            <p>
              Most teams do not need more frameworks. They need sharper
              boundaries, cleaner data, and interfaces people can trust under
              pressure.
            </p>
            <p>
              We treat software like shop work: measure twice, cut once, leave
              the bench ready for the next craftsperson.
            </p>
          </Prose>
        </Reveal>
      </div>
    </section>
  )
}
