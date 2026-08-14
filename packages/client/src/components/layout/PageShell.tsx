import { Outlet } from 'react-router-dom'
import { SkipLink } from '@/components/layout/SkipLink'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { PageTransition } from '@/components/motion/PageTransition'

export function PageShell() {
  return (
    <div className="ll-page">
      <SkipLink />
      <SiteHeader />
      <main id="main" className="ll-page__main">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <SiteFooter />
    </div>
  )
}
