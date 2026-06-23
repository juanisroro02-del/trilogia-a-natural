'use client'
import { useEffect, useRef } from 'react'

interface Particle {
  x: number; y: number
  size: number
  vx: number; vy: number
  opacity: number
  color: string
}

const COLORS = ['#C4602A', '#3A5C35', '#1B2A19', '#8BAF7A', '#E5D5BC']

export default function ParticleCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    if (window.innerWidth < 768) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf: number
    const particles: Particle[] = []

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize, { passive: true })

    for (let i = 0; i < 32; i++) {
      particles.push({
        x:       Math.random() * window.innerWidth,
        y:       Math.random() * window.innerHeight,
        size:    Math.random() * 2.5 + 0.8,
        vx:      (Math.random() - 0.5) * 0.25,
        vy:      -(Math.random() * 0.35 + 0.08),
        opacity: Math.random() * 0.22 + 0.04,
        color:   COLORS[Math.floor(Math.random() * COLORS.length)],
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.y < -8) { p.y = canvas.height + 8; p.x = Math.random() * canvas.width }
        if (p.x < -8) p.x = canvas.width + 8
        if (p.x > canvas.width + 8) p.x = -8
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.opacity
        ctx.fill()
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
      className="absolute inset-0 pointer-events-none z-0 hidden md:block"
    />
  )
}
