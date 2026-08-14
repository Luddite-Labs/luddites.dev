import { Head } from 'vite-react-ssg'
import { AboutHero } from '@/components/sections/about/AboutHero'
import { AboutStory } from '@/components/sections/about/AboutStory'
import { AboutPrinciples } from '@/components/sections/about/AboutPrinciples'
import { AboutTeam } from '@/components/sections/about/AboutTeam'

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About · Luddite Labs</title>
        <meta
          name="description"
          content="About Luddite Labs. A remote team across India building stubborn software."
        />
      </Head>
      <AboutHero />
      <AboutStory />
      <AboutPrinciples />
      <AboutTeam />
    </>
  )
}
