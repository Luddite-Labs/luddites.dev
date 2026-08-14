import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { motion, useReducedMotion } from 'framer-motion'
import { useCelebrate } from '@/components/celebrate/CelebrateProvider'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'border border-primary bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'border border-destructive bg-destructive text-white hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'border border-border bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost:
          'border border-transparent hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

const springPress = {
  type: 'spring' as const,
  stiffness: 480,
  damping: 16,
  mass: 0.55,
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  /** Play a theme-colored star burst on click (for primary CTAs). */
  celebrate?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      celebrate = false,
      type = 'button',
      onClick,
      ...props
    },
    ref,
  ) => {
    const reduce = useReducedMotion()
    const { celebrateFromEvent } = useCelebrate()
    const classes = cn(buttonVariants({ variant, size, className }))
    const Comp = asChild ? Slot : 'button'

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      if (celebrate) celebrateFromEvent(event)
      onClick?.(event as React.MouseEvent<HTMLButtonElement>)
    }

    const button = (
      <Comp
        ref={ref}
        type={asChild ? undefined : type}
        className={classes}
        onClick={handleClick}
        {...props}
      />
    )

    if (reduce) return button

    return (
      <motion.span
        className="inline-flex origin-center will-change-transform"
        whileHover={{ y: -3, rotate: -2.5 }}
        whileTap={{ y: 2, rotate: 1.5, scaleX: 0.97, scaleY: 1.05 }}
        transition={springPress}
      >
        {button}
      </motion.span>
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
