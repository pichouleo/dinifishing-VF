import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-noir-profond flex items-center justify-center text-center px-4">
      <div>
        <p className="text-rouge-sang font-bebas tracking-widest text-sm mb-2">ERREUR</p>
        <h1 className="font-bebas text-8xl md:text-9xl text-blanc-casse tracking-widest leading-none">404</h1>
        <p className="font-bebas text-2xl text-rouge-sang tracking-widest mt-2 mb-6">PAGE INTROUVABLE</p>
        <p className="text-blanc-attenue text-sm mb-10 max-w-md mx-auto">
          Cette page n'existe pas ou a été déplacée. Retournez à l'accueil et continuez votre aventure.
        </p>
        <Link href="/fr" className="inline-block bg-rouge-sang hover:bg-rouge-fonce text-white font-bebas tracking-widest text-lg px-10 py-4 transition-colors">
          RETOUR À L'ACCUEIL →
        </Link>
      </div>
    </div>
  )
}