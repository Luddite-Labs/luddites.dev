import { Link } from 'react-router-dom'
import type { WorkCase } from '@/types/content'

export function WorkCard({ item }: { item: WorkCase }) {
  return (
    <Link to={`/work/${item.slug}`} className="ll-card">
      <p className="ll-card__meta">
        {item.client} · {item.year}
      </p>
      <h3 className="ll-card__title">{item.title}</h3>
      <p className="ll-card__body">{item.summary}</p>
      <div className="ll-card__footer">
        <span>Case study</span>
        <span aria-hidden="true">→</span>
      </div>
    </Link>
  )
}
