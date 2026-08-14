import { SectionHeading } from '@/components/content/SectionHeading'
import { Reveal } from '@/components/motion/Reveal'
import { Stagger, StaggerItem } from '@/components/motion/Stagger'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import type { Capability } from '@/types/content'

const capabilities: Capability[] = [
  {
    index: '01',
    title: 'Product systems',
    body: 'End-to-end web products with sober IA, accessible UI, and performance that holds up in the wild.',
  },
  {
    index: '02',
    title: 'Platform APIs',
    body: 'Contracts, versioning, and docs that partners can build against without tribal knowledge.',
  },
  {
    index: '03',
    title: 'Operational tools',
    body: 'Internal consoles that cut noise, expose decisions, and respect the people on call.',
  },
]

export function HomeCapabilities() {
  return (
    <section className="border-y bg-muted/20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl space-y-10 px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Capabilities"
            title="What we build"
            lede="Focused engagements—not bloated roadmaps."
          />
        </Reveal>
        <Stagger className="grid gap-4 md:grid-cols-3">
          {capabilities.map((item) => (
            <StaggerItem key={item.index}>
              <Card className="h-full">
                <CardHeader>
                  <p className="text-xs font-medium text-muted-foreground">
                    {item.index}
                  </p>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.body}</CardDescription>
                </CardHeader>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
