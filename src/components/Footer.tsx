import { useContent } from '../data/content'
import { site } from '../data/site'
import { useT } from '../i18n'
import Logo from './ui/Logo'

export default function Footer() {
  const t = useT()
  const { navLinks } = useContent()

  return (
    <footer className="bg-night py-10 text-sm text-slate-400">
      <div className="container-page flex flex-col items-center gap-6 text-center lg:flex-row lg:items-start lg:justify-between lg:text-left">
        <div className="flex flex-col items-center gap-2 lg:items-start">
          <Logo />
          <p>{t.ui.footerTagline}</p>
        </div>

        <nav aria-label={t.ui.footerNav}>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((l) => (
              <li key={l.id}><a href={`#${l.id}`} className="transition hover:text-white">{l.label}</a></li>
            ))}
          </ul>
        </nav>

        <address className="flex flex-col gap-1 not-italic lg:items-end">
          <a href={`tel:${site.phone}`} className="transition hover:text-white">{site.phoneDisplay}</a>
          <a href={`mailto:${site.email}`} className="transition hover:text-white">{site.email}</a>
        </address>
      </div>

      <p suppressHydrationWarning className="container-page mt-8 border-t border-white/10 pt-6 text-center text-xs">
        © {new Date().getFullYear()} {site.name}. {t.ui.rights}
      </p>
    </footer>
  )
}
