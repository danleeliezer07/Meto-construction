import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'

type Variant = 'primary' | 'outline' | 'outline-light' | 'ghost' | 'white'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F97316] disabled:opacity-50 disabled:pointer-events-none'

const variants: Record<Variant, string> = {
  primary:
    'bg-[#F97316] text-white shadow-[0_8px_20px_-8px_rgba(249,115,22,0.6)] hover:bg-[#EA6A0C] hover:shadow-[0_10px_28px_-8px_rgba(249,115,22,0.7)] hover:-translate-y-0.5',
  outline:
    'border border-[#111827] text-[#111827] hover:bg-[#111827] hover:text-white',
  'outline-light':
    'border border-white/70 text-white hover:bg-white hover:text-[#111827]',
  ghost: 'text-[#111827] hover:text-[#F97316]',
  white:
    'bg-white text-[#F97316] shadow-[0_8px_20px_-8px_rgba(17,24,39,0.3)] hover:bg-[#111827] hover:text-white hover:-translate-y-0.5',
}

interface CommonProps {
  variant?: Variant
  children: ReactNode
  className?: string
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

type ButtonProps = ButtonAsButton | ButtonAsLink

export function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  const classes = clsx(base, variants[variant], className)

  if ('href' in props && props.href) {
    return (
      <a className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
