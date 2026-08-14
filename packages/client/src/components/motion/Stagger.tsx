import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { enterTo, revealFrom, springReveal } from '@/components/motion/springs'
import { useSkipEnterOnHydrate } from '@/hooks/useSkipEnterOnHydrate'

export function Stagger({
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
      initial={disable ? false : 'hidden'}
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: disable ? 0 : 0.08,
            delayChildren: disable ? 0 : 0.04,
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
  const skipEnter = useSkipEnterOnHydrate()
  const disable = reduce || skipEnter

  return (
    <motion.div
      className={className}
      variants={{
        hidden: disable ? enterTo : revealFrom,
        show: {
          ...enterTo,
          transition: disable ? { duration: 0 } : springReveal,
        },
      }}
    >
      {children}
    </motion.div>
  )
}
