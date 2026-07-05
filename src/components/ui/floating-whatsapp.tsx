"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { MessageCircle } from "lucide-react"
import { siteConfig } from "@/data/site"

export default function FloatingWhatsApp() {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [0, 1])
  const y = useTransform(scrollY, [0, 300], [20, 0])

  return (
    <motion.a
      href={siteConfig.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{ opacity, y }}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition-colors"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="text-sm font-medium hidden sm:inline">Chat WhatsApp</span>
    </motion.a>
  )
}
