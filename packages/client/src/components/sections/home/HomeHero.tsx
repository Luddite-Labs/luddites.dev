import { Link } from 'react-router-dom'
import { Wordmark } from '@/components/brand/Wordmark'
import { CallToAction } from '@/components/content/CallToAction'
import { FadeIn } from '@/components/motion/FadeIn'
import { Button } from '@/components/ui/button'

export function HomeHero() {
  return (
    <section className="ll-hero ll-grain" aria-label="Introduction">
      <div className="ll-hero__atmosphere" aria-hidden="true" />
      <div className="ll-container ll-hero__inner">
        <FadeIn>
          <Wordmark hero as="h1" />
        </FadeIn>
        <FadeIn delay={0.12}>
          <p className="ll-hero__title">
            Software shaped in the workshop, not the hype cycle.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="ll-hero__lede">
            Luddite Labs builds durable products and platforms with clear
            interfaces, honest craft, and fewer moving parts than you expect.
          </p>
        </FadeIn>
        <FadeIn delay={0.28}>
          <CallToAction>
            <Button asChild variant="accent" size="lg">
              <Link to="/contact">Start a project</Link>
            </Button>
            <Button asChild variant="inverse" size="lg">
              <Link to="/work">See the work</Link>
            </Button>
          </CallToAction>
        </FadeIn>
      </div>
    </section>
  )
}
