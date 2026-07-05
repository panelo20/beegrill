"use client"

import { motion } from "framer-motion"
import { MapPin, Clock, Phone } from "lucide-react"
import SectionWrapper from "@/components/shared/section-wrapper"
import { siteConfig } from "@/data/site"

export default function Location() {
  return (
    <SectionWrapper id="location" className="bg-bg-secondary">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Temukan <span className="text-primary">Kami</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="flex items-start gap-4 p-5 rounded-xl bg-bg-card border border-border">
            <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
            <div>
              <h3 className="font-semibold mb-1">Alamat</h3>
              <p className="text-sm text-text-muted">{siteConfig.address}</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-5 rounded-xl bg-bg-card border border-border">
            <Clock className="w-5 h-5 text-primary mt-1 shrink-0" />
            <div>
              <h3 className="font-semibold mb-1">Jam Operasional</h3>
              <p className="text-sm text-text-muted">
                {siteConfig.hours.day}
                <br />
                {siteConfig.hours.time}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-5 rounded-xl bg-bg-card border border-border">
            <Phone className="w-5 h-5 text-primary mt-1 shrink-0" />
            <div>
              <h3 className="font-semibold mb-1">WhatsApp</h3>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:text-primary-light transition-colors"
              >
                +62 889-8990-7103
              </a>
            </div>
          </div>
          <a
            href="https://maps.app.goo.gl/beegrillsuki"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-secondary font-semibold text-sm hover:bg-primary-light transition-colors"
          >
            <MapPin className="w-4 h-4" />
            Buka di Google Maps
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden border border-border"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.5!2d112.1!3d-7.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNDInMDAuMCJTIDExMsKwMDYnMDAuMCJF!5e0!3m2!1sid!2sid!4v1"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Bee Grill & Suki Pare Kediri"
          />
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
