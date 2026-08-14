import { useEffect, useRef } from 'react'

/**
 * Skip enter motion for components that mount during the first client paint
 * (SSG hydrate). SPA navigations mount later and still animate.
 *
 * Uses a post-paint flag so React Strict Mode remounts on the first page
 * still skip (avoids flash → hide → spring).
 */
let allowEnterMotion = false
let hydrateTimer: ReturnType<typeof setTimeout> | undefined

export function armEnterMotionAfterHydrate() {
  if (hydrateTimer) clearTimeout(hydrateTimer)
  // After first paint + a tick, allow enter animations on future mounts.
  hydrateTimer = setTimeout(() => {
    allowEnterMotion = true
  }, 100)
}

export function useSkipEnterOnHydrate() {
  const skip = useRef(!allowEnterMotion)
  return skip.current
}
