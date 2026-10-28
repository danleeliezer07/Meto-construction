import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { SITE } from '@/constants/site'

export function WhatsAppButton() {
  return (
    <motion.a
      href={SITE.whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Discuter sur WhatsApp"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.4 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.6)]"
    >
      <MessageCircle size={26} fill="white" className="text-[#25D366]" />
    </motion.a>
  )
}
