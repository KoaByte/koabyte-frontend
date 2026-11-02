/**
 * Datos del negocio que no cambian con el idioma (contacto, dominio, horario).
 * Los textos en español e inglés viven en src/i18n/es.ts y src/i18n/en.ts.
 * ⚠️ Revisa los valores marcados con TODO: Google usa estos datos para el panel de negocio
 * local y los resultados enriquecidos.
 * Si cambias `url`, actualiza también index.html, public/robots.txt y public/sitemap.xml.
 */
export const site = {
  name: 'KoaByte',
  url: 'https://www.koabytecr.com', // TODO: confirmar el dominio real (sin "/" al final)
  email: 'koabytecr@gmail.com',
  phone: '+50662830706', // formato internacional, sin espacios
  phoneDisplay: '+506 6283 0706',
  whatsapp: 'https://wa.me/50662830706',
  address: {
    // TODO: dirección del local. Si no atiendes en un local, déjala vacía:
    // el JSON-LD omite la dirección en vez de publicar un texto de ejemplo.
    street: '',
    city: 'San José', // TODO
    region: 'San José', // TODO
    postalCode: '', // TODO (opcional)
    country: 'CR',
  },
  hours: { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '08:00', closes: '18:00' }, // TODO
  social: [
    { name: 'Instagram', url: 'https://www.instagram.com/koabyte' },
    { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61579421273775&locale=es_LA' },
  ] as { name: string; url: string }[], // TODO: URLs de Facebook, Instagram, LinkedIn…
}

/** Enlace de WhatsApp con el mensaje prellenado (ya codificado para URL). */
export function waLink(message?: string) {
  return message ? `${site.whatsapp}?text=${encodeURIComponent(message)}` : site.whatsapp
}
