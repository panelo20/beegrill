"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star } from "lucide-react"
import SectionWrapper from "@/components/shared/section-wrapper"
import TestimonialCard from "@/components/shared/testimonial-card"
import { testimonials } from "@/data/testimonials"

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [next])

  const visible = testimonials.slice(current, current + 3)
  if (visible.length < 3) {
    visible.push(...testimonials.slice(0, 3 - visible.length))
  }

  return (
    <SectionWrapper id="testimonials" className="bg-bg-secondary">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Apa Kata <span className="text-primary">Pelanggan</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6" />
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-bg-card border border-border">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-primary text-primary" />
            ))}
          </div>
          <span className="text-lg font-bold">4.9</span>
          <span className="text-text-muted text-sm">dari 200+ ulasan Google</span>
        </div>
      </motion.div>

      <div className="overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.4 }}
            className="flex gap-4 justify-center"
          >
            {visible.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-primary w-6" : "bg-border"
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </SectionWrapper>
  )
}
