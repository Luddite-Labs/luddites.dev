import { SectionHeading } from '@/components/content/SectionHeading'
import { Prose } from '@/components/content/Prose'
import { Reveal } from '@/components/motion/Reveal'
import { about } from '@/content'

export function AboutStory() {
  const { story } = about

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-2 md:items-end">
        <Reveal>
          <SectionHeading eyebrow={story.eyebrow} title={story.title} />
        </Reveal>
        <Reveal>
          <Prose>
            {story.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Prose>
        </Reveal>
      </div>
    </section>
  )
}
