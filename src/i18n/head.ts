import { site } from '../data/site'
import { dictionaries, langFromPath, languages, paths } from './config'

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/**
 * Genera las etiquetas <head> de cada idioma (título, descripción, canonical, hreflang,
 * Open Graph y Twitter). Solo se usa en el build: scripts/prerender.mjs las inserta en el HTML,
 * así Google y las redes sociales ven el idioma correcto sin ejecutar JavaScript.
 */
export function buildHead(url: string) {
  const lang = langFromPath(url)
  const t = dictionaries[lang]
  const pageUrl = `${site.url}${paths[lang]}`
  const image = `${site.url}/og-image.png`

  const tags = [
    `<title>${esc(t.meta.title)}</title>`,
    `<meta name="description" content="${esc(t.meta.description)}" />`,
    `<link rel="canonical" href="${pageUrl}" />`,
    `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />`,
    `<meta name="author" content="${esc(site.name)}" />`,
    `<meta name="geo.region" content="CR" />`,

    // Versiones por idioma (cada página debe enlazar a todas, incluida ella misma)
    ...languages.map((l) => `<link rel="alternate" hreflang="${dictionaries[l].htmlLang}" href="${site.url}${paths[l]}" />`),
    `<link rel="alternate" hreflang="x-default" href="${site.url}${paths.es}" />`,

    // Open Graph (Facebook, WhatsApp, LinkedIn)
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${esc(site.name)}" />`,
    `<meta property="og:locale" content="${t.ogLocale}" />`,
    ...languages.filter((l) => l !== lang).map((l) => `<meta property="og:locale:alternate" content="${dictionaries[l].ogLocale}" />`),
    `<meta property="og:url" content="${pageUrl}" />`,
    `<meta property="og:title" content="${esc(t.meta.ogTitle)}" />`,
    `<meta property="og:description" content="${esc(t.meta.ogDescription)}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:type" content="image/png" />`,
    `<meta property="og:image:alt" content="${esc(t.meta.imageAlt)}" />`,

    // Twitter / X
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(t.meta.ogTitle)}" />`,
    `<meta name="twitter:description" content="${esc(t.meta.ogDescription)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
  ]

  return { htmlLang: t.htmlLang, head: tags.map((tag) => `    ${tag}`).join('\n') }
}
