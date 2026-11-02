import { useT } from '../../i18n'
import SectionHeader from '../ui/SectionHeader'
import StepCard from '../StepCard'

export default function ProcessSection() {
  const { process } = useT()

  return (
    <section id="proceso" className="section-y bg-night">
      <div className="container-page">
        <SectionHeader
          dark
          eyebrow={process.eyebrow}
          title={process.title}
          text={process.text}
        />
        <ol className="mt-12 grid gap-4 md:grid-cols-2 md:gap-x-5 md:gap-y-8 lg:grid-cols-4">
          {process.steps.map((s, i) => (
            <StepCard key={s.title} index={i} isLast={i === process.steps.length - 1} {...s} />
          ))}
        </ol>
      </div>
    </section>
  )
}
