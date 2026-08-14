import { Component, type ErrorInfo, type ReactNode } from 'react'
import { ErrorFallback } from '@/components/error/ErrorFallback'

type ErrorBoundaryProps = {
  children: ReactNode
  /** Optional custom fallback; receives error + reset. */
  fallback?: (error: Error, reset: () => void) => ReactNode
  onError?: (error: Error, info: ErrorInfo) => void
}

type ErrorBoundaryState = {
  error: Error | null
}

/**
 * Shared React error boundary. Renders a centered fallback with
 * expandable error details and a Lucide-powered copy control.
 */
export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { error: null }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    this.props.onError?.(error, info)
    if (import.meta.env.DEV) {
      console.error('[ErrorBoundary]', error, info.componentStack)
    }
  }

  reset = () => {
    this.setState({ error: null })
  }

  render() {
    const { error } = this.state
    if (!error) return this.props.children

    if (this.props.fallback) {
      return this.props.fallback(error, this.reset)
    }

    return <ErrorFallback error={error} onReset={this.reset} />
  }
}
