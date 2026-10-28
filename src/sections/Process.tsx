import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { PROCESS_STEPS } from '@/data/process'

export function Process() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Notre méthode"
          title="Un processus clair, du premier contact à la livraison"
          description="Chaque projet suit les mêmes étapes rigoureuses pour garantir qualité, transparence et respect des délais."
        />

        <div className="relative mt-16">
          <div className="absolute left-5 top-0 h-full w-px bg-[#E5E7EB] sm:left-1/2 sm:top-5 sm:h-px sm:w-full" />

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-5 sm:gap-4">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex gap-4 sm:flex-col sm:items-center sm:gap-0 sm:text-center"
              >
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F97316] text-sm font-bold text-white sm:mb-5">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#111827]">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#6B7280] sm:px-2">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
