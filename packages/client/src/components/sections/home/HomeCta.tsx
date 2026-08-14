import { Link } from 'react-router-dom'
import { SectionHeading } from '@/components/content/SectionHeading'
import { CallToAction } from '@/components/content/CallToAction'
import { Reveal } from '@/components/motion/Reveal'
import { Button } from '@/components/ui/button'

export function HomeCta() {
  return (
    <section className="border-t bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl space-y-6 px-4 py-20 sm:px-6 sm:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Next"
            title="Bring us a hard problem."
            lede="If the brief is messy, good. That is usually where the real work starts."
            className="[&_p]:text-primary-foreground/70 [&_h2]:text-primary-foreground"
          />
          <CallToAction className="mt-8">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Talk with us</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link to="/about">About the lab</Link>
            </Button>
          </CallToAction>
        </Reveal>
      </div>
    </section>
  )
}
