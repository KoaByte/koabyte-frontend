import { FiArrowRight } from 'react-icons/fi'
import { useContent } from '../../data/content'
import { waLink } from '../../data/site'
import { useT } from '../../i18n'
import Button from '../ui/Button'
import SectionHeader from '../ui/SectionHeader'

const styles = {
  koa: { button: 'border-koa/50 bg-koa/15', icon: 'bg-koa' },
  taller: { button: 'border-taller/50 bg-taller/15', icon: 'bg-taller' },
}

export default function ContactSection() {
  const { contact } = useT()
  const { contactInfo } = useContent()

  return (
    <section id="contacto" className="section-y bg-paper">
      <div className="container-page grid gap-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeader
            eyebrow={contact.eyebrow}
            title={contact.title}
            text={contact.text}
          />

          <Button href={waLink()} external className="mt-2.5 w-full font-bold">
            {contact.whatsapp}
          </Button>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-bold">{contact.heading}</h3>
          <p className="text-slate-500">{contact.hint}</p>

          <div className="flex flex-col gap-3 rounded-2xl bg-white p-6 shadow-lg">
            {contactInfo.map(({ label, value, icon: Icon, href, variant }) => (
              <Button
                key={label}
                href={href}
                external
                className={`flex items-center justify-between border ${styles[variant].button}`}
              >
                <div className="flex items-center gap-3">
                  <span aria-hidden="true" className={`icon-box size-9 text-night lg:size-11 ${styles[variant].icon}`}>
                    <Icon className="lg:size-6" />
                  </span>
                  <div className="flex flex-col">
                    <span className="font-bold">{label}</span>
                    <span className="font-normal">{value}</span>
                  </div>
                </div>
                <FiArrowRight aria-hidden="true" className="lg:size-6" />
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
