export type NavLink = {
  to: string
  label: string
}

export type CtaLink = {
  label: string
  to: string
}

export type WorkCase = {
  slug: string
  title: string
  client: string
  year: string
  summary: string
  problem: string
  approach: string
  outcome: string
  stack: string[]
  /** Optional public or org repository URL */
  repo?: string
}

export type Principle = {
  title: string
  body: string
}

export type TeamMember = {
  name: string
  role: string
  bio: string
}

export type Capability = {
  index: string
  title: string
  body: string
}

export type SiteContent = {
  name: string
  tagline: string
  email: string
  location: string
  nav: NavLink[]
  footer: {
    navigateHeading: string
    contactHeading: string
    metaNote: string
  }
}

export type HomeContent = {
  hero: {
    headline: string
    lede: string
    primaryCta: CtaLink
    secondaryCta: CtaLink
  }
  promise: {
    eyebrow: string
    title: string
    paragraphs: string[]
  }
  capabilities: {
    eyebrow: string
    title: string
    lede: string
    items: Capability[]
  }
  selectedWork: {
    eyebrow: string
    title: string
    ctaLabel: string
    ctaTo: string
    featuredCount: number
  }
  cta: {
    eyebrow: string
    title: string
    lede: string
    primaryCta: CtaLink
    secondaryCta: CtaLink
  }
}

export type AboutContent = {
  hero: {
    eyebrow: string
    title: string
    lede: string
  }
  story: {
    eyebrow: string
    title: string
    paragraphs: string[]
  }
  principles: {
    eyebrow: string
    title: string
    items: Principle[]
  }
  team: {
    eyebrow: string
    title: string
    lede: string
    members: TeamMember[]
  }
}

export type WorkPageContent = {
  hero: {
    eyebrow: string
    title: string
    lede: string
  }
  detail: {
    eyebrow: string
    contextLabel: string
    stackLabel: string
    repoLabel: string
    backLabel: string
    ctaLabel: string
    missingTitle: string
    missingEyebrow: string
  }
  card: {
    footerLabel: string
  }
}

export type ContactContent = {
  hero: {
    eyebrow: string
    title: string
    lede: string
  }
  details: Array<
    | { label: string; type: 'email' }
    | { label: string; type: 'location' }
    | { label: string; type: 'text'; body: string }
  >
  form: {
    submitLabel: string
    pendingLabel: string
    successMessage: string
    errorMessage: string
    fields: {
      name: { label: string; placeholder: string }
      email: { label: string; placeholder: string }
      company: { label: string; placeholder: string }
      message: { label: string; placeholder: string }
    }
  }
}
