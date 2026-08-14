import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <p className={cn('ll-eyebrow', className)}>
      <span className="ll-eyebrow__rule" aria-hidden="true" />
      <span>{children}</span>
    </p>
  )
}
