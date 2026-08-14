import { Outlet } from 'react-router-dom'
import { ErrorBoundary } from '@/components/error/ErrorBoundary'
import { SkipLink } from '@/components/layout/SkipLink'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { SiteFooter } from '@/components/layout/SiteFooter'

export function PageShell() {
  return (
    <div className="flex min-h-svh flex-col">
      <SkipLink />
      <SiteHeader />
      <main id="main" className="flex-1">
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </main>
      <SiteFooter />
    </div>
  )
}
