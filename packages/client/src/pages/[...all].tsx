import { Head } from 'vite-react-ssg'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function NotFoundPage() {
  return (
    <>
      <Head>
        <title>Not found · Luddite Labs</title>
      </Head>
      <section className="ll-container ll-not-found">
        <p className="ll-not-found__code">404</p>
        <h1 className="ll-page-hero__title">This page left the workshop.</h1>
        <p className="ll-page-hero__lede">
          The route you requested is not on the shelf. Head back to the main bench.
        </p>
        <Button asChild variant="accent">
          <Link to="/">Return home</Link>
        </Button>
      </section>
    </>
  )
}
