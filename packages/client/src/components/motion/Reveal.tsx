import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { enterTo, revealFrom, springReveal } from '@/components/motion/springs'

export function Reveal({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : revealFrom}
      whileInView={enterTo}
      viewport={{ once: true, amount: 0.25 }}
      transition={reduce ? { duration: 0 } : springReveal}
    >
      {children}
    </motion.div>
  )
}
