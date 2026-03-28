import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'

// Gold hexagon SVG for animated pattern
function Hexagon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 115"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points="50,5 95,27.5 95,87.5 50,110 5,87.5 5,27.5"
        stroke="#C9A84C"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  )
}

const SERVICE_ICONS = [
  // Home
  <svg key="home" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>,
  // Sparkles (deep clean)
  <svg key="sparkles" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>,
  // Stairs
  <svg key="stairs" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h4v-4h4v-4h4v-4h4V3" />
  </svg>,
  // Window
  <svg key="window" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
  </svg>,
  // Office
  <svg key="office" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>,
  // Building
  <svg key="building" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
  </svg>,
]

const SERVICE_KEYS = ['home', 'deep', 'staircase', 'window', 'office', 'building'] as const

export default function HomePage() {
  const { t } = useTranslation()

  const services = SERVICE_KEYS.map((key, i) => ({
    icon: SERVICE_ICONS[i],
    title: t(`home.services.${key}.title`),
    desc: t(`home.services.${key}.desc`),
  }))

  const testimonials = t('home.testimonials.items', { returnObjects: true }) as Array<{
    name: string; location: string; text: string; rating: number
  }>

  const whyPoints = t('home.why.points', { returnObjects: true }) as string[]

  return (
    <>
      <Helmet>
        <title>Beez – Reinigungsservice Herne | Putzfirma Herne</title>
        <meta
          name="description"
          content="Professioneller Reinigungsservice in Herne. Haushaltsreinigung, Grundreinigung, Büroreinigung in Herne, Bochum, Gelsenkirchen. Beez Professional Cleaning."
        />
        <meta name="keywords" content="Reinigungsservice Herne, Putzfirma Herne, Gebäudereinigung Herne, Wohnungsreinigung Herne, Reinigungskraft Herne" />
      </Helmet>

      {/* HERO */}
      <section className="relative min-h-screen bg-[#0D0D0D] flex items-center pt-16 overflow-hidden">
        {/* Animated hexagon pattern */}
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden>
          <Hexagon className="absolute w-32 h-32 top-[10%] left-[5%] animate-hex1 opacity-15" />
          <Hexagon className="absolute w-48 h-48 top-[20%] left-[15%] animate-hex2 opacity-10" />
          <Hexagon className="absolute w-24 h-24 top-[60%] left-[8%] animate-hex3 opacity-12" />
          <Hexagon className="absolute w-20 h-20 top-[5%] right-[10%] animate-hex4 opacity-10" />
          <Hexagon className="absolute w-40 h-40 top-[40%] right-[5%] animate-hex5 opacity-8" />
          <Hexagon className="absolute w-28 h-28 bottom-[15%] right-[20%] animate-hex6 opacity-12" />
          <Hexagon className="absolute w-16 h-16 bottom-[10%] left-[30%] animate-hex1 opacity-8" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: content */}
          <div className="text-center lg:text-left">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FAFAFA] leading-tight mb-6">
              {t('home.hero.title')}
            </h1>
            <p className="text-[#FAFAFA]/70 text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                to="/kontakt"
                className="bg-[#C9A84C] hover:bg-[#F5C842] text-[#0D0D0D] font-semibold px-8 py-3.5 rounded-full transition-all duration-200 text-sm"
              >
                {t('home.hero.cta1')}
              </Link>
              <Link
                to="/preise"
                className="border border-[#C9A84C]/50 hover:border-[#F5C842] text-[#F5C842] font-semibold px-8 py-3.5 rounded-full transition-all duration-200 text-sm"
              >
                {t('home.hero.cta2')}
              </Link>
            </div>
          </div>

          {/* Right: hero image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/generated-1774721750049.png"
                alt="Professional cleaner"
                className="w-full h-[420px] object-cover"
                onError={(e) => {
                  // fallback to another available image
                  const el = e.currentTarget
                  if (el.src.includes('1774721750049')) {
                    el.src = '/images/generated-1774721422345.png'
                  } else {
                    el.style.display = 'none'
                  }
                }}
              />
            </div>
            {/* Gold accent */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-[#C9A84C]/30 rounded-2xl -z-10" />
            <div className="absolute -top-4 -right-4 w-16 h-16 border-2 border-[#C9A84C]/20 rounded-2xl -z-10" />
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-[#F9F5EC] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { value: t('home.stats.clientsValue'), label: t('home.stats.clients') },
              { value: t('home.stats.citiesValue'), label: t('home.stats.cities') },
              { value: t('home.stats.experienceValue'), label: t('home.stats.experience') },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl sm:text-4xl font-bold text-[#C9A84C]">
                  {stat.value}
                </div>
                <div className="text-sm text-[#0D0D0D]/60 mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#FAFAFA] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0D0D0D] mb-4">
              {t('home.services.title')}
            </h2>
            <p className="text-[#0D0D0D]/60 max-w-xl mx-auto leading-relaxed">
              {t('home.services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="group bg-white rounded-2xl p-6 shadow-sm border border-[#f0ebe0] hover:border-[#C9A84C]/40 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#C9A84C]/10 rounded-xl flex items-center justify-center text-[#C9A84C] mb-4 group-hover:bg-[#C9A84C]/20 transition-colors duration-200">
                  {svc.icon}
                </div>
                <h3 className="font-display font-bold text-lg text-[#0D0D0D] mb-2">{svc.title}</h3>
                <p className="text-sm text-[#0D0D0D]/60 leading-relaxed mb-4">{svc.desc}</p>
                <Link
                  to="/leistungen"
                  className="text-sm text-[#C9A84C] font-semibold hover:text-[#F5C842] transition-colors inline-flex items-center gap-1"
                >
                  {t('home.services.learnMore')}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY BEEZ */}
      <section className="bg-[#0D0D0D] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden order-2 lg:order-1">
            <img
              src="/src/assets/hero-cleaner.png"
              alt="Beez Team"
              className="w-full h-[400px] object-cover"
              onError={(e) => {
                e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #2a1a0a 100%)'
                e.currentTarget.parentElement!.style.minHeight = '400px'
                e.currentTarget.style.display = 'none'
              }}
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#FAFAFA] mb-4">
              {t('home.why.title')}
            </h2>
            <p className="text-[#FAFAFA]/60 mb-8 leading-relaxed">
              {t('home.why.subtitle')}
            </p>
            <ul className="space-y-4 mb-8">
              {whyPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/50 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#F5C842]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-[#FAFAFA]/80 text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/ueber-uns"
              className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#F5C842] text-[#0D0D0D] font-semibold px-7 py-3 rounded-full transition-all duration-200 text-sm"
            >
              {t('home.why.cta')}
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICE AREA STRIP */}
      <section className="bg-[#111] py-8 border-y border-[#222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs text-[#C9A84C] font-semibold uppercase tracking-widest mb-2">
            {t('home.serviceArea.title')}
          </p>
          <p className="text-[#FAFAFA]/70 text-sm sm:text-base font-medium tracking-wide">
            {t('home.serviceArea.cities')}
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#FAFAFA] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0D0D0D] mb-4">
              {t('home.testimonials.title')}
            </h2>
            <p className="text-[#0D0D0D]/60 max-w-md mx-auto">
              {t('home.testimonials.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="bg-white rounded-2xl p-6 shadow-sm border border-[#f0ebe0] flex flex-col gap-4"
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#F5C842]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#0D0D0D]/70 text-sm leading-relaxed italic">"{item.text}"</p>
                <div className="mt-auto">
                  <p className="font-semibold text-[#0D0D0D] text-sm">{item.name}</p>
                  <p className="text-xs text-[#C9A84C]">{item.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-[#C9A84C] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0D0D0D] mb-4">
            {t('home.cta.title')}
          </h2>
          <p className="text-[#0D0D0D]/70 max-w-lg mx-auto mb-8 leading-relaxed">
            {t('home.cta.subtitle')}
          </p>
          <Link
            to="/kontakt"
            className="inline-block bg-[#0D0D0D] hover:bg-[#1a1a1a] text-[#F5C842] font-semibold px-10 py-4 rounded-full transition-all duration-200 text-sm"
          >
            {t('home.cta.button')}
          </Link>
        </div>
      </section>
    </>
  )
}
