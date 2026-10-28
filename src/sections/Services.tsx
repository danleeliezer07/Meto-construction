import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ServiceCard } from '@/components/cards/ServiceCard'
import { SERVICES } from '@/data/services'

export function Services() {
  return (
    <section id="services" className="bg-[#F3F4F6] py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Nos services"
          title="Des solutions complètes pour tous vos projets"
          description="De l'étude à la livraison, METO Construction vous accompagne à chaque étape avec le même niveau d'exigence."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </Container>
    </section>
  )
}
