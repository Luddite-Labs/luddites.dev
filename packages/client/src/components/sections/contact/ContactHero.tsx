import { Eyebrow } from '@/components/content/Eyebrow'

export function ContactHero() {
  return (
    <section className="ll-page-hero">
      <div className="ll-container">
        <Eyebrow>Contact</Eyebrow>
        <h1 className="ll-page-hero__title">Tell us what you are building</h1>
        <p className="ll-page-hero__lede">
          Share the constraints, the stakes, and the ugly parts. We will reply
          within two business days.
        </p>
      </div>
    </section>
  )
}
