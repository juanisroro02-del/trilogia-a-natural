'use client'
import { useEffect, useRef } from 'react'

interface Particle {
  x: number; y: number
  size: number
  vx: number; vy: number
  opacity: number
  targetOpacity: number
  color: string
  type: 'dot' | 'star' | 'sparkle'
  rotation: number
  rotationSpeed: number
  pulseSpeed: number
  pulsePhase: number
}

const COLORS = ['#C4602A', '#3A5C35', '#1B2A19', '#8BAF7A', '#E5D5BC', '#D4A574']

function drawStar(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, points: number, rotation: number) {
  ctx.save()
  ctx.translate(x, y)
  ctx.rotate(rotation)
  ctx.beginPath()
  for (let i = 0; i < points * 2; i++) {
    const r = i % 2 === 0 ? size : size * 0.4
    const angle = (i * Math.PI) / points - Math.PI / 2
    if (i === 0) ctx.moveTo(Math.cos(angle) * r, Math.sin(angle) * r)
    else ctx.lineTo(Math.cos(angle) * r, Math.sin(angle) * r)
  }
  ctx.closePath()
  ctx.fill()
  ctx.restore()
}

function drawSparkle(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rotation: number) {
  ctx.save()
  ctx.translate(x, y)
  ctx.rotate(rotation)
  const arm = size * 1.2
  const thin = size * 0.15
  ctx.beginPath()
  ctx.moveTo(0, -arm); ctx.lineTo(thin, -thin); ctx.lineTo(arm, 0)
  ctx.lineTo(thin, thin); ctx.lineTo(0, arm); ctx.lineTo(-thin, thin)
  ctx.lineTo(-arm, 0); ctx.lineTo(-thin, -thin); ctx.closePath()
  ctx.fill()
  ctx.restore()
}

export default function ParticleCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf: number
    const particles: Particle[] = []
    const isMobile = window.innerWidth < 768
    const count = isMobile ? 25 : 50

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize, { passive: true })

    const types: Particle['type'][] = ['dot', 'star', 'sparkle']

    for (let i = 0; i < count; i++) {
      const type = types[Math.floor(Math.random() * types.length)]
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: type === 'dot' ? Math.random() * 2 + 1 : Math.random() * 3.5 + 1.5,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -(Math.random() * 0.25 + 0.05),
        opacity: Math.random() * 0.3 + 0.08,
        targetOpacity: Math.random() * 0.4 + 0.1,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        type,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.008,
        pulseSpeed: Math.random() * 0.02 + 0.008,
        pulsePhase: Math.random() * Math.PI * 2,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        p.rotation += p.rotationSpeed
        p.pulsePhase += p.pulseSpeed

        // Twinkle
        p.opacity += (p.targetOpacity - p.opacity) * 0.02
        if (Math.abs(p.targetOpacity - p.opacity) < 0.01) {
          p.targetOpacity = Math.random() * 0.45 + 0.05
        }

        // Gentle sine drift
        p.x += Math.sin(p.pulsePhase) * 0.15

        // Wrap
        if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width }
        if (p.x < -10) p.x = canvas.width + 10
        if (p.x > canvas.width + 10) p.x = -10

        ctx.fillStyle = p.color
        ctx.globalAlpha = p.opacity

        const pulseSize = p.size * (1 + Math.sin(p.pulsePhase) * 0.2)

        if (p.type === 'dot') {
          ctx.beginPath()
          ctx.arc(p.x, p.y, pulseSize, 0, Math.PI * 2)
          ctx.fill()
        } else if (p.type === 'star') {
          drawStar(ctx, p.x, p.y, pulseSize, 4, p.rotation)
        } else {
          drawSparkle(ctx, p.x, p.y, pulseSize, p.rotation)
        }
      }

      ctx.globalAlpha = 1
      raf = requestAnimationFrame(draw)
    }

    const onVisibility = () => {
      if (document.hidden) cancelAnimationFrame(raf)
      else raf = requestAnimationFrame(draw)
    }
    document.addEventListener('visibilitychange', onVisibility)
    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none z-0"
    />
  )
}
