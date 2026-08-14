import { SectionHeading } from '@/components/content/SectionHeading'
import { Reveal } from '@/components/motion/Reveal'
import { Stagger, StaggerItem } from '@/components/motion/Stagger'
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
    <section className="ll-section">
      <div className="ll-container">
        <Reveal>
          <SectionHeading
            eyebrow="People"
            title="The crew"
            lede="A tight group. We stay small on purpose."
            className="ll-section-heading--spaced"
          />
        </Reveal>
        <Stagger className="ll-team">
          {team.map((member) => (
            <StaggerItem key={member.name}>
              <article className="ll-team-card">
                <p className="ll-team-card__role">{member.role}</p>
                <h3 className="ll-team-card__name">{member.name}</h3>
                <p className="ll-team-card__bio">{member.bio}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
