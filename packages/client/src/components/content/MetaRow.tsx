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
    <dl className={cn('flex flex-wrap gap-x-6 gap-y-2 text-sm', className)}>
      {items.map((item) => (
        <div key={item.label} className="flex gap-2">
          <dt className="text-muted-foreground">{item.label}</dt>
          <dd className="font-medium">{item.value}</dd>
        </div>
      ))}
    </dl>
  )
}
