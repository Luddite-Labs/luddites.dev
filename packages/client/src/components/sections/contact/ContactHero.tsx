import { Eyebrow } from '@/components/content/Eyebrow'
import { contact } from '@/content'

export function ContactHero() {
  const { hero } = contact

  return (
    <section className="border-b bg-muted/30">
      <div className="mx-auto max-w-6xl space-y-3 px-4 py-16 sm:px-6 sm:py-20">
        <Eyebrow>{hero.eyebrow}</Eyebrow>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          {hero.title}
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">{hero.lede}</p>
      </div>
    </section>
  )
}
