"use client"

import { Phone, MessageCircle } from "lucide-react"

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/18095028501"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white" />
        <span className="absolute right-full mr-3 px-3 py-1 bg-black text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          WhatsApp
        </span>
      </a>

      {/* Call Button */}
      <a
        href="tel:8095028501"
        className="group flex items-center justify-center w-14 h-14 bg-[#8B0000] hover:bg-[#6B0000] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Llamar ahora"
      >
        <Phone className="w-6 h-6 text-white" />
        <span className="absolute right-full mr-3 px-3 py-1 bg-black text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Llamar
        </span>
      </a>
    </div>
  )
}
