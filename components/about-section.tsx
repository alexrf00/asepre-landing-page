import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

const features = [
  "Personal altamente capacitado y certificado",
  "Protocolos de seguridad actualizados",
  "Tecnología de monitoreo avanzada",
  "Respuesta inmediata ante incidentes",
  "Cobertura en toda República Dominicana",
  "Servicio personalizado según necesidades",
]

export function AboutSection() {
  return (
    <section id="nosotros" className="py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Visual */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src="/certifications.jpg"
                alt="ASEPRE Security Professional"
                fill
                className="object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-8 -right-8 bg-card border border-border rounded-2xl p-6 shadow-2xl max-w-xs">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">16</span>
                </div>
                <div>
                  <p className="text-foreground font-semibold">Años de</p>
                  <p className="text-muted-foreground text-sm">Excelencia</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Desde 2009 brindando tranquilidad a familias y empresas en todo el país.
              </p>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border border-primary/30 rounded-2xl" />
            <div className="absolute top-8 left-8 w-24 h-24 bg-primary/10 rounded-2xl" />
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <span className="text-primary font-semibold tracking-widest uppercase text-sm">Sobre Nosotros</span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 leading-tight text-balance">
                Seguridad que inspira confianza
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong className="text-foreground">ASEPRE – Agentes de Seguridad Preventiva</strong> es una empresa
              fundada en 2009, especializada en soluciones integrales de vigilancia, patrullaje y protección ejecutiva.
              Nuestro enfoque se basa en la prevención, la disciplina operativa y la respuesta inmediata.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Ofrecemos servicios confiables, discretos y adaptados a las necesidades de cada cliente —ya sea
              residencial, comercial o institucional— con los más altos estándares de profesionalismo.
            </p>

            {/* Features list */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors group"
              >
                Conoce más sobre nosotros
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
