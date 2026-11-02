// Pre-renderiza las rutas (una por idioma) a HTML estático después de `vite build`.
// Así Google y las redes sociales reciben el contenido completo, en el idioma correcto
// y con su propio <head> (título, canonical, hreflang…), sin ejecutar JavaScript.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const ssrDir = path.join(root, 'dist-ssr')

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8')
// `routes` sale de src/i18n/config.ts (una ruta por idioma). Al agregar una ruta nueva,
// agrégala también en public/sitemap.xml.
const { render, buildHead, routes } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href)

for (const url of routes) {
  const { htmlLang, head } = buildHead(url)
  const html = template
    .replace(/<title>[\s\S]*?<\/title>\s*/, '') // título provisional de desarrollo
    .replace(/<html lang="[^"]*"/, () => `<html lang="${htmlLang}"`)
    .replace('<!--head-tags-->', () => head)
    .replace('<!--app-html-->', () => render(url))
  const file = path.join(dist, url === '/' ? 'index.html' : `${url.replace(/^\/|\/$/g, '')}/index.html`)
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, html)
  console.log(`✓ prerender ${url} [${htmlLang}] → ${path.relative(root, file)}`)
}

fs.rmSync(ssrDir, { recursive: true, force: true })
