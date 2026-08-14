import { Link } from 'react-router-dom'
import { SectionHeading } from '@/components/content/SectionHeading'
import { CallToAction } from '@/components/content/CallToAction'
import { Button } from '@/components/ui/button'
import { home } from '@/content'

export function HomeCta() {
  const { cta } = home

  return (
    <section className="border-t bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl space-y-6 px-4 py-20 sm:px-6 sm:py-24">
        <SectionHeading
          eyebrow={cta.eyebrow}
          title={cta.title}
          lede={cta.lede}
          className="[&_p]:text-primary-foreground/70 [&_h2]:text-primary-foreground"
        />
        <CallToAction className="mt-8">
          <Button asChild size="lg" variant="secondary">
            <Link to={cta.primaryCta.to}>{cta.primaryCta.label}</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <Link to={cta.secondaryCta.to}>{cta.secondaryCta.label}</Link>
          </Button>
        </CallToAction>
      </div>
    </section>
  )
}
