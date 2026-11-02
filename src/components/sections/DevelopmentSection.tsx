import { useContent } from '../../data/content'
import { useT } from '../../i18n'
import SectionHeader from '../ui/SectionHeader'
import ServiceCard from '../ServiceCard'

export default function DevelopmentSection() {
  const { development } = useT()
  const { services } = useContent()

  return (
    <section id="desarrollo" className="section-y bg-paper">
      <div className="container-page">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <SectionHeader eyebrow={development.eyebrow} title={development.title} />
          </div>
          <p className="max-w-sm text-slate-500">{development.text}</p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {services.map((s, i) => (
            <div key={s.title} className={i === 2 ? 'md:col-span-2 lg:col-span-1' : ''}>
              <ServiceCard {...s} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
