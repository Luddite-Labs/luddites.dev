import type { WorkCase } from '@/types/content'

export const workCases: WorkCase[] = [
  {
    slug: 'ledger-bench',
    title: 'Ledger Bench',
    client: 'Northline Finance',
    year: '2025',
    summary:
      'A reconciliation console that replaces spreadsheet chaos with calm, auditable workflows.',
    problem:
      'Ops teams were drowning in brittle spreadsheets and overnight batch jobs with no clear ownership.',
    approach:
      'We mapped the real desk rituals, then rebuilt the flow around exceptions—not every row.',
    outcome:
      'Month-end close dropped from five days to one and a half, with a full audit trail.',
    stack: ['TypeScript', 'React', 'PostgreSQL', 'Temporal'],
  },
  {
    slug: 'signal-loom',
    title: 'Signal Loom',
    client: 'Harbor Logistics',
    year: '2024',
    summary:
      'An operations dashboard that surfaces only the signals that need a human hand.',
    problem:
      'Alert noise buried the few events that actually blocked shipments.',
    approach:
      'We designed severity as narrative, not color chips—each signal explains why it matters.',
    outcome:
      'On-call pages fell by 62% while mean response time improved.',
    stack: ['Go', 'React', 'Kafka', 'ClickHouse'],
  },
  {
    slug: 'atelier-api',
    title: 'Atelier API',
    client: 'Fieldnote',
    year: '2024',
    summary:
      'A partner platform API with documentation that reads like a workshop manual.',
    problem:
      'Integrators could not ship against an uneven API surface and tribal knowledge docs.',
    approach:
      'Contracts first, examples second, and a versioning story partners can trust.',
    outcome:
      'Partner go-live time cut from weeks to days; support tickets declined sharply.',
    stack: ['Node', 'OpenAPI', 'Redis', 'Postgres'],
  },
  {
    slug: 'kiln-cms',
    title: 'Kiln CMS',
    client: 'Studio Marrow',
    year: '2023',
    summary:
      'A content system that treats editors as craftspeople, not form fillers.',
    problem:
      'Marketing needed structured pages without surrendering typographic control.',
    approach:
      'Composable blocks with guardrails—freedom where it matters, constraints where it does not.',
    outcome:
      'Publishing cadence doubled without hiring more producers.',
    stack: ['Next-ready API', 'React', 'SQLite', 'S3'],
  },
]

export function getWorkBySlug(slug: string) {
  return workCases.find((item) => item.slug === slug)
}

export function getWorkSlugs() {
  return workCases.map((item) => item.slug)
}
