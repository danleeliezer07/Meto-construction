import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ContactForm } from '@/components/forms/ContactForm'
import { SITE } from '@/constants/site'

export function Contact() {
  return (
    <section id="contact" className="bg-[#F3F4F6] py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Parlons de votre projet"
          description="Une question, un projet en tête ? Notre équipe vous répond rapidement."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-5 lg:gap-14">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-[#111827]">{SITE.name}</h3>

            <ul className="mt-6 space-y-5">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="mt-0.5 shrink-0 text-[#F97316]" />
                <span className="text-sm text-[#374151]">
                  {SITE.addressLine1}
                  <br />
                  {SITE.addressLine2}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="mt-0.5 shrink-0 text-[#F97316]" />
                <a href={SITE.phoneHref} className="text-sm text-[#374151] hover:text-[#F97316]">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="mt-0.5 shrink-0 text-[#F97316]" />
                <a href={`mailto:${SITE.email}`} className="text-sm text-[#374151] hover:text-[#F97316]">
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={20} className="mt-0.5 shrink-0 text-[#F97316]" />
                <div className="space-y-1 text-sm text-[#374151]">
                  {SITE.hours.map((h) => (
                    <div key={h.day} className="flex justify-between gap-6">
                      <span>{h.day}</span>
                      <span className="font-medium text-[#111827]">{h.time}</span>
                    </div>
                  ))}
                </div>
              </li>
            </ul>

            <a
              href={SITE.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_20px_-8px_rgba(37,211,102,0.5)] transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle size={17} />
              Discuter sur WhatsApp
            </a>

            <div className="mt-8 aspect-video w-full overflow-hidden rounded-2xl border border-[#E5E7EB]">
              <iframe
                title="Localisation METO Construction"
                src={SITE.mapEmbedSrc}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  )
}
