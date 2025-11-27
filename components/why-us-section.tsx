import { Target, Zap, Lock, HeartHandshake } from "lucide-react"

const reasons = [
  {
    icon: Target,
    title: "Enfoque Preventivo",
    description:
      "Anticipamos riesgos antes de que se conviertan en problemas. Nuestra metodología proactiva garantiza tu tranquilidad.",
  },
  {
    icon: Zap,
    title: "Respuesta Inmediata",
    description: "Tiempo de respuesta menor a 5 minutos. Nuestro equipo está listo para actuar en cualquier momento.",
  },
  {
    icon: Lock,
    title: "Discreción Total",
    description: "Operamos con la máxima confidencialidad. Tu privacidad y seguridad son nuestra prioridad absoluta.",
  },
  {
    icon: HeartHandshake,
    title: "Compromiso Real",
    description: "No solo cumplimos contratos, construimos relaciones de confianza a largo plazo con cada cliente.",
  },
]

export function WhyUsSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/50" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-8">
            <div>
              <span className="text-primary font-semibold tracking-widest uppercase text-sm">Por qué elegirnos</span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 leading-tight">
                La diferencia está en los detalles
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              En ASEPRE no solo ofrecemos seguridad, ofrecemos tranquilidad. Cada miembro de nuestro equipo está
              comprometido con la excelencia y la protección de lo que más valoras.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-semibold transition-all"
              >
                Comenzar ahora
              </a>
              <a
                href="tel:8095028501"
                className="inline-flex items-center justify-center gap-2 text-foreground hover:text-primary font-semibold transition-colors"
              >
                Llamar: 809-502-8501
              </a>
            </div>
          </div>

          {/* Right - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <reason.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{reason.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
