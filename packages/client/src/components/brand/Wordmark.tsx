import { cn } from '@/lib/utils'
import { site } from '@/content'

function highlightLeadingLs(name: string) {
  return name.split(' ').map((word, index) => (
    <span key={`${word}-${index}`}>
      {index > 0 ? ' ' : null}
      {word.charAt(0) ? (
        <span className="text-primary">{word.charAt(0)}</span>
      ) : null}
      {word.slice(1)}
    </span>
  ))
}

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
      {hero ? highlightLeadingLs(site.name) : site.name}
    </Comp>
  )
}
