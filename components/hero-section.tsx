import Image from "next/image"
import { Phone, MessageCircle, ChevronDown, Shield, Eye, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24 md:pt-28"
    >
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/30" />

      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-10 h-40 w-40 rotate-12">
          <Image src="/images/asepreasset.jpg" alt="" fill className="object-contain" />
        </div>
        <div className="absolute top-40 right-20 h-32 w-32 -rotate-12">
          <Image src="/images/asepreasset.jpg" alt="" fill className="object-contain" />
        </div>
        <div className="absolute bottom-20 left-1/4 h-24 w-24 rotate-6">
          <Image src="/images/asepreasset.jpg" alt="" fill className="object-contain" />
        </div>
        <div className="absolute bottom-40 right-1/3 h-36 w-36 -rotate-6">
          <Image src="/images/asepreasset.jpg" alt="" fill className="object-contain" />
        </div>
      </div>

      {/* Geometric lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 h-full w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent" />
        <div className="absolute top-0 right-1/4 h-full w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent" />
        <div className="absolute top-1/3 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </div>

      {/* Main content */}
      <div className="container relative z-10 mx-auto px-4 py-12 text-center md:py-20">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-accent/20 blur-xl" />
            <Image
              src="/images/asepreasset.jpg"
              alt="ASEPRE Logo"
              width={160}
              height={160}
              className="relative h-28 w-28 rounded-lg object-contain md:h-40 md:w-40"
            />
          </div>
        </div>

        {/* Company name */}
        <div className="mb-6">
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-accent md:text-base">
            Agentes de Seguridad Preventiva
          </h2>
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            <span className="text-balance">Protección y Seguridad</span>
            <br />
            <span className="text-balance bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
              Preventiva 24/7
            </span>
          </h1>
        </div>

        {/* Subheadline */}
        <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg text-foreground/80 md:text-xl">
          Más de 15 años ofreciendo vigilancia, patrullaje y protección ejecutiva.
        </p>

        {/* CTA Buttons */}
        <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="group h-14 min-w-[200px] bg-primary text-lg font-semibold text-white shadow-lg shadow-primary/40 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/50"
          >
            <a href="https://wa.me/18095028501" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              WhatsApp
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="group h-14 min-w-[200px] border-2 border-accent bg-transparent text-lg font-semibold text-accent transition-all hover:border-accent hover:bg-accent hover:text-background"
          >
            <a href="tel:8095028501">
              <Phone className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Llamar Ahora
            </a>
          </Button>
        </div>

        {/* Stats */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
          <div className="group rounded-lg border border-border bg-card/80 p-6 backdrop-blur-sm transition-all hover:border-accent/50 hover:bg-card">
            <div className="mb-3 flex justify-center">
              <div className="rounded-full bg-primary/30 p-3">
                <Shield className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div className="text-3xl font-bold text-accent">+15</div>
            <div className="text-sm uppercase tracking-wider text-foreground/70">Años de Experiencia</div>
          </div>
          <div className="group rounded-lg border border-border bg-card/80 p-6 backdrop-blur-sm transition-all hover:border-accent/50 hover:bg-card">
            <div className="mb-3 flex justify-center">
              <div className="rounded-full bg-primary/30 p-3">
                <Eye className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div className="text-3xl font-bold text-accent">24/7</div>
            <div className="text-sm uppercase tracking-wider text-foreground/70">Vigilancia Continua</div>
          </div>
          <div className="group rounded-lg border border-border bg-card/80 p-6 backdrop-blur-sm transition-all hover:border-accent/50 hover:bg-card">
            <div className="mb-3 flex justify-center">
              <div className="rounded-full bg-primary/30 p-3">
                <Users className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div className="text-3xl font-bold text-accent">100%</div>
            <div className="text-sm uppercase tracking-wider text-foreground/70">Compromiso Profesional</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="#nosotros"
          className="flex flex-col items-center text-foreground/60 transition-colors hover:text-accent"
          aria-label="Scroll to next section"
        >
          <span className="mb-2 text-xs uppercase tracking-widest">Descubrir más</span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
