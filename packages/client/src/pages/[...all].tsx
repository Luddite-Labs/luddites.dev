import { Link } from 'react-router-dom'
import { PageMeta } from '@/components/seo/PageMeta'
import { Button } from '@/components/ui/button'

export default function NotFoundPage() {
  return (
    <>
      <PageMeta
        title="Not found · Luddite Labs"
        description="That page does not exist on Luddite Labs."
        path="/404"
        noIndex
      />
      <section className="mx-auto flex min-h-[70vh] max-w-6xl flex-col items-start justify-center gap-4 px-4 sm:px-6">
        <p className="text-sm font-medium text-muted-foreground">404</p>
        <h1 className="text-4xl font-semibold tracking-tight">
          Page not found.
        </h1>
        <p className="max-w-lg text-muted-foreground">
          That route does not exist. Head home.
        </p>
        <Button asChild>
          <Link to="/">Return home</Link>
        </Button>
      </section>
    </>
  )
}
