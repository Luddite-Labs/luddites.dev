import { PageMeta } from '@/components/seo/PageMeta'
import { HomeHero } from '@/components/sections/home/HomeHero'
import { HomePromise } from '@/components/sections/home/HomePromise'
import { HomeCapabilities } from '@/components/sections/home/HomeCapabilities'
import { HomeSelectedWork } from '@/components/sections/home/HomeSelectedWork'
import { HomeCta } from '@/components/sections/home/HomeCta'

export default function HomePage() {
  return (
    <>
      <PageMeta
        title="Luddite Labs"
        description="Luddite Labs. Clean software. Expertise. Remote across India."
        path="/"
      />
      <HomeHero />
      <HomePromise />
      <HomeCapabilities />
      <HomeSelectedWork />
      <HomeCta />
    </>
  )
}
