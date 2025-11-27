"use client"

import { Phone, MessageCircle } from "lucide-react"

export function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href="https://wa.me/18095028501"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-14 h-14 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Phone */}
      <a
        href="tel:8095028501"
        className="group flex items-center justify-center w-14 h-14 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 animate-pulse-glow"
        aria-label="Llamar ahora"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  )
}
