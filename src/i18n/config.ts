import es from './es'
import en from './en'
import type { Dictionary } from './es'

export type Lang = 'es' | 'en'

export const dictionaries: Record<Lang, Dictionary> = { es, en }
export const languages: Lang[] = ['es', 'en']

/**
 * Ruta de cada idioma. El español sigue en la raíz (conserva el SEO que ya tienes)
 * y el inglés vive en /en/. Cada ruta se pre-renderiza como HTML propio (scripts/prerender.mjs).
 */
export const paths: Record<Lang, string> = { es: '/', en: '/en/' }

export function langFromPath(pathname: string): Lang {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'es'
}
