import { useT } from '../../i18n'
import Button from '../ui/Button'
import CodeCard from '../CodeCard'
import RepairStatus from '../RepairStatus'

export default function HeroSection() {
  const t = useT()
  const { hero } = t

  return (
    <section id="inicio" className="relative overflow-hidden bg-night text-white">
      <div className="pointer-events-none absolute right-0 top-1/3 size-[500px] rounded-full bg-koa/10 blur-[120px]" />

      <div className="container-page section-y relative grid items-center gap-12 lg:grid-cols-2 lg:gap-10">
        <div>
          <span className="inline-block rounded-full bg-night-soft px-4 py-2 text-xs font-bold uppercase tracking-wider text-koa">
            {hero.badge}
          </span>
          <h1 className="mt-6 text-5xl font-bold leading-[1.05] md:text-6xl lg:text-7xl">
            {hero.titleStart}<span className="text-koa">{hero.titleAccent}</span>{hero.titleEnd}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 lg:text-lg">
            {hero.text}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#contacto">{hero.start}</Button>
            <Button href="#reparaciones" variant="ghost">{t.ui.repairMine}</Button>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 border-y border-white/10 py-5 md:border-0 md:py-0 lg:flex lg:gap-10">
            {hero.stats.map((s) => (
              <div key={s.title}>
                <dt className="font-display text-lg font-bold md:text-2xl lg:text-3xl">{s.title}</dt>
                <dd className="text-xs text-slate-400 lg:text-sm">{s.text}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative md:pb-8 lg:pb-16">
          <div className="hidden md:block"><CodeCard /></div>
          <div className="md:absolute md:bottom-0 md:right-6 lg:right-0">
            <RepairStatus />
          </div>
        </div>
      </div>
    </section>
  )
}
