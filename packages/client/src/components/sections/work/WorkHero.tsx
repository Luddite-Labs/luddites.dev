import { Eyebrow } from '@/components/content/Eyebrow'

export function WorkHero() {
  return (
    <section className="border-b bg-muted/30">
      <div className="mx-auto max-w-6xl space-y-3 px-4 py-16 sm:px-6 sm:py-20">
        <Eyebrow>Work</Eyebrow>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Projects with fingerprints on them
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          A short shelf of software we shaped for teams who care about the seams.
        </p>
      </div>
    </section>
  )
}
