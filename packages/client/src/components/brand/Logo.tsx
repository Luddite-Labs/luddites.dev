import { Link } from 'react-router-dom'
import { BrandMark } from '@/components/brand/BrandMark'
import { Wordmark } from '@/components/brand/Wordmark'
import { cn } from '@/lib/utils'

export function Logo({
  className,
  showWordmark = true,
}: {
  className?: string
  showWordmark?: boolean
}) {
  return (
    <Link to="/" className={cn('ll-logo', className)} aria-label="Luddite Labs home">
      <BrandMark />
      {showWordmark ? <Wordmark /> : null}
    </Link>
  )
}
