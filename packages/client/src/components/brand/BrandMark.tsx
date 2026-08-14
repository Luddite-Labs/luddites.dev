import { cn } from '@/lib/utils'
import { ASSETS } from '@/lib/assets'

export function BrandMark({ className }: { className?: string }) {
  return (
    <span className={cn('relative inline-flex size-8 shrink-0', className)}>
      <img
        src={ASSETS.logo}
        alt=""
        width={128}
        height={128}
        className="size-8 dark:hidden"
        aria-hidden="true"
      />
      <img
        src={ASSETS.logoDark}
        alt=""
        width={128}
        height={128}
        className="hidden size-8 dark:block"
        aria-hidden="true"
      />
    </span>
  )
}
