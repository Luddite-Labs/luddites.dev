import { Suspense } from 'react'
import type { RouteRecord } from 'vite-react-ssg'
import generatedRoutes from '~react-pages'
import { Providers } from '@/app/providers'
import { ErrorBoundary } from '@/components/error/ErrorBoundary'
import { PageShell } from '@/components/layout/PageShell'
import { getWorkSlugs } from '@/features/work/workData'

function withStaticPaths(routes: RouteRecord[]): RouteRecord[] {
  return routes.map((route) => {
    const next: RouteRecord = { ...route }

    if (next.children?.length) {
      next.children = withStaticPaths(next.children as RouteRecord[])
    }

    const path = next.path ?? ''
    if (path === ':slug' || path.endsWith('/:slug') || path.includes(':slug')) {
      next.getStaticPaths = () => getWorkSlugs()
    }

    return next
  })
}

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: (
      <ErrorBoundary>
        <Providers>
          <Suspense fallback={null}>
            <PageShell />
          </Suspense>
        </Providers>
      </ErrorBoundary>
    ),
    children: withStaticPaths(generatedRoutes as RouteRecord[]),
  },
]
