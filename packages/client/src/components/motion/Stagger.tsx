import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { enterTo, revealFrom, springReveal } from '@/components/motion/springs'

export function Stagger({
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
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: reduce ? 0 : 0.08,
            delayChildren: reduce ? 0 : 0.04,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
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
      variants={{
        hidden: reduce ? enterTo : revealFrom,
        show: {
          ...enterTo,
          transition: reduce ? { duration: 0 } : springReveal,
        },
      }}
    >
      {children}
    </motion.div>
  )
}
