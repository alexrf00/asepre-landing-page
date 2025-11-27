import { Shield, Car, UserCheck, ArrowUpRight } from "lucide-react"

const services = [
  {
    icon: Shield,
    title: "Vigilantes",
    subtitle: "Puestos Fijos",
    description:
      "Personal entrenado disponible 24/7 o en horarios definidos. Seguridad residencial, comercial e industrial con los más altos estándares.",
    features: ["Turnos 24/7", "Personal certificado", "Reportes diarios", "Protocolos estrictos"],
    highlight: true,
  },
  {
    icon: Car,
    title: "Patrullaje",
    subtitle: "Preventivo Motorizado",
    description:
      "Rondas móviles para residenciales, urbanizaciones y zonas privadas con monitoreo GPS y reportes en tiempo real.",
    features: ["Rondas programadas", "Puntos de enfoque", "Cobertura amplia", "Respuesta rápida"],
    highlight: false,
  },
  {
    icon: UserCheck,
    title: "Escoltas",
    subtitle: "Protección Ejecutiva",
    description:
      "Protección VIP para ejecutivos, familias y personas de alto perfil. Acompañamiento profesional y discreto.",
    features: ["Protección VIP", "Equipo élite", "Discreción total", "Planificación rutas"],
    highlight: false,
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-32 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-primary font-semibold tracking-widest uppercase text-sm">Servicios</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Soluciones de seguridad a tu medida
          </h2>
          <p className="text-lg text-muted-foreground">
            Tres pilares de protección diseñados para cubrir todas tus necesidades de seguridad, desde vigilancia fija
            hasta protección personal de alto nivel.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
                service.highlight
                  ? "bg-gradient-to-b from-primary/20 to-card border-primary/30"
                  : "bg-card border-border"
              } border`}
            >
              {/* Highlight badge */}
              {service.highlight && (
                <div className="absolute top-6 right-6">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                    Popular
                  </span>
                </div>
              )}

              <div className="p-8 lg:p-10">
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-8 ${
                    service.highlight ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground"
                  }`}
                >
                  <service.icon className="w-8 h-8" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <p className="text-primary text-sm font-medium mb-1">{service.subtitle}</p>
                    <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-3 pt-4">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3 text-sm text-foreground">
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${service.highlight ? "bg-primary" : "bg-accent"}`}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="pt-6">
                    <a
                      href="#contacto"
                      className={`inline-flex items-center gap-2 font-semibold transition-all group-hover:gap-3 ${
                        service.highlight ? "text-primary" : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      Solicitar información
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom glow on hover */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${
                  service.highlight ? "via-primary" : "via-accent"
                } to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">¿Necesitas una solución personalizada?</p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground px-8 py-4 rounded-full font-semibold transition-all border border-border"
          >
            Habla con un especialista
          </a>
        </div>
      </div>
    </section>
  )
}
