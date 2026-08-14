import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function Prose({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'max-w-xl space-y-4 text-base leading-relaxed text-muted-foreground',
        className,
      )}
    >
      {children}
    </div>
  )
}
