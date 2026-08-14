import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { enterFrom, enterTo, springPage } from '@/components/motion/springs'

/**
 * Route transitions use transform only (no opacity) and skip the first paint
 * after SSG hydrate so prerendered HTML never flashes away.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const location = useLocation()
  const reduce = useReducedMotion()
  const isFirstPaint = useRef(true)

  useEffect(() => {
    isFirstPaint.current = false
  }, [])

  const disableEnter = reduce || isFirstPaint.current

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={disableEnter ? false : enterFrom}
        animate={enterTo}
        exit={reduce ? undefined : { y: -10, scale: 0.995 }}
        transition={reduce ? { duration: 0 } : springPage}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
