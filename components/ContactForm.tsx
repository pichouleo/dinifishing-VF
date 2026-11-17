'use client'
import { useState, FormEvent } from 'react'
import { useTranslations } from 'next-intl'

export default function ContactForm() {
  const t = useTranslations('contact.form')
  const [loading, setLoading] = useState(false)

  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    subject: '', stayType: '', persons: '', period: '', message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const whatsappMessage = `Bonjour Dini Fishing,

Nouvelle demande depuis le formulaire du site :

Prénom : ${form.firstName}
Nom : ${form.lastName}
Email : ${form.email}
Téléphone : ${form.phone || 'Non renseigné'}
Objet : ${form.subject}
Type de séjour : ${form.stayType || 'Non renseigné'}
Nombre de personnes : ${form.persons || 'Non renseigné'}
Période souhaitée : ${form.period || 'Non renseignée'}

Message :
${form.message}`

    window.location.href = `https://wa.me/33617133263?text=${encodeURIComponent(whatsappMessage)}`
  }

  const inputClass = "w-full bg-noir-leger border border-noir-leger focus:border-rouge-sang text-blanc-casse placeholder-blanc-attenue/50 px-4 py-3 outline-none transition-colors text-sm"

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-or-mat text-xs uppercase tracking-widest mb-1">{t('firstName')} *</label>
          <input required name="firstName" value={form.firstName} onChange={handleChange} className={inputClass} placeholder={form.firstName || t('firstName')} />
        </div>
        <div>
          <label className="block text-or-mat text-xs uppercase tracking-widest mb-1">{t('lastName')} *</label>
          <input required name="lastName" value={form.lastName} onChange={handleChange} className={inputClass} placeholder={t('lastName')} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-or-mat text-xs uppercase tracking-widest mb-1">{t('email')} *</label>
          <input required type="email" name="email" value={form.email} onChange={handleChange} className={inputClass} placeholder="exemple@email.com" />
        </div>
        <div>
          <label className="block text-or-mat text-xs uppercase tracking-widest mb-1">{t('phone')}</label>
          <input name="phone" value={form.phone} onChange={handleChange} className={inputClass} placeholder="+33 6 00 00 00 00" />
        </div>
      </div>
      <div>
        <label className="block text-or-mat text-xs uppercase tracking-widest mb-1">{t('subject')} *</label>
        <select required name="subject" value={form.subject} onChange={handleChange} className={inputClass + " cursor-pointer"}>
          <option value="">{t('placeholder.subject')}</option>
          <option value="Séjour pêche">{t('subjectOptions.peche')}</option>
          <option value="Location villa">{t('subjectOptions.villa')}</option>
          <option value="Renseignement">{t('subjectOptions.info')}</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-or-mat text-xs uppercase tracking-widest mb-1">{t('stayType')}</label>
          <input name="stayType" value={form.stayType} onChange={handleChange} className={inputClass} placeholder={t('placeholder.stayType')} />
        </div>
        <div>
          <label className="block text-or-mat text-xs uppercase tracking-widest mb-1">{t('persons')}</label>
          <input name="persons" value={form.persons} onChange={handleChange} className={inputClass} placeholder={t('placeholder.persons')} />
        </div>
        <div>
          <label className="block text-or-mat text-xs uppercase tracking-widest mb-1">{t('period')}</label>
          <input name="period" value={form.period} onChange={handleChange} className={inputClass} placeholder={t('placeholder.period')} />
        </div>
      </div>
      <div>
        <label className="block text-or-mat text-xs uppercase tracking-widest mb-1">{t('message')} *</label>
        <textarea required name="message" value={form.message} onChange={handleChange} rows={5} className={inputClass + " resize-none"} placeholder={t('placeholder.message')} />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-rouge-sang hover:bg-rouge-fonce disabled:opacity-50 text-white font-bebas tracking-widest text-lg py-4 transition-colors flex items-center justify-center gap-3"
      >
        {loading ? (
          <>
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
            </svg>
            {t('sending')}
          </>
        ) : t('send')}
      </button>
    </form>
  )
}
