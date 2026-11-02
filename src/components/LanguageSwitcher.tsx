import { dictionaries, languages, paths, useLang, useT } from '../i18n'

interface Props { className?: string }

/**
 * Enlaces reales entre /  y  /en/ (no un botón con JavaScript): cada idioma es una página
 * propia y pre-renderizada, así Google puede rastrear y mostrar las dos versiones.
 */
export default function LanguageSwitcher({ className = '' }: Props) {
  const current = useLang()
  const t = useT()

  return (
    <div
      role="group"
      aria-label={t.ui.language}
      className={`flex items-center rounded-xl border border-white/15 p-1 text-sm font-semibold ${className}`}
    >
      {languages.map((l) => (
        <a
          key={l}
          href={paths[l]}
          lang={dictionaries[l].htmlLang}
          hrefLang={dictionaries[l].htmlLang}
          aria-label={dictionaries[l].langName}
          aria-current={l === current ? 'true' : undefined}
          className={`rounded-lg px-3 py-2.5 transition ${
            l === current ? 'bg-koa text-night' : 'text-slate-300 hover:text-white'
          }`}
        >
          {l.toUpperCase()}
        </a>
      ))}
    </div>
  )
}
