import { Head } from 'vite-react-ssg'
import { useParams } from 'react-router-dom'
import { WorkDetail } from '@/components/sections/work/WorkDetail'
import { getWorkBySlug, getWorkSlugs } from '@/features/work/workData'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function getStaticPaths() {
  return getWorkSlugs()
}

export default function WorkCasePage() {
  const { slug = '' } = useParams()
  const item = getWorkBySlug(slug)

  if (!item) {
    return (
      <section className="ll-container ll-not-found">
        <p className="ll-not-found__code">Missing case study</p>
        <h1 className="ll-page-hero__title">We could not find that project.</h1>
        <Button asChild variant="secondary">
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
