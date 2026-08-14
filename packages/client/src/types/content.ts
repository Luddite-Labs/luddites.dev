export type WorkCase = {
  slug: string
  title: string
  client: string
  year: string
  summary: string
  problem: string
  approach: string
  outcome: string
  stack: string[]
}

export type Principle = {
  title: string
  body: string
}

export type TeamMember = {
  name: string
  role: string
  bio: string
}

export type Capability = {
  index: string
  title: string
  body: string
}
