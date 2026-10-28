import { AnimatePresence, motion } from 'framer-motion'
import { X, MapPin, Tag } from 'lucide-react'
import type { Project } from '@/types'

interface ProjectLightboxProps {
  project: Project | null
  onClose: () => void
}

export function ProjectLightbox({ project, onClose }: ProjectLightboxProps) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[#111827]/90 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative grid w-full max-w-4xl overflow-hidden rounded-2xl bg-white md:grid-cols-2"
          >
            <div className="aspect-[4/3] md:aspect-auto">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-8">
              <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-[#FFF4EC] px-3 py-1 text-xs font-semibold text-[#F97316]">
                <Tag size={12} /> {project.category}
              </span>
              <h3 className="text-2xl font-bold text-[#111827]">{project.title}</h3>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-[#6B7280]">
                <MapPin size={14} /> {project.location}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#6B7280]">
                {project.description}
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Fermer"
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#111827] shadow-md transition hover:bg-white"
            >
              <X size={18} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
