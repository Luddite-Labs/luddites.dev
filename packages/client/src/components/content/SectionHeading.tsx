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
    <header className={cn('max-w-2xl space-y-3', className)}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {lede ? <p className="text-lg text-muted-foreground">{lede}</p> : null}
    </header>
  )
}
