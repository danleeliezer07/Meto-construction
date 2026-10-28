import {
  Award,
  Clock,
  Gem,
  Users,
  Headset,
  ShieldCheck,
  BadgeCheck,
  LifeBuoy,
} from 'lucide-react'
import type { Reason } from '@/types'

export const REASONS: Reason[] = [
  { id: 'expertise', icon: Award, title: 'Expertise reconnue' },
  { id: 'delais', icon: Clock, title: 'Respect des d\u00e9lais' },
  { id: 'materiaux', icon: Gem, title: 'Mat\u00e9riaux de qualit\u00e9' },
  { id: 'equipe', icon: Users, title: '\u00c9quipe qualifi\u00e9e' },
  { id: 'accompagnement', icon: Headset, title: 'Accompagnement personnalis\u00e9' },
  { id: 'securite', icon: ShieldCheck, title: 'S\u00e9curit\u00e9' },
  { id: 'garantie', icon: BadgeCheck, title: 'Garantie de qualit\u00e9' },
  { id: 'sav', icon: LifeBuoy, title: 'Service apr\u00e8s-vente' },
]
