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
    id: 'weekend-carnassiers',
    title: 'Week-end Carnassiers',
    titleEn: 'Predator Weekend',
    titleEs: 'Fin de Semana Carnívoros',
    duration: '2 jours / 2 nuits',
    durationEn: '2 days / 2 nights',
    durationEs: '2 días / 2 noches',
    image: '/sejours/weekend-carnassiers.jpg',
    description: "Un week-end intensif à la poursuite des carnassiers sur le lac de García de Sola. Guide expert à vos côtés, bateau équipé, spots exclusifs.",
    descriptionEn: "An intensive weekend chasing predators on García de Sola lake. Expert guide by your side, equipped boat, exclusive spots.",
    descriptionEs: "Un fin de semana intensivo tras los carnívoros en el embalse de García de Sola. Guía experto a su lado, barco equipado, spots exclusivos.",
    includes: [
      'Guide professionnel 2 jours',
      'Bateau équipé avec sondeur',
      'Hébergement 2 nuits (villa bord du lac)',
      'Petit-déjeuner et pique-nique',
      'Toutes les licences de pêche',
      'Matériel disponible sur demande',
    ],
    includesEn: [
      'Professional guide 2 days',
      'Equipped boat with sonar',
      'Accommodation 2 nights (lakeside villa)',
      'Breakfast and picnic',
      'All fishing licenses',
      'Equipment available on request',
    ],
    includesEs: [
      'Guía profesional 2 días',
      'Barco equipado con sónar',
      'Alojamiento 2 noches (villa a orillas del lago)',
      'Desayuno y picnic',
      'Todas las licencias de pesca',
      'Material disponible bajo petición',
    ],
  },
  {
    id: 'peche-mouche',
    title: 'Séjour Pêche à la Mouche',
    titleEn: 'Fly Fishing Stay',
    titleEs: 'Estancia Pesca con Mosca',
    duration: '3 à 5 jours',
    durationEn: '3 to 5 days',
    durationEs: '3 a 5 días',
    image: '/sejours/peche-mouche.jpg',
    description: "Plongez dans l'art de la pêche à la mouche en Extremadura. Brochet, Black Bass, Barbeau Comizo — une expérience unique sur des eaux encore sauvages.",
    descriptionEn: "Dive into the art of fly fishing in Extremadura. Pike, Bass, Comizo Barbel — a unique experience on still-wild waters.",
    descriptionEs: "Sumérgete en el arte de la pesca con mosca en Extremadura. Lucio, Black Bass, Barbo Comizo — una experiencia única en aguas todavía salvajes.",
    includes: [
      'Guide mouche certifié',
      'Sessions matin et après-midi',
      'Hébergement en villa',
      'Tous les repas',
      'Initiation possible pour débutants',
      'Licences et autorisations incluses',
    ],
    includesEn: [
      'Certified fly guide',
      'Morning and afternoon sessions',
      'Villa accommodation',
      'All meals',
      'Initiation possible for beginners',
      'Licenses and permits included',
    ],
    includesEs: [
      'Guía de mosca certificado',
      'Sesiones mañana y tarde',
      'Alojamiento en villa',
      'Todas las comidas',
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
    image: '/sejours/sur-mesure.jpg',
    description: "Votre séjour, vos règles. Nous construisons ensemble un programme 100% personnalisé selon vos espèces cibles, votre niveau et vos envies.",
    descriptionEn: "Your stay, your rules. We build together a 100% personalized program based on your target species, level, and desires.",
    descriptionEs: "Tu estancia, tus reglas. Construimos juntos un programa 100% personalizado según tus especies objetivo, nivel y deseos.",
    includes: [
      'Programme 100% personnalisé',
      'Choix des espèces et techniques',
      'Guide dédié tous les jours',
      'Hébergement selon préférences',
      'Transferts aéroport possibles',
      'Support avant et après séjour',
    ],
    includesEn: [
      '100% personalized program',
      'Choice of species and techniques',
      'Dedicated guide every day',
      'Accommodation per preference',
      'Airport transfers possible',
      'Pre and post-stay support',
    ],
    includesEs: [
      'Programa 100% personalizado',
      'Elección de especies y técnicas',
      'Guía dedicado todos los días',
      'Alojamiento según preferencias',
      'Traslados aeropuerto posibles',
      'Soporte antes y después de la estancia',
    ],
  },
]
