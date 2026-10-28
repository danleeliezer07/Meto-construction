import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Logo } from '@/components/common/Logo'
import { useScrolled } from '@/hooks/useScrolled'
import { useActiveSection } from '@/hooks/useActiveSection'
import { NAV_LINKS, SITE } from '@/constants/site'
import clsx from 'clsx'

export function Header() {
  const scrolled = useScrolled(40)
  const [open, setOpen] = useState(false)
  const sectionIds = NAV_LINKS.map((l) => l.href.replace('#', ''))
  const active = useActiveSection(sectionIds)

  const solid = scrolled || open

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        solid
          ? 'bg-[#FAFAF8]/95 shadow-[0_1px_0_0_#E5E7EB] backdrop-blur-sm'
          : 'bg-transparent'
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.href.replace('#', '')
            return (
              <a
                key={link.href}
                href={link.href}
                className={clsx(
                  'text-sm font-medium transition-colors',
                  solid
                    ? isActive
                      ? 'text-[#F97316]'
                      : 'text-[#111827] hover:text-[#F97316]'
                    : isActive
                      ? 'text-[#F97316]'
                      : 'text-white hover:text-orange-200'
                )}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href="#contact" variant="primary">
            Demander un devis
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          className={clsx(
            'inline-flex h-10 w-10 items-center justify-center rounded-full lg:hidden',
            solid ? 'text-[#111827]' : 'text-white'
          )}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-[#E5E7EB] bg-[#FAFAF8] lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-[#111827] hover:bg-[#F3F4F6] hover:text-[#F97316]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={SITE.phoneHref}
                className="flex items-center gap-2 px-3 py-3 text-sm font-medium text-[#6B7280]"
              >
                <Phone size={16} /> {SITE.phone}
              </a>
              <Button href="#contact" variant="primary" className="mt-2 w-full" onClick={() => setOpen(false)}>
                Demander un devis
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
