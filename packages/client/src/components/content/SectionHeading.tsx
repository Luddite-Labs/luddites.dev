import { Eyebrow } from '@/components/content/Eyebrow'
import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  lede,
  className,
}: {
  eyebrow?: string
  title: string
  lede?: string
  className?: string
}) {
  return (
    <header className={cn('ll-section-heading', className)}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="ll-section-heading__title">{title}</h2>
      {lede ? <p className="ll-section-heading__lede">{lede}</p> : null}
    </header>
  )
}
