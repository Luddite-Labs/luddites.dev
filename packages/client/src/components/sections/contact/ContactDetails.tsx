import { SITE } from '@/lib/constants'

export function ContactDetails() {
  return (
    <aside className="ll-contact-details">
      <div className="ll-contact-details__block">
        <p className="ll-contact-details__label">Email</p>
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
      </div>
      <div className="ll-contact-details__block">
        <p className="ll-contact-details__label">Studio</p>
        <p>{SITE.location}</p>
      </div>
      <div className="ll-contact-details__block">
        <p className="ll-contact-details__label">Engagements</p>
        <p>
          Product builds, platform APIs, and operational tools. Typical projects
          run 6–16 weeks.
        </p>
      </div>
    </aside>
  )
}
