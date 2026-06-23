'use client'
import { useEffect, useRef } from 'react'

export function useMouseParallax<T extends HTMLElement>(factor = 0.022) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if ('ontouchstart' in window) return

    let raf: number
    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0

    const onMove = (e: MouseEvent) => {
      targetX = (e.clientX - window.innerWidth  / 2) * factor
      targetY = (e.clientY - window.innerHeight / 2) * factor
    }

    const animate = () => {
      currentX += (targetX - currentX) * 0.07
      currentY += (targetY - currentY) * 0.07
      el.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`
      raf = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [factor])

  return ref
}
