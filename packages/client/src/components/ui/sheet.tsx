import * as React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

export const Sheet = Dialog.Root
export const SheetTrigger = Dialog.Trigger
export const SheetClose = Dialog.Close

export function SheetContent({
  className,
  children,
  title,
  ...props
}: React.ComponentPropsWithoutRef<typeof Dialog.Content> & {
  title: string
}) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="ll-sheet-overlay" />
      <Dialog.Content className={cn('ll-sheet', className)} {...props}>
        <div className="ll-sheet__header">
          <Dialog.Title className="ll-sheet__title">{title}</Dialog.Title>
          <Dialog.Close asChild>
            <Button variant="ghost" size="icon" aria-label="Close menu">
              <X size={18} />
            </Button>
          </Dialog.Close>
        </div>
        <div className="ll-sheet__body">{children}</div>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
