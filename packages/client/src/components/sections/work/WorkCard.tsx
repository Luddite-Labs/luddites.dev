import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { workPage } from '@/content'
import type { WorkCase } from '@/types/content'

export function WorkCard({ item }: { item: WorkCase }) {
  return (
    <Link to={`/work/${item.slug}`} className="block h-full">
      <Card className="h-full transition-colors hover:bg-accent/40">
        <CardHeader>
          <p className="text-xs text-muted-foreground">
            {item.client} · {item.year}
          </p>
          <CardTitle className="text-xl">{item.title}</CardTitle>
          <CardDescription>{item.summary}</CardDescription>
        </CardHeader>
        <CardFooter className="gap-2 text-sm font-medium">
          {workPage.card.footerLabel}
          <ArrowRight className="size-4" />
        </CardFooter>
      </Card>
    </Link>
  )
}
