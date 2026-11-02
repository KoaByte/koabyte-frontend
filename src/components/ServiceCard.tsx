import { FiCheck } from 'react-icons/fi'
import type { IconType } from 'react-icons'

interface Props { title: string; text: string; items: string[]; cta: string; icon: IconType; featured?: boolean }

export default function ServiceCard({ title, text, items, cta, icon: Icon, featured }: Props) {
  return (
    <article
      className={`flex h-full flex-col rounded-3xl border p-6 lg:p-8 ${
        featured ? 'border-night bg-night text-white' : 'border-slate-200 bg-white'
      }`}
    >
      <div className="flex items-center gap-4 lg:block">
        <span aria-hidden="true" className={`icon-box size-12 text-xl lg:size-16 lg:text-2xl ${featured ? 'bg-koa text-night' : 'bg-emerald-50 text-sky-600'}`}>
          <Icon />
        </span>
        <h3 className="text-xl font-bold lg:mt-8 lg:text-2xl">{title}</h3>
      </div>
      <p className={`mt-4 text-sm leading-relaxed lg:text-base ${featured ? 'text-slate-300' : 'text-slate-500'}`}>{text}</p>

      <ul className="mt-6 space-y-3 text-sm">
        {items.map((i) => (
          <li key={i} className="flex items-center gap-3">
            <FiCheck aria-hidden="true" className={`shrink-0 ${featured ? 'text-koa' : 'text-koa-dark'}`} /> {i}
          </li>
        ))}
      </ul>

      <a href="#contacto" className={`mt-auto pt-8 text-sm font-semibold ${featured ? 'text-koa' : 'text-koa-dark'}`}>
        {cta} <span aria-hidden="true">→</span>
      </a>
    </article>
  )
}
