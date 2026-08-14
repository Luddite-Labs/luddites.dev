import type { ReactNode } from 'react'
import { NavLink as RouterNavLink } from 'react-router-dom'
import { cn } from '@/lib/utils'

export function NavLink({
  to,
  children,
  className,
  onClick,
  variant = 'default',
}: {
  to: string
  children: ReactNode
  className?: string
  onClick?: () => void
  variant?: 'default' | 'footer' | 'mobile'
}) {
  return (
    <RouterNavLink
      to={to}
      end={to === '/'}
      onClick={onClick}
      className={({ isActive }) =>
        cn(
          variant === 'mobile'
            ? 'll-mobile-nav__link'
            : variant === 'footer'
              ? 'll-nav-link ll-nav-link--footer'
              : 'll-nav-link',
          isActive && variant === 'default' && 'll-nav-link--active',
          className,
        )
      }
    >
      {children}
    </RouterNavLink>
  )
}
