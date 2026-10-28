import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Clock, Users, ThumbsUp } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

const BADGES = [
  { icon: ShieldCheck, label: 'Construction de qualité' },
  { icon: Clock, label: 'Respect des délais' },
  { icon: Users, label: 'Équipe qualifiée' },
  { icon: ThumbsUp, label: 'Satisfaction client' },
]

export function Hero() {
  return (
    <section id="accueil" className="relative flex min-h-screen items-end overflow-hidden bg-[#111827]">
      <motion.div
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <img
          src="https://images.pexels.com/photos/1402923/pexels-photo-1402923.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Chantier de construction au coucher du soleil"
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/70 to-[#111827]/30" />
      <div className="absolute inset-0 bg-[#111827]/25" />

      <Container className="relative z-10 pb-24 pt-40 sm:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#F97316]"
        >
          Bienvenue chez METO Construction
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-3xl text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl"
        >
          Construisons vos projets avec rigueur et excellence.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
        >
          METO Construction accompagne particuliers, entreprises et institutions dans leurs
          projets de construction, rénovation, génie civil et aménagement avec
          professionnalisme, innovation et respect des délais.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <Button href="#contact" variant="primary">
            Demander un devis <ArrowRight size={16} />
          </Button>
          <Button href="#realisations" variant="outline-light">
            Voir nos réalisations
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-14 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-white/15 pt-8 sm:flex sm:flex-wrap sm:items-center sm:gap-10"
        >
          {BADGES.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5">
              <Icon size={18} className="shrink-0 text-[#F97316]" />
              <span className="text-sm font-medium text-white/90">{label}</span>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
