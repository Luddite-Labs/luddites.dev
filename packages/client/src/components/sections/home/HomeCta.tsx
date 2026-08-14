import { Link } from 'react-router-dom'
import { SectionHeading } from '@/components/content/SectionHeading'
import { CallToAction } from '@/components/content/CallToAction'
import { Button } from '@/components/ui/button'
import { home } from '@/content'

export function HomeCta() {
  const { cta } = home

  return (
    <section className="border-t bg-primary/10">
      <div className="mx-auto max-w-6xl space-y-6 px-4 py-20 sm:px-6 sm:py-24">
        <SectionHeading
          eyebrow={cta.eyebrow}
          title={cta.title}
          lede={cta.lede}
        />
        <CallToAction className="mt-8">
          <Button asChild size="lg">
            <Link to={cta.primaryCta.to}>{cta.primaryCta.label}</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to={cta.secondaryCta.to}>{cta.secondaryCta.label}</Link>
          </Button>
        </CallToAction>
      </div>
    </section>
  )
}
