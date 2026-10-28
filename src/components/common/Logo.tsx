import clsx from 'clsx'

interface LogoProps {
  variant?: 'dark' | 'light'
  className?: string
}

/**
 * Zone d'import du logo réel de METO Construction.
 * Le fichier attendu se trouve dans /public/images/logo/meto-logo.png
 * L'identité visuelle (typographie noire, symbole de toit orange)
 * ne doit pas être modifiée.
 */
export function Logo({ variant = 'dark', className }: LogoProps) {
  return (
    <a
      href="#accueil"
      className={clsx('flex items-center gap-2.5', className)}
      aria-label="METO Construction — Accueil"
    >
      <span className="flex items-center rounded-lg bg-white/95 px-2.5 py-1.5 shadow-[0_1px_2px_rgba(17,24,39,0.08)]">
        <img
          src="/images/logo/meto-logo.png"
          alt="METO Construction"
          className="h-9 w-auto object-contain sm:h-10"
        />
      </span>
      <span className="sr-only">METO Construction</span>
      {variant === 'light' && <span className="hidden" />}
    </a>
  )
}
