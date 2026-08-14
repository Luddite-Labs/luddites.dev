import { Link } from 'react-router-dom'
import { Logo } from '@/components/brand/Logo'
import { NavLink } from '@/components/layout/NavLink'
import { MobileNav } from '@/components/layout/MobileNav'
import { Button } from '@/components/ui/button'
import { NAV_LINKS } from '@/lib/constants'

export function SiteHeader() {
  return (
    <header className="ll-header">
      <div className="ll-container ll-header__inner">
        <Logo />
        <nav className="ll-header__nav" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to}>
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="ll-header__actions">
          <Button asChild variant="secondary" size="sm" className="ll-header__cta-desktop">
            <Link to="/contact">Start a project</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
