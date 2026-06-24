import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'

const photos = [
  { src: 'https://images.unsplash.com/photo-1447684808650-354ae64db5b8?w=800', caption: 'Lever de soleil sur le lac' },
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800', caption: 'Brochet trophée' },
  { src: 'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=800', caption: 'Black Bass en action' },
  { src: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=800', caption: 'Matinée de pêche' },
  { src: 'https://images.unsplash.com/photo-1559181567-c3190ca9d222?w=800', caption: 'Pêche à la mouche' },
  { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', caption: "Paysage d'Extremadura" },
  { src: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800', caption: 'Villa au bord du lac' },
  { src: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800', caption: 'Barbeau Comizo' },
  { src: 'https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=800', caption: 'Session sandre' },
]

export default function GaleriePage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale)
  const t = useTranslations('gallery')
  return (
    <div className="min-h-screen bg-noir-profond pt-20">
      <section className="py-16 text-center px-4">
        <h1 className="font-bebas text-5xl md:text-7xl text-blanc-casse tracking-widest">{t('title')}</h1>
        <p className="text-blanc-attenue text-lg mt-4">{t('subtitle')}</p>
        <div className="w-16 h-0.5 bg-rouge-sang mx-auto mt-6" />
        <p className="text-or-mat text-xs uppercase tracking-widest mt-4 italic">{t('notice')}</p>
      </section>
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {photos.map((photo, i) => (
              <div key={i} className="break-inside-avoid group relative overflow-hidden mb-4">
                <img src={photo.src} alt={photo.caption} className="w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-noir-profond/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-blanc-casse text-sm">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
