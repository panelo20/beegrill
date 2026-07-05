import Navbar from "@/components/ui/navbar"
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Menu from "@/components/sections/Menu"
import WhyUs from "@/components/sections/WhyUs"
import Testimonials from "@/components/sections/Testimonials"
import Gallery from "@/components/sections/Gallery"
import FAQ from "@/components/sections/FAQ"
import Location from "@/components/sections/Location"
import CTA from "@/components/sections/CTA"
import Footer from "@/components/sections/Footer"
import FloatingWhatsApp from "@/components/ui/floating-whatsapp"
import ScrollToTop from "@/components/ui/scroll-to-top"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <WhyUs />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Location />
        <CTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </>
  )
}
