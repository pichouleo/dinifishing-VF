# Dini Fishing

Site vitrine de Cédric Gandini, moniteur guide de pêche à Valdecaballeros, Extremadura (Espagne).
Séjours de pêche aux carnassiers, pêche à la mouche, et location de deux hébergements.

**Stack :** Next.js 14 (App Router), TypeScript, Tailwind CSS, next-intl (fr/en/es),
Brevo pour les emails, hébergé sur Netlify, domaine dinifishing.com.

## Règles techniques

- Toujours `next/image`. Jamais `<img>` ni `background-image` CSS pour une photo.
  Le hero porte `priority`. (Exception connue : la galerie, en masonry `columns`.)
- Aucun `<link rel="preload">` manuel d'image dans `layout.tsx`. `next/image` avec
  `priority` s'en charge et sert la bonne taille.
- Noms de fichiers images en minuscules. macOS est insensible à la casse, Netlify non :
  un `.JPG` référencé en `.jpg` passe en local et donne un 404 en production.
- Compresser toute image avant de l'ajouter : 2560 px de large maximum, moins de 300 Ko.
- `generateMetadata` dynamique sur chaque page, avec `alternates.canonical` et
  `alternates.languages` (hreflang fr/en/es). Pas de `export const metadata` statique.
- Tout texte d'interface dans `messages/fr.json`, `en.json`, `es.json`. Jamais en dur
  dans un composant. Un ajout doit exister dans les trois langues.
- `npm run build` avant chaque push. Netlify échoue sur la moindre erreur TypeScript.

## Contenu — validé par le client, ne pas contredire

Cédric a relu et corrigé ces points. Les retrouver dans un nouveau texte serait une régression.

- Ne jamais promettre restauration, repas inclus, ni transferts aéroport.
  Formulation admise : « pique-nique sur demande », « selon disponibilité ».
- **Sandre** : créneaux alimentaires très réguliers tout au long de la journée, chasse
  à faibles profondeurs, ce qui permet des relâches en parfaite santé.
  Ne pas écrire le cliché « grands fonds, eaux troubles, aube et crépuscule ».
- **Brochet** : chasseur à l'affût, herbiers et cassures. Ne pas parler d'« eau froide ».
- **Black bass** : ne pas écrire « black bass d'Extremadura ».
- Argument central du site : Dini Fishing accueille les clients avec leur propre bateau,
  leur float tube, ou en pêche du bord. Le guide s'adapte au pêcheur.
- No-kill intégral.
- Les tarifs ne sont jamais affichés : « Contactez-nous pour connaître les tarifs ».

## Blog

- Les articles sont dans `data/articles.ts`, rédigés en français uniquement, servis
  sur les trois locales.
- Le rendu Markdown de `app/[locale]/blog/[slug]/page.tsx` est volontairement limité :
  il gère `#`, `##`, `###`, les listes `-`, les liens `[texte](url)`, et le gras
  seulement sur un paragraphe entier. **Le gras en milieu de phrase n'est pas rendu**
  et affiche les astérisques telles quelles — ne pas en écrire.
- Le listing du blog est trié par date décroissante.
- Chaque article a son image dédiée dans `public/blog/`. Les photos de `public/galerie/`
  portent un filigrane d'appareil photo en bas à gauche : recadrer avant réutilisation.

## Email (formulaire de contact)

`app/api/contact/route.ts` envoie via l'API Brevo, clé dans `BREVO_API_KEY` (Netlify).

- Expéditeur : `contact@dinifishing.com`. Le domaine est authentifié dans Brevo
  (code TXT, DKIM 1, DKIM 2, DMARC). Ne pas changer l'expéditeur sans prévenir :
  Cédric reçoit sur Hotmail, et un expéditeur non authentifié repart directement en spam.
- Le formulaire appelle `/api/contact`, pas `/fr/api/contact`. Le matcher de
  `middleware.ts` exclut `api|` pour cette raison.
- Toute modification de cette route se teste sur une adresse Gmail **et** une adresse
  Hotmail avant d'être considérée comme bonne.

## SEO

- `app/sitemap.ts` et `app/robots.ts` sont générés côté code. Un nouvel article
  apparaît automatiquement dans le sitemap.
- Schema.org `LocalBusiness` dans `app/layout.tsx`.
- Après publication d'une nouvelle page, demander l'indexation dans Search Console.

## Contact client

Cédric Gandini — WhatsApp +33 6 68 17 87 43 — dini.extremadura@hotmail.com
NIF : Z0780287-V. Réseaux : Facebook et Instagram DINI.FISHING.
Slogan : « Nature. Passion. Bonne humeur. »
