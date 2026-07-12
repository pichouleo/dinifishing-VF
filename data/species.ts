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
    image: '/brochet.png',
    description: "Un prédateur redoutable, chasseur hors pair en embuscade.",
descriptionEn: "A formidable predator, an outstanding ambush hunter.",
descriptionEs: "Un depredador formidable, un cazador excepcional en emboscada.",
    behavior: "Le brochet est un chasseur à l'affût, expert en embuscades. Il se poste dans les herbiers, les zones ombragées et les transitions entre zones profondes et peu profondes. En Extremadura, les eaux du lac de García de Sola offrent des conditions idéales pour des spécimens de belle taille.",
    behaviorEn: "Pike are ambush hunters, expertly lurking in weed beds, shaded areas, and transitions between deep and shallow zones. In Extremadura, the waters of García de Sola lake offer ideal conditions for impressive specimens.",
    behaviorEs: "El lucio es un cazador de emboscada, experto en acechanzas en carrizales, zonas sombreadas y transiciones entre zonas profundas y poco profundas.",
    techniques: ['Streamer', 'Popper', 'Leurre souple', 'Jig'],
    techniquesEn: ['Streamer', 'Popper', 'Soft lure', 'Jig'],
    techniquesEs: ['Streamer', 'Popper', 'Señuelo blando', 'Jig'],
    season: 'Octobre à Avril (apogée)',
    seasonEn: 'October to April (peak)',
    seasonEs: 'Octubre a Abril (apogeo)',
  },
  {
    id: 'black-bass',
    slug: 'black-bass',
    name: 'Black Bass',
    nameEn: 'Largemouth Bass',
    nameEs: 'Black Bass',
    image: '/blackbass.png',
    description: "Champion du combat aquatique, star des pêches sportives.",
descriptionEn: "Champion of aquatic combat, star of sport fishing.",
descriptionEs: "Campeón del combate acuático, estrella de la pesca deportiva.",
    behavior: "Le Black Bass est extrêmement territorial et réagit violemment aux intrus dans son espace vital. L'Extremadura abrite certaines des plus belles populations de Black Bass d'Europe, avec des spécimens dépassant régulièrement les 3 kg.",
    behaviorEn: "Largemouth Bass are extremely territorial and react violently to intruders in their space. Extremadura hosts some of Europe's finest Bass populations, with specimens regularly exceeding 3 kg.",
    behaviorEs: "El Black Bass es extremadamente territorial y reacciona violentamente a los intrusos. Extremadura alberga algunas de las mejores poblaciones de Black Bass de Europa.",
    techniques: ['Popper', 'Leurre souple', 'Streamer', 'Nymphe'],
    techniquesEn: ['Popper', 'Soft lure', 'Streamer', 'Nymph'],
    techniquesEs: ['Popper', 'Señuelo blando', 'Streamer', 'Ninfa'],
    season: 'Avril à Octobre (idéal)',
    seasonEn: 'April to October (ideal)',
    seasonEs: 'Abril a Octubre (ideal)',
  },
  {
    id: 'sandre',
    slug: 'sandre',
    name: 'Sandre',
    nameEn: 'Zander',
    nameEs: 'Lucioperca',
    image: '/sandre.png',
    description: "Le chasseur des eaux profondes, discret mais redoutablement efficace.",
    descriptionEn: "The deep-water hunter, discreet but formidably effective.",
    descriptionEs: "El cazador de aguas profundas, discreto pero formidablemente efectivo.",
    behavior: "Le sandre préfère les eaux profondes et troubles, chassant souvent au crépuscule et à l'aube. En Extremadura, les grands fonds des lacs de barrage sont des habitats de prédilection pour des sandres trophées.",
    behaviorEn: "Zander prefer deep, murky waters, often hunting at dusk and dawn. In Extremadura, the deep reaches of reservoir lakes are prime habitats for trophy zander.",
    behaviorEs: "La lucioperca prefiere las aguas profundas y turbias, cazando a menudo al amanecer y al atardecer.",
    techniques: ['Jig', 'Leurre souple', 'Streamer'],
    techniquesEn: ['Jig', 'Soft lure', 'Streamer'],
    techniquesEs: ['Jig', 'Señuelo blando', 'Streamer'],
    season: 'Septembre à Mars (pic)',
    seasonEn: 'September to March (peak)',
    seasonEs: 'Septiembre a Marzo (pico)',
  },
  {
    id: 'barbeau-comizo',
    slug: 'barbeau-comizo',
    name: 'Barbeau Comizo',
    nameEn: 'Comizo Barbel',
    nameEs: 'Barbo Comizo',
    image: '/barbeau.png',
    description: "Espèce endémique ibérique, combattante exceptionnelle à la mouche.",
    descriptionEn: "Endemic Iberian species, exceptional fighter on the fly rod.",
    descriptionEs: "Especie endémica ibérica, combatiente excepcional con la mosca.",
    behavior: "Le Barbeau Comizo est une espèce endémique de la péninsule ibérique, qui vit dans les rivières à débit puissant et les grands lacs. C'est une cible de choix pour la pêche à la mouche, avec des combats acharnés et une puissance impressionnante.",
    behaviorEn: "The Comizo Barbel is endemic to the Iberian Peninsula, living in powerful rivers and large lakes. It's a prime target for fly fishing, offering fierce fights and impressive power.",
    behaviorEs: "El Barbo Comizo es endémico de la Península Ibérica, vive en ríos de fuerte caudal y grandes embalses. Es un objetivo privilegiado para la pesca con mosca.",
    techniques: ['Nymphe', 'Streamer', 'Leurre souple'],
    techniquesEn: ['Nymph', 'Streamer', 'Soft lure'],
    techniquesEs: ['Ninfa', 'Streamer', 'Señuelo blando'],
    season: 'Toute l\'année (printemps et automne)',
    seasonEn: 'Year-round (spring and autumn)',
    seasonEs: 'Todo el año (primavera y otoño)',
  },
]
