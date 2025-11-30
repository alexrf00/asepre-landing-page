import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { MissionVisionSection } from "@/components/mission-vision-section"
import { ServicesSection } from "@/components/services-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { LocationSection } from "@/components/location-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <MissionVisionSection />
      <ServicesSection />
      <TestimonialsSection />
      <LocationSection />
      <ContactSection />
      <Footer />
      <FloatingCTA />
    </main>
  )
}
