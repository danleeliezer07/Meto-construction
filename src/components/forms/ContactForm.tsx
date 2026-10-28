import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { Send, CheckCircle2 } from 'lucide-react'
import type { ContactFormValues } from '@/types'

const inputClasses =
  'w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] placeholder:text-[#9CA3AF] transition-colors focus:border-[#F97316] focus:outline-none focus:ring-2 focus:ring-[#F97316]/20'

const errorText = 'mt-1 text-xs font-medium text-red-500'

const PROJECT_TYPES = [
  'Construction neuve',
  'Génie civil',
  'Rénovation',
  'Maçonnerie',
  'Finitions',
  'Gestion de chantier',
  'Études & conseils',
]

const BUDGETS = [
  'Moins de 5 000 000 FCFA',
  '5 000 000 – 20 000 000 FCFA',
  '20 000 000 – 50 000 000 FCFA',
  'Plus de 50 000 000 FCFA',
  'À définir avec vous',
]

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>()
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = async () => {
    // Emplacement pour brancher l'envoi réel (API, e-mail, CRM...).
    await new Promise((resolve) => setTimeout(resolve, 700))
    setSubmitted(true)
    reset()
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-[0_1px_2px_rgba(17,24,39,0.04)] sm:p-8">
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center justify-center py-12 text-center"
        >
          <CheckCircle2 className="mb-4 text-[#F97316]" size={48} strokeWidth={1.5} />
          <h3 className="text-lg font-semibold text-[#111827]">Demande envoyée</h3>
          <p className="mt-2 max-w-sm text-sm text-[#6B7280]">
            Merci pour votre message. Notre équipe vous recontacte très prochainement pour
            échanger sur votre projet.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="firstName" className="mb-1.5 block text-sm font-medium text-[#111827]">
                Prénom
              </label>
              <input
                id="firstName"
                className={inputClasses}
                placeholder="Votre prénom"
                {...register('firstName', { required: 'Le prénom est requis' })}
              />
              {errors.firstName && <p className={errorText}>{errors.firstName.message}</p>}
            </div>
            <div>
              <label htmlFor="lastName" className="mb-1.5 block text-sm font-medium text-[#111827]">
                Nom
              </label>
              <input
                id="lastName"
                className={inputClasses}
                placeholder="Votre nom"
                {...register('lastName', { required: 'Le nom est requis' })}
              />
              {errors.lastName && <p className={errorText}>{errors.lastName.message}</p>}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-[#111827]">
                Téléphone
              </label>
              <input
                id="phone"
                type="tel"
                className={inputClasses}
                placeholder="+225 07 00 00 00 00"
                {...register('phone', { required: 'Le téléphone est requis' })}
              />
              {errors.phone && <p className={errorText}>{errors.phone.message}</p>}
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[#111827]">
                Email
              </label>
              <input
                id="email"
                type="email"
                className={inputClasses}
                placeholder="vous@exemple.com"
                {...register('email', {
                  required: "L'email est requis",
                  pattern: { value: /^\S+@\S+\.\S+$/, message: 'Email invalide' },
                })}
              />
              {errors.email && <p className={errorText}>{errors.email.message}</p>}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="projectType" className="mb-1.5 block text-sm font-medium text-[#111827]">
                Type de projet
              </label>
              <select
                id="projectType"
                className={inputClasses}
                defaultValue=""
                {...register('projectType', { required: 'Sélectionnez un type de projet' })}
              >
                <option value="" disabled>
                  Sélectionnez
                </option>
                {PROJECT_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              {errors.projectType && <p className={errorText}>{errors.projectType.message}</p>}
            </div>
            <div>
              <label htmlFor="budget" className="mb-1.5 block text-sm font-medium text-[#111827]">
                Budget estimé
              </label>
              <select id="budget" className={inputClasses} defaultValue="" {...register('budget')}>
                <option value="" disabled>
                  Sélectionnez
                </option>
                {BUDGETS.map((budget) => (
                  <option key={budget} value={budget}>
                    {budget}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-[#111827]">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className={inputClasses}
              placeholder="Décrivez votre projet en quelques mots..."
              {...register('message', { required: 'Un message est requis' })}
            />
            {errors.message && <p className={errorText}>{errors.message.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#F97316] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_20px_-8px_rgba(249,115,22,0.6)] transition-all duration-300 hover:bg-[#EA6A0C] hover:-translate-y-0.5 disabled:opacity-60 sm:w-auto"
          >
            <Send size={16} />
            {isSubmitting ? 'Envoi en cours...' : 'Demander un devis'}
          </button>
        </form>
      )}
    </div>
  )
}
