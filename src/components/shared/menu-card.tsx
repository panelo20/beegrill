"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { siteConfig } from "@/data/site"
import type { MenuItem } from "@/data/menu"

interface MenuCardProps {
  item: MenuItem
  index: number
}

export default function MenuCard({ item, index }: MenuCardProps) {
  const waUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=Halo%20Bee%20Grill%20%26%20Suki%2C%20saya%20tertarik%20dengan%20menu%3A%20${encodeURIComponent(item.name)}`

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group rounded-2xl bg-bg-card overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(245,179,1,0.15)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-5 space-y-2">
        <h3 className="font-heading font-semibold text-lg">{item.name}</h3>
        <p className="text-sm text-text-muted leading-relaxed line-clamp-2">{item.description}</p>
        <div className="flex items-center justify-between pt-2">
          <span className="text-lg font-bold text-primary">
            Rp{item.price.toLocaleString("id-ID")}
          </span>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-secondary text-sm font-semibold hover:bg-primary-light transition-colors"
          >
            Pesan
          </a>
        </div>
      </div>
    </motion.div>
  )
}
