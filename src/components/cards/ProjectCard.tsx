import { motion } from 'framer-motion'
import { MapPin, ArrowUpRight } from 'lucide-react'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
  index: number
  onOpen: (project: Project) => void
}

export function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  return (
    <motion.button
      type="button"
      onClick={() => onOpen(project)}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1 }}
      className="group relative block w-full overflow-hidden rounded-2xl bg-[#111827] text-left"
    >
      <div className="aspect-[4/5] w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

      <span className="absolute right-4 top-4 inline-flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white/90 text-[#111827] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <ArrowUpRight size={18} />
      </span>

      <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#111827]">
        {project.category}
      </span>

      <div className="absolute inset-x-0 bottom-0 p-5">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <p className="mt-1 flex items-center gap-1.5 text-xs text-white/75">
          <MapPin size={13} /> {project.location}
        </p>
      </div>
    </motion.button>
  )
}
