export interface Villa {
  id: string
  name: string
  image: string
  capacity: string
  equipments: string[]
  description: string
}

export const villas = [
  {
    id: 'appartement',
    name: 'Appartement du Pêcheur',
    description: 'Situé au cœur de Valdecaballeros, cet appartement offre une vue imprenable sur la baie de la mise à l\'eau du Garcia Sola. Idéal pour les petits groupes, il allie confort simple et authenticité espagnole.',
    capacity: '6 personnes',
    bedrooms: 3,
    bathrooms: 1,
    type: 'Chambre d\'hôte',
    features: [
      'Vue sur la baie du Garcia Sola',
      'Grande terrasse avec barbecue',
      '3 chambres doubles (2 lits individuels)',
      'Cuisine toute équipée',
      'Draps et serviettes fournis',
      'Salle de bain',
      'Wi-Fi',
      'Climatisation',
    ],
    images: [
      '/images/hebergement/appart-1.jpg',
      '/images/hebergement/appart-2.jpg',
      '/images/hebergement/appart-3.jpg',
    ],
    badge: 'Vue sur le lac',
  },
  {
    id: 'villa',
    name: 'Villa Garcia Sola',
    description: 'Une villa privatisée avec entrée fermée permettant de garer vos bateaux directement sur place. Parfaite pour les grands groupes souhaitant une totale indépendance dans un cadre authentiquement espagnol.',
    capacity: '8 personnes',
    bedrooms: 4,
    bathrooms: 2,
    type: 'Villa privée',
    features: [
      'Hébergement entièrement privatisé',
      'Entrée fermée pour garer les bateaux',
      '4 chambres doubles (2 lits individuels)',
      'Grand salon',
      '2 salles de bain',
      'Cuisine équipée',
      'Draps et serviettes fournis',
      'Barbecue',
      'Climatisation',
    ],
    images: [
      '/images/hebergement/appart-1.jpg',
      '/images/hebergement/appart-2.jpg',
      '/images/hebergement/appart-3.jpg',
    ],
    badge: 'Idéal grands groupes',
  },
]
