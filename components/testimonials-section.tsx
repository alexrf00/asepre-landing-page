import { Quote, Star } from "lucide-react"
import { GoldDivider } from "@/components/gold-divider"

const testimonials = [
  {
    quote: "Servicio confiable y profesional. Siempre atentos.",
    author: "Carlos M.",
    role: "Empresario",
    rating: 5,
  },
  {
    quote: "La patrulla preventiva ha reducido incidentes en nuestra zona.",
    author: "María R.",
    role: "Administradora de Residencial",
    rating: 5,
  },
  {
    quote: "Excelente personal, muy disciplinado y respetuoso.",
    author: "Roberto S.",
    role: "Director Comercial",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="relative overflow-hidden bg-white py-20 md:py-32">
      {/* Decorative elements */}
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

      {/* Large quote marks */}
      <div className="absolute left-8 top-20 opacity-10">
        <Quote className="h-32 w-32 text-amber-500" />
      </div>
      <div className="absolute bottom-20 right-8 rotate-180 opacity-10">
        <Quote className="h-32 w-32 text-amber-500" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
            Testimonios
          </span>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
            <span className="text-balance">Lo Que Dicen Nuestros Clientes</span>
          </h2>
          <GoldDivider className="mt-6" />
        </div>

        {/* Testimonials grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-gray-200 bg-gray-50 p-8 transition-all hover:border-amber-500/50 hover:shadow-lg"
            >
              {/* Quote icon */}
              <div className="absolute right-6 top-6 opacity-20 transition-opacity group-hover:opacity-40">
                <Quote className="h-10 w-10 text-amber-500" />
              </div>

              {/* Stars */}
              <div className="mb-6 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-500 text-amber-500" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mb-6 text-lg text-gray-700">"{testimonial.quote}"</blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-700/10 text-lg font-bold text-red-700">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-red-700 to-amber-500 transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
