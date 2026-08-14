import { cn } from '@/lib/utils'
import { ASSETS } from '@/lib/assets'

export function BrandMark({ className }: { className?: string }) {
  return (
    <img
      src={ASSETS.logo}
      alt=""
      width={128}
      height={128}
      className={cn('size-8', className)}
      aria-hidden="true"
    />
  )
}
