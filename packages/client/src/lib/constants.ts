export const SITE = {
  name: 'Luddite Labs',
  tagline: 'Software built with craft, clarity, and restraint.',
  email: 'hello@ludditelabs.dev',
  location: 'Remote-first workshop',
} as const

export const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
] as const
