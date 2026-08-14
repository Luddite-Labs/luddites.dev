import { SITE } from '@/lib/constants'

export function ContactDetails() {
  return (
    <aside className="space-y-6">
      <div className="space-y-1 border-t pt-4">
        <p className="text-sm font-medium">Email</p>
        <a
          className="text-sm text-muted-foreground hover:text-foreground"
          href={`mailto:${SITE.email}`}
        >
          {SITE.email}
        </a>
      </div>
      <div className="space-y-1 border-t pt-4">
        <p className="text-sm font-medium">Studio</p>
        <p className="text-sm text-muted-foreground">{SITE.location}</p>
      </div>
      <div className="space-y-1 border-t pt-4">
        <p className="text-sm font-medium">Engagements</p>
        <p className="text-sm text-muted-foreground">
          Product builds, platform APIs, and operational tools. Typical projects
          run 6–16 weeks.
        </p>
      </div>
    </aside>
  )
}
