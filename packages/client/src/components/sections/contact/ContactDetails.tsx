import { SITE } from '@/lib/constants'
import { contact } from '@/content'

export function ContactDetails() {
  return (
    <aside className="space-y-6">
      {contact.details.map((detail) => (
        <div key={detail.label} className="space-y-1 border-t pt-4">
          <p className="text-sm font-medium">{detail.label}</p>
          {detail.type === 'email' ? (
            <a
              className="text-sm text-muted-foreground hover:text-foreground"
              href={`mailto:${SITE.email}`}
            >
              {SITE.email}
            </a>
          ) : null}
          {detail.type === 'location' ? (
            <p className="text-sm text-muted-foreground">{SITE.location}</p>
          ) : null}
          {detail.type === 'text' ? (
            <p className="text-sm text-muted-foreground">{detail.body}</p>
          ) : null}
        </div>
      ))}
    </aside>
  )
}
