import { Head } from 'vite-react-ssg'
import { ContactHero } from '@/components/sections/contact/ContactHero'
import { ContactForm } from '@/components/sections/contact/ContactForm'
import { ContactDetails } from '@/components/sections/contact/ContactDetails'

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
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <ContactForm />
          <ContactDetails />
        </div>
      </section>
    </>
  )
}
