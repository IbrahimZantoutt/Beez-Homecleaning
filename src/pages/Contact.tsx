import { useState, type RefObject } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { useReveal } from '../hooks/useReveal'

interface FormState {
  name: string
  phone: string
  email: string
  service: string
  message: string
}

export default function ContactPage() {
  const { t } = useTranslation()
  const [form, setForm] = useState<FormState>({ name: '', phone: '', email: '', service: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const serviceOptions = t('contact.form.serviceOptions', { returnObjects: true }) as string[]
  const areaCities = t('contact.area.cities', { returnObjects: true }) as string[]

  const heroReveal    = useReveal()
  const contentReveal = useReveal()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
      setForm({ name: '', phone: '', email: '', service: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Helmet>
        <title>Kontakt – Reinigungsservice Herne | Beez Professional Cleaning</title>
        <meta
          name="description"
          content="Kontaktieren Sie Beez Professional Cleaning in Herne. Anfrage für Haushaltsreinigung, Grundreinigung oder Büroreinigung in Herne, Bochum, Gelsenkirchen."
        />
        <meta name="keywords" content="Reinigungsservice Herne Kontakt, Putzfirma Herne anfragen, Reinigung Herne buchen" />
      </Helmet>

      {/* HERO */}
      <section className="bg-[#0D0D0D] pt-32 pb-16 text-center">
        <div
          ref={heroReveal.ref as RefObject<HTMLDivElement>}
          className={`max-w-3xl mx-auto px-4 reveal ${heroReveal.visible ? 'visible' : ''}`}
        >
          <span className="inline-block text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-4">
            {t('contact.hero.badge')}
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#FAFAFA] mb-4">
            {t('contact.hero.title')}
          </h1>
          <p className="text-[#FAFAFA]/60 max-w-lg mx-auto leading-relaxed">
            {t('contact.hero.subtitle')}
          </p>
          {/* Gold underline accent */}
          <div className="w-16 h-0.5 bg-[#C9A84C] mx-auto mt-6" />
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section
        ref={contentReveal.ref as RefObject<HTMLElement>}
        className="bg-[#FAFAFA] py-16"
      >
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-10 reveal ${contentReveal.visible ? 'visible' : ''}`}>

          {/* FORM — 3/5 */}
          <div className="lg:col-span-3">
            <h2 className="font-display text-2xl font-bold text-[#0D0D0D] mb-2">
              {t('contact.form.title')}
            </h2>
            <p className="text-sm text-[#0D0D0D]/55 mb-7">{t('contact.form.subtitle')}</p>

            {status === 'success' ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-green-700 font-semibold">{t('contact.form.success')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#0D0D0D]/70 mb-1.5 uppercase tracking-wider">
                      {t('contact.form.name')}
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder={t('contact.form.namePlaceholder')}
                      className="w-full border border-[#e5e0d5] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] bg-white placeholder:text-[#0D0D0D]/30 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#0D0D0D]/70 mb-1.5 uppercase tracking-wider">
                      {t('contact.form.phone')}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder={t('contact.form.phonePlaceholder')}
                      className="w-full border border-[#e5e0d5] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] bg-white placeholder:text-[#0D0D0D]/30 transition-colors"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-[#0D0D0D]/70 mb-1.5 uppercase tracking-wider">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder={t('contact.form.emailPlaceholder')}
                    className="w-full border border-[#e5e0d5] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] bg-white placeholder:text-[#0D0D0D]/30 transition-colors"
                  />
                </div>

                {/* Service dropdown */}
                <div>
                  <label className="block text-xs font-semibold text-[#0D0D0D]/70 mb-1.5 uppercase tracking-wider">
                    {t('contact.form.service')}
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full border border-[#e5e0d5] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] bg-white text-[#0D0D0D] transition-colors appearance-none"
                  >
                    <option value="">{t('contact.form.servicePlaceholder')}</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-[#0D0D0D]/70 mb-1.5 uppercase tracking-wider">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder={t('contact.form.messagePlaceholder')}
                    className="w-full border border-[#e5e0d5] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] bg-white placeholder:text-[#0D0D0D]/30 transition-colors resize-none"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-500 text-sm">{t('contact.form.error')}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-[#C9A84C] hover:bg-[#F5C842] disabled:opacity-60 text-[#0D0D0D] font-semibold py-4 rounded-full transition-all duration-200 text-sm"
                >
                  {status === 'sending' ? t('contact.form.sending') : t('contact.form.submit')}
                </button>
              </form>
            )}
          </div>

          {/* SIDEBAR — 2/5 */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact info card */}
            <div className="bg-[#F9F5EC] rounded-2xl p-6">
              <h3 className="font-display font-bold text-[#0D0D0D] text-lg mb-5">
                {t('contact.info.title')}
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-9 h-9 bg-[#C9A84C]/15 rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs text-[#0D0D0D]/50 mb-0.5">Tel</p>
                    <a href={`tel:${t('contact.info.phone')}`} className="text-sm font-semibold text-[#0D0D0D] hover:text-[#C9A84C] transition-colors">
                      {t('contact.info.phone')}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-9 h-9 bg-[#C9A84C]/15 rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs text-[#0D0D0D]/50 mb-0.5">E-Mail</p>
                    <a href={`mailto:${t('contact.info.email')}`} className="text-sm font-semibold text-[#0D0D0D] hover:text-[#C9A84C] transition-colors">
                      {t('contact.info.email')}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-9 h-9 bg-[#C9A84C]/15 rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs text-[#0D0D0D]/50 mb-0.5">Standort</p>
                    <p className="text-sm font-semibold text-[#0D0D0D]">{t('contact.info.address')}</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden bg-[#e8e3da] h-44 flex items-center justify-center">
              <div className="text-center text-[#0D0D0D]/40">
                <svg className="w-10 h-10 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <p className="text-xs font-medium">Herne, NRW</p>
              </div>
            </div>

            {/* Service area card */}
            <div className="bg-[#0D0D0D] rounded-2xl p-6">
              <h3 className="font-display font-bold text-[#FAFAFA] mb-4">{t('contact.area.title')}</h3>
              <ul className="space-y-2">
                {areaCities.map((city) => (
                  <li key={city} className="flex items-center gap-2 text-sm text-[#FAFAFA]/70">
                    <svg className="w-3.5 h-3.5 text-[#C9A84C] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
