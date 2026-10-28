import { useEffect, useState } from 'react'

/**
 * Retourne true dès que la page a défilé au-delà du seuil donné.
 * Utilisé par le header pour basculer de transparent à blanc.
 */
export function useScrolled(threshold = 40): boolean {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return scrolled
}
