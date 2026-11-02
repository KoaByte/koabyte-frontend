import type { ReactNode } from 'react'

interface Props {
  eyebrow: string
  title: ReactNode
  text?: string
  dark?: boolean
  taller?: boolean
}

export default function SectionHeader({ eyebrow, title, text, dark, taller }: Props) {
  return (
    <div>
      <p className={`eyebrow ${taller ? 'eyebrow-taller' : ''} ${dark ? 'text-koa!' : ''}`}>{eyebrow}</p>
      <h2 className={`section-title ${dark ? 'text-white' : ''}`}>{title}</h2>
      {text && <p className={`mt-4 text-base ${dark ? 'text-slate-300' : 'text-slate-500'}`}>{text}</p>}
    </div>
  )
}
