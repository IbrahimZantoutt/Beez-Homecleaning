import { type RefObject } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { useReveal } from '../hooks/useReveal'

const SERVICE_IMAGES = [
  '/images/generated-1774721422345.png',
  '/images/generated-1774721578126.png',
  '/images/generated-1774721636689.png',
  '/images/generated-1774721665438.png',
  '/images/generated-1774721693109.png',
]

function ServiceItem({ item, idx, cta }: {
  item: { title: string; desc: string; features: string[] }
  idx: number
  cta: string
}) {
  const { ref, visible } = useReveal(0.1)
  const isEven = idx % 2 === 0
  return (
    <div
      ref={ref as RefObject<HTMLDivElement>}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center reveal ${visible ? 'visible' : ''}`}
    >
      <div className={`relative rounded-2xl overflow-hidden ${!isEven ? 'lg:order-2' : ''}`}>
        <img
          src={SERVICE_IMAGES[idx]}
          alt={item.title}
          className="w-full h-[320px] object-cover transition-transform duration-700 hover:scale-105"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
            const parent = e.currentTarget.parentElement
            if (parent) {
              parent.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #2a2a1a 100%)'
              parent.style.minHeight = '320px'
            }
          }}
        />
      </div>
      <div className={!isEven ? 'lg:order-1' : ''}>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0D0D0D] mb-4">{item.title}</h2>
        <p className="text-[#0D0D0D]/65 leading-relaxed mb-6">{item.desc}</p>
        <ul className="space-y-2.5 mb-8">
          {item.features.map((f) => (
            <li key={f} className="flex items-center gap-3">
              <svg className="w-4 h-4 text-[#C9A84C] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-[#0D0D0D]/70">{f}</span>
            </li>
          ))}
        </ul>
        <Link
          to="/kontakt"
          className="inline-block bg-[#C9A84C] hover:bg-[#F5C842] text-[#0D0D0D] font-semibold px-7 py-3 rounded-full transition-all duration-200 text-sm"
        >
          {cta}
        </Link>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  const { t } = useTranslation()
  const heroReveal = useReveal()

  const items = t('services.items', { returnObjects: true }) as Array<{
    title: string; desc: string; features: string[]
  }>

  return (
    <>
      <Helmet>
        <title>Leistungen – Reinigungsservice Herne | Beez Professional Cleaning</title>
        <meta name="description" content="Unsere Reinigungsleistungen in Herne: Haushaltsreinigung, Grundreinigung, Treppenreinigung, Fensterreinigung, Büroreinigung. Professionell & zuverlässig." />
        <meta name="keywords" content="Reinigungsservice Herne, Haushaltsreinigung Herne, Grundreinigung Herne, Büroreinigung Herne, Gebäudereinigung Herne" />
      </Helmet>

      {/* HERO */}
      <section className="bg-[#0D0D0D] pt-32 pb-16 text-center">
        <div
          ref={heroReveal.ref as RefObject<HTMLDivElement>}
          className={`max-w-4xl mx-auto px-4 reveal ${heroReveal.visible ? 'visible' : ''}`}
        >
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#F5C842] mb-4">
            {t('services.hero.title')}
          </h1>
          <p className="text-[#FAFAFA]/60 text-lg max-w-xl mx-auto">
            {t('services.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* SERVICE ITEMS */}
      <section className="bg-[#FAFAFA] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {items.map((item, idx) => (
              <ServiceItem key={item.title} item={item} idx={idx} cta={t('services.cta')} />
            ))}
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="bg-[#111] py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[#FAFAFA]/60 text-sm">
            <span className="text-[#C9A84C] font-semibold">Herne · Bochum · Gelsenkirchen · Recklinghausen · Dortmund</span>
          </p>
        </div>
      </section>
    </>
  )
}
