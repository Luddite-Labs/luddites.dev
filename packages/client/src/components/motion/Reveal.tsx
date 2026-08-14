import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { enterTo, revealFrom, springReveal } from '@/components/motion/springs'
import { useSkipEnterOnHydrate } from '@/hooks/useSkipEnterOnHydrate'

export function Reveal({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const reduce = useReducedMotion()
  const skipEnter = useSkipEnterOnHydrate()
  const disable = reduce || skipEnter

  return (
    <motion.div
      className={className}
      initial={disable ? false : revealFrom}
      whileInView={enterTo}
      viewport={{ once: true, amount: 0.25 }}
      transition={disable ? { duration: 0 } : springReveal}
    >
      {children}
    </motion.div>
  )
}
