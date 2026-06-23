'use client'
import { useState, useEffect } from 'react'
import { ANNOUNCEMENT_MESSAGES } from '@/lib/constants'

export default function AnnouncementBar() {
  const [idx, setIdx]       = useState(0)
  const [show, setShow]     = useState(true)
  const [visible, setVisible] = useState(true)

  // Keep --bar-h CSS var in sync so Header knows where to sit
  useEffect(() => {
    document.documentElement.style.setProperty('--bar-h', '38px')
    return () => document.documentElement.style.setProperty('--bar-h', '0px')
  }, [])

  useEffect(() => {
    document.documentElement.style.setProperty('--bar-h', show ? '38px' : '0px')
  }, [show])

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIdx(i => (i + 1) % ANNOUNCEMENT_MESSAGES.length)
        setVisible(true)
      }, 350)
    }, 4500)
    return () => clearInterval(id)
  }, [])

  if (!show) return null

  return (
    <div
      role="banner"
      className="sticky top-0 left-0 right-0 z-[400] bg-forest text-cream/90 flex items-center justify-center px-10"
      style={{ height: 'var(--bar-h, 38px)', minHeight: 38 }}
    >
      <p
        className={`eyebrow text-[0.68rem] text-center transition-opacity duration-300 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {ANNOUNCEMENT_MESSAGES[idx]}
      </p>
      <button
        onClick={() => setShow(false)}
        aria-label="Cerrar barra de anuncio"
        className="absolute right-4 text-cream/50 hover:text-cream/90 transition-colors text-base leading-none"
      >
        ×
      </button>
    </div>
  )
}
