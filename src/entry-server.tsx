import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import App from './App'
import { languages, paths } from './i18n/config'

export { buildHead } from './i18n/head'

/** Rutas que se pre-renderizan: una por idioma (ver src/i18n/config.ts) */
export const routes = languages.map((l) => paths[l])

/** Usado solo en el build para generar el HTML estático de cada ruta (SEO). */
export function render(url: string) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
        <Analytics />
        <SpeedInsights />
      </StaticRouter>
    </StrictMode>,
  )
}
