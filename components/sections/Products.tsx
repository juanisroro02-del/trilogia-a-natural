'use client'

import { useState } from 'react'
import Image from 'next/image'
import ScrollReveal from '@/components/ui/ScrollReveal'
import ImageLightbox from '@/components/ui/ImageLightbox'
import { PRODUCTS_CAPILAR, PRODUCTS_EXTRAS } from '@/lib/constants'

function ProductGallery({ images, name, className }: { images: string[], name: string, className?: string }) {
  const [active, setActive] = useState(0)

  if (images.length <= 1) {
    return (
      <ImageLightbox src={images[0]} alt={name} className={`relative block bg-sand/50 overflow-hidden w-full ${className}`}>
        <div style={{ minHeight: 'clamp(280px, 40vw, 540px)', position: 'relative' }}>
          <Image src={images[0]} alt={name} fill className="object-cover transition-transform duration-700 hover:scale-[1.03]" sizes="(max-width: 768px) 100vw, 50vw" />
          <div className="absolute inset-0 bg-forest/5 pointer-events-none" />
        </div>
      </ImageLightbox>
    )
  }

  return (
    <div className={`relative bg-sand/50 overflow-hidden ${className}`}>
      {/* Active image */}
      <ImageLightbox src={images[active]} alt={`${name} — foto ${active + 1}`} className="block w-full">
        <div style={{ minHeight: 'clamp(280px, 40vw, 540px)', position: 'relative' }}>
          <Image src={images[active]} alt={`${name} — foto ${active + 1}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          <div className="absolute inset-0 bg-forest/5 pointer-events-none" />
        </div>
      </ImageLightbox>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-10 bg-charcoal/40 backdrop-blur-sm rounded-full px-3 py-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); setActive(i) }}
            className={`w-3 h-3 rounded-full transition-colors border-2 ${active === i ? 'bg-cream border-cream' : 'bg-transparent border-cream/50'}`}
            aria-label={`Ver foto ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

function ProductCard({ product, index }: { product: typeof PRODUCTS_CAPILAR[number] & { gallery?: string[] }, index: number }) {
  const isEven = index % 2 === 0
  const images = product.gallery ?? [product.image]

  return (
    <ScrollReveal delay={index * 80}>
      <article
        id={product.id}
        className="grid md:grid-cols-2 border-t border-sand/60 last:border-b"
        aria-label={product.name}
      >
        {/* Image(s) */}
        <ProductGallery images={images} name={product.name} className={isEven ? 'md:order-1' : 'md:order-2'} />

        {/* Content */}
        <div className={`flex flex-col justify-center px-8 py-12 md:px-14 md:py-16 bg-mist ${isEven ? 'md:order-2' : 'md:order-1'}`}>
          <p className="eyebrow text-mandarin text-[0.65rem] mb-4">{product.tagline}</p>
          <h3
            className="font-display font-light text-charcoal mb-5"
            style={{ fontSize: 'clamp(1.9rem, 3.5vw, 3.2rem)', lineHeight: 1.12 }}
          >
            {product.name}
          </h3>
          <p className="text-charcoal/55 text-[0.94rem] leading-relaxed mb-7 max-w-sm">
            {product.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {product.benefits.map(b => (
              <span key={b} className="eyebrow text-[0.6rem] border border-sand/80 text-charcoal/50 px-3 py-1 rounded-full">
                {b}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between flex-wrap gap-4">
            <span
              className="font-display font-semibold text-forest"
              style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}
            >
              {product.price}
            </span>
            <a
              href={product.waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary text-[0.72rem] py-[0.75rem] px-6"
            >
              Comprar
            </a>
          </div>
        </div>
      </article>
    </ScrollReveal>
  )
}

export default function Products() {
  return (
    <section id="productos" aria-labelledby="productos-heading" className="bg-mist py-20 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6">

        <ScrollReveal className="text-center mb-16 md:mb-24">
          <p className="eyebrow text-mandarin text-[0.67rem] mb-4">Línea capilar</p>
          <h2 id="productos-heading" className="font-display font-light sec-display text-charcoal">
            La Trilogía
          </h2>
          <p className="mt-4 text-charcoal/50 text-[0.95rem] max-w-md mx-auto leading-relaxed">
            Shampoo, acondicionador y aceite. Tres fórmulas con extractos de almendras, romero, cedro y argán, diseñadas para funcionar en sinergia.
          </p>
        </ScrollReveal>

        <div className="flex flex-col gap-0 mb-0">
          {PRODUCTS_CAPILAR.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        <ScrollReveal className="text-center mt-24 md:mt-36 mb-16 md:mb-24">
          <p className="eyebrow text-mandarin text-[0.67rem] mb-4">Más de Trilogía A-Natural</p>
          <h3 className="font-display font-light sec-display text-charcoal">
            Complementos
          </h3>
          <p className="mt-4 text-charcoal/50 text-[0.95rem] max-w-md mx-auto leading-relaxed">
            Bienestar muscular y relajación. Productos artesanales con ingredientes de origen natural.
          </p>
        </ScrollReveal>

        <div className="flex flex-col gap-0">
          {PRODUCTS_EXTRAS.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
