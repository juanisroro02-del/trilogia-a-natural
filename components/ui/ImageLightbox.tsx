'use client'
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

interface Props {
  src: string
  alt: string
  children: React.ReactNode
  className?: string
}

export default function ImageLightbox({ src, alt, children, className }: Props) {
  const [open, setOpen] = useState(false)

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, close])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`cursor-zoom-in ${className ?? ''}`}
        aria-label={`Ver ${alt} en grande`}
      >
        {children}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={alt}
        >
          <div className="absolute inset-0 bg-charcoal/90 backdrop-blur-sm" />

          <button
            onClick={close}
            aria-label="Cerrar"
            className="absolute top-5 right-5 z-10 text-cream/60 hover:text-cream text-3xl leading-none transition-colors"
          >
            ×
          </button>

          <div
            className="relative z-10 max-w-[90vw] max-h-[90vh]"
            onClick={e => e.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              width={1200}
              height={1600}
              className="w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-lg"
              quality={90}
            />
          </div>
        </div>
      )}
    </>
  )
}
