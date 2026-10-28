import { Star } from 'lucide-react'
import type { Testimonial } from '@/types'

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="mx-3 flex h-full flex-col rounded-2xl border border-[#E5E7EB] bg-white p-8 shadow-[0_1px_2px_rgba(17,24,39,0.04)]">
      <div className="mb-4 flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={16} className="fill-[#F97316] text-[#F97316]" />
        ))}
      </div>
      <p className="flex-1 text-[15px] leading-relaxed text-[#374151]">
        &laquo;&nbsp;{testimonial.quote}&nbsp;&raquo;
      </p>
      <div className="mt-6 flex items-center gap-3">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          loading="lazy"
          className="h-12 w-12 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-semibold text-[#111827]">{testimonial.name}</p>
          <p className="text-xs text-[#6B7280]">{testimonial.role}</p>
        </div>
      </div>
    </div>
  )
}
