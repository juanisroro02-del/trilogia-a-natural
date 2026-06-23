'use client'
import Image from 'next/image'
import { useEffect, useRef, useState, useMemo } from 'react'
import { MagicTextReveal } from '@/components/ui/magic-text-reveal'
import ParticleCanvas from '@/components/ui/ParticleCanvas'
import TextRotate from '@/components/ui/TextRotate'
import { IMAGES, VIDEO, WA_LINKS } from '@/lib/constants'
import { useMouseParallax } from '@/hooks/useMouseParallax'

const ROTATE_WORDS = ['fortalece', 'nutre', 'renueva', 'ilumina']

function VideoHero() {
  const [videoError, setVideoError] = useState(false)
  if (videoError) return null
  return (
    <video
      autoPlay muted loop playsInline
      poster={IMAGES.heroPoster}
      onError={() => setVideoError(true)}
      className="absolute inset-0 w-full h-full object-cover opacity-[0.06] pointer-events-none"
      aria-hidden="true"
    >
      <source src={VIDEO.heroLoop} type="video/mp4" />
    </video>
  )
}

export default function Hero() {
  const productRef = useMouseParallax<HTMLDivElement>(0.022)
  const [mounted, setMounted] = useState(false)
  const [heroFontSize, setHeroFontSize] = useState(120)

  useEffect(() => {
    setMounted(true)
    const updateSize = () => setHeroFontSize(window.innerWidth < 768 ? 48 : 120)
    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-mist overflow-hidden grain flex flex-col"
      aria-label="Trilogía A-Natural — Kit capilar natural"
    >
      {/* Background image */}
      <Image
        src="/images/fondo-web.png"
        alt=""
        fill
        priority
        className="object-cover opacity-[0.18] pointer-events-none"
        aria-hidden="true"
      />

      {/* Botanical particles */}
      <ParticleCanvas />

      {/* Optional video texture */}
      <VideoHero />

      {/* ── Background depth layers ── */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none z-[1]">
        {/* Warm cream radial from bottom-center */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 90% 65% at 50% 90%, rgba(229,213,188,0.65) 0%, transparent 68%)',
        }} />
        {/* Soft forest vignette at edges for depth */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 110% 100% at 50% 50%, transparent 48%, rgba(27,42,25,0.09) 100%)',
        }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-5 pt-28 pb-20 md:pt-36 md:pb-28 text-center">

        {/* Eyebrow */}
        <p className="eyebrow text-mandarin text-[0.67rem] mb-8 md:mb-11 tracking-[0.22em]">
          100% Natural · Fórmula Homeopática · Kit Capilar
        </p>

        {/* ── Title block with floating product ── */}
        <div className="relative w-full max-w-[95vw] md:max-w-5xl mx-auto select-none">

          {/* TRILOGÍA — main display word with hover effect */}
          <h1
            aria-label="Trilogía A-Natural"
            className="font-display font-black hero-display text-charcoal/[0.82] leading-none"
          >
            {'TRILOGÍA'.split('').map((letter, i) => (
              <span key={i}>{letter}</span>
            ))}
          </h1>

          {/* A·Natural — secondary display */}
          <p
            className="font-display hero-sub text-charcoal/40 mt-2 md:mt-3"
            aria-hidden="true"
          >
            A·Natural
          </p>
        </div>

        {/* Tagline with rotating word */}
        <div
          className="mt-12 md:mt-14 font-sans text-[0.95rem] md:text-[1.05rem] text-charcoal/50 tracking-wide"
          aria-live="polite"
        >
          Una rutina que{' '}
          {mounted && <TextRotate words={ROTATE_WORDS} />}
          {!mounted && (
            <span className="font-display italic text-sage">fortalece</span>
          )}
          {' '}tu cabello
        </div>

        {/* Price badge */}
        <div className="mt-5 md:mt-6">
          <span className="inline-flex items-center gap-2 bg-forest text-cream/90 rounded-full px-5 py-2 eyebrow text-[0.65rem]">
            <span className="w-1.5 h-1.5 rounded-full bg-mandarin flex-shrink-0" aria-hidden="true" />
            Kit completo · $70.000 COP
          </span>
        </div>

        {/* CTAs */}
        <div className="mt-7 md:mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full max-w-sm sm:max-w-none sm:w-auto">
          <a
            href={WA_LINKS.kit}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary w-full sm:w-auto"
          >
            Comprar kit completo
          </a>
          <a href="#aceite" className="btn btn-ghost w-full sm:w-auto">
            Ver el aceite →
          </a>
        </div>

        {/* Trust perks */}
        <div className="mt-9 md:mt-10 flex flex-wrap justify-center gap-x-8 gap-y-2">
          {[
            'Envío a toda Colombia',
            'Sin químicos agresivos',
            'Fórmula homeopática',
          ].map(perk => (
            <span key={perk} className="eyebrow text-[0.62rem] text-charcoal/35 flex items-center gap-1.5">
              <span className="text-sage text-[0.6rem]">✦</span>
              {perk}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 opacity-30"
      >
        <span className="eyebrow text-[0.6rem] text-charcoal">scroll</span>
        <span
          className="block w-[1px] h-10 bg-charcoal origin-top"
          style={{ animation: 'scrollLine 1.8s ease-in-out infinite' }}
        />
        <style>{`
          @keyframes scrollLine {
            0%   { transform: scaleY(0); opacity: 0; }
            40%  { transform: scaleY(1); opacity: 1; }
            100% { transform: scaleY(1); opacity: 0; transform-origin: bottom; }
          }
          @media (prefers-reduced-motion: reduce) {
            .scrollLine { animation: none; opacity: 0.4; }
          }
        `}</style>
      </div>
    </section>
  )
}
