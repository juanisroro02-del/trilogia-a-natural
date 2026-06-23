import AnnouncementBar   from '@/components/ui/AnnouncementBar'
import Header            from '@/components/ui/Header'
import StickyProductBar  from '@/components/ui/StickyProductBar'
import Footer            from '@/components/ui/Footer'
import FluidNav          from '@/components/ui/FluidNav'

import Hero              from '@/components/sections/Hero'
import PhilosophyStrip   from '@/components/sections/PhilosophyStrip'
import Products          from '@/components/sections/Products'
import OilFeature        from '@/components/sections/OilFeature'
import HowToUse          from '@/components/sections/HowToUse'
import Pricing           from '@/components/sections/Pricing'
import PaymentMethods    from '@/components/sections/PaymentMethods'
import CTASection        from '@/components/sections/CTASection'

export default function Page() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <StickyProductBar />

      <main id="main-content">
        <Hero />
        <PhilosophyStrip />
        <Products />
        <OilFeature />
        <HowToUse />
        <Pricing />
        <PaymentMethods />
        <CTASection />
      </main>

      <Footer />
      <FluidNav />
    </>
  )
}
