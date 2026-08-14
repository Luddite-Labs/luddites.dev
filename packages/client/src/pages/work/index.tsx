import { Head } from 'vite-react-ssg'
import { WorkHero } from '@/components/sections/work/WorkHero'
import { WorkGrid } from '@/components/sections/work/WorkGrid'

export default function WorkPage() {
  return (
    <>
      <Head>
        <title>Work · Luddite Labs</title>
        <meta
          name="description"
          content="Selected software projects from Luddite Labs."
        />
      </Head>
      <WorkHero />
      <WorkGrid />
    </>
  )
}
