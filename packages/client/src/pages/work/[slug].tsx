import { useParams, Link } from 'react-router-dom'
import { PageMeta } from '@/components/seo/PageMeta'
import { WorkDetail } from '@/components/sections/work/WorkDetail'
import { getWorkBySlug, getWorkSlugs } from '@/features/work/workData'
import { Button } from '@/components/ui/button'
import { site, workPage } from '@/content'

export function getStaticPaths() {
  return getWorkSlugs()
}

export default function WorkCasePage() {
  const { slug = '' } = useParams()
  const item = getWorkBySlug(slug)

  if (!item) {
    return (
      <>
        <PageMeta
          title={`Not found · ${site.name}`}
          description={workPage.detail.missingTitle}
          path={`/work/${slug}`}
          noIndex
        />
        <section className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-start justify-center gap-4 px-4 sm:px-6">
          <p className="text-sm text-muted-foreground">
            {workPage.detail.missingEyebrow}
          </p>
          <h1 className="text-3xl font-semibold tracking-tight">
            {workPage.detail.missingTitle}
          </h1>
          <Button asChild variant="outline">
            <Link to="/work">{workPage.detail.backLabel}</Link>
          </Button>
        </section>
      </>
    )
  }

  return (
    <>
      <PageMeta
        title={`${item.title} · ${site.name}`}
        description={item.summary}
        path={`/work/${item.slug}`}
        ogType="article"
      />
      <WorkDetail item={item} />
    </>
  )
}
