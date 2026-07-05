"use client"

import { motion } from "framer-motion"
import { fadeUp } from "@/lib/animations"
import { cn } from "@/lib/utils"

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export default function SectionWrapper({ children, className, id }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className={cn("py-16 md:py-24 px-4", className)}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </motion.section>
  )
}
