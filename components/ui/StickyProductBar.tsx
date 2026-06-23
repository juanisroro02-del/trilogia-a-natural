'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { IMAGES, WA_LINKS } from '@/lib/constants'

export default function StickyProductBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('inicio')
    if (!hero) return
    const onScroll = () => {
      setVisible(hero.getBoundingClientRect().bottom < 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      aria-hidden={!visible}
      className={`fixed left-0 right-0 z-[250] bg-mist/98 backdrop-blur-md border-b border-sand/70 shadow-sm transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{ top: 'var(--bar-h, 38px)' }}
    >
      <div className="max-w-[1280px] mx-auto px-6 h-[60px] flex items-center gap-4">
        <div className="w-9 h-9 rounded overflow-hidden flex-shrink-0 bg-sand">
          <Image
            src={IMAGES.logo}
            alt="Trilogía A-Natural"
            width={36}
            height={36}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[0.68rem] text-charcoal/45 eyebrow">Trilogía A-Natural</p>
          <p className="text-[0.85rem] font-medium text-charcoal truncate">
            Kit Capilar Natural · 3 productos
          </p>
        </div>
        <p className="font-display font-semibold text-forest text-[1.1rem] whitespace-nowrap hidden sm:block">
          $70.000 COP
        </p>
        <a
          href={WA_LINKS.kit}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary text-[0.7rem] py-[0.6rem] px-4 flex-shrink-0"
        >
          Comprar kit
        </a>
      </div>
    </div>
  )
}
