import { motion } from 'framer-motion'
import type { Service } from '@/types'

interface ServiceCardProps {
  service: Service
  index: number
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      whileHover={{ y: -6 }}
      className="group rounded-2xl border border-[#E5E7EB] bg-white p-7 shadow-[0_1px_2px_rgba(17,24,39,0.04)] transition-all duration-300 hover:border-transparent hover:shadow-[0_20px_40px_-16px_rgba(17,24,39,0.16)]"
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#FFF4EC] text-[#F97316] transition-colors duration-300 group-hover:bg-[#F97316] group-hover:text-white">
        <Icon size={26} strokeWidth={1.8} />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-[#111827]">{service.title}</h3>
      <p className="text-sm leading-relaxed text-[#6B7280]">{service.description}</p>
    </motion.div>
  )
}
