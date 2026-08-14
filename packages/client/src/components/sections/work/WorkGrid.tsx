import { useSelector } from 'react-redux'
import { WorkCard } from '@/components/sections/work/WorkCard'
import { Stagger, StaggerItem } from '@/components/motion/Stagger'
import { selectWorkItems } from '@/features/work/workSlice'

export function WorkGrid() {
  const items = useSelector(selectWorkItems)

  return (
    <section className="ll-section">
      <div className="ll-container">
        <Stagger className="ll-work-grid">
          {items.map((item) => (
            <StaggerItem key={item.slug}>
              <WorkCard item={item} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
