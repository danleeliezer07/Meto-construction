import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { REASONS } from '@/data/reasons'

export function WhyChooseUs() {
  return (
    <section id="pourquoi-nous" className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Pourquoi nous choisir"
          title="Un partenaire de confiance pour vos projets"
          description="Notre exigence de qualité et notre rigueur font la différence, du premier plan jusqu'à la remise des clés."
        />

        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-4">
          {REASONS.map((reason, index) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
              className="flex flex-col items-center gap-3 rounded-2xl border border-[#E5E7EB] bg-white px-4 py-8 text-center transition-colors hover:border-[#F97316]/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF4EC] text-[#F97316]">
                <reason.icon size={22} strokeWidth={1.8} />
              </div>
              <p className="text-sm font-medium text-[#111827]">{reason.title}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
