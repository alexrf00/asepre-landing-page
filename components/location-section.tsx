import { MapPin, Clock, Phone, Building } from "lucide-react"
import { GoldDivider } from "@/components/gold-divider"

export function LocationSection() {
  const googleMapsEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d940.4415978568736!2d-70.67583877166203!3d19.46563629885905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eb1c584aa7f711b%3A0x8d8ffaad61efe1f8!2sProyecto%201%2C%20Santiago%20de%20los%20Caballeros%2051000%2C%20Rep%C3%BAblica%20Dominicana!5e0!3m2!1ses!2sus!4v1764475238490!5m2!1ses!2sus"

  return (
    <section
      id="ubicacion"
      className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-background via-background to-primary/30"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/50" />
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
            Ubicación
          </span>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            <span className="text-balance">Encuéntrenos</span>
          </h2>
          <GoldDivider className="mt-6" />
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-xl border border-gray-700 shadow-lg">
            <div className="aspect-[4/3] bg-gray-800">
              <iframe
                src={googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de ASEPRE - VANESSA RAMÍREZ FAÑA, ESQUINA PROYECTO I, CERROS DE GURABO II, Santiago"
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>

          {/* Location info */}
          <div className="space-y-6">
            <div className="rounded-xl border border-gray-700 bg-gray-800/80 p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-red-700/20 p-3">
                  <MapPin className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-white">Dirección</h3>
                  <p className="text-gray-300">
                    Vanessa Ramírez Faña, Esquina Proyecto I,
                    <br />
                    VANESSA RAMÍREZ FAÑA, ESQUINA PROYECTO I, CERROS DE GURABO II
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-700 bg-gray-800/80 p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-amber-500/20 p-3">
                  <Clock className="h-6 w-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-white">Horario de Atención</h3>
                  <p className="text-gray-300">
                    Lunes a Viernes: 8:00 AM - 6:00 PM
                    <br />
                    Emergencias: 24/7
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-700 bg-gray-800/80 p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-red-700/20 p-3">
                  <Phone className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-white">Contacto Directo</h3>
                  <p className="text-gray-300">
                    Teléfono:{" "}
                    <a href="tel:8095028501" className="text-amber-500 hover:underline">
                      (809) 502-8501
                    </a>
                    <br />
                    Email:{" "}
                    <a href="mailto:asepre.srl@gmail.com" className="text-amber-500 hover:underline">
                      asepre.srl@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-700 bg-gray-800/80 p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-amber-500/20 p-3">
                  <Building className="h-6 w-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-white">Cobertura</h3>
                  <p className="text-gray-300">Santiago y zona norte de República Dominicana</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
