import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { TestimonialCard } from '@/components/cards/TestimonialCard'
import { TESTIMONIALS } from '@/data/testimonials'

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)
    onSelect()
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  return (
    <section id="temoignages" className="bg-[#111827] py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Témoignages"
          title="Ce que nos clients disent de nous"
          description="La confiance de nos clients est notre meilleure référence."
          light
        />

        <div className="mt-14">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="-ml-3 flex">
              {TESTIMONIALS.map((testimonial) => (
                <div key={testimonial.id} className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_38%]">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-9 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Témoignage précédent"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-[#F97316] hover:text-[#F97316]"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => scrollTo(i)}
                  aria-label={`Aller au témoignage ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === selectedIndex ? 'w-6 bg-[#F97316]' : 'w-2 bg-white/25'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={scrollNext}
              aria-label="Témoignage suivant"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-[#F97316] hover:text-[#F97316]"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}
