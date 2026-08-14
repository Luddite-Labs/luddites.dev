import { mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import type { Plugin } from 'vite'

type SitemapOptions = {
  /** Package root (contains `public/` and `dist/`). */
  root: string
  /** Resolved site origin without trailing slash. */
  siteUrl: string
  /** Absolute path to `src/content/cases`. */
  casesDir: string
}

const STATIC_PATHS = ['/', '/work', '/about', '/contact'] as const

function readWorkSlugs(casesDir: string) {
  try {
    return readdirSync(casesDir)
      .filter((name) => name.endsWith('.json'))
      .map((name) => {
        const raw = readFileSync(join(casesDir, name), 'utf8')
        const data = JSON.parse(raw) as { slug?: string }
        return data.slug
      })
      .filter((slug): slug is string => Boolean(slug))
      .sort()
  } catch {
    return []
  }
}

function buildSitemapXml(siteUrl: string, paths: string[]) {
  const urls = paths
    .map((path) => {
      const loc = path === '/' ? siteUrl : `${siteUrl}${path}`
      return `  <url>\n    <loc>${loc}</loc>\n  </url>`
    })
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
}

function buildRobotsTxt(siteUrl: string) {
  return `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`
}

/** Writes `sitemap.xml` and `robots.txt` into `public/` (and `dist/` after build). */
export function seoFilesPlugin(options: SitemapOptions): Plugin {
  const write = (outDir: string) => {
    mkdirSync(outDir, { recursive: true })
    const slugs = readWorkSlugs(options.casesDir)
    const paths = [
      ...STATIC_PATHS,
      ...slugs.map((slug) => `/work/${slug}`),
    ]
    writeFileSync(join(outDir, 'sitemap.xml'), buildSitemapXml(options.siteUrl, paths))
    writeFileSync(join(outDir, 'robots.txt'), buildRobotsTxt(options.siteUrl))
  }

  return {
    name: 'luddite-seo-files',
    buildStart() {
      write(join(options.root, 'public'))
    },
    closeBundle() {
      write(join(options.root, 'dist'))
    },
  }
}
