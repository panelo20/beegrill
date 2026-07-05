"use client"

import SectionWrapper from "@/components/shared/section-wrapper"
import FeatureCard from "@/components/shared/feature-card"
import { motion } from "framer-motion"

const features = [
  {
    icon: "🥬",
    title: "Fresh Ingredients",
    description: "Bahan-bahan segar dipilih setiap hari untuk menjamin kualitas terbaik.",
  },
  {
    icon: "🥩",
    title: "Premium Meat",
    description: "Daging pilihan berkualitas tinggi dengan potongan yang sempurna.",
  },
  {
    icon: "🪑",
    title: "Comfortable Dining",
    description: "Ruangan luas dengan desain modern yang nyaman untuk semua kalangan.",
  },
  {
    icon: "😊",
    title: "Friendly Service",
    description: "Tim kami siap melayani dengan ramah dan memastikan pengalaman terbaik.",
  },
  {
    icon: "💰",
    title: "Affordable Price",
    description: "Harga terjangkau dengan kualitas premium yang sebanding.",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Perfect for Gathering",
    description: "Tempat ideal untuk makan bersama keluarga, teman, dan komunitas.",
  },
]

export default function WhyUs() {
  return (
    <SectionWrapper id="why-us">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Kenapa Memilih <span className="text-primary">Bee Grill & Suki</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <FeatureCard key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </SectionWrapper>
  )
}
