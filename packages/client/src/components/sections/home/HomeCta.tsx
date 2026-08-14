import { Link } from 'react-router-dom'
import { SectionHeading } from '@/components/content/SectionHeading'
import { CallToAction } from '@/components/content/CallToAction'
import { Reveal } from '@/components/motion/Reveal'
import { Button } from '@/components/ui/button'

export function HomeCta() {
  return (
    <section className="ll-section ll-band">
      <div className="ll-container">
        <Reveal>
          <SectionHeading
            eyebrow="Next"
            title="Bring us a hard problem."
            lede="If the brief is messy, good. That is usually where the real work starts."
          />
          <CallToAction className="ll-cta-group--after-heading">
            <Button asChild variant="accent" size="lg">
              <Link to="/contact">Talk with us</Link>
            </Button>
            <Button asChild variant="inverse" size="lg">
              <Link to="/about">About the lab</Link>
            </Button>
          </CallToAction>
        </Reveal>
      </div>
    </section>
  )
}
