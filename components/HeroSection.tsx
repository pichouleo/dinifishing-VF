import Link from 'next/link'

interface HeroSectionProps {
  title1: string
  title2: string
  tagline: string
  subtitle: string
  cta1Label: string
  cta1Href: string
  cta2Label: string
  cta2Href: string
  imageUrl: string
}

export default function HeroSection({
  title1, title2, tagline, subtitle,
  cta1Label, cta1Href, cta2Label, cta2Href, imageUrl
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-noir-profond/70 via-noir-profond/50 to-noir-profond" />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-bebas tracking-widest leading-none">
          <span className="block text-7xl md:text-9xl text-blanc-casse">{title1}</span>
          <span className="block text-7xl md:text-9xl text-rouge-sang">{title2}</span>
        </h1>
        <p className="text-xl md:text-2xl text-blanc-casse font-bebas tracking-widest mt-4">{tagline}</p>
        <p className="text-blanc-attenue text-sm mt-2 tracking-widest uppercase">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link
            href={cta1Href}
            className="bg-rouge-sang hover:bg-rouge-fonce text-white font-bebas tracking-widest text-lg px-8 py-3 transition-colors"
          >
            {cta1Label}
          </Link>
          <Link
            href={cta2Href}
            className="border border-blanc-casse text-blanc-casse hover:border-rouge-sang hover:text-rouge-sang font-bebas tracking-widest text-lg px-8 py-3 transition-colors"
          >
            {cta2Label}
          </Link>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-0.5 h-12 bg-rouge-sang mx-auto" />
      </div>
    </section>
  )
}
