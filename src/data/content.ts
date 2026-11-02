import type { IconType } from 'react-icons'
import {
  FiGlobe, FiSmartphone, FiMonitor, FiSearch, FiShield, FiZap,
  FiMessageCircle, FiTool,
} from 'react-icons/fi'
import { useT } from '../i18n'
import type { Dictionary } from '../i18n'
import { waLink } from './site'

/**
 * Parte "estructural" del contenido: íconos, colores y ids de sección.
 * Los textos salen del diccionario del idioma (src/i18n/es.ts y en.ts), en el mismo orden.
 */

/** Ids de las secciones de la página (iguales en todos los idiomas) */
export const sectionIds: string[] = ['inicio', 'desarrollo', 'reparaciones', 'proceso', 'contacto']

const serviceIcons: IconType[] = [FiGlobe, FiSmartphone, FiMonitor]
const featuredService = 1
const benefitIcons: IconType[] = [FiSearch, FiShield, FiZap]
const repairIcons: IconType[] = [FiSmartphone, FiMonitor, FiTool]
const contactIcons: IconType[] = [FiMessageCircle, FiSmartphone, FiTool]
const contactVariants = ['koa', 'koa', 'taller'] as const

export function getContent(t: Dictionary) {
  return {
    navLinks: t.navLinks.map((l, i) => ({
      ...l,
      id: sectionIds[i],
      num: String(i + 1).padStart(2, '0'),
      taller: sectionIds[i] === 'reparaciones',
    })),
    services: t.services.map((s, i) => ({ ...s, icon: serviceIcons[i], featured: i === featuredService })),
    repairBenefits: t.repairsSection.benefits.map((b, i) => ({ ...b, icon: benefitIcons[i] })),
    repairs: t.repairsSection.items.map((r, i) => ({ ...r, icon: repairIcons[i] })),
    contactInfo: t.contact.options.map((o, i) => ({
      label: o.label,
      value: o.value,
      icon: contactIcons[i],
      variant: contactVariants[i],
      href: waLink(o.message),
    })),
  }
}

/** Contenido (con íconos) en el idioma de la ruta actual */
export function useContent() {
  return getContent(useT())
}
