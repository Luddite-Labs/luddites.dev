import { useState } from 'react'
import { Check, ChevronDown, ChevronUp, Copy, RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

function formatError(error: Error) {
  const name = error.name || 'Error'
  const message = error.message || 'Something went wrong.'
  const stack = error.stack?.trim() || 'No stack trace available.'
  return { name, message, stack, text: `${name}: ${message}\n\n${stack}` }
}

export function ErrorFallback({
  error,
  onReset,
  className,
}: {
  error: Error
  onReset?: () => void
  className?: string
}) {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const details = formatError(error)

  async function copyDetails() {
    try {
      await navigator.clipboard.writeText(details.text)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section
      role="alert"
      className={cn(
        'mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center gap-4 px-4 py-16 text-center sm:px-6',
        className,
      )}
    >
      <p className="text-sm font-medium text-muted-foreground">Something broke</p>
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        This part of the bench jammed.
      </h1>
      <p className="text-muted-foreground">
        You can retry, or inspect the error if you need to report it.
      </p>

      <div className="flex w-full max-w-sm flex-col items-stretch gap-3 pt-2">
        <Button
          type="button"
          variant="outline"
          className="w-full justify-between"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span>{open ? 'Hide error' : 'Show error'}</span>
          {open ? <ChevronUp /> : <ChevronDown />}
        </Button>

        {open ? (
          <div className="rounded-md border bg-muted/30 text-left">
            <div className="flex items-center justify-between gap-2 border-b px-3 py-2">
              <p className="truncate text-sm font-medium">
                {details.name}: {details.message}
              </p>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="shrink-0"
                aria-label={copied ? 'Copied' : 'Copy error and stack trace'}
                title={copied ? 'Copied' : 'Copy error and stack trace'}
                onClick={copyDetails}
              >
                {copied ? <Check /> : <Copy />}
              </Button>
            </div>
            <pre className="max-h-72 overflow-auto px-3 py-3 font-mono text-xs leading-relaxed text-muted-foreground whitespace-pre-wrap">
              {details.stack}
            </pre>
          </div>
        ) : null}

        {onReset ? (
          <Button type="button" onClick={onReset} className="w-full">
            <RotateCcw />
            Try again
          </Button>
        ) : null}
      </div>
    </section>
  )
}
