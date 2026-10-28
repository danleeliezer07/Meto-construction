import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { ProjectCard } from '@/components/cards/ProjectCard'
import { ProjectLightbox } from '@/components/cards/ProjectLightbox'
import { PROJECTS } from '@/data/projects'
import type { Project } from '@/types'

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <section id="realisations" className="bg-[#F3F4F6] py-24 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Nos réalisations"
            title="Découvrez quelques-uns de nos projets"
            align="left"
            description="Un aperçu de nos chantiers menés à bien à Abidjan et dans ses environs — d'autres photos suivront au fil de nos livraisons."
          />
          <Button href="#contact" variant="outline" className="shrink-0">
            Voir tous les projets
          </Button>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} onOpen={setSelected} />
          ))}
        </div>
      </Container>

      <ProjectLightbox project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
