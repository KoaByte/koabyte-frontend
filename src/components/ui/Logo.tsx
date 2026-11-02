import { site } from '../../data/site'
import { useT } from '../../i18n'

interface Props { onClick?: () => void }

export default function Logo({ onClick }: Props) {
  const t = useT()
  return (
    <a
      href="#inicio"
      onClick={onClick}
      aria-label={`${site.name} – ${t.ui.logoLink}`}
    >
      <img
        src="/logo.webp"
        srcSet="/logo.webp 1x, /logo@2x.webp 2x"
        width={114}
        height={114}
        alt={t.ui.logoAlt}
        className="block size-16 lg:size-20"
      />
    </a>
  )
}
