import { motion } from 'framer-motion'
import { ArrowRight, HardHat } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#F97316] py-14">
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <svg className="h-full w-full" preserveAspectRatio="none">
          <pattern id="cta-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M60 0H0V60" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>

      <Container className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-start gap-4"
        >
          <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-white sm:flex">
            <HardHat size={26} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Vous avez un projet en tête ?
            </h3>
            <p className="mt-2 max-w-xl text-sm text-white/90 sm:text-base">
              Contactez-nous dès aujourd&apos;hui pour obtenir un devis personnalisé gratuit et
              bénéficiez de notre expertise.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="shrink-0"
        >
          <Button href="#contact" variant="white">
            Demander un devis <ArrowRight size={16} />
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}
