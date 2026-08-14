import type { ReactNode } from 'react'
import { Button } from '@/components/ui/button'

export function SubmitButton({
  pending,
  pendingLabel = 'Sending…',
  children = 'Send message',
}: {
  pending?: boolean
  pendingLabel?: string
  children?: ReactNode
}) {
  return (
    <Button type="submit" disabled={pending}>
      {pending ? pendingLabel : children}
    </Button>
  )
}
