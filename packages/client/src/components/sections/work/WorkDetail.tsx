import { Link } from 'react-router-dom'
import { Eyebrow } from '@/components/content/Eyebrow'
import { MetaRow } from '@/components/content/MetaRow'
import { Prose } from '@/components/content/Prose'
import { Button } from '@/components/ui/button'
import type { WorkCase } from '@/types/content'

export function WorkDetail({ item }: { item: WorkCase }) {
  return (
    <>
      <section className="ll-page-hero">
        <div className="ll-container">
          <Eyebrow>Case study</Eyebrow>
          <h1 className="ll-page-hero__title">{item.title}</h1>
          <p className="ll-page-hero__lede">{item.summary}</p>
          <MetaRow
            className="ll-meta-row--hero"
            items={[
              { label: 'Client', value: item.client },
              { label: 'Year', value: item.year },
            ]}
          />
        </div>
      </section>
      <section className="ll-section">
        <div className="ll-container ll-work-detail">
          <Prose>
            <h2 className="ll-detail-subhead">Problem</h2>
            <p>{item.problem}</p>
            <h2 className="ll-detail-subhead">Approach</h2>
            <p>{item.approach}</p>
            <h2 className="ll-detail-subhead">Outcome</h2>
            <p>{item.outcome}</p>
          </Prose>
          <aside className="ll-work-detail__aside">
            <div>
              <p className="ll-contact-details__label">Stack</p>
              <ul className="ll-footer__list">
                {item.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
            <Button asChild variant="secondary">
              <Link to="/work">Back to work</Link>
            </Button>
            <Button asChild variant="accent">
              <Link to="/contact">Start something similar</Link>
            </Button>
          </aside>
        </div>
      </section>
    </>
  )
}
