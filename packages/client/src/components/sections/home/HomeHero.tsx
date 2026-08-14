import { Link } from 'react-router-dom'
import { Wordmark } from '@/components/brand/Wordmark'
import { CallToAction } from '@/components/content/CallToAction'
import { FadeIn } from '@/components/motion/FadeIn'
import { Button } from '@/components/ui/button'

export function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b bg-muted/30">
      <div className="mx-auto flex min-h-[calc(100svh-3.5rem)] max-w-6xl flex-col justify-center gap-6 px-4 py-16 sm:px-6">
        <FadeIn>
          <Wordmark hero as="h1" />
        </FadeIn>
        <FadeIn delay={0.08}>
          <p className="max-w-2xl text-2xl font-medium tracking-tight sm:text-3xl">
            Software shaped carefully—clear interfaces, fewer moving parts.
          </p>
        </FadeIn>
        <FadeIn delay={0.14}>
          <p className="max-w-xl text-lg text-muted-foreground">
            Luddite Labs builds durable products and platforms for teams who
            value craft over hype.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <CallToAction>
            <Button asChild size="lg">
              <Link to="/contact">Start a project</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/work">See the work</Link>
            </Button>
          </CallToAction>
        </FadeIn>
      </div>
    </section>
  )
}
