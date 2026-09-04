import { setRequestLocale } from 'next-intl/server'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions Légales — Dini Fishing',
  description: 'Mentions légales et politique de confidentialité du site Dini Fishing, guide de pêche en Extremadura, Espagne.',
}

export default function MentionsLegalesPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale)
  return (
    <div className="min-h-screen bg-noir-profond pt-20">
      <section className="py-16 text-center px-4">
        <h1 className="font-bebas text-5xl md:text-7xl text-blanc-casse tracking-widest">Mentions Légales</h1>
        <div className="w-16 h-0.5 bg-rouge-sang mx-auto mt-6" />
      </section>
      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">

          <div>
            <h2 className="font-bebas text-2xl text-rouge-sang tracking-widest mb-4">1. Éditeur du site</h2>
            <div className="text-blanc-attenue space-y-2 text-sm leading-relaxed">
              <p><span className="text-or-mat">Nom commercial :</span> Dini Fishing</p>
              <p><span className="text-or-mat">Responsable :</span> Cédric Gandini</p>
              <p><span className="text-or-mat">Numéro d'identification (NIF) :</span> Z0780287-V</p>
              <p><span className="text-or-mat">Adresse :</span> Valdecaballeros, Extremadura, Espagne</p>
              <p><span className="text-or-mat">Email :</span> dini.extremadura@hotmail.com</p>
              <p><span className="text-or-mat">Téléphone :</span> +33 6 68 17 87 43</p>
            </div>
          </div>

          <div>
            <h2 className="font-bebas text-2xl text-rouge-sang tracking-widest mb-4">2. Hébergement</h2>
            <div className="text-blanc-attenue space-y-2 text-sm leading-relaxed">
              <p><span className="text-or-mat">Hébergeur :</span> Netlify, Inc.</p>
              <p><span className="text-or-mat">Adresse :</span> 512 2nd Street, Suite 200, San Francisco, CA 94107, États-Unis</p>
              <p><span className="text-or-mat">Site :</span> <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer" className="text-rouge-sang hover:underline">www.netlify.com</a></p>
            </div>
          </div>

          <div>
            <h2 className="font-bebas text-2xl text-rouge-sang tracking-widest mb-4">3. Propriété intellectuelle</h2>
            <p className="text-blanc-attenue text-sm leading-relaxed">
              L'ensemble du contenu de ce site (textes, images, logos, vidéos) est la propriété exclusive de Dini Fishing, sauf mention contraire. Toute reproduction, distribution ou utilisation sans autorisation préalable écrite est interdite.
            </p>
          </div>

          <div>
            <h2 className="font-bebas text-2xl text-rouge-sang tracking-widest mb-4">4. Données personnelles (RGPD)</h2>
            <div className="text-blanc-attenue text-sm leading-relaxed space-y-3">
              <p>Les données collectées via le formulaire de contact (nom, email, téléphone) sont utilisées uniquement pour répondre à vos demandes et organiser vos séjours de pêche.</p>
              <p>Elles ne sont jamais vendues ni transmises à des tiers.</p>
              <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression de vos données en contactant : <a href="mailto:dini.extremadura@hotmail.com" className="text-rouge-sang hover:underline">dini.extremadura@hotmail.com</a></p>
            </div>
          </div>

          <div>
            <h2 className="font-bebas text-2xl text-rouge-sang tracking-widest mb-4">5. Cookies</h2>
            <p className="text-blanc-attenue text-sm leading-relaxed">
              Ce site n'utilise pas de cookies publicitaires ou de tracking. Seuls des cookies techniques nécessaires au bon fonctionnement du site peuvent être utilisés.
            </p>
          </div>

          <div>
            <h2 className="font-bebas text-2xl text-rouge-sang tracking-widest mb-4">6. Responsabilité</h2>
            <p className="text-blanc-attenue text-sm leading-relaxed">
              Dini Fishing s'efforce de maintenir les informations de ce site à jour et exactes. Cependant, nous ne pouvons garantir l'exactitude, la complétude ou l'actualité des informations diffusées. Dini Fishing ne saurait être tenu responsable des dommages directs ou indirects résultant de l'utilisation de ce site.
            </p>
          </div>

          <div>
            <h2 className="font-bebas text-2xl text-rouge-sang tracking-widest mb-4">7. Droit applicable</h2>
            <p className="text-blanc-attenue text-sm leading-relaxed">
              Le présent site est soumis au droit espagnol. En cas de litige, les tribunaux espagnols seront seuls compétents.
            </p>
          </div>

          <div className="pt-8 border-t border-noir-leger">
            <Link href={`/${locale}`} className="text-rouge-sang hover:text-rouge-fonce font-bebas tracking-widest transition-colors">
              ← Retour à l'accueil
            </Link>
          </div>

        </div>
      </section>
    </div>
  )
}