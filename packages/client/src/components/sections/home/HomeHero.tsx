import { Link } from 'react-router-dom'
import { Wordmark } from '@/components/brand/Wordmark'
import { CallToAction } from '@/components/content/CallToAction'
import { Button } from '@/components/ui/button'
import { home } from '@/content'

export function HomeHero() {
  const { hero } = home

  return (
    <section className="relative overflow-hidden border-b bg-muted/30">
      <div className="mx-auto flex min-h-[calc(100svh-3.5rem)] max-w-6xl flex-col justify-center gap-6 px-4 py-16 sm:px-6">
        <Wordmark hero as="h1" />
        <p className="max-w-2xl text-2xl font-medium tracking-tight sm:text-3xl">
          {hero.headline}
        </p>
        <p className="max-w-xl text-lg text-muted-foreground">{hero.lede}</p>
        <CallToAction>
          <Button asChild size="lg" celebrate>
            <Link to={hero.primaryCta.to}>{hero.primaryCta.label}</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to={hero.secondaryCta.to}>{hero.secondaryCta.label}</Link>
          </Button>
        </CallToAction>
      </div>
    </section>
  )
}
