import type { ProcessStep } from '@/types'

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 'consultation',
    title: 'Consultation',
    description:
      'Nous \u00e9coutons votre projet, vos besoins et vos contraintes pour cadrer les objectifs ensemble.',
  },
  {
    id: 'etude',
    title: '\u00c9tude',
    description:
      'Nos experts r\u00e9alisent les \u00e9tudes techniques, le chiffrage et la faisabilit\u00e9 du projet.',
  },
  {
    id: 'planification',
    title: 'Planification',
    description:
      'Nous \u00e9tablissons un planning d\u00e9taill\u00e9 : ressources, budget et jalons de livraison.',
  },
  {
    id: 'construction',
    title: 'Construction',
    description:
      'Ex\u00e9cution des travaux sur le chantier, avec un suivi rigoureux de la qualit\u00e9 et de la s\u00e9curit\u00e9.',
  },
  {
    id: 'livraison',
    title: 'Livraison',
    description:
      'R\u00e9ception des travaux avec vous et accompagnement apr\u00e8s livraison pour votre tranquillit\u00e9.',
  },
]
