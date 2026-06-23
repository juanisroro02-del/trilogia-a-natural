import type { Metadata } from 'next'
import { Fraunces, DM_Sans } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  weight: ['300', '400', '700', '900'],
  style: ['normal', 'italic'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['300', '400', '500'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://trilogia-a-natural.netlify.app'),
  title: 'Trilogía A-Natural — Kit Capilar Natural',
  description:
    'Kit capilar 100% natural y homeopático. Shampoo, Acondicionador y Aceite Capilar diseñados para el cuidado diario de tu cabello. Envíos a toda Colombia.',
  keywords: [
    'shampoo natural Colombia',
    'acondicionador natural',
    'aceite capilar',
    'kit capilar natural',
    'cuidado capilar Colombia',
    'productos capilares naturales',
    'trilogía a-natural',
  ],
  openGraph: {
    title: 'Trilogía A-Natural — Kit Capilar Natural',
    description: 'Shampoo, Acondicionador y Aceite Capilar 100% naturales. Rutina capilar botánica para acompañar tu cabello todos los días.',
    type: 'website',
    locale: 'es_CO',
    images: [{ url: '/images/kit-completo.jpg', width: 1200, height: 630, alt: 'Kit Trilogía A-Natural' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trilogía A-Natural — Kit Capilar Natural',
    description: 'Rutina capilar botánica. Shampoo + Acondicionador + Aceite Capilar. 100% Natural.',
    images: ['/images/kit-completo.jpg'],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${fraunces.variable} ${dmSans.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#F9F5EE" />
      </head>
      <body className="font-sans bg-mist text-charcoal">
        <a href="#main-content" className="skip-link">Saltar al contenido principal</a>
        {children}
      </body>
    </html>
  )
}
