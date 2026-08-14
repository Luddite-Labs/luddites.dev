import { PageMeta } from '@/components/seo/PageMeta'
import { AboutHero } from '@/components/sections/about/AboutHero'
import { AboutStory } from '@/components/sections/about/AboutStory'
import { AboutPrinciples } from '@/components/sections/about/AboutPrinciples'

export default function AboutPage() {
  return (
    <>
      <PageMeta
        title="About · Luddite Labs"
        description="About Luddite Labs. Remote across India, building stubborn software."
        path="/about"
      />
      <AboutHero />
      <AboutStory />
      <AboutPrinciples />
    </>
  )
}
