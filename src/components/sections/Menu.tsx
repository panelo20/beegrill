"use client"

import { motion } from "framer-motion"
import SectionWrapper from "@/components/shared/section-wrapper"
import MenuCard from "@/components/shared/menu-card"
import { menuItems } from "@/data/menu"

export default function Menu() {
  return (
    <SectionWrapper id="menu" className="bg-bg-secondary">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Menu <span className="text-primary">Highlights</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-4" />
        <p className="text-text-muted text-sm max-w-md mx-auto">
          Pilihan menu grill & suki terbaik kami, disajikan dengan bahan segar dan cita rasa premium.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item, index) => (
          <MenuCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </SectionWrapper>
  )
}
