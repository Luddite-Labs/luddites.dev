import { Head } from 'vite-react-ssg'
import { SITE } from '@/lib/constants'
import { ASSETS } from '@/lib/assets'
import { absoluteUrl } from '@/lib/env'

type PageMetaProps = {
  title: string
  description: string
  /** Site path for canonical + og:url, e.g. `/about`. Defaults to `/`. */
  path?: string
  ogType?: 'website' | 'article'
  /** When true, ask crawlers not to index (e.g. 404). */
  noIndex?: boolean
}

export function PageMeta({
  title,
  description,
  path = '/',
  ogType = 'website',
  noIndex = false,
}: PageMetaProps) {
  const url = absoluteUrl(path)
  const image = absoluteUrl(ASSETS.ogImage)

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
      <link rel="canonical" href={url} />

      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  )
}
