import { useLocation } from 'react-router-dom'
import { dictionaries, langFromPath } from './config'
import type { Lang } from './config'
import type { Dictionary } from './es'

export { dictionaries, languages, paths, langFromPath } from './config'
export type { Lang } from './config'
export type { Dictionary } from './es'

/** Idioma actual, según la ruta (/ = español, /en/ = inglés) */
export function useLang(): Lang {
  return langFromPath(useLocation().pathname)
}

/** Textos del idioma actual */
export function useT(): Dictionary {
  return dictionaries[useLang()]
}
