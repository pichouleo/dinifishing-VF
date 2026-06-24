export interface Villa {
  id: string
  name: string
  image: string
  capacity: string
  equipments: string[]
  description: string
}

export const villas: Villa[] = [
  {
    id: 'villa-lago',
    name: 'Villa Lago',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800',
    capacity: '6 personnes',
    description: 'Villa de charme avec vue directe sur le lac, terrasse, barbecue et accès privatif à la rive pour lancer dès l\'aube.',
    equipments: ['Accès direct au lac', 'Terrasse panoramique', 'Barbecue extérieur', 'Cuisine équipée', 'WiFi', 'Climatisation', '3 chambres', '2 salles de bain'],
  },
  {
    id: 'villa-extremadura',
    name: 'Villa Extremadura',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
    capacity: '4 personnes',
    description: 'Maison typique extrémègne rénovée, à 200 mètres du lac. Jardin privé, ambiance authentique et tout le confort moderne.',
    equipments: ['Vue sur lac', 'Jardin privé', 'Parking sécurisé', 'Cuisine équipée', 'WiFi', 'Climatisation', '2 chambres', '1 salle de bain'],
  },
]
