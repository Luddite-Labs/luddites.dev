import { cn } from '@/lib/utils'

export function Wordmark({
  className,
  hero = false,
  as: Comp = 'span',
}: {
  className?: string
  hero?: boolean
  as?: 'span' | 'h1' | 'p'
}) {
  return (
    <Comp
      className={cn('ll-wordmark', hero && 'll-wordmark--hero', className)}
    >
      Luddite <span className="ll-wordmark__labs">Labs</span>
    </Comp>
  )
}
