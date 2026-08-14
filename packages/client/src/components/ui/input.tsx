import * as React from 'react'
import { cn } from '@/lib/utils'

export const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<'input'>
>(({ className, type = 'text', ...props }, ref) => (
  <input ref={ref} type={type} className={cn('ll-input', className)} {...props} />
))
Input.displayName = 'Input'
