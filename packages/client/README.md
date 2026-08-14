# luddite-labs-client

Marketing site for [Luddite Labs](https://ludditelabs.dev) — React 19, Vite, Tailwind CSS 4, and static generation via `vite-react-ssg`.

Run commands from the monorepo root (`pnpm dev`, `pnpm build`, …) or from this package.

## Stack

- **UI** — React 19, React Router, Tailwind, Radix primitives, Framer Motion
- **State** — Redux Toolkit (UI, contact, work)
- **Forms** — react-hook-form + Yup
- **Content** — static JSON under `src/content/`
- **SSG** — `vite-react-ssg` + `vite-plugin-pages` (file-based routes in `src/pages/`)

## Scripts

```bash
pnpm dev       # Vite dev server
pnpm build     # typecheck + SSG into dist/
pnpm preview   # preview production build
pnpm lint      # oxlint
```

## Environment

Copy `.env.example` → `.env`:

| Variable | Purpose |
|----------|---------|
| `VITE_SITE_URL` | Canonical origin (OG tags, sitemap, robots) |
| `VITE_WEB3FORMS_ACCESS_KEY` | Contact form → email via [Web3Forms](https://web3forms.com) (no backend) |
| `VITE_CONTACT_ENDPOINT` | Alternative: full form POST URL (e.g. Formspree) |
| `VITE_API_BASE_URL` | Alternative: custom API origin (`POST /contact`) |

Contact submit priority: Web3Forms → contact endpoint → API base → local fake stub.

## Layout

```
src/
  app/           # routes, store, providers
  components/    # layout, sections, UI, SEO (PageMeta)
  content/       # site copy + work cases (JSON)
  features/      # contact, work, ui slices / API
  pages/         # file-based routes (/, /work, /about, /contact, …)
  lib/           # env, assets, constants
public/          # brand assets, robots.txt; sitemap generated on build
```

## SEO

`PageMeta` sets title, description, Open Graph, Twitter, and canonical URLs per page. Build generates `public/sitemap.xml` and refreshes `robots.txt` from `VITE_SITE_URL` and work case slugs.
