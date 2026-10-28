import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & { size?: number }

export function FacebookIcon({ size = 20, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" {...props}>
      <path d="M13.5 21v-7.6h2.55l.38-2.97h-2.93V8.54c0-.86.24-1.44 1.47-1.44h1.57V4.46A21 21 0 0 0 14.15 4.3c-2.24 0-3.77 1.37-3.77 3.87v2.16H7.82v2.97h2.56V21h3.12Z" />
    </svg>
  )
}

export function InstagramIcon({ size = 20, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function LinkedinIcon({ size = 20, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" {...props}>
      <path d="M6.94 8.5H3.56V20.5H6.94V8.5ZM5.25 3.5a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.44 20.5h-3.37v-6.28c0-1.5-.03-3.42-2.08-3.42-2.09 0-2.41 1.63-2.41 3.31v6.39H9.21V8.5h3.24v1.64h.05c.45-.86 1.56-1.77 3.22-1.77 3.44 0 4.72 2.26 4.72 5.4v6.73Z" />
    </svg>
  )
}
