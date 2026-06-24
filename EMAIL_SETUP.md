# Configuration EmailJS pour Dini Fishing

## 1. Créer un compte EmailJS

1. Rendez-vous sur [emailjs.com](https://www.emailjs.com/)
2. Cliquez sur **Sign Up** et créez un compte gratuit
3. Connectez-vous à votre tableau de bord

## 2. Créer un Service Email

1. Dans le menu gauche, cliquez sur **Email Services**
2. Cliquez sur **Add New Service**
3. Sélectionnez **Outlook / Hotmail** (pour dini.extremadura@hotmail.com)
4. Connectez votre compte Hotmail en suivant les instructions
5. Notez le **Service ID** (ex: `service_abc123`)

## 3. Créer un Template Email

1. Dans le menu gauche, cliquez sur **Email Templates**
2. Cliquez sur **Create New Template**
3. Configurez le template avec ces valeurs :

**Subject (Objet) :**
```
Nouveau contact Dini Fishing — {{subject}}
```

**Body (Corps du message) :**
```
Nouveau message reçu sur le site Dini Fishing :

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NOM : {{from_name}}
EMAIL : {{from_email}}
TÉLÉPHONE : {{phone}}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

OBJET : {{subject}}
TYPE DE SÉJOUR : {{stay_type}}
NOMBRE DE PERSONNES : {{persons}}
PÉRIODE SOUHAITÉE : {{period}}

MESSAGE :
{{message}}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Répondre à : {{from_email}}
```

4. Dans **To Email**, entrez : `dini.extremadura@hotmail.com`
5. Sauvegardez et notez le **Template ID** (ex: `template_xyz789`)

## 4. Récupérer la clé publique

1. Dans le menu gauche, cliquez sur **Account** > **General**
2. Copiez votre **Public Key** (ex: `user_AbCdEfGhIjKlMnOp`)

## 5. Configurer le fichier .env.local

Ouvrez le fichier `.env.local` à la racine du projet et renseignez les 3 clés :

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=user_AbCdEfGhIjKlMnOp
```

## 6. Tester l'envoi

1. Lancez le site : `npm run dev`
2. Allez sur `/fr/contact`
3. Remplissez le formulaire et envoyez
4. Vérifiez la réception dans dini.extremadura@hotmail.com

## Limites du plan gratuit EmailJS

- 200 emails/mois gratuits
- Pour plus, upgrader sur emailjs.com (plans à partir de ~$15/mois)
