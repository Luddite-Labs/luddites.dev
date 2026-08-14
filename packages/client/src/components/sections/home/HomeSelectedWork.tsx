import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { SectionHeading } from '@/components/content/SectionHeading'
import { WorkCard } from '@/components/sections/work/WorkCard'
import { Reveal } from '@/components/motion/Reveal'
import { Button } from '@/components/ui/button'
import { selectFeaturedWork } from '@/features/work/workSlice'

export function HomeSelectedWork() {
  const items = useSelector(selectFeaturedWork)

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl space-y-10 px-4 sm:px-6">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Selected work"
              title="Case studies from the bench"
            />
            <Button asChild variant="outline">
              <Link to="/work">All projects</Link>
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
