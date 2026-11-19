export type Localized = { fr: string; en: string; es: string }

export interface Article {
  id: string
  slug: string
  title: Localized
  excerpt: Localized
  date: string
  image: string
  content: Localized
}

/** Renvoie la version demandée, avec repli sur le français. */
export function pick(value: Localized, locale: string): string {
  return value[locale as keyof Localized] ?? value.fr
}

export const articles: Article[] = [
  {
    id: '1',
    slug: 'meilleurs-spots-black-bass-extremadura',
    title: {
      fr: 'Les meilleurs spots de Black Bass en Extremadura',
      en: 'The best Black Bass spots in Extremadura',
      es: 'Los mejores spots de Black Bass en Extremadura',
    },
    excerpt: {
      fr: 'Découvrez les spots incontournables pour pêcher le Black Bass en Extremadura, des conseils de terrain exclusifs de notre guide.',
      en: 'The essential spots for Black Bass fishing in Extremadura, with exclusive on-the-water advice from our guide.',
      es: 'Los spots imprescindibles para pescar el Black Bass en Extremadura, con consejos de campo exclusivos de nuestro guía.',
    },
    date: '2026-06-15',
    image: '/blog/article-blackbass.jpg',
    content: {
      fr: `
# Les meilleurs spots de Black Bass en Extremadura

L'Extremadura est sans conteste l'une des régions les plus riches d'Europe en ce qui concerne le Black Bass. Ses vastes réservoirs, ses eaux cristallines et son climat méditerranéen continental créent des conditions idéales pour que ce carnassier américain se développe à des tailles impressionnantes.

## Le Lac de García de Sola

Premier sur notre liste, le lac de García de Sola est la perle de l'Extremadura pour le Black Bass. Ce réservoir de plus de 3 000 hectares offre une variété de biotopes exceptionnelle : criques rocheuses, herbiers denses, arbres noyés et zones de transition entre eaux profondes et peu profondes.

Les meilleures zones se situent dans les bras secondaires du lac, où les variations de profondeur créent des couloirs de chasse naturels. Au printemps, les frayères en zone littorale offrent des parties de pêche mémorables avec des poissons en plein comportement territorial.

**Techniques recommandées :**

- Popper en surface aux heures chaudes (mai-septembre)
- Leurre souple type Ned Rig dans les zones profondes
- Crank bait dans les couloirs rocheux

## Les Criques Cachées

Les connaisseurs savent qu'en Extremadura, les meilleures touches se font dans les petites criques à l'abri du vent et du bateau. Ces zones, accessibles uniquement en bateau léger, abritent des concentrations de Black Bass qui n'ont pratiquement jamais vu de leurre.

Notre guide connaît chaque recoin de ces spots exclusifs — un avantage considérable pour maximiser vos sorties.

## La Saison Idéale

Si le Black Bass peut se pêcher toute l'année en Extremadura, la période d'or se situe entre avril et juin pour la fraie, puis septembre et octobre pour les rassemblements pré-hivernaux. En été, les poissons descendent en profondeur pour fuir la chaleur — il faut adapter sa technique.

## Conclusion

Pour vivre une expérience de pêche au Black Bass à la hauteur de l'Extremadura, il n'y a pas de secret : connaître les spots, adapter la technique, et se faire guider par un professionnel du terrain. C'est exactement ce que nous vous proposons chez Dini Fishing.

Contactez-nous pour réserver votre séjour et découvrir ces spots légendaires.
      `,
      en: `
# The best Black Bass spots in Extremadura

Extremadura is without question one of the richest regions in Europe for Black Bass. Its vast reservoirs, clear water and continental Mediterranean climate create ideal conditions for this American predator to grow to impressive sizes.

## Lake García de Sola

First on our list, Lake García de Sola is Extremadura's jewel for Black Bass. This reservoir of more than 3,000 hectares offers an exceptional variety of habitats: rocky coves, dense weed beds, drowned timber and transition zones between deep and shallow water.

The best areas lie in the lake's secondary arms, where changes in depth create natural hunting corridors. In spring, the spawning grounds along the shoreline make for memorable sessions, with fish in full territorial mood.

**Recommended techniques:**

- Topwater popper during the warm hours (May to September)
- Soft plastics such as the Ned Rig in deeper water
- Crankbait along the rocky corridors

## The Hidden Coves

Those who know Extremadura know that the best takes come from the small coves sheltered from the wind and from boat traffic. These areas, reachable only in a light boat, hold concentrations of Black Bass that have barely ever seen a lure.

Our guide knows every corner of these exclusive spots — a considerable advantage when it comes to making the most of your days on the water.

## The Ideal Season

Black Bass can be caught all year round in Extremadura, but the golden window runs from April to June for the spawn, then September and October for the pre-winter gatherings. In summer the fish drop into deeper water to escape the heat, and your approach has to follow them down.

## Conclusion

There is no secret to a Black Bass trip worthy of Extremadura: know the spots, adapt your technique, and let a professional who lives on this water show you around. That is exactly what we offer at Dini Fishing.

Get in touch to book your stay and discover these legendary spots.
      `,
      es: `
# Los mejores spots de Black Bass en Extremadura

Extremadura es sin duda una de las regiones más ricas de Europa en lo que respecta al Black Bass. Sus grandes embalses, sus aguas cristalinas y su clima mediterráneo continental crean las condiciones ideales para que este depredador americano alcance tallas impresionantes.

## El embalse de García de Sola

El primero de nuestra lista, el embalse de García de Sola, es la joya de Extremadura para el Black Bass. Este embalse de más de 3.000 hectáreas ofrece una variedad de biotopos excepcional: calas rocosas, praderas de vegetación densa, árboles sumergidos y zonas de transición entre aguas profundas y someras.

Las mejores zonas se encuentran en los brazos secundarios del embalse, donde los cambios de profundidad crean pasillos de caza naturales. En primavera, las zonas de freza del litoral regalan jornadas memorables, con peces en pleno comportamiento territorial.

**Técnicas recomendadas:**

- Popper en superficie en las horas cálidas (de mayo a septiembre)
- Vinilo tipo Ned Rig en las zonas profundas
- Crankbait en los pasillos rocosos

## Las calas escondidas

Los conocedores saben que en Extremadura las mejores picadas se dan en las pequeñas calas resguardadas del viento y del paso de las embarcaciones. Estas zonas, accesibles únicamente en embarcación ligera, albergan concentraciones de Black Bass que prácticamente nunca han visto un señuelo.

Nuestro guía conoce cada rincón de estos spots exclusivos, una ventaja considerable para aprovechar al máximo tus jornadas.

## La temporada ideal

El Black Bass se pesca todo el año en Extremadura, pero el momento dorado va de abril a junio durante la freza, y de septiembre a octubre durante las concentraciones previas al invierno. En verano los peces bajan a más profundidad para huir del calor, y hay que adaptar la técnica.

## Conclusión

Para vivir una experiencia de pesca del Black Bass a la altura de Extremadura no hay secreto: conocer los spots, adaptar la técnica y dejarse guiar por un profesional que vive estas aguas. Es exactamente lo que te proponemos en Dini Fishing.

Escríbenos para reservar tu estancia y descubrir estos spots legendarios.
      `,
    },
  },
  {
    id: '2',
    slug: 'peche-mouche-espagne-extremadura',
    title: {
      fr: "Pêche à la mouche en Espagne : pourquoi choisir l'Extremadura ?",
      en: 'Fly fishing in Spain: why choose Extremadura?',
      es: 'Pesca a mosca en España: ¿por qué elegir Extremadura?',
    },
    excerpt: {
      fr: "L'Extremadura s'impose comme la destination de référence pour la pêche à la mouche en Espagne. Voici pourquoi.",
      en: 'Extremadura is emerging as the benchmark destination for fly fishing in Spain. Here is why.',
      es: 'Extremadura se impone como el destino de referencia para la pesca a mosca en España. Te contamos por qué.',
    },
    date: '2026-07-28',
    image: '/blog/article-peche-mouche.jpg',
    content: {
      fr: `
# Pêche à la mouche en Espagne : pourquoi choisir l'Extremadura ?

Quand on pense pêche à la mouche en Europe, les noms qui viennent immédiatement sont souvent l'Écosse, la Scandinavie ou les Alpes. Pourtant, l'Extremadura espagnole réserve des surprises extraordinaires aux pêcheurs à la mouche qui osent s'aventurer hors des sentiers battus.

## Un Écosystème Unique

L'Extremadura est une région préservée à l'extrême sud-ouest de l'Espagne, à la frontière du Portugal. Avec ses vastes espaces naturels protégés, ses rivières de garrigue et ses grands réservoirs, elle abrite une biodiversité piscicole rare.

Pour le pêcheur à la mouche, l'attrait principal réside dans la présence de plusieurs espèces endémiques ibériques :

- Le Barbeau Comizo, géant des eaux ibériques, pouvant dépasser 5 kg, combattant acharné sur une mouche sèche ou une nymphe
- Le Black Bass, réactif et agressif, qui se prend magnifiquement au popper ou au streamer
- Le Brochet, chasseur à l'affût posté dans les herbiers et sur les cassures, qui monte violemment sur de gros streamers en plumes

## Les Eaux de l'Extremadura

Contrairement aux rivières alpines encombrées de pêcheurs au mois d'août, les eaux d'Extremadura restent d'une tranquillité remarquable. Les rivières comme le Guadiana et ses affluents, les grands réservoirs de Valdecaballeros et García de Sola offrent des kilomètres de berges pratiquement vierges.

La transparence de l'eau en automne et au printemps permet de pêcher en sight fishing — voir le poisson, poser la mouche à quelques centimètres, observer la montée... Ce type de pêche représente l'aboutissement pour beaucoup de pêcheurs à la mouche.

## La Météo Favorable

L'Extremadura bénéficie d'un climat continental méditerranéen avec des hivers doux. Là où d'autres destinations ferment leurs portes en novembre, l'Extremadura permet de pêcher confortablement de septembre à avril — les meilleures périodes pour le Barbeau Comizo et le Brochet.

**Températures moyennes de pêche :**

- Octobre : 18-22°C en journée
- Novembre-Février : 8-15°C
- Mars-Avril : 15-22°C, période de fraie du Barbeau

## Dini Fishing : Votre Accès Exclusif

Nous ne sommes pas simplement un service de guidage — nous sommes les gardiens d'un territoire de pêche exceptionnel. Notre connaissance du terrain, des éclosions locales et des comportements des poissons selon les saisons est le résultat d'années de pratique intensive sur ces eaux.

Que vous soyez débutant souhaitant vous initier ou pêcheur confirmé cherchant à cocher de nouvelles espèces sur votre liste, nous avons le programme qu'il vous faut.

Contactez-nous pour préparer votre aventure à la mouche en Extremadura.
      `,
      en: `
# Fly fishing in Spain: why choose Extremadura?

When fly fishing in Europe comes up, the names that spring to mind are usually Scotland, Scandinavia or the Alps. Yet Spanish Extremadura holds extraordinary surprises for fly anglers willing to venture off the beaten track.

## A Unique Ecosystem

Extremadura is an unspoilt region in the far south-west of Spain, on the Portuguese border. With its vast protected natural areas, its scrubland rivers and its great reservoirs, it is home to a rare diversity of fish.

For the fly angler, the main draw is the presence of several Iberian endemic species:

- The Comizo Barbel, a giant of Iberian waters that can exceed 5 kg and fights relentlessly on a dry fly or a nymph
- The Black Bass, quick and aggressive, which takes beautifully on a popper or a streamer
- The Pike, an ambush hunter holding in the weed beds and along the drop-offs, which rises violently to big feathered streamers

## The Waters of Extremadura

Unlike Alpine rivers crowded with anglers in August, the waters of Extremadura stay remarkably quiet. Rivers such as the Guadiana and its tributaries, and the large reservoirs of Valdecaballeros and García de Sola, offer kilometre after kilometre of almost untouched bank.

The clarity of the water in autumn and spring allows for sight fishing — seeing the fish, placing the fly a few centimetres away, watching the rise. For many fly anglers, this is as good as it gets.

## Weather On Your Side

Extremadura enjoys a continental Mediterranean climate with mild winters. Where other destinations close their doors in November, Extremadura lets you fish comfortably from September to April — the best months for Comizo Barbel and Pike.

**Typical fishing temperatures:**

- October: 18-22°C during the day
- November to February: 8-15°C
- March to April: 15-22°C, the barbel spawning season

## Dini Fishing: Your Exclusive Access

We are not simply a guiding service — we are the custodians of an exceptional fishery. Our knowledge of the ground, of local hatches and of how the fish behave through the seasons is the result of years of intensive practice on this water.

Whether you are a beginner looking for your first steps or an experienced angler chasing new species for your list, we have the programme for you.

Get in touch to plan your fly fishing adventure in Extremadura.
      `,
      es: `
# Pesca a mosca en España: ¿por qué elegir Extremadura?

Cuando se habla de pesca a mosca en Europa, los nombres que vienen primero a la cabeza suelen ser Escocia, Escandinavia o los Alpes. Sin embargo, la Extremadura española reserva sorpresas extraordinarias a los pescadores a mosca que se atreven a salir de los caminos trillados.

## Un ecosistema único

Extremadura es una región preservada en el extremo suroeste de España, en la frontera con Portugal. Con sus grandes espacios naturales protegidos, sus ríos de monte bajo y sus grandes embalses, alberga una biodiversidad piscícola poco común.

Para el pescador a mosca, el principal atractivo está en la presencia de varias especies endémicas ibéricas:

- El Barbo Comizo, gigante de las aguas ibéricas, capaz de superar los 5 kg y luchador incansable a mosca seca o ninfa
- El Black Bass, reactivo y agresivo, que entra magníficamente a popper o a streamer
- El Lucio, cazador al acecho apostado en la vegetación y en los quiebros, que sube con violencia a grandes streamers de pluma

## Las aguas de Extremadura

A diferencia de los ríos alpinos abarrotados de pescadores en agosto, las aguas de Extremadura mantienen una tranquilidad notable. Ríos como el Guadiana y sus afluentes, y los grandes embalses de Valdecaballeros y García de Sola, ofrecen kilómetros de orilla prácticamente vírgenes.

La transparencia del agua en otoño y en primavera permite pescar a vista: ver el pez, posar la mosca a unos centímetros, observar la subida. Para muchos pescadores a mosca, esto es la culminación.

## Un clima favorable

Extremadura disfruta de un clima mediterráneo continental con inviernos suaves. Allí donde otros destinos cierran sus puertas en noviembre, Extremadura permite pescar cómodamente de septiembre a abril, los mejores meses para el Barbo Comizo y el Lucio.

**Temperaturas habituales de pesca:**

- Octubre: 18-22°C durante el día
- De noviembre a febrero: 8-15°C
- De marzo a abril: 15-22°C, época de freza del barbo

## Dini Fishing: tu acceso exclusivo

No somos simplemente un servicio de guía: somos los guardianes de un territorio de pesca excepcional. Nuestro conocimiento del terreno, de las eclosiones locales y del comportamiento de los peces según la estación es fruto de años de práctica intensiva en estas aguas.

Tanto si eres principiante y quieres iniciarte como si eres pescador experimentado buscando nuevas especies para tu lista, tenemos el programa que necesitas.

Escríbenos para preparar tu aventura a mosca en Extremadura.
      `,
    },
  },
  {
    id: '3',
    slug: 'preparer-sejour-peche-carnassiers',
    title: {
      fr: 'Préparer son séjour de pêche aux carnassiers : conseils du guide',
      en: "Planning your predator fishing trip: the guide's advice",
      es: 'Preparar tu estancia de pesca de depredadores: los consejos del guía',
    },
    excerpt: {
      fr: 'Notre guide partage ses conseils essentiels pour préparer au mieux votre séjour de pêche aux carnassiers en Extremadura.',
      en: 'Our guide shares the advice that matters most when preparing a predator fishing trip in Extremadura.',
      es: 'Nuestro guía comparte sus consejos esenciales para preparar al máximo tu estancia de pesca de depredadores en Extremadura.',
    },
    date: '2026-08-26',
    image: '/blog/article-carnassiers.jpg',
    content: {
      fr: `
# Préparer son séjour de pêche aux carnassiers : conseils du guide

Partir à la chasse aux carnassiers en Extremadura, ça se prépare. Après des années passées à guider des pêcheurs de tous niveaux sur ces eaux, j'ai accumulé une liste de conseils qui font vraiment la différence entre un séjour ordinaire et une expérience mémorable.

## Le Matériel Essentiel

### Les cannes

Pour le Black Bass et le Sandre, une canne casting ou spinning de 2,1 à 2,4 m en puissance M à MH est idéale. Pour le Brochet, montez en puissance : du MH au H selon la taille des leurres utilisés.

**Ce que j'utilise sur le lac :**

- Spinning MH 7'2" pour le Black Bass au leurre souple
- Casting M 7' pour le popper
- Spinning H 7'6" pour le brochet au streamer

### Les leurres indispensables

L'Extremadura a ses particularités. Les leurres qui cartonnent ici ne sont pas toujours ceux qui marchent ailleurs. Voici ma sélection :

- Poppers de 10-15 cm en surface, pour le Black Bass en été
- Leurres souples en 10-15 cm, textures naturelles, pour le sandre et le bass en profondeur
- Jigs de 15-25 g plombés, pour le sandre dans les zones profondes
- Gros streamers articulés pour le brochet

### La tenue

L'Extremadura est certes ensoleillée, mais les matins en bateau peuvent être frais même en été. Prévoyez des couches : t-shirt technique, polaire légère, coupe-vent imperméable. Un chapeau à larges bords et des lunettes polarisantes sont indispensables.

## Les Licences et Réglementations

La pêche en Espagne nécessite une licence valide pour la communauté autonome d'Extremadura. Chez Dini Fishing, nous gérons toutes les formalités administratives — licences, autorisations spéciales pour certains plans d'eau, règles no-kill sur les zones protégées.

**Règle d'or : tout est remis à l'eau.**

Nous pratiquons la pêche sportive dans le respect total des écosystèmes.

## L'Acclimatation au Terrain

Le premier jour est souvent dédié à la découverte du lac et de ses zones clés. Ne vous découragez pas si les premières heures sont silencieuses — c'est normal. Le lac de García de Sola est grand, et chaque session est un apprentissage.

Mes conseils pour les premières heures :

- Observez avant de lancer : les oiseaux, les remous, les insectes à la surface
- Commencez par les zones peu profondes tôt le matin
- Suivez les indications du guide, c'est lui qui connaît les poissons du jour

## Le Repos et la Table

Un bon repas et un bon sommeil, c'est aussi de la pêche. Nos hébergements au bord du lac ont été choisis pour garantir le confort après les longues journées sur l'eau. La cuisine d'Estrémadure — ibérico, migas, sopa de ajo — est une part de l'expérience qu'il serait dommage de négliger.

## Conclusion

La pêche aux carnassiers en Extremadura est une aventure à part entière. Elle demande un minimum de préparation, mais elle offre en retour des sensations uniques que peu d'autres destinations européennes peuvent égaler.

Posez-nous toutes vos questions en amont du séjour — nous sommes là pour que vous arriviez prêts et repartiez comblés.
      `,
      en: `
# Planning your predator fishing trip: the guide's advice

Chasing predators in Extremadura takes preparation. After years spent guiding anglers of every level on this water, I have built up a list of tips that genuinely make the difference between an ordinary trip and a memorable one.

## The Essential Tackle

### Rods

For Black Bass and Zander, a casting or spinning rod of 2.1 to 2.4 m in M to MH power is ideal. For Pike, step up: MH to H depending on the size of the lures you are throwing.

**What I use on the lake:**

- MH 7'2" spinning for Black Bass on soft plastics
- M 7' casting for poppers
- H 7'6" spinning for pike on streamers

### The lures that matter

Extremadura has its own character. The lures that shine here are not always the ones that work elsewhere. Here is my selection:

- Poppers of 10-15 cm on the surface, for summer Black Bass
- Soft plastics of 10-15 cm in natural finishes, for zander and bass down deep
- Weighted jigs of 15-25 g, for zander in the deeper zones
- Big jointed streamers for pike

### Clothing

Extremadura is certainly sunny, but mornings on the boat can be cold even in summer. Plan on layers: a technical t-shirt, a light fleece, a waterproof windbreaker. A wide-brimmed hat and polarised glasses are essential.

## Licences and Regulations

Fishing in Spain requires a valid licence for the autonomous community of Extremadura. At Dini Fishing we handle all the paperwork — licences, special permits for certain waters, catch-and-release rules on protected zones.

**The golden rule: everything goes back in the water.**

We practise sport fishing with full respect for the ecosystem.

## Settling Into the Water

The first day is usually given over to getting to know the lake and its key areas. Do not be discouraged if the opening hours are quiet — that is normal. Lake García de Sola is big, and every session teaches you something.

My advice for those first hours:

- Watch before you cast: the birds, the swirls, the insects on the surface
- Start in the shallows early in the morning
- Follow the guide's lead, he is the one who knows where the fish are that day

## Rest and the Table

A good meal and a good night's sleep are part of fishing too. Our lakeside accommodation was chosen to guarantee comfort after long days on the water. The cooking of Extremadura — ibérico, migas, sopa de ajo — is a part of the experience it would be a shame to overlook.

## Conclusion

Predator fishing in Extremadura is an adventure in its own right. It asks for a minimum of preparation, and it gives back sensations that few other European destinations can match.

Ask us anything you like before the trip — we are here so that you arrive ready and leave satisfied.
      `,
      es: `
# Preparar tu estancia de pesca de depredadores: los consejos del guía

Salir a por los depredadores en Extremadura se prepara. Después de años guiando a pescadores de todos los niveles en estas aguas, he reunido una lista de consejos que marcan de verdad la diferencia entre una estancia corriente y una experiencia memorable.

## El material esencial

### Las cañas

Para el Black Bass y la Lucioperca, una caña de casting o spinning de 2,1 a 2,4 m con potencia M a MH es ideal. Para el Lucio, sube de potencia: de MH a H según el tamaño de los señuelos que uses.

**Lo que yo uso en el embalse:**

- Spinning MH 7'2" para el Black Bass a vinilo
- Casting M 7' para el popper
- Spinning H 7'6" para el lucio a streamer

### Los señuelos imprescindibles

Extremadura tiene sus particularidades. Los señuelos que arrasan aquí no siempre son los que funcionan en otros sitios. Esta es mi selección:

- Poppers de 10-15 cm en superficie, para el Black Bass en verano
- Vinilos de 10-15 cm con acabados naturales, para la lucioperca y el bass en profundidad
- Jigs de 15-25 g plomados, para la lucioperca en las zonas profundas
- Grandes streamers articulados para el lucio

### La ropa

Extremadura es soleada, sí, pero las mañanas en barca pueden ser frescas incluso en verano. Prevé varias capas: camiseta técnica, forro polar ligero, cortavientos impermeable. Un sombrero de ala ancha y gafas polarizadas son indispensables.

## Licencias y normativa

La pesca en España requiere una licencia válida para la comunidad autónoma de Extremadura. En Dini Fishing nos encargamos de todos los trámites administrativos: licencias, autorizaciones especiales para ciertas masas de agua y normas de captura y suelta en las zonas protegidas.

**Regla de oro: todo vuelve al agua.**

Practicamos la pesca deportiva con el máximo respeto por los ecosistemas.

## La adaptación al terreno

El primer día suele dedicarse a descubrir el embalse y sus zonas clave. No te desanimes si las primeras horas son tranquilas, es lo normal. El embalse de García de Sola es grande y cada jornada enseña algo.

Mis consejos para esas primeras horas:

- Observa antes de lanzar: las aves, los remolinos, los insectos en la superficie
- Empieza por las zonas someras a primera hora de la mañana
- Sigue las indicaciones del guía, es quien sabe dónde están los peces ese día

## El descanso y la mesa

Una buena comida y un buen descanso también forman parte de la pesca. Nuestros alojamientos a orillas del embalse se eligieron para garantizar la comodidad después de largas jornadas en el agua. La cocina extremeña — ibérico, migas, sopa de ajo — es una parte de la experiencia que sería una pena dejar de lado.

## Conclusión

La pesca de depredadores en Extremadura es una aventura en sí misma. Exige un mínimo de preparación, y a cambio ofrece sensaciones únicas que pocos destinos europeos pueden igualar.

Haznos todas tus preguntas antes de la estancia: estamos aquí para que llegues preparado y te vayas satisfecho.
      `,
    },
  },
  {
    id: '4',
    slug: 'cedric-gandini-guide-peche-extremadura-interview',
    title: {
      fr: "Cédric Gandini : « S'épanouir dans un métier passion et transmettre »",
      en: 'Cédric Gandini: "Thriving in a job I love, and passing it on"',
      es: 'Cédric Gandini: «Realizarse en un oficio de pasión y transmitir»',
    },
    excerpt: {
      fr: "Rencontre avec Cédric Gandini, alias Dini Fishing, moniteur guide de pêche en Extremadura. Il nous parle de sa reconversion, de sa passion et de ce qui rend l'Extremadura si unique.",
      en: 'A conversation with Cédric Gandini, also known as Dini Fishing, a qualified fishing guide in Extremadura, on his career change, his passion and what makes this region so singular.',
      es: 'Entrevista con Cédric Gandini, alias Dini Fishing, monitor y guía de pesca en Extremadura. Nos habla de su cambio de rumbo, de su pasión y de lo que hace a Extremadura tan singular.',
    },
    date: '2023-03-15',
    image: '/blog/article-cedric-gandini.jpeg',
    content: {
      fr: `
# Cédric Gandini : « S'épanouir dans un métier passion et transmettre »

*Entretien publié à l'origine sur [peche.com](https://www.peche.com/article/42506/cedric-gandini-s-epanouir-dans-un-metier-passion-et-transmettre)*

Cédric Gandini est moniteur guide de pêche en Espagne dans la région de l'Extremadura. Il propose à ses clients de pêcher les grands lacs espagnols du bord, en float-tube ou en bateau.

## Bonjour Cédric, peux-tu te présenter ?

Je m'appelle Cédric Gandini (alias Dini Fishing) et j'ai grandi dans le département du Tarn dans le sud-ouest de la France. Après quelques étapes professionnelles en Creuse et en Auvergne, j'ai suivi la formation du BPJEPS moniteur guide de pêche en 2016 dans l'Aveyron. Ma passion pour la nature et plus particulièrement pour l'activité pêche de loisir m'a poussé très récemment sur une mise en place de prestations de guidage en Espagne dans la région d'Extremadura.

## Pourquoi es-tu devenu guide de pêche ?

Pour m'épanouir dans un métier passion. En 2016, voulant m'investir dans le monde de la pêche de mon département, j'ai voulu me former dans les animations pêche avec de nombreux publics différents. Une année riche en rencontres, mais aussi en moments de partage m'ont conforté dans mon idée de reconversion. Une envie simple de transmettre ma joie au bord de l'eau.

## Quels types de produits de guidage proposes-tu ?

Je propose depuis mon installation en Espagne, l'organisation de séjour pêche à la carte. Lors de ces séjours, je propose mes services en tant que guide pour permettre à tous et toutes de découvrir au mieux les différents barrages d'Extremadura ainsi que sa nature sauvage, la pêche du moment, des bons petits plats locaux et bien sûr l'hospitalité de ce pays très accueillant.

Le choix des prestations est assez diversifié — le logement très proche de magnifiques barrages me permet de faire pratiquer la pêche du bord, en float-tube et en bateau. Il ne vous reste plus qu'à composer le menu de vos vacances.

## Qu'est-ce qu'être guide de pêche pour toi ?

Être un guide, comme ce mot l'indique, signifie pour moi d'être une personne à l'écoute et qui met tout en œuvre pour faire ressentir et pour transmettre la passion qui l'anime.

## Tu pêches lorsque tu es en guidage ?

Non, jamais lors de mes guidages, sauf si c'est le choix de ou des personnes guidées. Une journée de guidage reste une journée qui s'organise et doit enrichir la personne guidée. C'est un travail passion, mais aussi un travail très prenant.

## Que fais-tu lorsque tu ne guides pas ?

Mes temps libres se passent toujours non loin de l'eau ou en pleine nature. J'ai la chance de vivre dans un petit paradis où je peux vivre ma passion sans trop de limites. L'Extremadura est tellement riche que je prépare mes nouveaux guidages en pratiquant tous types de pêche, mais aussi en explorant de sublimes paysages en me promenant dans la DEHESA — un biotope artificiel modelé par l'homme qui s'étend sur une grande partie de l'Espagne et du Portugal.

## Quel est ton rêve en tant que pêcheur ?

Actuellement, je suis en train de le vivre et j'espère que je ne me réveillerai jamais.

---

*Retrouvez l'entretien original sur [peche.com](https://www.peche.com/article/42506/cedric-gandini-s-epanouir-dans-un-metier-passion-et-transmettre)*
      `,
      en: `
# Cédric Gandini: "Thriving in a job I love, and passing it on"

*Interview originally published on [peche.com](https://www.peche.com/article/42506/cedric-gandini-s-epanouir-dans-un-metier-passion-et-transmettre)*

Cédric Gandini is a qualified fishing guide based in the Extremadura region of Spain. He takes his clients onto the great Spanish lakes from the bank, in a float tube or by boat.

## Hello Cédric, could you introduce yourself?

My name is Cédric Gandini, also known as Dini Fishing, and I grew up in the Tarn, in south-west France. After a few professional stops in the Creuse and in the Auvergne, I took the BPJEPS fishing guide qualification in 2016, in the Aveyron. My passion for nature, and more particularly for recreational fishing, led me very recently to set up guiding services in Spain, in the Extremadura region.

## Why did you become a fishing guide?

To thrive in a job I am passionate about. In 2016, wanting to get involved in the fishing world of my home department, I trained in running fishing activities for many different audiences. A year rich in encounters, and in moments of sharing, confirmed my idea of changing career. A simple wish: to pass on the joy I feel at the water's edge.

## What kind of guiding do you offer?

Since settling in Spain I have offered tailor-made fishing trips. During these stays I act as a guide so that anyone can discover the various reservoirs of Extremadura at their best, along with its wild nature, the fishing of the moment, good local food and of course the hospitality of this very welcoming country.

The range of options is fairly broad — accommodation very close to magnificent reservoirs lets me run fishing from the bank, in a float tube and by boat. All that is left for you to do is put together the menu for your holiday.

## What does being a fishing guide mean to you?

Being a guide, as the word suggests, means for me being someone who listens and who does everything possible to let people feel, and to pass on, the passion that drives him.

## Do you fish while you are guiding?

No, never while guiding, unless the people I am guiding choose it. A guiding day is still a day that has to be organised and that should enrich the person being guided. It is work I love, but it is also very demanding work.

## What do you do when you are not guiding?

My free time is always spent close to the water or out in nature. I am lucky enough to live in a small paradise where I can live my passion with few limits. Extremadura is so rich that I prepare my new guided trips by practising every type of fishing, but also by exploring sublime landscapes, walking in the DEHESA — a man-shaped habitat that stretches across a large part of Spain and Portugal.

## What is your dream as an angler?

Right now I am living it, and I hope I never wake up.

---

*Read the original interview on [peche.com](https://www.peche.com/article/42506/cedric-gandini-s-epanouir-dans-un-metier-passion-et-transmettre)*
      `,
      es: `
# Cédric Gandini: «Realizarse en un oficio de pasión y transmitir»

*Entrevista publicada originalmente en [peche.com](https://www.peche.com/article/42506/cedric-gandini-s-epanouir-dans-un-metier-passion-et-transmettre)*

Cédric Gandini es monitor y guía de pesca en España, en la región de Extremadura. Ofrece a sus clientes pescar en los grandes embalses españoles desde la orilla, en float tube o en embarcación.

## Hola Cédric, ¿puedes presentarte?

Me llamo Cédric Gandini (alias Dini Fishing) y crecí en el departamento del Tarn, en el suroeste de Francia. Tras algunas etapas profesionales en la Creuse y en Auvernia, cursé en 2016 la formación BPJEPS de monitor y guía de pesca, en el Aveyron. Mi pasión por la naturaleza, y muy especialmente por la pesca recreativa, me llevó hace muy poco a montar servicios de guía en España, en la región de Extremadura.

## ¿Por qué te hiciste guía de pesca?

Para realizarme en un oficio de pasión. En 2016, con ganas de implicarme en el mundo de la pesca de mi departamento, quise formarme en la animación de actividades de pesca con públicos muy distintos. Un año rico en encuentros, pero también en momentos compartidos, me confirmó en mi idea de cambiar de rumbo. Un deseo sencillo: transmitir mi alegría a la orilla del agua.

## ¿Qué tipo de servicios de guía ofreces?

Desde que me instalé en España ofrezco la organización de estancias de pesca a la carta. Durante esas estancias pongo mis servicios de guía para que todo el mundo descubra de la mejor manera los distintos embalses de Extremadura, además de su naturaleza salvaje, la pesca del momento, la buena comida local y, por supuesto, la hospitalidad de este país tan acogedor.

La oferta es bastante diversa: el alojamiento, muy cerca de embalses magníficos, me permite practicar la pesca desde la orilla, en float tube y en embarcación. Solo te queda componer el menú de tus vacaciones.

## ¿Qué significa para ti ser guía de pesca?

Ser guía, como indica la propia palabra, significa para mí ser una persona que escucha y que pone todo de su parte para hacer sentir y transmitir la pasión que le mueve.

## ¿Pescas cuando estás guiando?

No, nunca durante mis guías, salvo que sea la decisión de la persona o personas guiadas. Una jornada de guía sigue siendo una jornada que se organiza y que debe enriquecer a la persona guiada. Es un trabajo de pasión, pero también un trabajo muy absorbente.

## ¿Qué haces cuando no estás guiando?

Mi tiempo libre transcurre siempre cerca del agua o en plena naturaleza. Tengo la suerte de vivir en un pequeño paraíso donde puedo vivir mi pasión casi sin límites. Extremadura es tan rica que preparo mis nuevas salidas practicando todo tipo de pesca, pero también explorando paisajes sublimes paseando por la DEHESA, un biotopo modelado por el hombre que se extiende por buena parte de España y Portugal.

## ¿Cuál es tu sueño como pescador?

Ahora mismo lo estoy viviendo, y espero no despertar nunca.

---

*Puedes leer la entrevista original en [peche.com](https://www.peche.com/article/42506/cedric-gandini-s-epanouir-dans-un-metier-passion-et-transmettre)*
      `,
    },
  },
  {
    id: '5',
    slug: 'peche-brochet-sandre-automne-extremadura',
    title: {
      fr: 'Pêcher le brochet et le sandre en automne en Extremadura',
      en: 'Autumn pike and zander fishing in Extremadura',
      es: 'Pescar lucio y lucioperca en otoño en Extremadura',
    },
    excerpt: {
      fr: "L'automne est l'un des plus beaux moments de l'année sur les barrages d'Extremadura. Eaux qui se rafraîchissent, lacs déserts, carnassiers actifs : voici comment aborder la saison.",
      en: 'Autumn is one of the finest moments of the year on the reservoirs of Extremadura. Cooling water, empty lakes, active predators: here is how to approach the season.',
      es: 'El otoño es uno de los momentos más bonitos del año en los embalses de Extremadura. Aguas que se refrescan, embalses vacíos, depredadores activos: así abordamos la temporada.',
    },
    date: '2026-11-17',
    image: '/blog/article-automne-carnassiers.jpg',
    content: {
      fr: `
# Pêcher le brochet et le sandre en automne en Extremadura

Quand les premières fraîcheurs arrivent sur l'Extremadura, quelque chose change sur les grands barrages. L'eau perd quelques degrés, la lumière devient plus rasante, et les berges se vident. C'est, pour beaucoup de pêcheurs qui viennent ici, la plus belle période de l'année pour chercher le brochet et le sandre.

Voici ce qu'il faut savoir pour aborder cette saison, et comment nous l'abordons en guidage.

## Pourquoi l'automne change tout

En été, la chaleur écrase la région et impose un rythme : on pêche tôt le matin, on s'abrite en milieu de journée, on repart le soir. L'automne desserre cette contrainte. Les journées restent douces, souvent entre quinze et vingt-deux degrés, et il devient possible de pêcher confortablement du lever au coucher du soleil.

Pour le pêcheur, cela signifie surtout une chose : davantage d'heures utiles sur l'eau, sur des lacs où l'on ne croise presque personne.

## Le brochet, chasseur à l'affût

Le brochet d'Extremadura est un chasseur à l'affût, expert en embuscades. Il se poste dans les herbiers, les zones ombragées, et surtout dans les transitions entre zones profondes et zones peu profondes. Ces cassures sont des couloirs de chasse naturels, et c'est là qu'il faut concentrer ses efforts.

À l'automne, les herbiers commencent à se clairsemer et les postes deviennent plus lisibles. Les arbres noyés, les pointes rocheuses et les entrées de criques reprennent toute leur importance.

Ce qui fonctionne bien sur nos eaux à cette période :

- Le streamer, pour une approche posée le long des bordures
- Le leurre souple en linéaire lent, sur les cassures
- Le leurre à palette, quand l'eau est teintée ou le ciel couvert
- Le leurre de surface, encore efficace lors des belles journées douces

Il n'y a pas de recette unique. Le brochet se pêche toute l'année en Extremadura, et c'est souvent l'observation du jour qui dicte la technique, plus que le calendrier.

## Le sandre, régulier et accessible

Le sandre a une réputation de poisson difficile, capricieux, réservé aux pêcheurs de grands fonds. Sur nos barrages, la réalité est plus simple.

Le sandre d'Extremadura chasse à des créneaux alimentaires très réguliers tout au long de la journée. Pas besoin de se limiter à l'aube et au crépuscule : les fenêtres d'activité reviennent régulièrement, et il suffit souvent d'être au bon endroit au bon moment.

Autre particularité locale, et elle compte beaucoup : il chasse ici à des profondeurs peu importantes. C'est une excellente nouvelle pour le poisson, car cela permet des relâches en parfaite santé, sans les dommages liés aux remontées brutales. Nous pratiquons le no-kill intégral, et cette configuration nous permet de préserver réellement la ressource.

Côté technique, le leurre souple reste la base, complété par le leurre dur quand il faut couvrir du terrain ou provoquer une réaction.

## Comment nous organisons les sessions d'automne

La journée type se construit autour de l'eau, pas autour d'un planning. On commence souvent par les zones peu profondes dans la fraîcheur du matin, puis on suit l'activité au fil des heures, en alternant les postes et les techniques.

Le premier jour est généralement consacré à la découverte des zones clés. Les barrages d'Extremadura sont vastes, et chaque sortie apprend quelque chose. Ne vous découragez pas si les premières heures sont calmes : c'est le temps nécessaire pour comprendre le plan d'eau du moment.

## Venir avec votre propre matériel

C'est ce qui nous distingue de la plupart des guides de la région. Vous pouvez venir avec votre propre bateau et le mettre à l'eau directement sur nos spots, avec votre float tube pour accéder à des zones inaccessibles autrement, ou simplement pêcher du bord : de nombreux postes sont accessibles depuis la rive.

Vos cannes, vos leurres, vos habitudes. Le guide s'adapte à votre façon de pêcher, pas l'inverse.

## Ce qu'il faut prévoir

L'Extremadura reste ensoleillée à l'automne, mais les matins sur l'eau peuvent être frais. Le mieux est de s'habiller par couches : un sous-vêtement technique, une polaire légère, un coupe-vent imperméable. Des lunettes polarisantes sont indispensables, autant pour le confort que pour lire l'eau.

Côté administratif, la pêche nécessite une licence valide pour la communauté autonome d'Extremadura. Nous nous occupons de ces formalités pour vous.

## Envie de venir cet automne ?

Les barrages d'Extremadura à cette période, ce sont des paysages ouverts, une lumière magnifique et des lacs que vous aurez presque pour vous. Si vous souhaitez organiser un séjour, écrivez-nous ou contactez-nous directement sur WhatsApp : nous construirons le programme selon vos espèces cibles, votre niveau et vos envies.
      `,
      en: `
# Autumn pike and zander fishing in Extremadura

When the first cool air arrives over Extremadura, something shifts on the big reservoirs. The water loses a few degrees, the light grows lower and longer, and the banks empty out. For many of the anglers who come here, this is the finest time of year to go looking for pike and zander.

Here is what you need to know about the season, and how we approach it when guiding.

## Why autumn changes everything

In summer the heat presses down on the region and sets the rhythm: you fish early, take shelter in the middle of the day, and head back out in the evening. Autumn loosens that constraint. The days stay mild, often between fifteen and twenty-two degrees, and it becomes possible to fish comfortably from sunrise to sunset.

For the angler that means one thing above all: more useful hours on the water, on lakes where you will barely meet another soul.

## The pike, an ambush hunter

The pike of Extremadura is an ambush hunter, an expert in the set-up. It holds in the weed beds, in shaded water, and above all in the transitions between deep and shallow ground. These drop-offs are natural hunting corridors, and that is where your effort belongs.

In autumn the weed starts to thin out and the lies become easier to read. Drowned timber, rocky points and the mouths of coves take on their full importance again.

What works well on our water at this time of year:

- The streamer, for a measured approach along the margins
- Soft plastics on a slow straight retrieve, over the drop-offs
- Bladed lures, when the water is coloured or the sky overcast
- Topwater lures, still effective on the fine mild days

There is no single recipe. Pike are caught all year round in Extremadura, and it is usually what you observe on the day, rather than the calendar, that dictates the technique.

## The zander, steady and within reach

Zander have a reputation as a difficult, moody fish, reserved for anglers who work the deep water. On our reservoirs the reality is simpler.

The zander of Extremadura feed in very regular windows right through the day. There is no need to restrict yourself to dawn and dusk: the periods of activity come round repeatedly, and it is often enough to be in the right place at the right moment.

There is another local trait, and it matters a great deal: here they hunt in shallow water. That is excellent news for the fish, because it allows releases in perfect health, without the damage that comes with being brought up abruptly from depth. We practise strict catch and release, and this setup lets us genuinely protect the resource.

On technique, soft plastics remain the foundation, backed up by hard lures when you need to cover ground or provoke a reaction.

## How we run the autumn sessions

A typical day is built around the water, not around a schedule. We often start in the shallows in the cool of the morning, then follow the activity through the hours, alternating between spots and techniques.

The first day is generally given over to discovering the key areas. The reservoirs of Extremadura are vast, and every outing teaches you something. Do not be discouraged if the opening hours are quiet: that is the time it takes to understand the water as it is that week.

## Bringing your own gear

This is what sets us apart from most guides in the region. You can come with your own boat and launch it straight onto our spots, with your float tube to reach water you could not otherwise get to, or simply fish from the bank: plenty of good lies are accessible from the shore.

Your rods, your lures, your habits. The guide adapts to the way you fish, not the other way round.

## What to bring

Extremadura stays sunny in autumn, but mornings on the water can be cold. The best approach is to dress in layers: a technical base layer, a light fleece, a waterproof windbreaker. Polarised glasses are essential, as much for comfort as for reading the water.

On the paperwork side, fishing requires a valid licence for the autonomous community of Extremadura. We take care of those formalities for you.

## Fancy coming out this autumn?

The reservoirs of Extremadura at this time of year mean open landscapes, magnificent light and lakes you will have almost to yourself. If you would like to organise a stay, write to us or message us directly on WhatsApp: we will build the programme around your target species, your level and what you want from the trip.
      `,
      es: `
# Pescar lucio y lucioperca en otoño en Extremadura

Cuando llegan los primeros frescores a Extremadura, algo cambia en los grandes embalses. El agua pierde unos grados, la luz se vuelve más rasante y las orillas se vacían. Para muchos de los pescadores que vienen aquí, es la época más bonita del año para buscar el lucio y la lucioperca.

Esto es lo que conviene saber para abordar la temporada, y cómo la abordamos nosotros en los guiados.

## Por qué el otoño lo cambia todo

En verano el calor aplasta la región e impone un ritmo: se pesca temprano por la mañana, uno se resguarda a mediodía y vuelve a salir por la tarde. El otoño afloja esa limitación. Los días siguen siendo suaves, a menudo entre quince y veintidós grados, y resulta posible pescar cómodamente desde el amanecer hasta el ocaso.

Para el pescador eso significa sobre todo una cosa: más horas útiles en el agua, en embalses donde casi no te cruzas con nadie.

## El lucio, cazador al acecho

El lucio de Extremadura es un cazador al acecho, experto en emboscadas. Se aposta en la vegetación, en las zonas sombreadas y, sobre todo, en las transiciones entre zonas profundas y someras. Esos quiebros son pasillos de caza naturales, y ahí es donde hay que concentrar el esfuerzo.

En otoño la vegetación empieza a aclararse y los puestos se leen mejor. Los árboles sumergidos, las puntas rocosas y las entradas de las calas recuperan toda su importancia.

Lo que funciona bien en nuestras aguas en esta época:

- El streamer, para una aproximación pausada a lo largo de las orillas
- El vinilo en recogida lineal lenta, sobre los quiebros
- El señuelo de paleta, cuando el agua está teñida o el cielo cubierto
- El señuelo de superficie, todavía eficaz en los días suaves y despejados

No hay una receta única. El lucio se pesca todo el año en Extremadura, y suele ser la observación del día, más que el calendario, lo que dicta la técnica.

## La lucioperca, regular y accesible

La lucioperca tiene fama de pez difícil, caprichoso, reservado a los pescadores de grandes profundidades. En nuestros embalses la realidad es más sencilla.

La lucioperca de Extremadura se alimenta en ventanas muy regulares a lo largo de todo el día. No hace falta limitarse al amanecer y al atardecer: los momentos de actividad vuelven con regularidad, y a menudo basta con estar en el sitio adecuado en el momento adecuado.

Hay otra particularidad local, y cuenta mucho: aquí caza a poca profundidad. Es una excelente noticia para el pez, porque permite sueltas en perfecto estado, sin los daños asociados a los ascensos bruscos. Practicamos la captura y suelta integral, y esta configuración nos permite preservar de verdad el recurso.

En cuanto a la técnica, el vinilo sigue siendo la base, completado con el señuelo duro cuando hay que cubrir terreno o provocar una reacción.

## Cómo organizamos las jornadas de otoño

La jornada tipo se construye en torno al agua, no en torno a un horario. Solemos empezar por las zonas someras con el fresco de la mañana y después seguimos la actividad a lo largo de las horas, alternando puestos y técnicas.

El primer día se dedica por lo general a descubrir las zonas clave. Los embalses de Extremadura son enormes y cada salida enseña algo. No te desanimes si las primeras horas son tranquilas: es el tiempo necesario para entender la masa de agua en ese momento.

## Venir con tu propio material

Es lo que nos distingue de la mayoría de guías de la región. Puedes venir con tu propia embarcación y botarla directamente en nuestros spots, con tu float tube para acceder a zonas imposibles de otro modo, o sencillamente pescar desde la orilla: muchos puestos son accesibles desde tierra.

Tus cañas, tus señuelos, tus costumbres. El guía se adapta a tu forma de pescar, y no al revés.

## Qué conviene preparar

Extremadura sigue siendo soleada en otoño, pero las mañanas en el agua pueden ser frescas. Lo mejor es vestirse por capas: una prenda técnica interior, un forro polar ligero y un cortavientos impermeable. Las gafas polarizadas son indispensables, tanto por comodidad como para leer el agua.

En lo administrativo, la pesca requiere una licencia válida para la comunidad autónoma de Extremadura. Nosotros nos encargamos de esos trámites por ti.

## ¿Te apetece venir este otoño?

Los embalses de Extremadura en esta época son paisajes abiertos, una luz magnífica y aguas que tendrás casi para ti solo. Si quieres organizar una estancia, escríbenos o contáctanos directamente por WhatsApp: construiremos el programa según tus especies objetivo, tu nivel y tus ganas.
      `,
    },
  },
]
