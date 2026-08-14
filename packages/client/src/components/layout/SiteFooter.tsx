import { Logo } from '@/components/brand/Logo'
import { NavLink } from '@/components/layout/NavLink'
import { SITE, NAV_LINKS } from '@/lib/constants'

export function SiteFooter() {
  return (
    <footer className="ll-footer">
      <div className="ll-container">
        <div className="ll-footer__inner">
          <div className="ll-footer__brand">
            <Logo />
            <p className="ll-footer__copy">{SITE.tagline}</p>
          </div>
          <div>
            <p className="ll-footer__heading">Navigate</p>
            <ul className="ll-footer__list">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} variant="footer">
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="ll-footer__heading">Contact</p>
            <ul className="ll-footer__list">
              <li>
                <a className="ll-footer__link" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>
              </li>
              <li>
                <span className="ll-footer__copy">{SITE.location}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="ll-footer__meta">
          <span>© {new Date().getFullYear()} {SITE.name}</span>
          <span>Built with deliberate tooling</span>
        </div>
      </div>
    </footer>
  )
}
