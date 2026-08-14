import { SectionHeading } from '@/components/content/SectionHeading'
import { Reveal } from '@/components/motion/Reveal'
import { Stagger, StaggerItem } from '@/components/motion/Stagger'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { about } from '@/content'

export function AboutTeam() {
  const { team } = about

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl space-y-10 px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow={team.eyebrow}
            title={team.title}
            lede={team.lede}
          />
        </Reveal>
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {team.members.map((member) => (
            <StaggerItem key={member.name}>
              <Card className="h-full">
                <CardHeader>
                  <p className="text-xs text-muted-foreground">{member.role}</p>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>{member.bio}</CardDescription>
                </CardHeader>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
