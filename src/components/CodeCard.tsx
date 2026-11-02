import { useT } from '../i18n'

export default function CodeCard() {
  const c = useT().hero.code

  return (
    <div aria-hidden="true" className="rounded-3xl border border-white/10 bg-night-soft p-6 font-mono text-[13px] leading-7 shadow-2xl lg:p-8 lg:text-sm">
      <div className="mb-5 flex gap-2">
        <span className="size-3 rounded-full bg-orange-400" />
        <span className="size-3 rounded-full bg-yellow-400" />
        <span className="size-3 rounded-full bg-koa" />
      </div>
      <p className="text-slate-500">{'// koabyte.app'}</p>
      <p><span className="text-purple-400">const</span> <span className="text-slate-200">{c.varName}</span> = <span className="text-sky-300">{c.fn}</span>({'{'}</p>
      <p className="pl-4">{c.kClient}: <span className="text-koa">"{c.client}"</span>,</p>
      <p className="pl-4">{c.kPlatforms}: [<span className="text-koa">"{c.platforms[0]}"</span>, <span className="text-koa">"{c.platforms[1]}"</span>, <span className="text-koa">"{c.platforms[2]}"</span>],</p>
      <p className="pl-4">{c.kDesign}: <span className="text-koa">"{c.design}"</span>,</p>
      <p className="pl-4">{c.kSupport}: <span className="text-purple-400">true</span></p>
      <p>{'});'}</p>
      <p><span className="text-sky-300">{c.launch}</span>({c.varName}); <span className="text-slate-500">{'//'} 🚀</span></p>
    </div>
  )
}
