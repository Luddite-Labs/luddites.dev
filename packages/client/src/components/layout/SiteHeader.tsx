import { Link } from 'react-router-dom'
import { Logo } from '@/components/brand/Logo'
import { NavLink } from '@/components/layout/NavLink'
import { MobileNav } from '@/components/layout/MobileNav'
import { ThemeToggle } from '@/components/theme/ThemeToggle'
import { Button } from '@/components/ui/button'
import { home } from '@/content'
import { NAV_LINKS } from '@/lib/constants'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-4 px-4 sm:px-6">
        <Logo />
        <nav className="ml-auto hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to}>
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <ThemeToggle />
          <Button asChild size="sm" celebrate className="hidden md:inline-flex">
            <Link to={home.hero.primaryCta.to}>{home.hero.primaryCta.label}</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
