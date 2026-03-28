import { type RefObject } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { useReveal } from '../hooks/useReveal'

export default function PricingPage() {
  const { t } = useTranslation()

  const plans = t('pricing.plans', { returnObjects: true }) as Array<{
    badge: string
    title: string
    price: string
    subtitle: string
    featured: boolean
    features: string[]
    cta: string
  }>

  const custom = t('pricing.custom', { returnObjects: true }) as {
    icon: string; title: string; desc: string; cta: string
  }

  const heroReveal  = useReveal()
  const cardsReveal = useReveal()

  return (
    <>
      <Helmet>
        <title>Preise – Reinigungsservice Herne ab 15€/Stunde | Beez</title>
        <meta
          name="description"
          content="Faire Preise für professionelle Reinigung in Herne. Haushaltsreinigung ab 15€/Stunde. Grundreinigung und Büroreinigung auf Anfrage. Transparente Preisgestaltung."
        />
        <meta name="keywords" content="Reinigungsservice Herne Preise, Putzfirma Herne günstig, Reinigung Herne Kosten" />
      </Helmet>

      {/* HERO */}
      <section className="bg-[#0D0D0D] pt-32 pb-16 text-center">
        <div
          ref={heroReveal.ref as RefObject<HTMLDivElement>}
          className={`max-w-3xl mx-auto px-4 reveal ${heroReveal.visible ? 'visible' : ''}`}
        >
          <span className="inline-block text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-4">
            {t('pricing.hero.badge')}
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#FAFAFA] mb-4">
            {t('pricing.hero.title')}
          </h1>
          <p className="text-[#FAFAFA]/60 text-lg max-w-xl mx-auto">
            {t('pricing.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* HEADLINE PRICE */}
      <section className="bg-[#F9F5EC] py-12 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <div className="font-display text-5xl sm:text-6xl font-bold text-[#C9A84C] mb-2">
            {t('pricing.headline')}
          </div>
          <p className="text-[#0D0D0D]/60 font-medium">{t('pricing.headlineSubtitle')}</p>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section
        ref={cardsReveal.ref as RefObject<HTMLElement>}
        className="bg-[#FAFAFA] py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start reveal-stagger ${cardsReveal.visible ? 'visible' : ''}`}>
            {plans.map((plan) => (
              <div
                key={plan.title}
                className={`relative rounded-2xl p-7 flex flex-col gap-5 ${
                  plan.featured
                    ? 'bg-[#0D0D0D] text-[#FAFAFA] shadow-2xl ring-2 ring-[#C9A84C]'
                    : 'bg-white border border-[#f0ebe0] shadow-sm'
                }`}
              >
                {/* Badge */}
                <span
                  className={`text-xs font-bold tracking-widest uppercase ${
                    plan.featured ? 'text-[#F5C842]' : 'text-[#C9A84C]'
                  }`}
                >
                  {plan.badge}
                </span>

                <div>
                  <h2
                    className={`font-display text-2xl font-bold mb-1 ${
                      plan.featured ? 'text-[#FAFAFA]' : 'text-[#0D0D0D]'
                    }`}
                  >
                    {plan.title}
                  </h2>
                  <div
                    className={`font-display text-xl font-bold ${
                      plan.featured ? 'text-[#F5C842]' : 'text-[#C9A84C]'
                    }`}
                  >
                    {plan.price}
                  </div>
                  <p
                    className={`text-sm mt-1 ${
                      plan.featured ? 'text-[#FAFAFA]/60' : 'text-[#0D0D0D]/55'
                    }`}
                  >
                    {plan.subtitle}
                  </p>
                </div>

                {/* Divider */}
                <div className={`border-t ${plan.featured ? 'border-[#333]' : 'border-[#f0ebe0]'}`} />

                {/* Features */}
                <ul className="space-y-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <svg
                        className={`w-4 h-4 mt-0.5 shrink-0 ${
                          plan.featured ? 'text-[#F5C842]' : 'text-[#C9A84C]'
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span
                        className={`text-sm ${
                          plan.featured ? 'text-[#FAFAFA]/80' : 'text-[#0D0D0D]/70'
                        }`}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  to="/kontakt"
                  className={`mt-2 block text-center font-semibold py-3.5 rounded-full text-sm transition-all duration-200 ${
                    plan.featured
                      ? 'bg-[#C9A84C] hover:bg-[#F5C842] text-[#0D0D0D]'
                      : 'border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0D0D0D]'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* Custom pricing note */}
          <div className="mt-10 bg-[#F9F5EC] rounded-2xl p-6 flex flex-col sm:flex-row items-start gap-4">
            <span className="text-3xl">{custom.icon}</span>
            <div>
              <h3 className="font-display font-bold text-[#0D0D0D] text-lg mb-1">{custom.title}</h3>
              <p className="text-sm text-[#0D0D0D]/65 leading-relaxed mb-3">{custom.desc}</p>
              <Link to="/kontakt" className="text-sm text-[#C9A84C] font-semibold hover:text-[#F5C842] transition-colors">
                {custom.cta}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
