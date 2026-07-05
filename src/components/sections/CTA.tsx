"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"
import { siteConfig } from "@/data/site"
import { pulse } from "@/lib/animations"

export default function CTA() {
  return (
    <section className="relative py-20 md:py-28 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading text-3xl md:text-5xl font-bold text-secondary mb-4"
        >
          Ready to Enjoy Premium Grill?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-secondary/80 text-base md:text-lg mb-8 max-w-lg mx-auto"
        >
          Reserve Your Table Today. Hubungi kami via WhatsApp untuk reservasi meja dan nikmati pengalaman grill & suki terbaik di Pare.
        </motion.p>

        <motion.a
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          variants={pulse}
          initial="initial"
          animate="animate"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-secondary text-white font-semibold text-lg hover:bg-secondary/90 transition-colors shadow-xl"
        >
          <MessageCircle className="w-6 h-6" />
          Reserve via WhatsApp
        </motion.a>
      </div>
    </section>
  )
}
