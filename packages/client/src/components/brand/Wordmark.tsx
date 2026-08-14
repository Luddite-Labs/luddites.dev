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
      className={cn(
        'font-semibold tracking-tight',
        hero ? 'text-4xl sm:text-5xl md:text-6xl' : 'text-base',
        className,
      )}
    >
      Luddite Labs
    </Comp>
  )
}
