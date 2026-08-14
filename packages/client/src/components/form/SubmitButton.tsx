import type { ReactNode } from 'react'
import { Button } from '@/components/ui/button'

export function SubmitButton({
  pending,
  children = 'Send message',
}: {
  pending?: boolean
  children?: ReactNode
}) {
  return (
    <Button type="submit" disabled={pending}>
      {pending ? 'Sending…' : children}
    </Button>
  )
}
