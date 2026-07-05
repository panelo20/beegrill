"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import SectionWrapper from "@/components/shared/section-wrapper"
import { galleryItems } from "@/data/gallery"

export default function Gallery() {
  return (
    <SectionWrapper id="gallery">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Galeri <span className="text-primary">Kami</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
      </motion.div>

      <div className="columns-2 md:columns-3 gap-4 space-y-4">
        {galleryItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-2xl break-inside-avoid"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-sm font-medium px-4 py-2 rounded-full bg-primary/80">
                {item.alt}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
