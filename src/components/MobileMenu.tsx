import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, LazyMotion, domAnimation } from 'motion/react'
import * as m from 'motion/react-m'
import { FiX } from 'react-icons/fi'
import { useContent } from '../data/content'
import { useT } from '../i18n'
import Button from './ui/Button'
import Logo from './ui/Logo'
import LanguageSwitcher from './LanguageSwitcher'

interface Props { open: boolean; active: string; onClose: () => void }

/**
 * Se renderiza con un portal en <body>. El <header> usa `backdrop-blur`, y un
 * `backdrop-filter` convierte al header en el bloque contenedor de los hijos
 * `position: fixed`; por eso antes el menú quedaba recortado y se veía transparente.
 */
export default function MobileMenu({ open, active, onClose }: Props) {
  const panelRef = useRef<HTMLDivElement>(null)
  const t = useT()
  const { navLinks } = useContent()

  useEffect(() => {
    if (!open) return
    const previouslyFocused = document.activeElement as HTMLElement | null
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') return onClose()
      if (e.key !== 'Tab') return
      // Mantiene el foco dentro del menú mientras está abierto
      const items = panelRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')
      if (!items?.length) return
      const first = items[0]
      const last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    // Cierra si la pantalla crece a desktop con el menú abierto
    const mq = window.matchMedia('(min-width: 1024px)')
    const onResize = () => mq.matches && onClose()

    document.addEventListener('keydown', onKey)
    mq.addEventListener('change', onResize)
    panelRef.current?.querySelector<HTMLElement>('button, a')?.focus()

    return () => {
      document.body.style.overflow = prevOverflow
      document.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onResize)
      // Devuelve el foco al botón que abrió el menú
      previouslyFocused?.focus({ preventScroll: true })
    }
  }, [open, onClose])

  if (typeof document === 'undefined') return null

  return createPortal(
    <LazyMotion features={domAnimation} strict>
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Fondo oscuro: clic fuera del menú lo cierra */}
          <m.div
            aria-hidden="true"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"
          />

          <m.div
            ref={panelRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label={t.ui.menuLabel}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', ease: [0.32, 0.72, 0, 1], duration: 0.3 }}
            className="absolute inset-y-0 right-0 flex w-[82%] max-w-sm flex-col overflow-y-auto border-l border-white/10 bg-night shadow-2xl shadow-black/50"
          >
            <div className="flex h-18 shrink-0 items-center justify-between border-b border-white/10 px-5 md:px-8">
              <Logo onClick={onClose} />
              <button
                type="button"
                aria-label={t.ui.closeMenu}
                onClick={onClose}
                className="grid size-11 cursor-pointer place-items-center rounded-xl bg-night-soft text-xl text-white transition hover:bg-white/10"
              >
                <FiX />
              </button>
            </div>

            <nav aria-label={t.ui.mobileNav} className="flex-1 px-5 pt-4 md:px-8">
              {navLinks.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={onClose}
                  aria-current={active === l.id ? 'location' : undefined}
                  className="flex items-center justify-between border-b border-white/10 py-5 font-display text-2xl font-bold"
                >
                  <span className={active === l.id ? 'text-koa' : 'text-white'}>{l.label}</span>
                  <span className={`text-xs font-medium ${l.taller ? 'text-taller' : 'text-slate-500'}`}>
                    <span className="md:hidden">{l.num}</span>
                    <span className="hidden md:inline">{l.hint || l.num}</span>
                  </span>
                </a>
              ))}
            </nav>

            <div className="flex flex-col gap-3 px-5 pb-8 pt-6 md:px-8">
              <LanguageSwitcher className="mb-2 self-start" />
              <Button href="#contacto" onClick={onClose} className="py-4! text-lg!">{t.ui.quote}</Button>
              <Button href="#reparaciones" variant="ghost" onClick={onClose} className="py-4! text-lg!">{t.ui.repairMine}</Button>
            </div>
          </m.div>
        </div>
      )}
    </AnimatePresence>
    </LazyMotion>,
    document.body,
  )
}
