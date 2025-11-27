import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { WhyUsSection } from "@/components/why-us-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { FloatingContact } from "@/components/floating-contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-background noise-overlay">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <FloatingContact />
    </main>
  )
}
