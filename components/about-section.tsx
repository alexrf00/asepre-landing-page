import Image from "next/image"
import { Shield, Award, Clock, CheckCircle } from "lucide-react"
import { GoldDivider } from "@/components/gold-divider"

const features = [
  {
    icon: Shield,
    title: "Prevención",
    description: "Enfoque proactivo para anticipar y mitigar riesgos",
  },
  {
    icon: Award,
    title: "Disciplina Operativa",
    description: "Personal altamente entrenado y comprometido",
  },
  {
    icon: Clock,
    title: "Respuesta Inmediata",
    description: "Atención rápida ante cualquier eventualidad",
  },
]

export function AboutSection() {
  return (
    <section
      id="nosotros"
      className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-background via-background to-primary/30"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/50" />
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
            Quiénes Somos
          </span>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            <span className="text-balance">Excelencia en Seguridad</span>
          </h2>
          <GoldDivider className="mt-6" />
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div className="space-y-6">
            <div className="relative rounded-lg border border-gray-700 bg-gray-800/80 p-8 shadow-sm">
              <div className="absolute -top-3 left-8">
                <span className="rounded bg-amber-500 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                  Desde 2009
                </span>
              </div>
              <p className="text-pretty text-lg leading-relaxed text-gray-300">
                <strong className="text-white">Asepre – Agentes de Seguridad Preventiva</strong> es una empresa fundada
                en 2009 especializada en soluciones de vigilancia, patrullaje y protección ejecutiva. Nuestro enfoque se
                basa en la prevención, la disciplina operativa y la respuesta inmediata.
              </p>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-gray-300">
                Ofrecemos servicios confiables, discretos y adaptados a las necesidades de cada cliente residencial,
                comercial o institucional.
              </p>
            </div>

            {/* Values list */}
            <div className="space-y-4">
              {[
                "Profesionalismo en cada servicio",
                "Ética y confidencialidad absoluta",
                "Personal certificado y entrenado",
                "Cobertura completa 24/7",
              ].map((value, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-amber-500" />
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {/* Owner certification photo */}
            <div className="relative overflow-hidden rounded-lg border-2 border-amber-500/30 bg-gray-800 shadow-lg">
              <div className="absolute -top-3 right-8 z-10">
                <span className="rounded bg-red-700 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                  Certificación Oficial
                </span>
              </div>
              <Image
                src="/images/certifications.jpg"
                alt="Propietaria de ASEPRE recibiendo certificación oficial"
                width={600}
                height={450}
                className="w-full object-cover"
              />
              <div className="bg-gradient-to-t from-gray-900/90 to-transparent p-4">
                <p className="text-sm text-white">
                  Reconocimiento oficial por excelencia en servicios de seguridad preventiva
                </p>
              </div>
            </div>

            {/* Features grid */}
            <div className="grid gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg border border-gray-700 bg-gray-800/80 p-5 shadow-sm transition-all hover:border-amber-500/50 hover:shadow-md"
                >
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-red-700/10 transition-transform group-hover:scale-150" />
                  <div className="relative flex items-start gap-4">
                    <div className="rounded-lg bg-red-700/20 p-3">
                      <feature.icon className="h-5 w-5 text-red-500" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-base font-semibold text-white">{feature.title}</h3>
                      <p className="text-sm text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
