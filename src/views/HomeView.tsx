import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection from '../components/sections/HeroSection'
import DevelopmentSection from '../components/sections/DevelopmentSection'
import RepairsSection from '../components/sections/RepairsSection'
import ProcessSection from '../components/sections/ProcessSection'
import ContactSection from '../components/sections/ContactSection'
import StructuredData from '../components/seo/StructuredData'
import { useT } from '../i18n'

export default function HomeView() {
  const t = useT()

  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-koa focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-night"
      >
        {t.ui.skip}
      </a>
      <StructuredData />
      <Navbar />
      <main id="contenido">
        <HeroSection />
        <DevelopmentSection />
        <RepairsSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
