import { cn } from '@/lib/utils'
import { ASSETS } from '@/lib/assets'

export function BrandMark({ className }: { className?: string }) {
  return (
    <img
      src={ASSETS.logo}
      alt=""
      width={32}
      height={32}
      className={cn('size-8 rounded-md', className)}
      aria-hidden="true"
    />
  )
}
