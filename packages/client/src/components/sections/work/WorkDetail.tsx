import { Link } from 'react-router-dom'
import { Eyebrow } from '@/components/content/Eyebrow'
import { MetaRow } from '@/components/content/MetaRow'
import { Prose } from '@/components/content/Prose'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import type { WorkCase } from '@/types/content'

export function WorkDetail({ item }: { item: WorkCase }) {
  return (
    <>
      <section className="border-b bg-muted/30">
        <div className="mx-auto max-w-6xl space-y-4 px-4 py-16 sm:px-6 sm:py-20">
          <Eyebrow>Case study</Eyebrow>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {item.title}
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            {item.summary}
          </p>
          <MetaRow
            items={[
              { label: 'Client', value: item.client },
              { label: 'Year', value: item.year },
            ]}
          />
        </div>
      </section>
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Prose>
            <h2 className="text-xl font-semibold text-foreground">Problem</h2>
            <p>{item.problem}</p>
            <h2 className="text-xl font-semibold text-foreground">Approach</h2>
            <p>{item.approach}</p>
            <h2 className="text-xl font-semibold text-foreground">Outcome</h2>
            <p>{item.outcome}</p>
          </Prose>
          <aside className="space-y-6 lg:border-l lg:pl-8">
            <div>
              <p className="mb-2 text-sm font-medium">Stack</p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {item.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
            <Separator />
            <div className="flex flex-col gap-3">
              <Button asChild variant="outline">
                <Link to="/work">Back to work</Link>
              </Button>
              <Button asChild>
                <Link to="/contact">Start something similar</Link>
              </Button>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
