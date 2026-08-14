import type { ReactNode } from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { cn } from '@/lib/utils'

/** Thin Radix navigation primitive for future mega-navs; header uses NavLink today. */
export function NavMenu({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <NavigationMenu.Root className={cn('ll-nav-menu', className)}>
      <NavigationMenu.List className="ll-nav-menu__list">
        {children}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
}

export function NavMenuItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <NavigationMenu.Item className={cn('ll-nav-menu__item', className)}>
      {children}
    </NavigationMenu.Item>
  )
}

export const NavMenuLink = NavigationMenu.Link
