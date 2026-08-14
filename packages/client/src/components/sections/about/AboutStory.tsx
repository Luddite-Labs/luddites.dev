import { SectionHeading } from '@/components/content/SectionHeading'
import { Prose } from '@/components/content/Prose'
import { Reveal } from '@/components/motion/Reveal'

export function AboutStory() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-2 md:items-end">
        <Reveal>
          <SectionHeading eyebrow="Story" title="Craft over cadence theater" />
        </Reveal>
        <Reveal>
          <Prose>
            <p>
              Luddite Labs started as a refusal: refuse bloated stacks, refuse
              roadmap theater, refuse interfaces that treat users like traffic.
            </p>
            <p>
              Today we partner with product and ops teams who want software that
              feels considered—measured, maintainable, and a little bit proud of
              its joints.
            </p>
          </Prose>
        </Reveal>
      </div>
    </section>
  )
}
