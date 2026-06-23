import { BRAND } from '@/lib/constants'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-charcoal py-10 px-6">
      <div className="max-w-[1100px] mx-auto text-center space-y-3">
        <p className="font-display italic text-white/45 text-sm">
          {BRAND.name}
        </p>
        <p className="text-white/30 text-xs tracking-wide">
          {BRAND.location} · {BRAND.phone}
        </p>
        <div className="flex justify-center gap-4 text-white/30 text-xs">
          <a
            href={BRAND.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/55 transition-colors"
          >
            {BRAND.instagramHandle}
          </a>
          <span>·</span>
          <a
            href={`mailto:${BRAND.email}`}
            className="hover:text-white/55 transition-colors"
          >
            {BRAND.email}
          </a>
        </div>
        <p className="text-white/20 text-[0.68rem] pt-2">
          © {year} {BRAND.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
