import { SectionHeading } from '@/components/content/SectionHeading'
import { Reveal } from '@/components/motion/Reveal'
import { Stagger, StaggerItem } from '@/components/motion/Stagger'
import { about } from '@/content'

export function AboutPrinciples() {
  const { principles } = about

  return (
    <section className="border-y bg-muted/20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl space-y-10 px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow={principles.eyebrow}
            title={principles.title}
          />
        </Reveal>
        <Stagger className="grid gap-6 md:grid-cols-2">
          {principles.items.map((item) => (
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
