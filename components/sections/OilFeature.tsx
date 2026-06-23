import Image from 'next/image'
import ScrollReveal from '@/components/ui/ScrollReveal'
import ImageLightbox from '@/components/ui/ImageLightbox'
import { IMAGES, WA_LINKS } from '@/lib/constants'

export default function OilFeature() {
  return (
    <section id="aceite" aria-labelledby="aceite-heading" className="bg-forest overflow-hidden">
      <div className="grid md:grid-cols-2" style={{ minHeight: 'clamp(560px, 80vh, 900px)' }}>

        {/* Content */}
        <ScrollReveal className="flex flex-col justify-center px-8 py-16 md:px-14 md:py-20 order-2 md:order-1">

          <p className="eyebrow text-mandarin text-[0.65rem] mb-5">
            <span className="mr-2">✦</span>Producto estrella
          </p>

          <h2
            id="aceite-heading"
            className="font-display font-light text-cream/90 mb-7"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)', lineHeight: 1.1 }}
          >
            El Aceite<br />
            <em className="italic text-cream/55">Capilar Natural</em>
          </h2>

          <p className="text-cream/60 text-[0.94rem] leading-[1.85] mb-5 max-w-md">
            Pensado para el cuidado diario del cuero cabelludo. Aporta nutrición profunda
            y acompaña el fortalecimiento de la fibra capilar con una combinación de
            extractos botánicos, vitaminas y ácidos grasos esenciales de origen natural.
          </p>
          <p className="text-cream/60 text-[0.94rem] leading-[1.85] mb-5 max-w-md">
            Aplicado con masaje suave, se integra a la rutina nocturna para que los
            nutrientes acompañen la fibra capilar durante el descanso.
          </p>

          <div className="border-t border-cream/10 pt-6 mt-2 mb-8 max-w-md">
            <p className="eyebrow text-cream/35 text-[0.63rem] mb-2">Modo de uso recomendado</p>
            <p className="text-cream/55 text-[0.88rem] leading-relaxed">
              Aplica la noche anterior al lavado directamente en el cuero cabelludo
              con masajes suaves. Al día siguiente lava con shampoo y acondicionador Trilogía.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={WA_LINKS.aceite}
              target="_blank"
              rel="noopener noreferrer"
              className="btn text-[0.72rem] py-[0.8rem] px-6 bg-cream text-forest hover:bg-sand transition-colors"
            >
              Comprar Aceite · $20.000
            </a>
            <a
              href={WA_LINKS.kit}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost text-[0.72rem] py-[0.8rem] px-6 border-cream/30 text-cream/70 hover:border-cream/60 hover:text-cream"
            >
              Ver kit completo →
            </a>
          </div>
        </ScrollReveal>

        {/* Product image — clickable */}
        <ImageLightbox
          src={IMAGES.aceiteHero}
          alt="Aceite Capilar Trilogía A-Natural"
          className="relative block order-1 md:order-2 bg-forest/80 w-full"
        >
          <div style={{ minHeight: 'clamp(320px, 50vw, 700px)', position: 'relative' }}>
            <Image
              src={IMAGES.aceiteHero}
              alt="Aceite Capilar Trilogía A-Natural — vista detalle"
              fill
              className="object-cover opacity-80 mix-blend-luminosity"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(to right, #1B2A19 0%, transparent 40%)',
              }}
            />
          </div>
        </ImageLightbox>
      </div>
    </section>
  )
}
