'use client'
import { useState, useEffect } from 'react'

interface Props {
  words: string[]
  interval?: number
  className?: string
}

export default function TextRotate({ words, interval = 2400, className = '' }: Props) {
  const [idx, setIdx]         = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const timer = setInterval(() => {
      setVisible(false)
      const swap = setTimeout(() => {
        setIdx(i => (i + 1) % words.length)
        setVisible(true)
      }, 380)
      return () => clearTimeout(swap)
    }, interval)

    return () => clearInterval(timer)
  }, [words.length, interval])

  return (
    <span
      className={`inline-block font-display italic text-sage transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0'
      } ${className}`}
      style={{ minWidth: '7ch' }}
    >
      {words[idx]}
    </span>
  )
}
