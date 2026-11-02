import type { Dictionary } from './es'

/** English copy. It must keep the same shape as `es.ts` (TypeScript checks it). */
const en: Dictionary = {
  langName: 'English',
  htmlLang: 'en',
  ogLocale: 'en_US',

  meta: {
    title: 'KoaByte | Custom Software & Device Repair in Costa Rica',
    description:
      'We build custom websites, mobile apps and desktop software. We also repair phones, laptops and PCs, with free diagnosis and a 90-day warranty.',
    ogTitle: 'KoaByte | Software development and device repair',
    ogDescription:
      'Custom websites, mobile apps and software. Phone, laptop and PC repair with a 90-day warranty.',
    imageAlt: 'KoaByte: software development and device repair',
  },

  ui: {
    skip: 'Skip to content',
    logoAlt: 'KoaByte logo',
    logoLink: 'back to top',
    mainNav: 'Main navigation',
    mobileNav: 'Mobile navigation',
    footerNav: 'Footer links',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    menuLabel: 'Navigation menu',
    quote: 'Get a quote',
    repairMine: 'Repair my device',
    language: 'Language',
    footerTagline: 'Software development · Device repair · Support',
    rights: 'All rights reserved.',
  },

  navLinks: [
    { label: 'Home', hint: '' },
    { label: 'Development', hint: 'Web, mobile, desktop' },
    { label: 'Repairs', hint: 'Phone, laptop, PC' },
    { label: 'Process', hint: '' },
    { label: 'Contact', hint: '' },
  ],

  hero: {
    badge: 'Technology solutions',
    titleStart: 'We build the software that ',
    titleAccent: 'drives',
    titleEnd: ' your business.',
    text: 'We develop custom websites, mobile apps and desktop applications. And if your device fails, we repair your phone, laptop or PC.',
    start: 'Start a project',
    stats: [
      { title: 'Web', text: 'Sites and online stores' },
      { title: 'Mobile', text: 'iOS and Android' },
      { title: 'Desktop', text: 'Windows, macOS' },
    ],
    code: {
      varName: 'project',
      fn: 'create',
      launch: 'launch',
      kClient: 'client',
      kPlatforms: 'platforms',
      kDesign: 'design',
      kSupport: 'support',
      client: 'Your business',
      platforms: ['web', 'mobile', 'desktop'],
      design: 'custom',
    },
    repairStatus: { label: 'Repair in progress', item: 'Laptop · Screen replacement' },
  },

  development: {
    eyebrow: 'What we do best',
    title: 'Custom software built around your idea',
    text: 'From the first meeting to launch, we build digital solutions that are fast, secure and easy to use.',
  },

  services: [
    {
      title: 'Websites',
      text: 'Corporate sites, online stores and web systems that sell for you.',
      items: ['Responsive design', 'SEO and speed', 'Editable admin panel'],
      cta: 'Get a quote for a website',
    },
    {
      title: 'Mobile apps',
      text: 'iOS and Android apps with a native feel, published on the app stores.',
      items: ['iOS and Android', 'Push notifications', 'Integrated payments'],
      cta: 'Get a quote for a mobile app',
    },
    {
      title: 'Desktop apps',
      text: 'Software for Windows and macOS: inventory, point of sale and internal management.',
      items: ['Windows and macOS', 'Works offline', 'Local databases'],
      cta: 'Get a quote for a desktop app',
    },
  ],

  repairsSection: {
    eyebrow: 'Repair service',
    title: 'We repair your devices, hassle-free',
    text: 'Clear diagnosis, quality parts and a warranty on every repair.',
    book: 'Book a repair',
    benefits: [
      { text: 'Free diagnosis', short: 'Free diagnosis' },
      { text: '90-day warranty', short: '90-day warranty' },
      { text: 'Repairs in 24 to 72 h', short: '24 to 72 h' },
    ],
    items: [
      {
        title: 'Phones',
        text: 'Screens, batteries, charging ports and software.',
        tags: ['Screen', 'Battery', 'Charging port'],
        serviceName: 'Phone repair',
      },
      {
        title: 'Laptops',
        text: 'Keyboards, screens, maintenance and performance upgrades.',
        tags: ['Screen', 'SSD and RAM', 'Cleaning'],
        serviceName: 'Laptop repair',
      },
      {
        title: 'Desktop PCs',
        text: 'Custom builds, part upgrades, virus removal and operating system.',
        tags: ['Builds', 'Reinstall', 'Upgrades'],
        serviceName: 'Desktop PC repair',
      },
    ],
  },

  process: {
    eyebrow: 'How we work',
    title: 'From idea to launch in 4 steps',
    text: 'A transparent process: you always know which stage your project is in.',
    steps: [
      {
        title: 'Discovery',
        tag: 'Free meeting',
        text: 'We listen to your idea, define goals and send you a clear quote.',
      },
      {
        title: 'Design',
        tag: 'Interactive prototype',
        text: 'We create screen prototypes so you can see your product before we build it.',
      },
      {
        title: 'Development',
        tag: 'Weekly deliveries',
        text: 'We build in stages, with weekly progress you can test.',
      },
      {
        title: 'Launch',
        tag: 'Ongoing support',
        text: 'We publish your site or app and support you with maintenance and improvements.',
      },
    ],
  },

  contact: {
    eyebrow: "Let's talk",
    title: 'Have a project or a broken device?',
    text: 'Write to us and we will reply within 24 hours.',
    whatsapp: 'Chat on WhatsApp',
    heading: 'How can we help?',
    hint: 'Tap an option and WhatsApp opens with the message ready.',
    options: [
      { label: 'Quote a website', value: 'Sites and online stores', message: 'Hi, I need help with: a website quote' },
      { label: 'Quote an app', value: 'Mobile or desktop', message: 'Hi, I need help with: an app quote' },
      { label: 'Repair my device', value: 'Phone, laptop or PC', message: 'Hi, I need help with: repairing my device' },
    ],
  },

  schema: {
    developmentType: 'Software development',
    repairType: 'Device repair',
    catalog: 'Services',
  },
}

export default en
