import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Carlos Rodríguez",
    role: "Empresario",
    image: "/professional-man-portrait.png",
    content: "Servicio confiable y profesional. Siempre atentos a nuestras necesidades de seguridad.",
    rating: 5,
  },
  {
    name: "María González",
    role: "Administradora de Urbanización",
    image: "/professional-woman-portrait.png",
    content: "La patrulla preventiva ha reducido incidentes en nuestra zona de manera significativa.",
    rating: 5,
  },
  {
    name: "José Martínez",
    role: "Director Comercial",
    image: "/business-man-suit-portrait.jpg",
    content: "Excelente personal, muy disciplinado y respetuoso. Totalmente recomendados.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 px-4 py-2 rounded-full mb-4">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span className="text-amber-600 font-medium text-sm">Testimonios</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Lo Que Dicen Nuestros Clientes</h2>
          <div className="w-20 h-1 bg-[#8B0000] mx-auto" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-lg"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-2">
                <div className="bg-[#8B0000] p-2 rounded-full">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 italic">&quot;{testimonial.content}&quot;</p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
