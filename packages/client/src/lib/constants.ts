import { site } from '@/content'
import { getSiteUrl } from '@/lib/env'

export const SITE = {
  name: site.name,
  tagline: site.tagline,
  email: site.email,
  location: site.location,
  url: getSiteUrl(),
} as const

export const NAV_LINKS = site.nav
