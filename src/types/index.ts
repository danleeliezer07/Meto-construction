import type { LucideIcon } from 'lucide-react'

export interface NavLink {
  label: string
  href: string
}

export interface Service {
  id: string
  icon: LucideIcon
  title: string
  description: string
}

export interface Stat {
  id: string
  value: number
  suffix: string
  label: string
}

export interface Reason {
  id: string
  icon: LucideIcon
  title: string
}

export interface Project {
  id: string
  title: string
  location: string
  category: string
  description: string
  image: string
}

export interface ProcessStep {
  id: string
  title: string
  description: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  quote: string
  image: string
  rating: number
}

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export interface ContactFormValues {
  firstName: string
  lastName: string
  phone: string
  email: string
  projectType: string
  budget: string
  message: string
}
