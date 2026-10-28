import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { NAV_LINKS, SITE } from '@/constants/site'
import { FacebookIcon, InstagramIcon, LinkedinIcon } from '@/components/common/SocialIcons'

const SOCIALS = [
  { icon: FacebookIcon, href: SITE.social.facebook, label: 'Facebook' },
  { icon: InstagramIcon, href: SITE.social.instagram, label: 'Instagram' },
  { icon: LinkedinIcon, href: SITE.social.linkedin, label: 'LinkedIn' },
  { icon: MessageCircle, href: SITE.social.whatsapp, label: 'WhatsApp' },
]

export function Footer() {
  return (
    <footer className="bg-[#15171C] pt-20 text-white/70">
      <Container>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <span className="inline-flex items-center rounded-lg bg-white px-3 py-2">
              <img
                src="/images/logo/meto-logo.png"
                alt="METO Construction"
                className="h-10 w-auto object-contain"
              />
            </span>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              METO Construction est une entreprise de construction spécialisée dans la
              réalisation de projets de qualité, avec professionnalisme et respect des délais.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-[#F97316] hover:text-white"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
              Liens rapides
            </h4>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.filter((l) => l.label !== 'Pourquoi nous').map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/60 transition-colors hover:text-[#F97316]">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
              Coordonnées
            </h4>
            <ul className="mt-5 space-y-4 text-sm text-white/60">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[#F97316]" />
                <span>
                  {SITE.addressLine1}
                  <br />
                  {SITE.addressLine2}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="shrink-0 text-[#F97316]" />
                <a href={SITE.phoneHref} className="hover:text-[#F97316]">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="shrink-0 text-[#F97316]" />
                <a href={`mailto:${SITE.email}`} className="hover:text-[#F97316]">
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
              Horaires
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {SITE.hours.map((h) => (
                <li key={h.day} className="flex items-center justify-between gap-6 text-white/60">
                  <span>{h.day}</span>
                  <span className="font-medium text-white">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 py-7 text-xs text-white/45 sm:flex-row">
          <p>&copy; 2026 METO Construction. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#F97316]">
              Mentions légales
            </a>
            <a href="#" className="hover:text-[#F97316]">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
