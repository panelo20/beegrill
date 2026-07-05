"use client"

import { motion } from "framer-motion"

interface FeatureCardProps {
  icon: string
  title: string
  description: string
  index: number
}

export default function FeatureCard({ icon, title, description, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group p-6 rounded-2xl bg-bg-card border border-border hover:border-primary/30 transition-all duration-300"
    >
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="font-heading font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-text-muted leading-relaxed">{description}</p>
    </motion.div>
  )
}
