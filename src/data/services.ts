import {
  Building2,
  HardHat,
  Hammer,
  PaintRoller,
  ClipboardList,
  Ruler,
  Wrench,
} from 'lucide-react'
import type { Service } from '@/types'

export const SERVICES: Service[] = [
  {
    id: 'construction',
    icon: Building2,
    title: 'Construction',
    description:
      'Construction de b\u00e2timents r\u00e9sidentiels, commerciaux et industriels, de la fondation \u00e0 la livraison.',
  },
  {
    id: 'genie-civil',
    icon: HardHat,
    title: 'G\u00e9nie Civil',
    description:
      'Travaux de g\u00e9nie civil et d\u2019infrastructures durables, con\u00e7us pour r\u00e9sister \u00e0 l\u2019\u00e9preuve du temps.',
  },
  {
    id: 'maconnerie',
    icon: Wrench,
    title: 'Ma\u00e7onnerie',
    description:
      'Travaux de ma\u00e7onnerie g\u00e9n\u00e9rale et de gros \u0153uvre, ex\u00e9cut\u00e9s avec pr\u00e9cision par des \u00e9quipes qualifi\u00e9es.',
  },
  {
    id: 'renovation',
    icon: Hammer,
    title: 'R\u00e9novation',
    description:
      'R\u00e9novation et restructuration de b\u00e2timents pour redonner vie et valeur \u00e0 vos espaces existants.',
  },
  {
    id: 'finitions',
    icon: PaintRoller,
    title: 'Finitions',
    description:
      'Finitions int\u00e9rieures et ext\u00e9rieures haut de gamme, pour un rendu soign\u00e9 jusque dans les d\u00e9tails.',
  },
  {
    id: 'gestion-chantier',
    icon: ClipboardList,
    title: 'Gestion de chantier',
    description:
      'Suivi, coordination et gestion professionnelle de vos chantiers, du planning au budget.',
  },
  {
    id: 'etudes-conseils',
    icon: Ruler,
    title: '\u00c9tudes & Conseils',
    description:
      'Accompagnement technique en amont de vos projets : \u00e9tudes, faisabilit\u00e9 et conseils d\u2019experts.',
  },
]
