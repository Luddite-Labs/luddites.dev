import { site } from '@/content'

export const SITE = {
  name: site.name,
  tagline: site.tagline,
  email: site.email,
  location: site.location,
} as const

export const NAV_LINKS = site.nav
