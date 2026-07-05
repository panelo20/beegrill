import { Star } from "lucide-react"
import type { Testimonial } from "@/data/testimonials"

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="flex-shrink-0 w-[300px] md:w-[340px] p-6 rounded-2xl bg-bg-card border border-border">
      <div className="flex gap-1 mb-3">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
        ))}
      </div>
      <p className="text-sm text-text-muted leading-relaxed mb-4">&ldquo;{testimonial.review}&rdquo;</p>
      <p className="font-semibold text-sm">{testimonial.name}</p>
    </div>
  )
}
