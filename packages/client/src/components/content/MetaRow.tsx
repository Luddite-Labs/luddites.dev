import { cn } from '@/lib/utils'

export type MetaItem = {
  label: string
  value: string
}

export function MetaRow({
  items,
  className,
}: {
  items: MetaItem[]
  className?: string
}) {
  return (
    <dl className={cn('ll-meta-row', className)}>
      {items.map((item) => (
        <div key={item.label} className="ll-meta-row__item">
          <dt className="ll-meta-row__label">{item.label}</dt>
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
  )
}
