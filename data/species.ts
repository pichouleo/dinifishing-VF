export interface Species {
  id: string
  slug: string
  name: string
  nameEn: string
  nameEs: string
  image: string
  description: string
  descriptionEn: string
  descriptionEs: string
  behavior: string
  behaviorEn: string
  behaviorEs: string
  techniques: string[]
  techniquesEn: string[]
  techniquesEs: string[]
  season: string
  seasonEn: string
  seasonEs: string
}

export const species: Species[] = [
  {
    id: 'brochet',
    slug: 'brochet',
    name: 'Brochet',
    nameEn: 'Pike',
    nameEs: 'Lucio',
    image: '/especes/brochet.JPG',
    description: "Un prédateur redoutable, chasseur hors pair en embuscade.",
    descriptionEn: "A formidable predator, an outstanding ambush hunter.",
    descriptionEs: "Un depredador formidable, un cazador excepcional en emboscada.",
    behavior: "Le brochet est un chasseur à l'affût, expert en embuscades. Il se poste dans les herbiers, les zones ombragées et les transitions entre zones profondes et peu profondes. En Extremadura, les eaux du lac de García de Sola offrent des conditions idéales pour des spécimens de belle taille.",
    behaviorEn: "Pike are ambush hunters, expertly lurking in weed beds, shaded areas, and transitions between deep and shallow zones. In Extremadura, the waters of García de Sola lake offer ideal conditions for impressive specimens.",
    behaviorEs: "El lucio es un cazador de emboscada, experto en acechanzas en carrizales, zonas sombreadas y transiciones entre zonas profundas y poco profundas.",
    techniques: ['Streamer', 'Leurre de surface', 'Leurre souple', 'Leurre à palette'],
    techniquesEn: ['Streamer', 'Topwater lure', 'Soft lure', 'Spinnerbait'],
    techniquesEs: ['Streamer', 'Señuelo de superficie', 'Señuelo blando', 'Señuelo de paleta'],
    season: 'Toute l\'année',
    seasonEn: 'All year round',
    seasonEs: 'Todo el año',
  },
  {
    id: 'black-bass',
    slug: 'black-bass',
    name: 'Black Bass',
    nameEn: 'Largemouth Bass',
    nameEs: 'Black Bass',
    image: '/especes/blackbass.jpg',
    description: "Champion du combat aquatique, star des pêches sportives.",
    descriptionEn: "Champion of aquatic combat, star of sport fishing.",
    descriptionEs: "Campeón del combate acuático, estrella de la pesca deportiva.",
    behavior: "Le Black Bass est extrêmement territorial et réagit violemment aux intrus dans son espace vital. L'Extremadura abrite certaines des plus belles populations de Black Bass d'Europe, avec des spécimens dépassant régulièrement les 2 kg.",
    behaviorEn: "Largemouth Bass are extremely territorial and react violently to intruders in their space. Extremadura hosts some of Europe's finest Bass populations, with specimens regularly exceeding 2 kg.",
    behaviorEs: "El Black Bass es extremadamente territorial y reacciona violentamente a los intrusos. Extremadura alberga algunas de las mejores poblaciones de Black Bass de Europa.",
    techniques: ['Leurre de surface', 'Leurre souple', 'Streamer', 'Leurre dur'],
    techniquesEn: ['Topwater lure', 'Soft lure', 'Streamer', 'Hard lure'],
    techniquesEs: ['Señuelo de superficie', 'Señuelo blando', 'Streamer', 'Señuelo duro'],
    season: 'Mars à Octobre (idéal)',
    seasonEn: 'March to October (ideal)',
    seasonEs: 'Marzo a Octubre (ideal)',
  },
  {
    id: 'sandre',
    slug: 'sandre',
    name: 'Sandre',
    nameEn: 'Zander',
    nameEs: 'Lucioperca',
    image: '/especes/sandre.jpg',
    description: "Le chasseur des eaux profondes, discret mais redoutablement efficace.",
    descriptionEn: "The deep-water hunter, discreet but formidably effective.",
    descriptionEs: "El cazador de aguas profundas, discreto pero formidablemente efectivo.",
    behavior: "Le sandre est un chasseur aux créneaux alimentaires très réguliers tout au long de la journée. En Extremadura, il chasse à des profondeurs peu importantes, ce qui permet des relâches en parfaite santé pour préserver cette ressource exceptionnelle.",
    behaviorEn: "Zander feed at very regular intervals throughout the day. In Extremadura, they hunt at shallow depths, allowing for healthy releases to preserve this exceptional species.",
    behaviorEs: "La lucioperca se alimenta en intervalos muy regulares a lo largo del día. En Extremadura, caza a profundidades poco importantes, lo que permite devoluciones en perfecto estado para preservar este recurso excepcional.",
    techniques: ['Leurre souple', 'Leurre dur'],
    techniquesEn: ['Soft lure', 'Hard lure'],
    techniquesEs: ['Señuelo blando', 'Señuelo duro'],
    season: 'Toute l\'année',
    seasonEn: 'All year round',
    seasonEs: 'Todo el año',
  },
  {
    id: 'barbeau-comizo',
    slug: 'barbeau-comizo',
    name: 'Barbeau Comizo',
    nameEn: 'Comizo Barbel',
    nameEs: 'Barbo Comizo',
    image: '/especes/barbeau.jpg',
    description: "Espèce endémique ibérique, combattante exceptionnelle à la mouche.",
    descriptionEn: "Endemic Iberian species, exceptional fighter on the fly rod.",
    descriptionEs: "Especie endémica ibérica, combatiente excepcional con la mosca.",
    behavior: "Le Barbeau Comizo est une espèce endémique de la péninsule ibérique, qui vit dans les rivières à débit puissant et les grands lacs. C'est une cible de choix pour la pêche à la mouche, avec des combats acharnés et une puissance impressionnante.",
    behaviorEn: "The Comizo Barbel is endemic to the Iberian Peninsula, living in powerful rivers and large lakes. It's a prime target for fly fishing, offering fierce fights and impressive power.",
    behaviorEs: "El Barbo Comizo es endémico de la Península Ibérica, vive en ríos de fuerte caudal y grandes embalses. Es un objetivo privilegiado para la pesca con mosca.",
    techniques: ['Nymphe', 'Streamer', 'Leurre souple', 'Leurre dur'],
    techniquesEn: ['Nymph', 'Streamer', 'Soft lure', 'Hard lure'],
    techniquesEs: ['Ninfa', 'Streamer', 'Señuelo blando','Señuelo duro' ],
    season: "Saison estivale (eaux chaudes)",
seasonEn: "Summer season (warm waters)",
seasonEs: "Temporada estival (aguas cálidas)",
  },
]
