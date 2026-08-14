import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { springPage } from '@/components/motion/springs'

export function PageTransition({ children }: { children: ReactNode }) {
  const location = useLocation()
  const reduce = useReducedMotion()
  // Skip only the first paint after SSG hydrate; animate later client navigations.
  const isFirstPaint = useRef(true)

  useEffect(() => {
    isFirstPaint.current = false
  }, [])

  const disableEnter = reduce || isFirstPaint.current

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={
          disableEnter ? false : { opacity: 0, y: 18, scale: 0.985 }
        }
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={reduce ? undefined : { opacity: 0, y: -12, scale: 0.99 }}
        transition={reduce ? { duration: 0 } : springPage}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
