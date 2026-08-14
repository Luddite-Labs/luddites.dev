import { SectionHeading } from '@/components/content/SectionHeading'
import { Reveal } from '@/components/motion/Reveal'
import { Stagger, StaggerItem } from '@/components/motion/Stagger'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { home } from '@/content'

export function HomeCapabilities() {
  const { capabilities } = home

  return (
    <section className="border-y bg-muted/20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl space-y-10 px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow={capabilities.eyebrow}
            title={capabilities.title}
            lede={capabilities.lede}
          />
        </Reveal>
        <Stagger className="grid gap-4 md:grid-cols-3">
          {capabilities.items.map((item) => (
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
