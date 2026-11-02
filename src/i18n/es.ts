/**
 * Textos del sitio en español (idioma base).
 * `en.ts` debe tener exactamente la misma forma: TypeScript avisa si falta algo.
 */
const es = {
  langName: 'Español',
  htmlLang: 'es-CR',
  ogLocale: 'es_CR',

  /** SEO de la página: título, descripción y Open Graph (ver i18n/head.ts) */
  meta: {
    title: 'KoaByte | Software a la medida y reparación de equipos',
    description:
      'Desarrollamos páginas web, apps móviles y software de escritorio a la medida. También reparamos celulares, laptops y PC con diagnóstico gratuito y garantía de 90 días.',
    ogTitle: 'KoaByte | Desarrollo de software y reparación de equipos',
    ogDescription:
      'Páginas web, apps móviles y software a la medida. Reparación de celulares, laptops y PC con garantía de 90 días.',
    imageAlt: 'KoaByte: desarrollo de software y reparación de equipos',
  },

  ui: {
    skip: 'Saltar al contenido',
    logoAlt: 'Logo de KoaByte',
    logoLink: 'volver al inicio',
    mainNav: 'Navegación principal',
    mobileNav: 'Navegación móvil',
    footerNav: 'Enlaces del pie de página',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    menuLabel: 'Menú de navegación',
    quote: 'Cotizar proyecto',
    repairMine: 'Reparar mi equipo',
    language: 'Idioma',
    footerTagline: 'Desarrollo de software · Reparación de equipos · Soporte',
    rights: 'Todos los derechos reservados.',
  },

  /** Mismo orden que `sectionIds` en data/content.ts */
  navLinks: [
    { label: 'Inicio', hint: '' },
    { label: 'Desarrollo', hint: 'Web, móvil, desktop' },
    { label: 'Reparaciones', hint: 'Celular, laptop, PC' },
    { label: 'Proceso', hint: '' },
    { label: 'Contacto', hint: '' },
  ],

  hero: {
    badge: 'Soluciones tecnológicas',
    titleStart: 'Creamos el software que ',
    titleAccent: 'impulsa',
    titleEnd: ' tu negocio.',
    text: 'Desarrollamos páginas web, apps móviles y aplicaciones de escritorio a la medida. Y si tu equipo falla, reparamos tu celular, laptop o PC.',
    start: 'Iniciar un proyecto',
    stats: [
      { title: 'Web', text: 'Sitios y tiendas' },
      { title: 'Móvil', text: 'iOS y Android' },
      { title: 'Desktop', text: 'Windows, macOS' },
    ],
    /** Tarjeta decorativa de código */
    code: {
      varName: 'proyecto',
      fn: 'crear',
      launch: 'lanzar',
      kClient: 'cliente',
      kPlatforms: 'plataformas',
      kDesign: 'diseño',
      kSupport: 'soporte',
      client: 'Tu negocio',
      platforms: ['web', 'móvil', 'desktop'],
      design: 'a la medida',
    },
    repairStatus: { label: 'Reparación en curso', item: 'Laptop · Cambio de pantalla' },
  },

  development: {
    eyebrow: 'Lo que mejor hacemos',
    title: 'Desarrollo de software a la medida de tu idea',
    text: 'Desde la primera reunión hasta el lanzamiento, construimos soluciones digitales rápidas, seguras y fáciles de usar.',
  },

  /** Mismo orden que los íconos en data/content.ts (web, móvil, desktop) */
  services: [
    {
      title: 'Páginas web',
      text: 'Sitios corporativos, tiendas en línea y sistemas web que venden por ti.',
      items: ['Diseño responsive', 'SEO y velocidad', 'Panel administrable'],
      cta: 'Cotizar páginas web',
    },
    {
      title: 'Aplicaciones móviles',
      text: 'Apps para iOS y Android con experiencia nativa y publicación en tiendas.',
      items: ['iOS y Android', 'Notificaciones push', 'Pagos integrados'],
      cta: 'Cotizar aplicaciones móviles',
    },
    {
      title: 'Apps de escritorio',
      text: 'Software para Windows y macOS: inventarios, punto de venta y gestión interna.',
      items: ['Windows y macOS', 'Funciona sin internet', 'Bases de datos locales'],
      cta: 'Cotizar apps de escritorio',
    },
  ],

  repairsSection: {
    eyebrow: 'Servicio técnico',
    title: 'Reparamos tus equipos sin complicaciones',
    text: 'Diagnóstico claro, repuestos de calidad y garantía en cada reparación.',
    book: 'Agendar reparación',
    benefits: [
      { text: 'Diagnóstico gratuito', short: 'Diagnóstico gratuito' },
      { text: 'Garantía de 90 días', short: 'Garantía de 90 días' },
      { text: 'Reparaciones en 24 a 72 h', short: '24 a 72 h' },
    ],
    /** `serviceName` lo leen los lectores de pantalla y los datos estructurados */
    items: [
      {
        title: 'Celulares',
        text: 'Pantallas, baterías, puertos de carga y software.',
        tags: ['Pantalla', 'Batería', 'Puerto de carga'],
        serviceName: 'Reparación de celulares',
      },
      {
        title: 'Laptops',
        text: 'Teclados, pantallas, mantenimiento y mejoras de rendimiento.',
        tags: ['Pantalla', 'SSD y RAM', 'Limpieza'],
        serviceName: 'Reparación de laptops',
      },
      {
        title: 'PC de escritorio',
        text: 'Armado, actualización de piezas, virus y sistema operativo.',
        tags: ['Armado', 'Formateo', 'Upgrades'],
        serviceName: 'Reparación de PC de escritorio',
      },
    ],
  },

  process: {
    eyebrow: 'Cómo trabajamos',
    title: 'De la idea al lanzamiento en 4 pasos',
    text: 'Un proceso transparente: siempre sabrás en qué etapa está tu proyecto.',
    steps: [
      {
        title: 'Descubrimiento',
        tag: 'Reunión gratuita',
        text: 'Escuchamos tu idea, definimos objetivos y te enviamos una cotización clara.',
      },
      {
        title: 'Diseño',
        tag: 'Prototipo interactivo',
        text: 'Creamos prototipos de pantallas para que veas tu producto antes de programarlo.',
      },
      {
        title: 'Desarrollo',
        tag: 'Entregas semanales',
        text: 'Programamos por etapas con avances semanales que puedes probar.',
      },
      {
        title: 'Lanzamiento',
        tag: 'Soporte continuo',
        text: 'Publicamos tu web o app y te acompañamos con soporte y mejoras.',
      },
    ],
  },

  contact: {
    eyebrow: 'Hablemos',
    title: '¿Tienes un proyecto o un equipo dañado?',
    text: 'Escríbenos y te respondemos en menos de 24 horas.',
    whatsapp: 'Chatear por WhatsApp',
    heading: '¿En qué te ayudamos?',
    hint: 'Toca una opción y se abre WhatsApp con el mensaje listo.',
    /** Mismo orden que los íconos y colores en data/content.ts */
    options: [
      { label: 'Cotizar página web', value: 'Sitios y tiendas en línea', message: 'Hola, necesito ayuda con: cotizar una página web' },
      { label: 'Cotizar una app', value: 'Móvil o de escritorio', message: 'Hola, necesito ayuda con: cotizar una app' },
      { label: 'Reparar mi equipo', value: 'Celular, laptop o PC', message: 'Hola, necesito ayuda con: reparar mi equipo' },
    ],
  },

  /** Textos para los datos estructurados (JSON-LD) */
  schema: {
    developmentType: 'Desarrollo de software',
    repairType: 'Reparación de equipos',
    catalog: 'Servicios',
  },
}

export default es
export type Dictionary = typeof es
