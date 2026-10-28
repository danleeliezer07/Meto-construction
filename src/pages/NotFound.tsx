import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'

export function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#FAFAF8] px-6 text-center">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F97316]">Erreur 404</p>
      <h1 className="mt-4 text-3xl font-bold text-[#111827] sm:text-4xl">
        Cette page n&apos;existe pas
      </h1>
      <p className="mt-3 max-w-md text-sm text-[#6B7280]">
        La page que vous recherchez a peut-être été déplacée ou n&apos;existe plus.
      </p>
      <Button href="/" variant="primary" className="mt-8">
        Retour à l&apos;accueil
      </Button>
      <Link to="/" className="sr-only">
        Accueil
      </Link>
    </div>
  )
}
