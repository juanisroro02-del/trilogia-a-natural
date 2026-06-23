import ScrollReveal from '@/components/ui/ScrollReveal'
import { WA_LINKS } from '@/lib/constants'

const kitPlan = {
  id:        'kit',
  name:      'Kit Trilogía A-Natural',
  sub:       'Shampoo + Acondicionador + Aceite',
  price:     '70.000',
  badge:     'Recomendado',
  features:  [
    'Rutina completa · 3 productos',
    'Ideal para uso continuo',
    'Mejor relación costo-beneficio',
    'Ahorras $15.000 vs compra individual',
  ],
  waLink:    WA_LINKS.kit,
  cta:       'Comprar kit',
}

const capilarPlans = [
  {
    id:       'shampoo',
    name:     'Shampoo',
    sub:      'Línea capilar',
    price:    '35.000',
    features: ['Limpieza profunda', 'Fortalece la fibra capilar', 'Aporta suavidad y brillo'],
    waLink:   WA_LINKS.shampoo,
  },
  {
    id:       'acondicionador',
    name:     'Acondicionador',
    sub:      'Línea capilar',
    price:    '30.000',
    features: ['Hidrata de medios a puntas', 'Facilita el desenredado', 'Fortalece el cabello'],
    waLink:   WA_LINKS.acondicionador,
  },
  {
    id:       'aceite',
    name:     'Aceite Capilar',
    sub:      'Línea capilar',
    price:    '20.000',
    features: ['Nutrición profunda', 'Fortalece la raíz', 'Favorece el crecimiento'],
    waLink:   WA_LINKS.aceite,
  },
]

const extraPlans = [
  {
    id:       'rollon',
    name:     'Roll-On Hot Pain',
    sub:      'Bienestar muscular',
    price:    '40.000',
    features: ['Mentol, alcanfor y yerbabuena', 'Sensación de frescura y calor', 'Aplicador práctico roll-on'],
    waLink:   WA_LINKS.rollon,
  },
  {
    id:       'te',
    name:     'Té Artesanal',
    sub:      '100% hecho a mano',
    price:    '15.000',
    features: ['Romero · Boldo · Cidrón', '7 porciones por caja', 'De la huerta a tu mesa'],
    waLink:   WA_LINKS.te,
  },
]

function PriceCard({ plan, delay }: { plan: typeof capilarPlans[number], delay: number }) {
  return (
    <ScrollReveal delay={delay}>
      <div className="border border-sand bg-mist p-7 flex flex-col h-full">
        <p className="eyebrow text-charcoal/40 text-[0.63rem] mb-3">{plan.sub}</p>
        <h3 className="font-display font-light text-charcoal mb-3"
            style={{ fontSize: 'clamp(1.4rem, 2.2vw, 1.9rem)' }}>
          {plan.name}
        </h3>
        <ul className="space-y-2 mb-6 flex-1">
          {plan.features.map(f => (
            <li key={f} className="text-charcoal/50 text-[0.84rem] flex items-start gap-2">
              <span className="text-sage/60 mt-0.5 flex-shrink-0">✓</span>
              {f}
            </li>
          ))}
        </ul>
        <div className="border-t border-sand pt-5 flex items-center justify-between gap-4">
          <p className="font-display font-semibold text-forest"
             style={{ fontSize: 'clamp(1.3rem, 2vw, 1.7rem)' }}>
            <span className="text-[70%]">$</span>{plan.price}
          </p>
          <a
            href={plan.waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn text-[0.68rem] py-[0.65rem] px-4 border border-sage text-sage hover:bg-sage hover:text-cream transition-colors"
          >
            Comprar
          </a>
        </div>
      </div>
    </ScrollReveal>
  )
}

export default function Pricing() {
  return (
    <section id="precios" aria-labelledby="precios-heading" className="bg-mist py-20 md:py-32 px-6">
      <div className="max-w-[1100px] mx-auto">

        <ScrollReveal className="text-center mb-14 md:mb-20">
          <p className="eyebrow text-mandarin text-[0.67rem] mb-4">Precios</p>
          <h2 id="precios-heading" className="font-display font-light sec-display text-charcoal">
            Elige tu rutina
          </h2>
          <p className="mt-4 text-charcoal/45 text-[0.92rem] max-w-sm mx-auto">
            Kit completo, productos individuales o complementos naturales.
          </p>
        </ScrollReveal>

        {/* Featured kit card */}
        <ScrollReveal className="mb-6">
          <div className="bg-forest text-cream p-8 md:p-12 flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
            <div className="flex-1">
              <span className="inline-block bg-mandarin text-cream eyebrow text-[0.6rem] px-3 py-1 rounded-full mb-4">
                {kitPlan.badge}
              </span>
              <h3 className="font-display font-light text-2xl md:text-3xl mb-1">{kitPlan.name}</h3>
              <p className="text-cream/50 text-sm mb-6">{kitPlan.sub}</p>
              <ul className="space-y-2">
                {kitPlan.features.map(f => (
                  <li key={f} className="text-cream/65 text-[0.87rem] flex items-start gap-2">
                    <span className="text-sage mt-0.5 flex-shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-start md:items-end gap-5 flex-shrink-0">
              <div>
                <p className="eyebrow text-cream/35 text-[0.6rem] mb-1">Precio kit</p>
                <p className="font-display font-light text-cream" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1 }}>
                  <span className="text-[60%] align-top mt-1 inline-block">$</span>70.000
                </p>
                <p className="text-cream/40 text-xs mt-0.5">COP</p>
              </div>
              <a
                href={kitPlan.waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn text-[0.72rem] py-[0.85rem] px-7 bg-cream text-forest hover:bg-sand transition-colors"
              >
                {kitPlan.cta}
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Capilar line — 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          {capilarPlans.map((plan, i) => (
            <PriceCard key={plan.id} plan={plan} delay={i * 80} />
          ))}
        </div>

        {/* Extra products — 2 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {extraPlans.map((plan, i) => (
            <PriceCard key={plan.id} plan={plan} delay={i * 80} />
          ))}
        </div>

        <ScrollReveal>
          <p className="text-center text-charcoal/35 text-[0.82rem] mt-8 leading-relaxed">
            Todos nuestros productos son elaborados con ingredientes de origen natural.<br className="hidden sm:block" />
            Envíos a toda Colombia.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
