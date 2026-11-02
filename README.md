# KoaByte · sitio web

Sitio de KoaByte (desarrollo de software y reparación de equipos), en español e inglés. React 19 + TypeScript + Vite 8 + Tailwind CSS 4, pre-renderizado a HTML estático para SEO y desplegado en Vercel.

## Comandos

```bash
npm install
npm run dev       # servidor de desarrollo
npm run build     # tsc + build + build SSR + prerender (genera dist/)
npm run preview   # sirve dist/ para probar el build
npm run lint
```

## Idiomas (i18n)

Cada idioma es una página propia con su URL, para que Google indexe las dos versiones:

| Idioma | URL | Archivo de textos |
| --- | --- | --- |
| Español (por defecto) | `/` | `src/i18n/es.ts` |
| Inglés | `/en/` | `src/i18n/en.ts` |

- El idioma se deduce de la ruta (`useLang()` y `useT()` en `src/i18n/index.ts`).
- `en.ts` debe tener la misma forma que `es.ts`: si falta un texto, TypeScript avisa al compilar.
- El selector de idioma (`LanguageSwitcher`) son enlaces normales entre `/` y `/en/`, no un botón con JavaScript.
- Al hacer `npm run build`, `scripts/prerender.mjs` genera `dist/index.html` y `dist/en/index.html`, cada uno con su `<html lang>`, título, descripción, canonical, `hreflang`, Open Graph y datos estructurados.
- `vercel.json` fuerza la barra final (`/en/`) para que la URL coincida con el canonical.

### Agregar un idioma nuevo (por ejemplo, francés)

1. Copia `src/i18n/en.ts` a `fr.ts` y traduce.
2. En `src/i18n/config.ts`: agrega `'fr'` al tipo `Lang`, al arreglo `languages`, a `dictionaries` y a `paths` (`/fr/`), y ajusta `langFromPath`.
3. En `src/App.tsx`: agrega las rutas `/fr` y `/fr/*`.
4. En `public/sitemap.xml`: agrega la URL y sus `hreflang`.

## Dónde editar cada cosa

| Qué | Dónde |
| --- | --- |
| Textos de la página, SEO por idioma (título, descripción, Open Graph) | `src/i18n/es.ts` y `src/i18n/en.ts` |
| Íconos, colores de contacto e ids de sección | `src/data/content.ts` |
| Teléfono, WhatsApp, correo, dirección, horario, dominio | `src/data/site.ts` |
| Colores y clases reutilizables (`btn`, `chip`, `eyebrow`…) | `src/index.css` |
| Secciones de la página | `src/components/sections/` |
| Iconos y manifest | `public/` |
| Datos estructurados (JSON-LD) | `src/components/seo/StructuredData.tsx` |
| Etiquetas `<head>` por idioma | `src/i18n/head.ts` |

## SEO y pre-render

Si cambias el dominio (`https://www.koabytecr.com`), reemplázalo en `src/data/site.ts`, `public/robots.txt` y `public/sitemap.xml`.

## Antes de publicar

- Completa en `src/data/site.ts` los valores marcados con `TODO` (dirección, horario, redes sociales). Mientras `address.street` esté vacío, el JSON-LD no publica dirección.
- Confirma que el correo `hola@koabyte.com` existe: aparece en el pie de página.
- Revisa que puedas cumplir lo que prometes en la página: garantía de 90 días, reparaciones en 24 a 72 h y respuesta en menos de 24 horas.
- La imagen `public/og-image.png` tiene texto en español y se usa en ambos idiomas. Si quieres una versión en inglés, crea `og-image-en.png` y úsala en `src/i18n/head.ts`.

## Accesibilidad

Los colores `koa-dark` y `taller-dark` están calculados para cumplir contraste 4.5:1 en texto pequeño. Úsalos para texto sobre fondos claros; sobre fondos oscuros usa `koa`.
