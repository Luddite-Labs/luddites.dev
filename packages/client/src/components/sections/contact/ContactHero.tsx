import { Eyebrow } from '@/components/content/Eyebrow'

export function ContactHero() {
  return (
    <section className="border-b bg-muted/30">
      <div className="mx-auto max-w-6xl space-y-3 px-4 py-16 sm:px-6 sm:py-20">
        <Eyebrow>Contact</Eyebrow>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Tell us what you are building
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          Share the constraints, the stakes, and the ugly parts. We will reply
          within two business days.
        </p>
      </div>
    </section>
  )
}
