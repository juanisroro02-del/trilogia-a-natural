import ScrollReveal from '@/components/ui/ScrollReveal'
import { WA_LINKS } from '@/lib/constants'

const methods = [
  {
    id:      'efectivo',
    label:   'Efectivo',
    detail:  'Pago al momento de recibir tu pedido o contra entrega.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-6 h-6" aria-hidden="true">
        <rect x="2" y="6" width="20" height="13" rx="2"/>
        <circle cx="12" cy="12.5" r="2.5"/>
        <path d="M6 9v7M18 9v7"/>
      </svg>
    ),
  },
  {
    id:      'nequi',
    label:   'Nequi',
    detail:  'Transferencia rápida y segura.',
    extra:   'Llave: 3002710490',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-6 h-6" aria-hidden="true">
        <rect x="5" y="2" width="14" height="20" rx="3"/>
        <path d="M9 7h6M9 11h6M9 15h4"/>
      </svg>
    ),
  },
  {
    id:      'transferencia',
    label:   'Transferencia bancaria',
    detail:  'Solicita los datos por WhatsApp y coordina tu pago de forma segura.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-6 h-6" aria-hidden="true">
        <path d="M3 12h18M3 6h18M3 18h18"/>
        <path d="M7 6v12M17 6v12"/>
      </svg>
    ),
  },
]

export default function PaymentMethods() {
  return (
    <section id="pago" aria-labelledby="pago-heading" className="bg-cream/60 py-20 md:py-32 px-6">
      <div className="max-w-[1100px] mx-auto">

        <ScrollReveal className="text-center mb-14 md:mb-20">
          <p className="eyebrow text-mandarin text-[0.67rem] mb-4">Pagos</p>
          <h2 id="pago-heading" className="font-display font-light sec-display text-charcoal">
            Métodos de pago
          </h2>
          <p className="mt-4 text-charcoal/45 text-[0.92rem]">
            Facilitamos el pago para que tu pedido llegue lo más pronto posible.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-3 gap-4 md:gap-5">
          {methods.map((m, i) => (
            <ScrollReveal key={m.id} delay={i * 90}>
              <div className="bg-mist border border-sand/70 p-8 flex flex-col gap-5 h-full">
                <div className="w-11 h-11 bg-forest text-cream flex items-center justify-center flex-shrink-0">
                  {m.icon}
                </div>
                <div>
                  <h3 className="font-display font-light text-charcoal text-[1.25rem] mb-2">
                    {m.label}
                  </h3>
                  <p className="text-charcoal/50 text-[0.88rem] leading-relaxed">
                    {m.detail}
                  </p>
                  {m.extra && (
                    <p className="mt-2 text-forest font-medium text-[0.87rem]">{m.extra}</p>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center mt-10">
          <p className="text-charcoal/40 text-[0.82rem]">
            ¿Dudas con el pago?{' '}
            <a
              href={WA_LINKS.info}
              target="_blank"
              rel="noopener noreferrer"
              className="text-forest underline underline-offset-2 hover:text-sage transition-colors"
            >
              Escríbenos por WhatsApp
            </a>
            {' '}y te guiamos.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
