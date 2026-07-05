"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronDown, Star } from "lucide-react"
import { siteConfig } from "@/data/site"
import { heroImage } from "@/lib/animations"

export default function Hero() {
  const scrollToMenu = () => {
    document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <motion.div variants={heroImage} initial="hidden" animate="visible" className="absolute inset-0">
        <Image
          src="/images/hero-grill.jpg"
          alt="Bee Grill & Suki Premium Grill Experience"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/75 to-secondary/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
      </motion.div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-smoke" />
        <div className="absolute bottom-0 right-1/3 w-48 h-48 bg-white/3 rounded-full blur-3xl animate-smoke-delayed" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-6">
              <Star className="w-4 h-4 fill-primary text-primary" />
              <span className="text-sm font-medium text-primary">4.9 Rating di Google</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            Premium Grill & Suki
            <br />
            <span className="text-primary">Experience in Pare.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base sm:text-lg text-text-muted max-w-lg mb-8 leading-relaxed"
          >
            Nikmati pengalaman grill dan suki dengan bahan segar, kuah pilihan,
            serta suasana nyaman untuk makan bersama keluarga dan teman.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary text-secondary font-semibold text-base hover:bg-primary-light transition-all duration-300 shadow-lg shadow-primary/25"
            >
              Reserve Table
            </a>
            <button
              onClick={scrollToMenu}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-border text-text hover:bg-white/5 transition-colors text-base"
            >
              View Menu
            </button>
          </motion.div>
        </div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.2, duration: 0.6 }, y: { delay: 1.2, duration: 2, repeat: Infinity } }}
        onClick={scrollToMenu}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-text-muted hover:text-primary transition-colors"
        aria-label="Scroll to menu"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </section>
  )
}
