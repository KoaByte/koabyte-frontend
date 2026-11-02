import { useCallback, useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { sectionIds, useContent } from '../data/content'
import { useT } from '../i18n'
import { useActiveSection } from '../hooks/useActiveSection'
import Button from './ui/Button'
import Logo from './ui/Logo'
import LanguageSwitcher from './LanguageSwitcher'
import MobileMenu from './MobileMenu'
import SocialLinks from './SocialLinks'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(sectionIds)
  const close = useCallback(() => setOpen(false), [])
  const t = useT()
  const { navLinks } = useContent()
  

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-night/85 backdrop-blur">
      <div className="container-page flex h-18 items-center justify-between lg:h-22">
        <Logo />

        <nav aria-label={t.ui.mainNav} className="hidden items-center gap-9 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              aria-current={active === l.id ? 'location' : undefined}
              className={`text-[15px] transition hover:text-white ${active === l.id ? 'text-white' : 'text-slate-400'}`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <Button href="#contacto" className="hidden py-3! md:inline-flex">{t.ui.quote}</Button>
          <SocialLinks mobileHidden={true} />
          <button
            type="button"
            aria-label={t.ui.openMenu}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
            className="grid size-11 cursor-pointer place-items-center rounded-xl border border-white/15 text-xl text-white lg:hidden"
          >
            <FiMenu />
          </button>
        </div>
      </div>

      <MobileMenu open={open} active={active} onClose={close} />
    </header>
  )
}
