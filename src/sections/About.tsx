import { motion } from 'framer-motion'
import { Target, Eye, Gem } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

const PILLARS = [
  {
    icon: Target,
    title: 'Notre mission',
    text: 'Construire avec qualité et livrer avec excellence.',
  },
  {
    icon: Eye,
    title: 'Notre vision',
    text: 'Être la référence en construction durable.',
  },
  {
    icon: Gem,
    title: 'Nos valeurs',
    text: 'Intégrité, qualité, innovation, respect.',
  },
]

export function About() {
  return (
    <section id="a-propos" className="py-24 sm:py-28">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl sm:aspect-[5/4] sm:max-w-none">
              <img
                src="https://images.pexels.com/photos/5298215/pexels-photo-5298215.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Équipe METO Construction sur un chantier"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-[#F97316] px-6 py-5 text-white shadow-[0_20px_40px_-16px_rgba(249,115,22,0.5)] sm:block">
              <p className="text-2xl font-bold">15+</p>
              <p className="text-xs text-white/90">ans d&apos;expérience</p>
            </div>
          </motion.div>

          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#F97316]">
              À propos de nous
            </p>
            <h2 className="text-3xl font-bold leading-tight text-[#111827] sm:text-4xl">
              METO Construction, bâtir aujourd&apos;hui le monde de demain.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#6B7280]">
              Spécialisés dans la construction, la rénovation et le génie civil, nous mettons
              notre expertise au service de vos projets les plus ambitieux.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#6B7280]">
              Notre engagement : offrir des réalisations durables, innovantes et conformes aux
              normes de qualité et de sécurité.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {PILLARS.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <pillar.icon size={22} className="mb-2 text-[#F97316]" strokeWidth={1.8} />
                  <p className="text-sm font-semibold text-[#111827]">{pillar.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-[#6B7280]">{pillar.text}</p>
                </motion.div>
              ))}
            </div>

            <Button href="#services" variant="primary" className="mt-9">
              En savoir plus
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
