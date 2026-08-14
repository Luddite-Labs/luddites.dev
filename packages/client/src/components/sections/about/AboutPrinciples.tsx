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
    <section className="border-y bg-muted/20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl space-y-10 px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Principles"
            title="How we work the bench"
          />
        </Reveal>
        <Stagger className="grid gap-6 md:grid-cols-2">
          {principles.map((item) => (
            <StaggerItem key={item.title}>
              <article className="space-y-2 border-l-2 border-primary pl-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.body}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
