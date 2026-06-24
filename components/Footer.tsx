import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'

export default function Footer() {
  const t = useTranslations('footer')
  const tn = useTranslations('nav')
  const locale = useLocale()

  return (
    <footer className="bg-noir-carte border-t border-noir-leger">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <span className="font-bebas text-3xl text-blanc-casse tracking-widest">
              DINI <span className="text-rouge-sang">FISHING</span>
            </span>
            <p className="text-blanc-attenue text-sm mt-2 italic">{t('slogan')}</p>
            <p className="text-blanc-attenue text-xs mt-3">{t('location')}</p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bebas text-xl text-blanc-casse tracking-widest mb-4">NAVIGATION</h3>
            <ul className="space-y-2">
              {[
                { href: `/${locale}`, label: tn('home') },
                { href: `/${locale}/sejours`, label: tn('stays') },
                { href: `/${locale}/hebergement`, label: tn('accommodation') },
                { href: `/${locale}/especes`, label: tn('species') },
                { href: `/${locale}/galerie`, label: tn('gallery') },
                { href: `/${locale}/blog`, label: tn('blog') },
                { href: `/${locale}/contact`, label: tn('contact') },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-blanc-attenue hover:text-rouge-sang text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bebas text-xl text-blanc-casse tracking-widest mb-4">CONTACT</h3>
            <ul className="space-y-2 text-sm text-blanc-attenue">
              <li>
                <a href="https://wa.me/33668178743" className="hover:text-rouge-sang transition-colors flex items-center gap-2">
                  <span>📱</span> +33 6 68 17 87 43
                </a>
              </li>
              <li>
                <a href="mailto:dini.extremadura@hotmail.com" className="hover:text-rouge-sang transition-colors flex items-center gap-2">
                  <span>✉️</span> dini.extremadura@hotmail.com
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/DINI.FISHING" target="_blank" rel="noopener noreferrer" className="hover:text-rouge-sang transition-colors flex items-center gap-2">
                  <span>📘</span> DINI.FISHING
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/DINI.FISHING" target="_blank" rel="noopener noreferrer" className="hover:text-rouge-sang transition-colors flex items-center gap-2">
                  <span>📸</span> DINI.FISHING
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-noir-leger mt-8 pt-8 text-center text-xs text-blanc-attenue">
          <p>© {new Date().getFullYear()} Dini Fishing. {t('rights')}</p>
        </div>
      </div>
    </footer>
  )
}
