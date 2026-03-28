import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'

const VALUE_ICONS = [
  // Reliability
  <svg key="1" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>,
  // Quality
  <svg key="2" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>,
  // Punctuality
  <svg key="3" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  // Cleanliness
  <svg key="4" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>,
]

export default function AboutPage() {
  const { t } = useTranslation()

  const values = t('about.values.items', { returnObjects: true }) as Array<{
    title: string; desc: string
  }>

  return (
    <>
      <Helmet>
        <title>Über uns – Beez Professional Cleaning Herne</title>
        <meta
          name="description"
          content="Lernen Sie das Team von Beez Professional Cleaning kennen. Zuverlässiger Reinigungsservice in Herne – Qualität, Pünktlichkeit und Vertrauen seit über 8 Jahren."
        />
        <meta name="keywords" content="Reinigungsservice Herne, Putzfirma Herne, Beez Cleaning Team, Reinigungskraft Herne" />
      </Helmet>

      {/* HERO */}
      <section className="bg-[#0D0D0D] pt-32 pb-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#F5C842] mb-4">
            {t('about.hero.title')}
          </h1>
          <p className="text-[#FAFAFA]/60 text-lg italic font-display">
            {t('about.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-[#F9F5EC] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#0D0D0D]/75 leading-relaxed text-base sm:text-lg text-center">
            {t('about.story')}
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-[#FAFAFA] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0D0D0D] text-center mb-14">
            {t('about.values.title')}
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((val, i) => (
              <div key={val.title} className="text-center">
                <div className="w-16 h-16 bg-[#C9A84C]/10 rounded-2xl flex items-center justify-center text-[#C9A84C] mx-auto mb-4">
                  {VALUE_ICONS[i]}
                </div>
                <h3 className="font-display font-bold text-[#0D0D0D] mb-2">{val.title}</h3>
                <p className="text-sm text-[#0D0D0D]/60 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM PHOTO */}
      <section className="py-0 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden">
            <img
              src="/images/generated-1774721750289.png"
              alt="Beez Team"
              className="w-full h-[400px] sm:h-[500px] object-cover"
              onError={(e) => {
                const el = e.currentTarget
                if (el.src.includes('1774721750289')) {
                  el.src = '/images/generated-1774721826880.png'
                } else {
                  el.style.display = 'none'
                }
              }}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0D0D0D] py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-[#FAFAFA] mb-3">
            {t('about.cta.title')}
          </h2>
          <p className="text-[#FAFAFA]/60 mb-8">{t('about.cta.subtitle')}</p>
          <Link
            to="/kontakt"
            className="inline-block bg-[#C9A84C] hover:bg-[#F5C842] text-[#0D0D0D] font-semibold px-9 py-4 rounded-full transition-all duration-200 text-sm"
          >
            {t('about.cta.button')}
          </Link>
        </div>
      </section>
    </>
  )
}
