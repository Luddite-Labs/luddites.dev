import { SectionHeading } from '@/components/content/SectionHeading'
import { Prose } from '@/components/content/Prose'
import { home } from '@/content'

export function HomePromise() {
  const { promise } = home

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-2 md:items-end">
        <SectionHeading eyebrow={promise.eyebrow} title={promise.title} />
        <Prose>
          {promise.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Prose>
      </div>
    </section>
  )
}
