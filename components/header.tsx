"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Contacto", href: "#contacto" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur-md">
      {/* Top bar */}
      <div className="hidden border-b border-border/30 bg-secondary/50 py-2 md:block">
        <div className="container mx-auto flex items-center justify-between px-4 text-sm">
          <div className="flex items-center gap-6">
            <a
              href="tel:8095028501"
              className="flex items-center gap-2 text-foreground/80 transition-colors hover:text-accent"
            >
              <Phone className="h-3.5 w-3.5" />
              (809) 502-8501
            </a>
            <a
              href="mailto:asepre.srl@gmail.com"
              className="flex items-center gap-2 text-foreground/80 transition-colors hover:text-accent"
            >
              <Mail className="h-3.5 w-3.5" />
              asepre.srl@gmail.com
            </a>
          </div>
          <span className="text-foreground/80">Protección Profesional 24/7</span>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/asepreasset.jpg"
              alt="ASEPRE Logo"
              width={60}
              height={60}
              className="h-12 w-12 rounded-sm object-contain md:h-14 md:w-14"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-wider text-foreground md:text-xl">ASEPRE</span>
              <span className="hidden text-[10px] tracking-widest text-accent md:block">SEGURIDAD PREVENTIVA</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium uppercase tracking-wider text-foreground/80 transition-colors hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden items-center gap-3 md:flex">
            <Button
              asChild
              variant="outline"
              className="border-accent/50 text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
            >
              <a href="tel:8095028501">
                <Phone className="mr-2 h-4 w-4" />
                Llamar
              </a>
            </Button>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="https://wa.me/18095028501" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container mx-auto px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-3 text-sm font-medium uppercase tracking-wider text-foreground/80 transition-colors hover:text-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-3 border-t border-border pt-4">
              <Button asChild variant="outline" className="w-full border-accent/50 text-accent bg-transparent">
                <a href="tel:8095028501">
                  <Phone className="mr-2 h-4 w-4" />
                  Llamar Ahora
                </a>
              </Button>
              <Button asChild className="w-full bg-primary">
                <a href="https://wa.me/18095028501" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
