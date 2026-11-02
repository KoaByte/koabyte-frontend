import { useContent } from '../../data/content'
import { site } from '../../data/site'
import { paths, useLang, useT } from '../../i18n'

/**
 * Datos estructurados schema.org (JSON-LD) para resultados enriquecidos en Google.
 * Se generan desde los diccionarios (src/i18n) y data/site.ts, así que cada idioma publica
 * los mismos textos que se ven en la página.
 */
const orgId = `${site.url}/#organization`

export default function StructuredData() {
  const lang = useLang()
  const t = useT()
  const { services, repairs } = useContent()
  const pageUrl = `${site.url}${paths[lang]}`

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': orgId,
        name: site.name,
        url: `${site.url}/`,
        logo: `${site.url}/logo.png`,
        image: `${site.url}/og-image.png`,
        description: t.meta.description,
        email: site.email,
        telephone: site.phone,
        priceRange: '$$',
        // Solo se publica la dirección si hay una real (ver data/site.ts)
        ...(site.address.street
          ? {
              address: {
                '@type': 'PostalAddress',
                streetAddress: site.address.street,
                addressLocality: site.address.city,
                addressRegion: site.address.region,
                ...(site.address.postalCode ? { postalCode: site.address.postalCode } : {}),
                addressCountry: site.address.country,
              },
            }
          : {}),
        areaServed: { '@type': 'Country', name: 'Costa Rica' },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: site.hours.days,
          opens: site.hours.opens,
          closes: site.hours.closes,
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: site.phone,
          email: site.email,
          contactType: 'customer service',
          availableLanguage: ['Spanish', 'English'],
        },
        ...(site.social.length ? { sameAs: site.social.map((s) => s.url) } : {}),
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: t.schema.catalog,
          itemListElement: [
            ...services.map((s) => ({
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: s.title, description: s.text, serviceType: t.schema.developmentType },
            })),
            ...repairs.map((r) => ({
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: r.serviceName, description: r.text, serviceType: t.schema.repairType },
              warranty: { '@type': 'WarrantyPromise', durationOfWarranty: { '@type': 'QuantitativeValue', value: 90, unitCode: 'DAY' } },
            })),
          ],
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${site.url}/#website`,
        url: `${site.url}/`,
        name: site.name,
        inLanguage: ['es-CR', 'en'],
        publisher: { '@id': orgId },
      },
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: t.meta.title,
        description: t.meta.description,
        inLanguage: t.htmlLang,
        isPartOf: { '@id': `${site.url}/#website` },
        about: { '@id': orgId },
        primaryImageOfPage: `${site.url}/og-image.png`,
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      // Escapa "<" para que el JSON no pueda cerrar la etiqueta <script>
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, '\\u003c') }}
    />
  )
}
