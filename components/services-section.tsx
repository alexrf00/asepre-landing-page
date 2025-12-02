import { User, Car, UserCheck, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GoldDivider } from "@/components/gold-divider"

const services = [
  {
    icon: User,
    title: "Vigilantes / Puestos Fijos",
    description: "Personal entrenado disponible 24/7 o en horarios definidos según la necesidad del cliente.",
    features: ["Guardias uniformados", "Control de acceso", "Reportes periódicos", "Supervisión constante"],
  },
  {
    icon: Car,
    title: "Patrullaje Preventivo",
    description: "Rondas móviles para residencias, urbanizaciones y zonas privadas con reportes continuos.",
    features: ["Vehículos identificados", "Rutas personalizadas", "Estrategia de enfoque", "Respuesta rápida"],
  },
  {
    icon: UserCheck,
    title: "Escoltas / Guardaespaldas",
    description: "Protección ejecutiva para personas, familias y altos perfiles con acompañamiento profesional.",
    features: ["Personal certificado", "Discreción total", "Evaluación de riesgos", "Protección 24/7"],
  },
]

export function ServicesSection() {
  return (
    <section
      id="servicios"
      className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-background via-background to-primary/30"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/50" />
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
            Nuestros Servicios
          </span>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            <span className="text-balance">Soluciones de Seguridad</span>
          </h2>
<p className="mx-auto max-w-2xl text-pretty text-lg text-gray-100">
            Servicios especializados diseñados para proteger lo que más importa
          </p>
          <GoldDivider className="mt-6" />
        </div>

        {/* Services grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-gray-700 bg-gray-800/80 shadow-sm transition-all duration-300 hover:border-amber-500/50 hover:shadow-xl"
            >
              {/* Top accent bar */}
              <div className="h-1 w-full bg-gradient-to-r from-red-700 via-red-700 to-amber-500" />

              <div className="p-8">
                {/* Icon */}
                <div className="mb-6 inline-flex rounded-xl bg-red-700/20 p-4 transition-all group-hover:bg-red-700/30">
                  <service.icon className="h-8 w-8 text-red-500" />
                </div>

                {/* Title */}
                <h3 className="mb-4 text-xl font-bold text-white">{service.title}</h3>

                {/* Description */}
<p className="mb-6 text-pretty text-gray-100">{service.description}</p>

                {/* Features */}
                <ul className="mb-6 space-y-3">
                  {service.features.map((feature, i) => (
<li key={i} className="flex items-center gap-2 text-sm text-gray-200">
                      <div className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  asChild
                  variant="ghost"
className="group/btn w-full justify-between border border-gray-500 text-gray-100 hover:border-amber-500/50 hover:bg-amber-500/10 hover:text-white"
                >
                  <a href="#contacto">
                    Solicitar Información
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
