import { Eyebrow } from '@/components/content/Eyebrow'

export function AboutHero() {
  return (
    <section className="border-b bg-muted/30">
      <div className="mx-auto max-w-6xl space-y-3 px-4 py-16 sm:px-6 sm:py-20">
        <Eyebrow>About</Eyebrow>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          A small lab for stubborn software
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          Named for the original Luddites—not anti-technology, anti-careless
          technology. We build tools that respect the people who use them.
        </p>
      </div>
    </section>
  )
}
