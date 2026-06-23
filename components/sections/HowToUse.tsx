'use client'
import { useState } from 'react'
import Image from 'next/image'
import ScrollReveal from '@/components/ui/ScrollReveal'
import ImageLightbox from '@/components/ui/ImageLightbox'
import { HOW_TO_USE, IMAGES } from '@/lib/constants'

const TABS = [
  { label: 'Shampoo',        image: IMAGES.metodoShampoo },
  { label: 'Acondicionador',  image: IMAGES.metodoAcondicionador },
  { label: 'Aceite Capilar',  image: IMAGES.metodoAceite },
]

export default function HowToUse() {
  const [active, setActive] = useState(0)

  return (
    <section id="uso" aria-labelledby="uso-heading" className="bg-sand/40 py-20 md:py-32 px-6 overflow-hidden">
      <div className="max-w-[1100px] mx-auto">

        <ScrollReveal className="text-center mb-16 md:mb-24">
          <p className="eyebrow text-mandarin text-[0.67rem] mb-4">Rutina de uso</p>
          <h2 id="uso-heading" className="font-display font-light sec-display text-charcoal">
            Cómo se usa
          </h2>
          <p className="mt-4 text-charcoal/45 text-[0.92rem] max-w-xs mx-auto">
            Simple, constante, natural.
          </p>
        </ScrollReveal>

        {/* Steps row */}
        <div className="flex flex-col md:flex-row gap-0 md:gap-0 mb-16 md:mb-20">
          {HOW_TO_USE.map((step, i) => (
            <ScrollReveal key={step.step} delay={i * 120} className="flex-1 relative">
              <article
                className={`relative px-8 py-12 md:px-10 md:py-14 ${
                  i < HOW_TO_USE.length - 1 ? 'border-b md:border-b-0 md:border-r border-sand' : ''
                }`}
                aria-label={`Paso ${step.step}: ${step.title}`}
              >
                <span
                  aria-hidden="true"
                  className="absolute top-6 right-6 font-display font-black text-charcoal/[0.04]"
                  style={{ fontSize: 'clamp(4rem, 8vw, 7rem)', lineHeight: 1, userSelect: 'none' }}
                >
                  {step.step}
                </span>

                <span className="eyebrow text-mandarin text-[0.62rem] mb-5 block">
                  Paso {step.step}
                </span>

                <div aria-hidden="true" className="w-8 h-[1px] bg-sage/40 mb-6" />

                <h3 className="font-display font-light text-charcoal mb-4"
                    style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)' }}>
                  {step.title}
                </h3>

                <p className="text-charcoal/55 text-[0.92rem] leading-[1.85] max-w-xs">
                  {step.body}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Method tabs + infographic with lightbox */}
        <ScrollReveal>
          <div className="text-center mb-8">
            <p className="eyebrow text-mandarin text-[0.67rem] mb-5">Método de aplicación</p>
            <div className="inline-flex rounded-full border border-sand overflow-hidden" role="tablist">
              {TABS.map((tab, i) => (
                <button
                  key={tab.label}
                  role="tab"
                  aria-selected={active === i}
                  onClick={() => setActive(i)}
                  className={`px-5 sm:px-7 py-2.5 eyebrow text-[0.62rem] sm:text-[0.65rem] transition-colors ${
                    active === i
                      ? 'bg-forest text-cream'
                      : 'bg-transparent text-charcoal/50 hover:text-charcoal/80'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div role="tabpanel" className="max-w-[480px] mx-auto">
            {TABS.map((tab, i) => (
              <div key={tab.label} className={active === i ? 'block' : 'hidden'}>
                <ImageLightbox
                  src={tab.image}
                  alt={`Método de aplicación — ${tab.label}`}
                  className="block w-full rounded-2xl overflow-hidden border border-sand/70 shadow-[0_8px_40px_rgba(27,42,25,0.10)]"
                >
                  <Image
                    src={tab.image}
                    alt={`Método de aplicación — ${tab.label}`}
                    width={480}
                    height={850}
                    className="w-full h-auto block"
                  />
                </ImageLightbox>
                <p className="text-center text-charcoal/35 text-[0.78rem] mt-4">
                  Toca la imagen para verla en grande
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
