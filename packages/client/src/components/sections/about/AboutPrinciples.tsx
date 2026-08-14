import { SectionHeading } from '@/components/content/SectionHeading'
import { about } from '@/content'

export function AboutPrinciples() {
  const { principles } = about

  return (
    <section className="border-y bg-muted/20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl space-y-10 px-4 sm:px-6">
        <SectionHeading
          eyebrow={principles.eyebrow}
          title={principles.title}
        />
        <div className="grid gap-6 md:grid-cols-2">
          {principles.items.map((item) => (
            <article
              key={item.title}
              className="space-y-2 border-l-2 border-primary pl-4"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
