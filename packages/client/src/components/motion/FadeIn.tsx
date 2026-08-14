import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { enterFrom, enterTo, springEnter } from '@/components/motion/springs'
import { useSkipEnterOnHydrate } from '@/hooks/useSkipEnterOnHydrate'

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
  const skipEnter = useSkipEnterOnHydrate()
  const disable = reduce || skipEnter

  return (
    <motion.div
      className={className}
      initial={disable ? false : enterFrom}
      animate={enterTo}
      transition={disable ? { duration: 0 } : { ...springEnter, delay }}
    >
      {children}
    </motion.div>
  )
}
