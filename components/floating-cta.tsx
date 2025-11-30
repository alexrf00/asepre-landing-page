"use client"

import { useState, useEffect } from "react"
import { MessageCircle, Phone, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FloatingCTA() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded menu */}
      {isOpen && (
        <div className="mb-4 flex flex-col gap-3">
          <Button
            asChild
            className="h-14 w-14 rounded-full bg-[#25D366] p-0 shadow-lg shadow-[#25D366]/30 hover:bg-[#25D366]/90"
          >
            <a href="https://wa.me/18095028501" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <MessageCircle className="h-6 w-6" />
            </a>
          </Button>
          <Button
            asChild
            className="h-14 w-14 rounded-full bg-accent p-0 shadow-lg shadow-accent/30 hover:bg-accent/90"
          >
            <a href="tel:8095028501" aria-label="Llamar">
              <Phone className="h-6 w-6 text-accent-foreground" />
            </a>
          </Button>
        </div>
      )}

      {/* Toggle button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`h-16 w-16 rounded-full p-0 shadow-xl transition-all ${
          isOpen
            ? "bg-muted text-muted-foreground hover:bg-muted/90"
            : "bg-primary text-primary-foreground shadow-primary/30 hover:bg-primary/90"
        }`}
        aria-label={isOpen ? "Cerrar" : "Contactar"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-7 w-7" />}
      </Button>
    </div>
  )
}
