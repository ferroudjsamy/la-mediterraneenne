# La Méditerranéenne

Site vitrine d'une boucherie halal, épicerie méditerranéenne et pâtisserie à Longueuil (Québec), réalisé avec Angular à partir d'une maquette mobile et desktop.

**Site en ligne : [la-mediterraneenne.netlify.app](https://la-mediterraneenne.netlify.app)**

<table>
  <tr>
    <th>Desktop</th>
    <th>Mobile</th>
  </tr>
  <tr>
    <td valign="top"><img src="docs/apercu-desktop.webp" alt="Aperçu du site sur ordinateur" width="600"></td>
    <td valign="top"><img src="docs/apercu-mobile.webp" alt="Aperçu du site sur mobile" width="220"></td>
  </tr>
</table>

## Technologies

- **Angular 20** : composants standalone, signals, router avec lazy loading
- **TypeScript**
- **CSS** : mobile-first, variables CSS, Grid et Flexbox, nommage BEM
- **Netlify** : hébergement et déploiement continu

## Fonctionnalités

- Page d'accueil complète : header avec menu burger sur mobile, hero, rayons, produits incontournables, avis Google, infos pratiques et footer
- Pages **À propos** (histoire du magasin, engagements) et **Contact** (qui réutilise le composant des infos pratiques de l'accueil)
- Navigation entre les pages avec le router Angular : pages chargées à la demande (lazy loading), titre d'onglet propre à chaque page, page 404, retour en haut de page et défilement vers les ancres
- Mise en page responsive, pensée d'abord pour le mobile
- Badge **« Ouvert maintenant » / « Fermé »** calculé selon les horaires du magasin, à l'heure de Montréal (`America/Toronto`) peu importe où se trouve le visiteur, et mis à jour chaque minute
- Boutons d'appel direct (`tel:`) et d'itinéraire vers la fiche Google Maps
- Plan Google Maps intégré
- Images optimisées en WebP avec chargement différé (`loading="lazy"`)
- Attention à l'accessibilité : balises sémantiques, textes alternatifs, icônes décoratives masquées aux lecteurs d'écran, contrastes vérifiés

## Organisation du projet

```
src/app/
├── layout/      # éléments présents sur toutes les pages
│   ├── header/
│   └── footer/
├── pages/       # une page par route
│   ├── accueil/
│   ├── rayons/
│   ├── a-propos/
│   ├── contact/
│   └── page-introuvable/
└── sections/    # morceaux de pages, réutilisables
    ├── hero/
    ├── rayons/
    ├── incontournables/
    ├── avis/
    └── infos/
```

## Méthode de travail

- Une branche par fonctionnalité (`feature/hero`, `feature/routing`, ...), fusionnée dans `main` par pull request
- Commits au format [Conventional Commits](https://www.conventionalcommits.org/fr/) (`feat`, `fix`, `refactor`, `chore`, `docs`)
- Déploiement automatique sur Netlify à chaque fusion dans `main`, avec un aperçu en ligne pour chaque pull request

## Lancer le projet

Prérequis : Node.js 22 ou plus récent.

```bash
npm install
npm start
```

Le site est ensuite disponible sur `http://localhost:4200`.

Pour générer la version de production :

```bash
npm run build
```

## À venir

- Contenu de la page Nos rayons (boucherie, épicerie, pâtisseries)
- Remplacer la harissa par la rechta dans les incontournables
- Formulaire de contact
