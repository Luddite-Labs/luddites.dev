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
    <section className="ll-section">
      <div className="ll-container">
        <Reveal>
          <div className="ll-section-head-row">
            <SectionHeading
              eyebrow="Selected work"
              title="Case studies from the bench"
            />
            <Button asChild variant="secondary">
              <Link to="/work">All projects</Link>
            </Button>
          </div>
        </Reveal>
        <div className="ll-work-grid">
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
