import { SectionHeading } from '@/components/content/SectionHeading'
import { Reveal } from '@/components/motion/Reveal'
import { Stagger, StaggerItem } from '@/components/motion/Stagger'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import type { TeamMember } from '@/types/content'

const team: TeamMember[] = [
  {
    name: 'Ada Voss',
    role: 'Product engineering',
    bio: 'Shapes product systems with a bias toward clarity and durable data models.',
  },
  {
    name: 'Jonah Reed',
    role: 'Platform',
    bio: 'Designs APIs and pipelines that stay calm when traffic does not.',
  },
  {
    name: 'Mira Sol',
    role: 'Interface craft',
    bio: 'Builds interfaces that feel mechanical in the best way—precise, quiet, useful.',
  },
]

export function AboutTeam() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl space-y-10 px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="People"
            title="The crew"
            lede="A tight group. We stay small on purpose."
          />
        </Reveal>
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
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
