/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client-react" />

interface ImportMetaEnv {
  readonly DEV: boolean
  readonly PROD: boolean
  readonly SSR: boolean
  /** Canonical site origin, no trailing slash (OG, canonical, sitemap). */
  readonly VITE_SITE_URL?: string
  /**
   * Web3Forms access key (https://web3forms.com). Submissions are emailed to
   * the inbox you verify (e.g. Gmail). Public in the client bundle; restrict by
   * domain in the Web3Forms dashboard.
   */
  readonly VITE_WEB3FORMS_ACCESS_KEY?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
  readonly ssr: boolean
}
