import { useEffect, useRef } from 'react'

/**
 * After SSG HTML is visible, Framer Motion would re-apply `initial` (opacity 0)
 * on hydrate and cause a flash. Skip enter animations until the app has mounted once.
 */
let clientReady = false

export function useSkipEnterOnHydrate() {
  const skip = useRef(!clientReady)

  useEffect(() => {
    clientReady = true
  }, [])

  return skip.current
}
