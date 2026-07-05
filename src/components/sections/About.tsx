"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import SectionWrapper from "@/components/shared/section-wrapper"

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative aspect-[4/3] rounded-2xl overflow-hidden"
        >
          <Image
            src="/images/gallery/customer-experience.jpg"
            alt="Suasana makan di Bee Grill & Suki"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Tentang <span className="text-primary">Bee Grill & Suki</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-6" />
          <p className="text-text-muted text-base md:text-lg leading-relaxed mb-4">
            Bee Grill & Suki hadir di Pare, Kediri sebagai destinasi kuliner premium
            yang menggabungkan pengalaman grill ala Korean BBQ dengan kehangatan suki
            khas Asia.
          </p>
          <p className="text-text-muted text-base md:text-lg leading-relaxed mb-6">
            Dengan bahan-bahan segar pilihan, bumbu racikan spesial, dan suasana restoran
            yang modern namun tetap hangat, kami menghadirkan momen makan bersama yang
            tak terlupakan untuk keluarga, teman, maupun pasangan.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {[
              { value: "4.9★", label: "Google Rating" },
              { value: "200+", label: "Ulasan" },
              { value: "2024", label: "Sejak" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-xl bg-bg-card border border-border">
                <div className="text-xl font-bold text-primary font-heading">{stat.value}</div>
                <div className="text-xs text-text-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
