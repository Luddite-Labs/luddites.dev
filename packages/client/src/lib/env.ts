const DEFAULT_SITE_URL = 'https://luddites.dev'
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'

function trimTrailingSlash(value: string) {
  return value.replace(/\/+$/, '')
}

function readEnv(value: string | undefined) {
  return value?.trim() || ''
}

/** Canonical site origin for SEO (OG, canonical, sitemap). */
export function getSiteUrl() {
  return trimTrailingSlash(readEnv(import.meta.env.VITE_SITE_URL) || DEFAULT_SITE_URL)
}

/** Absolute URL for a site path (`/` → origin, `/about` → origin/about). */
export function absoluteUrl(path = '/') {
  const origin = getSiteUrl()
  if (!path || path === '/') return origin
  return `${origin}${path.startsWith('/') ? path : `/${path}`}`
}

/**
 * Web3Forms access key — emails submissions to the inbox you verified at
 * https://web3forms.com (works with personal Gmail, no backend).
 */
export function getWeb3FormsAccessKey() {
  return readEnv(import.meta.env.VITE_WEB3FORMS_ACCESS_KEY)
}

export function getWeb3FormsEndpoint() {
  return WEB3FORMS_ENDPOINT
}
