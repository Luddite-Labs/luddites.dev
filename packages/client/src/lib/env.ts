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

/**
 * Full contact form POST URL (e.g. Formspree `https://formspree.io/f/xxxx`).
 * Used when Web3Forms is not configured.
 */
export function getContactEndpoint() {
  return readEnv(import.meta.env.VITE_CONTACT_ENDPOINT)
}

/**
 * Custom API origin. POSTs to `${base}/contact`.
 * Used only when Web3Forms and VITE_CONTACT_ENDPOINT are unset.
 */
export function getApiBaseUrl() {
  const fromEnv = readEnv(import.meta.env.VITE_API_BASE_URL)
  return fromEnv ? trimTrailingSlash(fromEnv) : ''
}

export function hasRealContactSubmit() {
  return Boolean(
    getWeb3FormsAccessKey() || getContactEndpoint() || getApiBaseUrl(),
  )
}
