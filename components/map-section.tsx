import { MapPin, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MapSection() {
  const address = "VANESSA RAMÍREZ FAÑA, ESQUINA PROYECTO I, CERROS DE GURABO II"
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 px-4 py-2 rounded-full mb-4">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 font-medium text-sm">Ubicación</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Encuéntranos</h2>
          <div className="w-20 h-1 bg-[#8B0000] mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Map Container */}
          <div className="bg-black/50 rounded-2xl overflow-hidden border border-amber-500/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.5!2d-70.62!3d19.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDI3JzAwLjAiTiA3MMKwMzcnMTIuMCJX!5e0!3m2!1ses!2sdo!4v1620000000000!5m2!1ses!2sdo"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
              title="Ubicación de ASEPRE"
            />
          </div>

          {/* Address Card */}
          <div className="mt-8 bg-gradient-to-r from-[#8B0000] to-[#6B0000] p-6 rounded-xl text-center">
            <div className="flex items-center justify-center gap-2 text-amber-400 mb-2">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">Dirección</span>
            </div>
            <p className="text-white/90 mb-4">{address}</p>
            <Button
              asChild
              variant="outline"
              className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black bg-transparent"
            >
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Navigation className="w-4 h-4" />
                Cómo Llegar
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
