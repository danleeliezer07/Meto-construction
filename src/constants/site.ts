import type { NavLink } from '@/types'

export const NAV_LINKS: NavLink[] = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'À propos', href: '#a-propos' },
  { label: 'Services', href: '#services' },
  { label: 'Réalisations', href: '#realisations' },
  { label: 'Pourquoi nous', href: '#pourquoi-nous' },
  { label: 'Témoignages', href: '#temoignages' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export const SITE = {
  name: 'METO Construction',
  slogan: 'Vous servir c\u2019est notre plaisir',
  activity: 'Construction \u2022 G\u00e9nie Civil \u2022 R\u00e9novation \u2022 Am\u00e9nagement \u2022 Gestion de chantier',
  phone: '+225 07 09 43 52 62',
  phoneHref: 'tel:+2250709435262',
  email: 'metoconstruction7@gmail.com',
  addressLine1: 'Cocody \u2013 Angr\u00e9 \u2013 Extension',
  addressLine2: 'Abidjan \u2013 C\u00f4te d\u2019Ivoire',
  whatsappHref: 'https://wa.me/2250709435262',
  mapEmbedSrc:
    'https://www.google.com/maps?q=Cocody+Angr%C3%A9+Extension+Abidjan+C%C3%B4te+d%27Ivoire&output=embed',
  hours: [
    { day: 'Lundi \u2013 Vendredi', time: '08h00 \u2013 18h00' },
    { day: 'Samedi', time: '08h00 \u2013 13h00' },
    { day: 'Dimanche', time: 'Ferm\u00e9' },
  ],
  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
    whatsapp: 'https://wa.me/2250709435262',
  },
}
