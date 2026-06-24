import Link from 'next/link'

interface SpeciesCardProps {
  name: string
  image: string
  description: string
  slug: string
  locale: string
}

export default function SpeciesCard({ name, image, description, slug, locale }: SpeciesCardProps) {
  return (
    <div className="group relative overflow-hidden bg-noir-carte border border-noir-leger hover:border-rouge-sang transition-colors">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-noir-profond/80 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="font-bebas text-2xl text-blanc-casse tracking-widest">{name}</h3>
        <p className="text-blanc-attenue text-sm mt-1">{description}</p>
        <Link
          href={`/${locale}/especes#${slug}`}
          className="inline-block mt-2 text-rouge-sang text-xs uppercase tracking-widest hover:text-rouge-fonce transition-colors"
        >
          En savoir plus →
        </Link>
      </div>
    </div>
  )
}
