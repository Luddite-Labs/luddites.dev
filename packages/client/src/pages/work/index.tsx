import { PageMeta } from '@/components/seo/PageMeta'
import { WorkHero } from '@/components/sections/work/WorkHero'
import { WorkGrid } from '@/components/sections/work/WorkGrid'

export default function WorkPage() {
  return (
    <>
      <PageMeta
        title="Work · Luddite Labs"
        description="Selected software projects from Luddite Labs."
        path="/work"
      />
      <WorkHero />
      <WorkGrid />
    </>
  )
}
