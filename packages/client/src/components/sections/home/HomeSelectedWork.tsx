import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { SectionHeading } from '@/components/content/SectionHeading'
import { WorkCard } from '@/components/sections/work/WorkCard'
import { Reveal } from '@/components/motion/Reveal'
import { Button } from '@/components/ui/button'
import { home } from '@/content'
import { selectFeaturedWork } from '@/features/work/workSlice'

export function HomeSelectedWork() {
  const items = useSelector(selectFeaturedWork)
  const { selectedWork } = home

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl space-y-10 px-4 sm:px-6">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow={selectedWork.eyebrow}
              title={selectedWork.title}
            />
            <Button asChild variant="outline">
              <Link to={selectedWork.ctaTo}>{selectedWork.ctaLabel}</Link>
            </Button>
          </div>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <Reveal key={item.slug}>
              <WorkCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
