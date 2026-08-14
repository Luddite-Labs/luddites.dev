import type { Transition } from 'framer-motion'

/** Soft spring for page/hero entrances */
export const springEnter: Transition = {
  type: 'spring',
  stiffness: 320,
  damping: 22,
  mass: 0.85,
}

/** Slightly bouncier spring for scroll reveals and stagger items */
export const springReveal: Transition = {
  type: 'spring',
  stiffness: 380,
  damping: 18,
  mass: 0.75,
}

/** Snappy spring for page route transitions */
export const springPage: Transition = {
  type: 'spring',
  stiffness: 420,
  damping: 28,
  mass: 0.7,
}

export const enterFrom = {
  opacity: 0,
  y: 28,
  scale: 0.96,
} as const

export const enterTo = {
  opacity: 1,
  y: 0,
  scale: 1,
} as const

export const revealFrom = {
  opacity: 0,
  y: 36,
  scale: 0.94,
} as const
