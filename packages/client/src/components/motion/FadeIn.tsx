import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { enterFrom, enterTo, springEnter } from '@/components/motion/springs'

export function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : enterFrom}
      animate={enterTo}
      transition={
        reduce
          ? { duration: 0 }
          : { ...springEnter, delay }
      }
    >
      {children}
    </motion.div>
  )
}
