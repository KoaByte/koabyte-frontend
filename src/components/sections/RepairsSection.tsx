import { useContent } from '../../data/content'
import { useT } from '../../i18n'
import Button from '../ui/Button'
import SectionHeader from '../ui/SectionHeader'
import RepairCard from '../RepairCard'

export default function RepairsSection() {
  const { repairsSection } = useT()
  const { repairBenefits, repairs } = useContent()

  return (
    <section id="reparaciones" className="section-y bg-white">
      <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div>
          <SectionHeader
            taller
            eyebrow={repairsSection.eyebrow}
            title={repairsSection.title}
            text={repairsSection.text}
          />

          <ul className="mt-8 flex flex-wrap gap-3 flex-col lg:gap-4">
            {repairBenefits.map(({ icon: Icon, text, short }) => (
              <li key={text} className="flex items-center gap-3 text-sm font-semibold lg:text-base">
                <span aria-hidden="true" className="icon-box size-9 bg-taller-soft text-taller lg:size-11">
                  <Icon />
                </span>
                <span className="md:hidden lg:inline">{text}</span>
                <span className="hidden md:inline lg:hidden">{short}</span>
              </li>
            ))}
          </ul>

          <Button href="#contacto" variant="taller" className="mt-8 hidden lg:inline-flex">{repairsSection.book}</Button>
        </div>

        <div className="space-y-4">
          {repairs.map((r) => <RepairCard key={r.title} {...r} />)}
          {/* Celular: botón fijo abajo · Tablet: ancho completo al final */}
          <Button href="#contacto" variant="taller" className="sticky bottom-4 z-10 w-full shadow-lg md:static md:shadow-none lg:hidden">
            {repairsSection.book}
          </Button>
        </div>
      </div>
    </section>
  )
}
