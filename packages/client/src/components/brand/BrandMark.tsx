import { cn } from '@/lib/utils'

export function BrandMark({ className }: { className?: string }) {
  return (
    <span className={cn('ll-brand-mark', className)} aria-hidden="true">
      <span className="ll-brand-mark__glyph">L</span>
      <span className="ll-brand-mark__rule" />
    </span>
  )
}
