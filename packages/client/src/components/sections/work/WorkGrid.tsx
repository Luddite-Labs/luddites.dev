import { useSelector } from 'react-redux'
import { WorkCard } from '@/components/sections/work/WorkCard'
import { selectWorkItems } from '@/features/work/workSlice'

export function WorkGrid() {
  const items = useSelector(selectWorkItems)

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <WorkCard key={item.slug} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
