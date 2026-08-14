import { PageMeta } from '@/components/seo/PageMeta'
import { AboutHero } from '@/components/sections/about/AboutHero'
import { AboutStory } from '@/components/sections/about/AboutStory'
import { AboutPrinciples } from '@/components/sections/about/AboutPrinciples'
import { AboutTeam } from '@/components/sections/about/AboutTeam'

export default function AboutPage() {
  return (
    <>
      <PageMeta
        title="About · Luddite Labs"
        description="About Luddite Labs. A remote team across India building stubborn software."
        path="/about"
      />
      <AboutHero />
      <AboutStory />
      <AboutPrinciples />
      <AboutTeam />
    </>
  )
}
