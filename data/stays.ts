export interface Stay {
  id: string
  title: string
  titleEn: string
  titleEs: string
  duration: string
  durationEn: string
  durationEs: string
  image: string
  description: string
  descriptionEn: string
  descriptionEs: string
  includes: string[]
  includesEn: string[]
  includesEs: string[]
}

export const stays: Stay[] = [
  {
    id: 'peche-mouche',
    title: 'Séjour Pêche à la Mouche',
    titleEn: 'Fly Fishing Stay',
    titleEs: 'Estancia Pesca con Mosca',
    duration: '3 à 6 jours',
    durationEn: '3 to 6 days',
    durationEs: '3 a 6 días',
    image: '/sejours/peche-mouche-extremadura.jpg',
    description: "Plongez dans l'art de la pêche à la mouche en Extremadura. Brochet, Black Bass, Barbeau Comizo — une expérience unique sur des eaux encore sauvages.",
    descriptionEn: "Dive into the art of fly fishing in Extremadura. Pike, Bass, Comizo Barbel — a unique experience on still-wild waters.",
    descriptionEs: "Sumérgete en el arte de la pesca con mosca en Extremadura. Lucio, Black Bass, Barbo Comizo — una experiencia única en aguas todavía salvajes.",
    includes: [
      'Guide mouche diplomé',
      'Sessions inoubliables',
      'Hébergement',
      'Restauration',
      'Initiation possible pour débutants',
      'Licences et autorisations incluses',
    ],
    includesEn: [
      'Certified fly guide',
      'Unforgettable sessions',
      'Accommodation',
      'Restoration',
      'Initiation possible for beginners',
      'Licenses and permits included',
    ],
    includesEs: [
      'Guía de mosca certificado',
      'Sesiones inolvidables',
      'Alojamiento',
      'Restauración',
      'Iniciación posible para principiantes',
      'Licencias y permisos incluidos',
    ],
  },
  {
    id: 'sur-mesure',
    title: 'Séjour Sur Mesure',
    titleEn: 'Custom Stay',
    titleEs: 'Estancia a Medida',
    duration: 'Durée flexible',
    durationEn: 'Flexible duration',
    durationEs: 'Duración flexible',
    image: '/sejours/sejour-sur-mesure-extremadura.jpg',
    description: "Votre séjour, vos règles. Nous construisons ensemble un programme 100% personnalisé selon vos espèces cibles, votre niveau et vos envies.",
    descriptionEn: "Your stay, your rules. We build together a 100% personalized program based on your target species, level, and desires.",
    descriptionEs: "Tu estancia, tus reglas. Construimos juntos un programa 100% personalizado según tus especies objetivo, nivel y deseos.",
    includes: [
      'Programme 100% personnalisé',
      'Choix des espèces et techniques',
      'Guide dédié tous les jours',
      'Séjour possible avec votre propre matériel',
      'Hébergement',
      'Support avant et après séjour',
    ],
    includesEn: [
      '100% personalized program',
      'Choice of species and techniques',
      'Dedicated guide every day',
      'Stay possible with your own equipment',
      'Accommodation',
      'Pre and post-stay support',
    ],
    includesEs: [
      'Programa 100% personalizado',
      'Elección de especies y técnicas',
      'Guía dedicado todos los días',
      'Estancia posible con su propio material',
      'Alojamiento',
      'Soporte antes y después de la estancia',
    ],
  },
  {
    id: 'weekend-carnassiers',
    title: 'Week-end Carnassiers et/ou mouche',
    titleEn: 'Predator Weekend',
    titleEs: 'Fin de Semana Carnívoros',
    duration: '2 jours / 3 nuits',
    durationEn: '2 days / 3 nights',
    durationEs: '2 días / 3 noches',
    image: '/sejours/weekend-carnassiers.jpg',
    description: "Un week-end intensif à la poursuite des carnassiers sur le lac de García de Sola. Guide expert à vos côtés, bateau équipé, spots exclusifs.",
    descriptionEn: "An intensive weekend chasing predators on García de Sola lake. Expert guide by your side, equipped boat, exclusive spots.",
    descriptionEs: "Un fin de semana intensivo tras los carnívoros en el embalse de García de Sola. Guía experto a su lado, barco equipado, spots exclusivos.",
    includes: [
      'Guide professionnel 2 jours de pêche',
      'Bateau équipé avec sondeur dernière génération',
      'Hébergement 3 nuits',
      'Petit-déjeuner et pique-nique',
      'Toutes les licences de pêche',
      'Matériel disponible sur demande',
    ],
    includesEn: [
      'Professional 2-day fishing guide',
      'Boat equipped with a latest-generation sonar',
      'Accommodation 3 nights',
      'Breakfast and picnic',
      'All fishing licenses',
      'Equipment available on request',
    ],
    includesEs: [
      'Guía profesional de pesca (2 días)',
      'Embarcación equipada con sonda de última generación',
      'Alojamiento 3 noches',
      'Desayuno y picnic',
      'Todas las licencias de pesca',
      'Material disponible bajo petición',
    ],
  }
]
