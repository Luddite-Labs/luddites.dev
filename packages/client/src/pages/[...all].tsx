import { Head } from 'vite-react-ssg'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function NotFoundPage() {
  return (
    <>
      <Head>
        <title>Not found · Luddite Labs</title>
      </Head>
      <section className="mx-auto flex min-h-[70vh] max-w-6xl flex-col items-start justify-center gap-4 px-4 sm:px-6">
        <p className="text-sm font-medium text-muted-foreground">404</p>
        <h1 className="text-4xl font-semibold tracking-tight">
          This page left the workshop.
        </h1>
        <p className="max-w-lg text-muted-foreground">
          The route you requested is not on the shelf. Head back to the main
          bench.
        </p>
        <Button asChild>
          <Link to="/">Return home</Link>
        </Button>
      </section>
    </>
  )
}
