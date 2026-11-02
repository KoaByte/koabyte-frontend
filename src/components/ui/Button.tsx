import type { ReactNode } from 'react'

type Variant = 'koa' | 'taller' | 'ghost'

interface Props {
  children: ReactNode
  variant?: Variant
  href?: string
  type?: 'button' | 'submit'
  className?: string
  onClick?: () => void
  /** Abre en otra pestaña (enlaces externos como WhatsApp) */
  external?: boolean
}

export default function Button({ children, variant = 'koa', href, type = 'button', className = '', onClick, external }: Props) {
  const cls = `btn btn-${variant} ${className}`
  return href ? (
    <a href={href} className={cls} onClick={onClick} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{children}</a>
  ) : (
    <button type={type} className={cls} onClick={onClick}>{children}</button>
  )
}
