"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import SectionWrapper from "@/components/shared/section-wrapper"

const faqs = [
  {
    question: "Apakah bisa reservasi meja?",
    answer: "Tentu! Anda bisa reservasi meja melalui WhatsApp kami. Kami sarankan reservasi terutama untuk akhir pekan dan hari libur agar mendapat tempat terbaik.",
  },
  {
    question: "Apakah tersedia area keluarga?",
    answer: "Ya, kami memiliki area khusus yang nyaman untuk keluarga dengan tempat duduk yang luas. Cocok untuk acara makan bersama keluarga besar.",
  },
  {
    question: "Apakah tersedia parkir?",
    answer: "Ya, kami menyediakan area parkir yang luas dan aman untuk motor maupun mobil, langsung di depan restoran.",
  },
  {
    question: "Bagaimana jam operasional Bee Grill & Suki?",
    answer: "Kami buka setiap hari mulai pukul 12.00 hingga 22.00 WIB. Waktu terbaik untuk berkunjung adalah sore hingga malam hari.",
  },
  {
    question: "Apakah bisa request kuah suki?",
    answer: "Tentu! Kami menyediakan beberapa pilihan kuah suki seperti kuah tom yum, kuah kaldu ayam, dan kuah pedas. Anda bisa memilih sesuai selera.",
  },
  {
    question: "Apakah makanan di sini halal?",
    answer: "Ya, seluruh menu kami menggunakan bahan-bahan halal dan diproses dengan cara yang higienis.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <SectionWrapper id="faq">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Frequently Asked <span className="text-primary">Questions</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
      </motion.div>

      <div className="max-w-2xl mx-auto space-y-3">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="rounded-xl border border-border bg-bg-card overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors"
            >
              <span className="font-medium text-sm md:text-base pr-4">{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-5 pb-5 text-sm text-text-muted leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
