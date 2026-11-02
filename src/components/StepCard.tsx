interface Props { index: number; title: string; text: string; tag: string; isLast: boolean }

export default function StepCard({ index, title, text, tag, isLast }: Props) {
  return (
    <li className="relative flex gap-4 md:flex-col md:gap-5">
      <span
        className={`z-10 grid size-11 shrink-0 place-items-center rounded-full border-2 border-koa font-display font-bold lg:size-16 lg:text-xl ${
          index === 0 ? 'bg-koa text-night' : 'bg-night text-koa'
        }`}
      >
        {index + 1}
      </span>

      {/* Línea vertical (celular) */}
      {!isLast && <span className="absolute -bottom-4 left-5.5 top-11 w-px bg-white/10 md:hidden" />}
      {/* Línea horizontal (desktop) */}
      {!isLast && <span className="absolute left-16 top-8 hidden h-px w-[calc(100%-3rem)] bg-white/10 lg:block" />}

      <div className="flex-1 rounded-2xl border border-white/10 bg-night-soft p-6">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">{text}</p>
        <span className="chip chip-koa mt-5 inline-block">{tag}</span>
      </div>
    </li>
  )
}
