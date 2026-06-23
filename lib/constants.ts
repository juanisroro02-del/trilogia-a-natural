export const BRAND = {
  name:      'Trilogía A-Natural',
  tagline:   'Cuidado capilar natural en tres pasos.',
  phone:     '+57 300 271 0490',
  email:     'trilogia.a.natural@gmail.com',
  instagram: 'https://www.instagram.com/trilogianaturaljjm/',
  instagramHandle: '@trilogia.a.natural',
  location:  'Mosquera (Cundinamarca) y Bogotá',
}

export const WA_BASE = 'https://wa.me/573002710490'

export const WA_LINKS = {
  kit:            `${WA_BASE}?text=Hola%2C%20quiero%20comprar%20el%20Kit%20Trilog%C3%ADa%20A-Natural%20%28%2470.000%29%20%F0%9F%8C%BF`,
  shampoo:        `${WA_BASE}?text=Hola%2C%20quiero%20comprar%20el%20Shampoo%20Trilog%C3%ADa%20A-Natural%20%28%2435.000%29`,
  acondicionador: `${WA_BASE}?text=Hola%2C%20quiero%20comprar%20el%20Acondicionador%20Trilog%C3%ADa%20A-Natural%20%28%2430.000%29`,
  aceite:         `${WA_BASE}?text=Hola%2C%20quiero%20comprar%20el%20Aceite%20capilar%20Trilog%C3%ADa%20A-Natural%20%28%2420.000%29`,
  rollon:         `${WA_BASE}?text=Hola%2C%20quiero%20comprar%20el%20Roll-On%20Hot%20Pain%20Trilog%C3%ADa%20A-Natural%20%28%2440.000%29`,
  te:             `${WA_BASE}?text=Hola%2C%20quiero%20comprar%20el%20T%C3%A9%20Artesanal%20Trilog%C3%ADa%20A-Natural%20%28%2415.000%29`,
  info:           `${WA_BASE}?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Trilog%C3%ADa%20A-Natural%20%F0%9F%8C%BF`,
}

export const IMAGES = {
  aceite:         '/images/aceite.jpg',
  aceiteHero:     '/images/aceite-hero.jpg',
  aceite2:        '/images/aceite-2.jpg',
  shampoo:        '/images/shampoo.jpg',
  acondicionador: '/images/acondicionador.jpg',
  kitCompleto:    '/images/kit-completo.jpg',
  packaging:      '/images/packaging.png',
  heroPoster:     '/images/kit-completo.jpg',
  fondoHero:      '/images/fondo-hero.png',
  logo:           '/images/logo.jpg',
  rollon:         '/images/rollon.jpg',
  rollonFrasco:   '/images/rollon-frasco.jpg',
  rollonPresentacion: '/images/rollon-presentacion.jpg',
  teCidron:       '/images/te-cidron.png',
  metodoShampoo:        '/images/metodo-shampoo.jpg',
  metodoAcondicionador: '/images/metodo-acondicionador.jpg',
  metodoAceite:         '/images/metodo-aceite.jpg',
}

export const VIDEO = {
  heroLoop: '/videos/hero-loop.mp4',
}

// ── Línea Capilar ──

export const PRODUCTS_CAPILAR = [
  {
    id:          'shampoo',
    name:        'Shampoo Natural',
    tagline:     'Limpieza profunda sin maltratar',
    description: 'Limpia profundamente el cuero cabelludo sin maltratar el cabello. Ayuda a fortalecer la fibra capilar y favorece un ambiente saludable para el crecimiento. Aporta suavidad y brillo con cada lavado.',
    benefits:    ['Fortalecimiento', 'Limpieza profunda', 'Brillo'],
    price:       '$35.000 COP',
    image:       IMAGES.shampoo,
    waLink:      WA_LINKS.shampoo,
  },
  {
    id:          'acondicionador',
    name:        'Acondicionador con Tratamiento',
    tagline:     'Hidratación y nutrición de medios a puntas',
    description: 'Hidrata y nutre la fibra capilar de medios a puntas. Ayuda a fortalecer el cabello, facilita el desenredado y contribuye a disminuir el quiebre. Deja el cabello suave, brillante y manejable.',
    benefits:    ['Hidratación', 'Desenredado', 'Fortalecimiento'],
    price:       '$30.000 COP',
    image:       IMAGES.acondicionador,
    waLink:      WA_LINKS.acondicionador,
  },
  {
    id:          'aceite',
    name:        'Aceite Capilar',
    tagline:     'Nutrición profunda con origen botánico',
    description: 'Nutre profundamente el cuero cabelludo y ayuda a fortalecer la raíz del cabello. Favorece el crecimiento de un cabello más fuerte y saludable. Aporta hidratación y brillo con aceites de almendras, romero, cedro y argán.',
    benefits:    ['Nutrición', 'Fortalecimiento', 'Crecimiento'],
    price:       '$20.000 COP',
    image:       IMAGES.aceite,
    waLink:      WA_LINKS.aceite,
  },
]

// ── Productos adicionales ──

export const PRODUCTS_EXTRAS = [
  {
    id:          'rollon',
    name:        'Roll-On Hot Pain',
    tagline:     'Alivio muscular con mentol y alcanfor',
    description: 'Roll-on natural pensado para consentir las zonas cansadas después del día, el ejercicio o el trabajo. Brinda una agradable sensación de frescura y calor que acompaña el alivio temporal de la tensión muscular. Su aplicador rodante es práctico, limpio y rinde muchísimo.',
    benefits:    ['Relajante muscular', 'Frescura', 'Práctico'],
    ingredients: 'Mentol, alcanfor, aceite de yerbabuena',
    price:       '$40.000 COP',
    image:       IMAGES.rollon,
    gallery:     [IMAGES.rollonFrasco, IMAGES.rollon, IMAGES.rollonPresentacion],
    waLink:      WA_LINKS.rollon,
  },
  {
    id:          'te',
    name:        'Té Artesanal',
    tagline:     'De la huerta a tu mesa — 100% hecho a mano',
    description: 'Tés artesanales elaborados a mano con hierbas frescas de huerta. Tres variedades para acompañar tu día: Romero en la mañana para despertar los sentidos, Boldo después de almuerzo para acompañar la digestión, y Cidrón antes de dormir para favorecer la relajación.',
    benefits:    ['Romero · Mañana', 'Boldo · Digestión', 'Cidrón · Relajación'],
    ingredients: '7 porciones por caja · Peso neto 13.4g',
    price:       '$15.000 COP',
    image:       IMAGES.teCidron,
    waLink:      WA_LINKS.te,
  },
]

// Combined for sections that need all products
export const PRODUCTS = [...PRODUCTS_CAPILAR, ...PRODUCTS_EXTRAS]

export const HOW_TO_USE = [
  {
    step:  '01',
    title: 'Shampoo',
    body:  'Humedece completamente el cabello. Aplica el shampoo sobre el cuero cabelludo y masajea suavemente con la yema de los dedos durante 1–2 minutos. Enjuaga con abundante agua. Repite si es necesario.',
  },
  {
    step:  '02',
    title: 'Acondicionador',
    body:  'Después del shampoo, aplica el acondicionador de medios a puntas. Deja actuar de 3 a 5 minutos para que penetre la fibra capilar. Enjuaga con abundante agua.',
  },
  {
    step:  '03',
    title: 'Aceite Capilar',
    body:  'Aplicar preferiblemente durante la noche, un día antes del lavado. Distribuir directamente sobre el cuero cabelludo y masajear con la yema de los dedos 3–5 minutos. Dejar actuar toda la noche. Al día siguiente, lavar normalmente con shampoo y acondicionador.',
  },
]

export const ANNOUNCEMENT_MESSAGES = [
  'Envío a toda Colombia · Escríbenos por WhatsApp',
  '100% Natural · Fórmula Homeopática · Sin químicos agresivos',
  'Kit completo · Shampoo + Acondicionador + Aceite · $70.000 COP',
]

export const NAV_LINKS = [
  { label: 'Productos',     href: '#productos' },
  { label: 'Roll-On',       href: '#rollon' },
  { label: 'Té',            href: '#te' },
  { label: 'Cómo usar',     href: '#uso' },
  { label: 'Precios',       href: '#precios' },
  { label: 'Pagos',         href: '#pago' },
]
