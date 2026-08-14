import { Head } from 'vite-react-ssg'
import { HomeHero } from '@/components/sections/home/HomeHero'
import { HomePromise } from '@/components/sections/home/HomePromise'
import { HomeCapabilities } from '@/components/sections/home/HomeCapabilities'
import { HomeSelectedWork } from '@/components/sections/home/HomeSelectedWork'
import { HomeCta } from '@/components/sections/home/HomeCta'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Luddite Labs</title>
        <meta
          name="description"
          content="Luddite Labs builds software with craft, clarity, and restraint."
        />
      </Head>
      <HomeHero />
      <HomePromise />
      <HomeCapabilities />
      <HomeSelectedWork />
      <HomeCta />
    </>
  )
}
