'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLocale } from 'next-intl'

interface VillaCardProps {
  name: string
  images: string[]
  capacity: string
  description: string
  equipments?: string[]
}

export default function VillaCard({ name, images, capacity, description, equipments = [] }: VillaCardProps) {
  const [current, setCurrent] = useState(0)
  const [lightbox, setLightbox] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const locale = useLocale()

  useEffect(() => {
    if (images.length <= 1) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [images.length])

  // Fermer lightbox avec Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!lightbox) return
      if (e.key === 'Escape') setLightbox(false)
      if (e.key === 'ArrowRight') setLightboxIndex((i) => (i + 1) % images.length)
      if (e.key === 'ArrowLeft') setLightboxIndex((i) => (i - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightbox, images.length])

  // Bloquer le scroll quand lightbox ouverte
  useEffect(() => {
    document.body.style.overflow = lightbox ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length)
  const next = () => setCurrent((c) => (c + 1) % images.length)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightbox(true)
  }

  return (
    <>
      {/* LIGHTBOX */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setLightbox(false)}
        >
          {/* Bouton fermer */}
          <button
            className="absolute top-4 right-4 text-blanc-casse text-3xl hover:text-rouge-sang transition-colors z-10"
            onClick={() => setLightbox(false)}
          >
            ✕
          </button>

          {/* Flèche gauche */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-noir-profond/70 hover:bg-rouge-sang text-blanc-casse w-12 h-12 flex items-center justify-center text-2xl transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); setLightboxIndex((i) => (i - 1 + images.length) % images.length) }}
          >
            ‹
          </button>

          {/* Image */}
          <div
            className="relative w-full max-w-4xl max-h-[85vh] mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIndex]}
              alt={`${name} - photo ${lightboxIndex + 1}`}
              width={1200}
              height={800}
              className="object-contain w-full h-full max-h-[85vh]"
            />
            <p className="text-center text-blanc-attenue text-sm mt-3">
              {lightboxIndex + 1} / {images.length}
            </p>
          </div>

          {/* Flèche droite */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-noir-profond/70 hover:bg-rouge-sang text-blanc-casse w-12 h-12 flex items-center justify-center text-2xl transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); setLightboxIndex((i) => (i + 1) % images.length) }}
          >
            ›
          </button>
        </div>
      )}

      {/* CARTE */}
      <div className="bg-noir-carte border border-noir-leger hover:border-rouge-sang transition-colors group">
        <div className="relative h-64 overflow-hidden cursor-pointer" onClick={() => openLightbox(current)}>
          {images.map((src, i) => (
            <div key={i} className={`absolute inset-0 transition-opacity duration-700 ${i === current ? 'opacity-100' : 'opacity-0'}`}>
              <Image src={src} alt={`${name} - photo ${i + 1}`} fill className="object-cover" />
            </div>
          ))}

          {/* Icône zoom */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
            <div className="bg-noir-profond/70 text-blanc-casse text-2xl w-12 h-12 flex items-center justify-center">
              🔍
            </div>
          </div>

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prev() }}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-noir-profond/70 hover:bg-rouge-sang text-blanc-casse w-8 h-8 flex items-center justify-center transition-colors"
                aria-label="Photo précédente"
              >‹</button>
              <button
                onClick={(e) => { e.stopPropagation(); next() }}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-noir-profond/70 hover:bg-rouge-sang text-blanc-casse w-8 h-8 flex items-center justify-center transition-colors"
                aria-label="Photo suivante"
              >›</button>
            </>
          )}
          <div className="absolute bottom-2 right-3 z-10 bg-noir-profond/70 text-blanc-attenue text-xs px-2 py-0.5">
            {current + 1} / {images.length}
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bebas text-2xl text-blanc-casse tracking-widest">{name}</h3>
            <span className="text-xs text-or-mat border border-or-mat px-2 py-0.5">{capacity}</span>
          </div>
          <p className="text-blanc-attenue text-sm mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-5">
            {equipments.map((eq) => (
              <span key={eq} className="text-xs text-blanc-attenue border border-noir-leger px-2 py-1">{eq}</span>
            ))}
          </div>
          <Link href={`/${locale}/contact`} className="inline-block bg-rouge-sang hover:bg-rouge-fonce text-white font-bebas tracking-widest text-sm px-6 py-3 transition-colors">
            Nous contacter pour le tarif →
          </Link>
        </div>
      </div>
    </>
  )
}