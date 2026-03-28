import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const LANGS = ['DE', 'EN', 'AR'] as const

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const currentLang = i18n.language?.toUpperCase().slice(0, 2) as typeof LANGS[number]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const switchLang = (lang: string) => {
    const lower = lang.toLowerCase()
    i18n.changeLanguage(lower)
    document.documentElement.dir = lower === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = lower
  }

  const navLinks = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.services'), path: '/leistungen' },
    { label: t('nav.about'), path: '/ueber-uns' },
    { label: t('nav.pricing'), path: '/preise' },
    { label: t('nav.contact'), path: '/kontakt' },
  ]

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0D0D0D]/98 shadow-lg backdrop-blur-sm' : 'bg-[#0D0D0D]'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img
            src="/src/assets/logo.png"
            alt="Beez"
            className="h-8 w-auto"
            onError={(e) => {
              const el = e.currentTarget
              el.style.display = 'none'
              const sibling = el.nextElementSibling as HTMLElement | null
              if (sibling) sibling.style.display = 'block'
            }}
          />
          <span
            className="font-display text-xl font-bold text-[#F5C842] hidden"
            style={{ display: 'none' }}
          >
            Beez
          </span>
          <span className="font-display text-xl font-bold text-[#F5C842]">Beez</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-[#F5C842]'
                    : 'text-[#FAFAFA]/80 hover:text-[#F5C842]'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side: lang switcher + CTA */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language pill */}
          <div className="flex items-center bg-[#1a1a1a] rounded-full px-1 py-1 gap-0.5">
            {LANGS.map((lang) => {
              const active = currentLang === lang || (lang === 'DE' && !['EN', 'AR'].includes(currentLang))
              return (
                <button
                  key={lang}
                  onClick={() => switchLang(lang)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
                    active
                      ? 'bg-[#C9A84C] text-[#0D0D0D]'
                      : 'text-[#FAFAFA]/60 hover:text-[#FAFAFA]'
                  }`}
                >
                  {lang}
                </button>
              )
            })}
          </div>

          <Link
            to="/kontakt"
            className="bg-[#C9A84C] hover:bg-[#F5C842] text-[#0D0D0D] font-semibold text-sm px-5 py-2 rounded-full transition-all duration-200 whitespace-nowrap"
          >
            {t('nav.cta')}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-[#FAFAFA]"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0D0D0D] border-t border-[#1a1a1a] px-4 pb-6 pt-4">
          <ul className="flex flex-col gap-4 mb-6">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`block text-base font-medium transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'text-[#F5C842]'
                      : 'text-[#FAFAFA]/80 hover:text-[#F5C842]'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile lang switcher */}
          <div className="flex items-center gap-2 mb-4">
            {LANGS.map((lang) => {
              const active = currentLang === lang || (lang === 'DE' && !['EN', 'AR'].includes(currentLang))
              return (
                <button
                  key={lang}
                  onClick={() => switchLang(lang)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 border ${
                    active
                      ? 'bg-[#C9A84C] text-[#0D0D0D] border-[#C9A84C]'
                      : 'text-[#FAFAFA]/60 border-[#333] hover:text-[#FAFAFA]'
                  }`}
                >
                  {lang}
                </button>
              )
            })}
          </div>

          <Link
            to="/kontakt"
            className="block w-full text-center bg-[#C9A84C] hover:bg-[#F5C842] text-[#0D0D0D] font-semibold text-sm px-5 py-3 rounded-full transition-all duration-200"
          >
            {t('nav.cta')}
          </Link>
        </div>
      )}
    </header>
  )
}
