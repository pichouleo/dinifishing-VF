'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const t = useTranslations('nav')
  const locale = useLocale()
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/sejours`, label: t('stays') },
    { href: `/${locale}/hebergement`, label: t('accommodation') },
    { href: `/${locale}/especes`, label: t('species') },
    { href: `/${locale}/galerie`, label: t('gallery') },
    { href: `/${locale}/blog`, label: t('blog') },
    { href: `/${locale}/contact`, label: t('contact') },
  ]

  const locales = ['fr', 'en', 'es']

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split('/')
    segments[1] = newLocale
    return segments.join('/')
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-noir-profond shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center">
            <span className="font-bebas text-3xl text-blanc-casse tracking-widest">
              DINI <span className="text-rouge-sang">FISHING</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-blanc-attenue hover:text-rouge-sang transition-colors text-sm font-medium tracking-wide uppercase"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language switcher */}
            <div className="flex items-center space-x-1 text-xs">
              {locales.map((loc, i) => (
                <span key={loc} className="flex items-center">
                  {i > 0 && <span className="text-noir-leger mx-1">|</span>}
                  <Link
                    href={switchLocale(loc)}
                    className={`uppercase font-medium transition-colors ${locale === loc ? 'text-rouge-sang' : 'text-blanc-attenue hover:text-blanc-casse'}`}
                  >
                    {loc}
                  </Link>
                </span>
              ))}
            </div>
            <Link
              href={`/${locale}/contact`}
              className="bg-rouge-sang hover:bg-rouge-fonce text-white font-bebas tracking-widest text-sm px-5 py-2 transition-colors"
            >
              {t('book')}
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-blanc-casse p-2"
            aria-label="Menu"
          >
            <div className={`w-6 h-0.5 bg-current transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <div className={`w-6 h-0.5 bg-current my-1 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-noir-profond border-t border-noir-leger">
          <div className="px-4 py-4 space-y-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-blanc-attenue hover:text-rouge-sang text-sm font-medium tracking-wide uppercase py-1"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center space-x-3 pt-2 border-t border-noir-leger">
              {locales.map((loc) => (
                <Link
                  key={loc}
                  href={switchLocale(loc)}
                  onClick={() => setMenuOpen(false)}
                  className={`uppercase text-xs font-medium ${locale === loc ? 'text-rouge-sang' : 'text-blanc-attenue'}`}
                >
                  {loc}
                </Link>
              ))}
            </div>
            <Link
              href={`/${locale}/contact`}
              onClick={() => setMenuOpen(false)}
              className="block bg-rouge-sang text-white font-bebas tracking-widest text-center py-2 mt-2"
            >
              {t('book')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
