import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GoldDivider } from "@/components/gold-divider"

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Contacto", href: "#contacto" },
]

const services = ["Vigilantes / Puestos Fijos", "Patrullaje Preventivo", "Escoltas / Guardaespaldas"]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-border bg-secondary/90">
      {/* Top accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-primary via-accent to-primary" />

      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/asepreasset.jpg"
                alt="ASEPRE Logo"
                width={56}
                height={56}
                className="h-14 w-14 rounded-sm object-contain"
              />
              <div>
                <span className="text-xl font-bold tracking-wider text-foreground">ASEPRE</span>
                <p className="text-[10px] tracking-widest text-accent">SEGURIDAD PREVENTIVA</p>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-foreground/70">
              Más de 15 años brindando servicios de seguridad preventiva con profesionalismo, disciplina y ética.
            </p>
            <GoldDivider className="!justify-start" />
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-accent">Enlaces Rápidos</h3>
            <nav className="space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-foreground/70 transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-accent">Servicios</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-foreground/70">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-accent">Contacto</h3>
            <div className="space-y-4">
              <a
                href="tel:8095028501"
                className="flex items-center gap-3 text-sm text-foreground/70 transition-colors hover:text-accent"
              >
                <Phone className="h-4 w-4 text-primary" />
                (809) 502-8501
              </a>
              <a
                href="mailto:asepre.srl@gmail.com"
                className="flex items-center gap-3 text-sm text-foreground/70 transition-colors hover:text-accent"
              >
                <Mail className="h-4 w-4 text-primary" />
                asepre.srl@gmail.com
              </a>
              <div className="flex items-start gap-3 text-sm text-foreground/70">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span>Vanessa Ramírez Faña, Esquina Proyecto I, Cerros de Gurabo II</span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="mt-6 flex flex-col gap-3">
              <Button asChild size="sm" className="bg-primary text-white hover:bg-primary/90">
                <a href="https://wa.me/18095028501" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </a>
              </Button>
              <Button
                asChild
                size="sm"
                variant="outline"
                className="border-accent bg-transparent text-accent hover:bg-accent hover:text-background"
              >
                <a href="tel:8095028501">
                  <Phone className="mr-2 h-4 w-4" />
                  Llamar
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <p className="text-sm text-foreground/70">
              © {currentYear} ASEPRE – Agentes de Seguridad Preventiva. Todos los derechos reservados.
            </p>
            <p className="text-xs text-foreground/50">
              Protección Profesional • Disciplina Operativa • Respuesta Inmediata
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
