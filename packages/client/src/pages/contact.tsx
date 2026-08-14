import { Head } from 'vite-react-ssg'
import { ContactHero } from '@/components/sections/contact/ContactHero'
import { ContactForm } from '@/components/sections/contact/ContactForm'
import { ContactDetails } from '@/components/sections/contact/ContactDetails'
import { Reveal } from '@/components/motion/Reveal'

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact · Luddite Labs</title>
        <meta
          name="description"
          content="Contact Luddite Labs to start a software project."
        />
      </Head>
      <ContactHero />
      <section className="ll-section">
        <div className="ll-container ll-contact-layout">
          <Reveal>
            <ContactForm />
          </Reveal>
          <Reveal>
            <ContactDetails />
          </Reveal>
        </div>
      </section>
    </>
  )
}
