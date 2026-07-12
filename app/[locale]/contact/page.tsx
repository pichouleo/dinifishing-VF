import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import ContactForm from '@/components/ContactForm'

export default function ContactPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale)
  const t = useTranslations('contact')

  const methods = [
    { icon: '📱', label: 'WhatsApp', value: '+33 6 68 17 87 43', href: 'https://wa.me/33668178743', color: 'bg-green-800' },
    { icon: '✉️', label: 'Email', value: 'dini.extremadura@hotmail.com', href: 'mailto:dini.extremadura@hotmail.com', color: 'bg-blue-900',valueClass: 'text-[11px]' },
    { icon: '📘', label: 'Facebook', value: 'DINI.FISHING', href: 'https://www.facebook.com/DINI.FISHING', color: 'bg-blue-800' },
    { icon: '📸', label: 'Instagram', value: '@DINI.FISHING', href: 'https://www.instagram.com/DINI.FISHING', color: 'bg-pink-900' },
  ]

  return (
    <div className="min-h-screen bg-noir-profond pt-20">
      <section className="py-16 text-center px-4">
        <h1 className="font-bebas text-5xl md:text-7xl text-blanc-casse tracking-widest">{t('title')}</h1>
        <p className="text-blanc-attenue text-lg mt-4 max-w-2xl mx-auto">{t('subtitle')}</p>
        <div className="w-16 h-0.5 bg-rouge-sang mx-auto mt-6" />
      </section>
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {methods.map((m) => (
            <a key={m.label} href={m.href} target="_blank" rel="noopener noreferrer"
              className={`${m.color} border border-noir-leger hover:border-rouge-sang p-4 text-center transition-colors group`}>
              <div className="text-3xl mb-2">{m.icon}</div>
              <div className="font-bebas text-blanc-casse tracking-widest text-sm">{m.label}</div>
              <div className={`text-blanc-attenue mt-1 truncate group-hover:text-rouge-sang transition-colors text-xs ${m.valueClass}`}>
  {m.value}
</div>
            </a>
          ))}
        </div>
      </section>
      <section className="pb-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="font-bebas text-3xl text-blanc-casse tracking-widest mb-8 text-center">{t('form.title')}</h2>
          <ContactForm />
        </div>
      </section>
    </div>
  )
}
