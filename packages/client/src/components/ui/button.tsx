import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'ghost'
  | 'accent'
  | 'inverse'

export type ButtonSize = 'sm' | 'md' | 'lg' | 'icon'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  asChild?: boolean
}

const variantClass: Record<ButtonVariant, string> = {
  primary: 'll-button--primary',
  secondary: 'll-button--secondary',
  ghost: 'll-button--ghost',
  accent: 'll-button--accent',
  inverse: 'll-button--inverse',
}

const sizeClass: Record<ButtonSize, string> = {
  sm: 'll-button--sm',
  md: '',
  lg: 'll-button--lg',
  icon: 'll-button--icon',
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      asChild = false,
      type = 'button',
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        ref={ref}
        {...(asChild ? {} : { type })}
        className={cn(
          'll-button',
          variantClass[variant],
          sizeClass[size],
          className,
        )}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'
