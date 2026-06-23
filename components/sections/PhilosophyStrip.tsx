import ScrollReveal from '@/components/ui/ScrollReveal'

export default function PhilosophyStrip() {
  return (
    <section
      aria-label="Filosofía de la marca"
      className="bg-forest py-20 md:py-28 px-6 overflow-hidden"
    >
      <ScrollReveal className="max-w-4xl mx-auto text-center">
        <p className="font-display font-light italic sec-display text-cream/90 leading-snug">
          "Productos naturales,<br className="hidden sm:block" />
          <span className="text-cream/50"> hechos a mano,</span><br className="hidden sm:block" />
          <span className="text-mandarin"> de la huerta a tu hogar."</span>
        </p>
        <p className="mt-8 eyebrow text-[0.65rem] text-cream/35">
          Trilogía A-Natural · Mosquera y Bogotá · Envíos a toda Colombia
        </p>
      </ScrollReveal>
    </section>
  )
}
