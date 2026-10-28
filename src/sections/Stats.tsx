import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { AnimatedCounter } from '@/components/common/AnimatedCounter'
import { STATS } from '@/data/stats'

export function Stats() {
  return (
    <section className="border-b border-[#E5E7EB] bg-[#F3F4F6] py-14">
      <Container>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="text-center"
            >
              <p className="text-3xl font-bold text-[#111827] sm:text-4xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1.5 text-sm text-[#6B7280]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
