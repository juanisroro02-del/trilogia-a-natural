import Image from 'next/image'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { BRAND, WA_LINKS, IMAGES } from '@/lib/constants'

export default function CTASection() {
  return (
    <section
      id="comprar"
      aria-labelledby="cta-heading"
      className="relative bg-forest overflow-hidden py-24 md:py-36 px-6"
    >
      {/* Faint product silhouette */}
      <div
        aria-hidden="true"
        className="absolute right-0 bottom-0 w-[340px] md:w-[520px] h-full pointer-events-none select-none opacity-[0.05]"
        style={{ transform: 'translateX(15%)' }}
      >
        <Image
          src={IMAGES.kitCompleto}
          alt=""
          fill
          className="object-contain object-bottom"
          sizes="520px"
        />
      </div>

      <div className="relative z-10 max-w-[700px] mx-auto text-center">
        <ScrollReveal>
          <p className="eyebrow text-cream/30 text-[0.65rem] mb-6">Contáctanos</p>

          <h2
            id="cta-heading"
            className="font-display font-light text-cream/90 mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)', lineHeight: 1.1 }}
          >
            ¿Lista para empezar<br />
            <em className="italic text-cream/55">tu rutina natural?</em>
          </h2>

          <p className="text-cream/45 text-[0.95rem] leading-relaxed mb-10 max-w-md mx-auto">
            Escríbenos por WhatsApp y coordinamos tu pedido.
            Respondemos rápido.
          </p>

          {/* Contact row */}
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 mb-10">
            {[
              { label: 'WhatsApp', value: BRAND.phone, href: WA_LINKS.info },
              { label: 'Instagram', value: BRAND.instagramHandle, href: BRAND.instagram },
              { label: 'Email', value: BRAND.email, href: `mailto:${BRAND.email}` },
            ].map(item => (
              <div key={item.label} className="text-center">
                <p className="eyebrow text-cream/25 text-[0.58rem] mb-1">{item.label}</p>
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-cream/70 text-[0.9rem] hover:text-cream transition-colors"
                >
                  {item.value}
                </a>
              </div>
            ))}
          </div>

          {/* Primary CTA */}
          <a
            href={WA_LINKS.kit}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-wa inline-flex text-[0.8rem] py-[1.1rem] px-9"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="flex-shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Enviar mensaje por WhatsApp
          </a>

          <p className="mt-5 eyebrow text-cream/20 text-[0.6rem]">
            Respondemos rápido · Envíos a toda Colombia
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
