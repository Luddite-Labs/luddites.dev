import siteJson from '@/content/site.json'
import homeJson from '@/content/home.json'
import aboutJson from '@/content/about.json'
import workJson from '@/content/work.json'
import contactJson from '@/content/contact.json'
import type {
  AboutContent,
  ContactContent,
  HomeContent,
  SiteContent,
  WorkCase,
  WorkPageContent,
} from '@/content/types'

const caseModules = import.meta.glob<WorkCase>('./cases/*.json', {
  eager: true,
  import: 'default',
})

export const site = siteJson as SiteContent
export const home = homeJson as HomeContent
export const about = aboutJson as AboutContent
export const workPage = workJson as WorkPageContent
export const contact = contactJson as ContactContent

export const workCases: WorkCase[] = Object.values(caseModules).sort(
  (a, b) => b.year.localeCompare(a.year) || a.title.localeCompare(b.title),
)

export function getWorkBySlug(slug: string) {
  return workCases.find((item) => item.slug === slug)
}

export function getWorkSlugs() {
  return workCases.map((item) => item.slug)
}

export function getFeaturedWork(count = home.selectedWork.featuredCount) {
  return workCases.slice(0, count)
}
