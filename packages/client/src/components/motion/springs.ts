import type { Transition } from 'framer-motion'

/** Soft spring for page/hero entrances */
export const springEnter: Transition = {
  type: 'spring',
  stiffness: 320,
  damping: 24,
  mass: 0.85,
}

/** Slightly bouncier spring for scroll reveals and stagger items */
export const springReveal: Transition = {
  type: 'spring',
  stiffness: 380,
  damping: 20,
  mass: 0.75,
}

/** Snappy spring for page route transitions */
export const springPage: Transition = {
  type: 'spring',
  stiffness: 420,
  damping: 30,
  mass: 0.7,
}

/**
 * Transform-only motion — never animate opacity.
 * Opacity 0 on hydrate is what caused the flash/reappear.
 */
export const enterFrom = {
  y: 20,
  scale: 0.98,
} as const

export const enterTo = {
  y: 0,
  scale: 1,
} as const

export const revealFrom = {
  y: 28,
  scale: 0.98,
} as const
