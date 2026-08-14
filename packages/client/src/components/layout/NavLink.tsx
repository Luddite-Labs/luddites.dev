import type { ReactNode } from 'react'
import { NavLink as RouterNavLink } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

export function NavLink({
  to,
  children,
  className,
  onClick,
  variant = 'nav',
}: {
  to: string
  children: ReactNode
  className?: string
  onClick?: () => void
  variant?: 'nav' | 'mobile' | 'footer'
}) {
  return (
    <RouterNavLink
      to={to}
      end={to === '/'}
      onClick={onClick}
      className={({ isActive }) =>
        cn(
          variant === 'nav' &&
            cn(
              buttonVariants({ variant: 'ghost', size: 'sm' }),
              isActive && 'bg-accent text-accent-foreground',
            ),
          variant === 'mobile' &&
            cn(
              'block rounded-md px-3 py-2 text-base font-medium hover:bg-accent',
              isActive && 'bg-accent',
            ),
          variant === 'footer' &&
            'text-sm text-muted-foreground hover:text-foreground',
          className,
        )
      }
    >
      {children}
    </RouterNavLink>
  )
}
