import { Logo } from '@/components/brand/Logo'
import { NavLink } from '@/components/layout/NavLink'
import { Separator } from '@/components/ui/separator'
import { site } from '@/content'
import { SITE, NAV_LINKS } from '@/lib/constants'

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div className="space-y-3">
          <Logo />
          <p className="max-w-sm text-sm text-muted-foreground">{SITE.tagline}</p>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-medium">{site.footer.navigateHeading}</p>
          <ul className="space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} variant="footer">
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-medium">{site.footer.contactHeading}</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a className="hover:text-foreground" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
            </li>
            <li>{SITE.location}</li>
          </ul>
        </div>
      </div>
      <Separator />
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <span>
          © {new Date().getFullYear()} {SITE.name}
        </span>
        <span>{site.footer.metaNote}</span>
      </div>
    </footer>
  )
}
