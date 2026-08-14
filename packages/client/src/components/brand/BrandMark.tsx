import { cn } from '@/lib/utils'

export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'flex size-8 items-center justify-center rounded-md bg-primary text-sm font-semibold text-primary-foreground',
        className,
      )}
      aria-hidden="true"
    >
      L
    </span>
  )
}
