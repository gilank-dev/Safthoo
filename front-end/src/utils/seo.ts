import { useEffect } from 'react'

const SITE = 'https://safthoo.web.app'

interface SeoMeta {
  title: string
  description: string
  path?: string
  image?: string
  noindex?: boolean
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.content = content
}

function upsertCanonical(href: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.rel = 'canonical'
    document.head.appendChild(el)
  }
  el.href = href
}

/** Per-page SEO for the Safthoo storefront SPA. */
export function useSeo({ title, description, path = '', image, noindex = false }: SeoMeta) {
  useEffect(() => {
    const url = `${SITE}${path}`
    const img = image || '/og-image.png'

    document.title = title
    upsertMeta('name', 'description', description)
    upsertCanonical(url)

    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:image', `${SITE}${img}`)
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow')
  }, [title, description, path, image, noindex])
}
