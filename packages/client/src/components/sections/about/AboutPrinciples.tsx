import { SectionHeading } from '@/components/content/SectionHeading'
import { Reveal } from '@/components/motion/Reveal'
import { Stagger, StaggerItem } from '@/components/motion/Stagger'
import type { Principle } from '@/types/content'

const principles: Principle[] = [
  {
    title: 'Fewer parts',
    body: 'Complexity is a tax. We pay it only when the problem demands it.',
  },
  {
    title: 'Readable seams',
    body: 'Boundaries should be obvious to the next engineer at 2 a.m.',
  },
  {
    title: 'Honest interfaces',
    body: 'UI and APIs should say what they mean—no dark patterns, no surprise payloads.',
  },
  {
    title: 'Workshop pace',
    body: 'Fast where it is cheap, slow where mistakes are expensive.',
  },
]

export function AboutPrinciples() {
  return (
    <section className="ll-section ll-section--tight">
      <div className="ll-container">
        <Reveal>
          <SectionHeading
            eyebrow="Principles"
            title="How we work the bench"
            className="ll-section-heading--spaced"
          />
        </Reveal>
        <Stagger className="ll-principles">
          {principles.map((item) => (
            <StaggerItem key={item.title}>
              <article className="ll-principle">
                <h3 className="ll-principle__title">{item.title}</h3>
                <p className="ll-principle__body">{item.body}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
