import { SectionHeading } from '@/components/content/SectionHeading'
import { Reveal } from '@/components/motion/Reveal'
import { Stagger, StaggerItem } from '@/components/motion/Stagger'
import type { Capability } from '@/types/content'

const capabilities: Capability[] = [
  {
    index: '01',
    title: 'Product systems',
    body: 'End-to-end web products with sober IA, accessible UI, and performance that holds up in the wild.',
  },
  {
    index: '02',
    title: 'Platform APIs',
    body: 'Contracts, versioning, and docs that partners can build against without tribal knowledge.',
  },
  {
    index: '03',
    title: 'Operational tools',
    body: 'Internal consoles that cut noise, expose decisions, and respect the people on call.',
  },
]

export function HomeCapabilities() {
  return (
    <section className="ll-section ll-section--tight">
      <div className="ll-container">
        <Reveal>
          <SectionHeading
            eyebrow="Capabilities"
            title="What we build"
            lede="Focused engagements—not bloated roadmaps."
            className="ll-section-heading--spaced"
          />
        </Reveal>
        <Stagger className="ll-capabilities">
          {capabilities.map((item) => (
            <StaggerItem key={item.index}>
              <article className="ll-capability">
                <p className="ll-capability__index">{item.index}</p>
                <h3 className="ll-capability__title">{item.title}</h3>
                <p className="ll-capability__body">{item.body}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
