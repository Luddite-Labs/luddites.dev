import { Head } from 'vite-react-ssg'
import { useParams, Link } from 'react-router-dom'
import { WorkDetail } from '@/components/sections/work/WorkDetail'
import { getWorkBySlug, getWorkSlugs } from '@/features/work/workData'
import { Button } from '@/components/ui/button'

export function getStaticPaths() {
  return getWorkSlugs()
}

export default function WorkCasePage() {
  const { slug = '' } = useParams()
  const item = getWorkBySlug(slug)

  if (!item) {
    return (
      <section className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-start justify-center gap-4 px-4 sm:px-6">
        <p className="text-sm text-muted-foreground">Missing case study</p>
        <h1 className="text-3xl font-semibold tracking-tight">
          We could not find that project.
        </h1>
        <Button asChild variant="outline">
          <Link to="/work">Back to work</Link>
        </Button>
      </section>
    )
  }

  return (
    <>
      <Head>
        <title>{item.title} · Luddite Labs</title>
        <meta name="description" content={item.summary} />
      </Head>
      <WorkDetail item={item} />
    </>
  )
}
