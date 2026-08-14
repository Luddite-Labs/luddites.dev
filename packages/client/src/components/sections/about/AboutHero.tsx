import { Eyebrow } from '@/components/content/Eyebrow'

export function AboutHero() {
  return (
    <section className="ll-page-hero">
      <div className="ll-container">
        <Eyebrow>About</Eyebrow>
        <h1 className="ll-page-hero__title">A small lab for stubborn software</h1>
        <p className="ll-page-hero__lede">
          Named for the original Luddites—not anti-technology, anti-careless
          technology. We build tools that respect the people who use them.
        </p>
      </div>
    </section>
  )
}
