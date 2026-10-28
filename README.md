# METO Construction — Site vitrine

Site vitrine premium pour **METO Construction** (Construction • Génie Civil •
R�novation • Aménagement • Gestion de chantier), Abidjan, Côte d'Ivoire.

## Stack technique

- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4 (thème custom via `@theme` dans `src/index.css`)
- React Router DOM
- Framer Motion (animations)
- Lucide React (icônes)
- React Hook Form (formulaire de contact)
- Embla Carousel (témoignages)

## Démarrer le projet

```bash
npm install
npm run dev       # serveur de développement (http://localhost:5173)
npm run build     # build de production dans /dist
npm run preview   # prévisualiser le build de production
```

## Structure du projet

```
src/
├── components/
│   ├── layout/      Header, Footer
│   ├── ui/           Button, Container, SectionHeading
│   ├── cards/         ServiceCard, ProjectCard, ProjectLightbox, TestimonialCard
│   ├── forms/         ContactForm
│   └── common/        Logo, WhatsAppButton, AnimatedCounter, SocialIcons
├── sections/          Hero, Stats, About, Services, WhyChooseUs, Projects,
│                      Process, Testimonials, FAQ, CTA, Contact
├── pages/             Home, NotFound
├── data/              services.ts, projects.ts, testimonials.ts, faq.ts,
│                      process.ts, reasons.ts, stats.ts
├── constants/         site.ts (coordonnées, réseaux, liens de navigation)
├── types/             types partagés
└── hooks/             useScrolled, useActiveSection
```

## Logo

Le vrai logo de METO Construction est déjà intégré dans
`public/images/logo/meto-logo.png`. Son identité visuelle (typographie noire,
symbole de toit orange) n'a pas été modifiée. Pour le remplacer par une
version haute résolution ou à fond transparent, il suffit de remplacer ce
fichier en conservant le même nom.

## Images

Les visuels utilisés (hero, section À propos, réalisations, témoignages) sont
des photos libres de droits provenant de Pexels (licence gratuite, usage
commercial autorisé, aucune attribution requise), sélectionnées sur le thème
de la construction en Afrique. Elles sont prévues comme **placeholders** :
remplacez les URLs dans `src/data/projects.ts`, `src/sections/Hero.tsx` et
`src/sections/About.tsx` par vos propres photos de chantiers dès qu'elles
seront disponibles (déposez-les dans `public/images/...` puis mettez à jour
les chemins).

## Contenu à personnaliser avant mise en ligne

- `src/constants/site.ts` — coordonnées, liens réseaux sociaux, lien WhatsApp,
  intégration Google Maps (remplacer par l'adresse exacte une fois
  géolocalisée précisément).
- `src/components/forms/ContactForm.tsx` — brancher l'envoi du formulaire
  (API, service d'e-mail transactionnel, CRM, etc.). Actuellement le
  formulaire simule l'envoi côté client.
- `src/data/projects.ts` — remplacer par vos réalisations réelles au fur et à
  mesure des livraisons de chantier.
- `src/data/testimonials.ts` — remplacer par de vrais témoignages clients.

## Performance & accessibilité

- Images chargées en `lazy` (hors hero).
- Navigation clavier et focus visibles sur les éléments interactifs.
- `prefers-reduced-motion` respecté (animations désactivées si demandé par
  l'utilisateur).
- Structure sémantique (`header`, `nav`, `section`, `footer`) et attributs
  `alt` sur les images.
