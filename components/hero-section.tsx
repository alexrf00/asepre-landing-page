"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export function HeroSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/50" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Red glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="animate-fade-up opacity-0" style={{ animationDelay: "0ms", animationFillMode: "forwards" }}>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Desde 2009 protegiendo lo que importa
              </span>
            </div>

            {/* Main headline */}
            <div className="space-y-4">
              <h1
                className="animate-fade-up opacity-0"
                style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
              >
                <span className="block text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
                  Seguridad que
                </span>
                <span className="block text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
                   inspira
                </span>
                <span className="block text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-[1.1] tracking-tight">
                  confianza.
                </span>
              </h1>
            </div>

            {/* Description */}
            <p
              className="text-xl text-muted-foreground max-w-lg leading-relaxed animate-fade-up opacity-0"
              style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
            >
              Servicios de seguridad privada de élite. Vigilancia, patrullaje motorizado y protección ejecutiva con los
              más altos estándares.
            </p>

            {/* CTA buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0"
              style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
            >
              <a
                href="#contacto"
                className="group inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full text-base font-semibold transition-all hover:gap-4"
              >
                Solicitar Cotización
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-3 bg-secondary hover:bg-secondary/80 text-secondary-foreground px-8 py-4 rounded-full text-base font-semibold transition-all border border-border"
              >
                Ver Servicios
              </a>
            </div>

            {/* Trust indicators */}
            <div
              className="flex flex-wrap gap-8 pt-4 animate-fade-up opacity-0"
              style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
            >
              <div>
                <p className="text-3xl font-bold text-foreground">16+</p>
                <p className="text-sm text-muted-foreground">Años de experiencia</p>
              </div>
              <div className="w-px bg-border" />
              <div>
                <p className="text-3xl font-bold text-foreground">24/7</p>
                <p className="text-sm text-muted-foreground">Disponibilidad</p>
              </div>
              <div className="w-px bg-border" />
              <div>
                <p className="text-3xl font-bold text-foreground">300+</p>
                <p className="text-sm text-muted-foreground">Clientes protegidos</p>
              </div>
            </div>
          </div>

          {/* Right content - Logo/Visual */}
          <div
            className="relative flex items-center justify-center animate-fade-up opacity-0"
            style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 bg-primary/20 rounded-full blur-[80px]" />
            </div>

            {/* Main logo container */}
            <div className="relative">
              {/* Rotating border */}
              <div className="absolute -inset-4 rounded-full border border-primary/30 animate-[spin_20s_linear_infinite]" />
              <div className="absolute -inset-8 rounded-full border border-accent/20 animate-[spin_30s_linear_infinite_reverse]" />

              {/* Logo */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden ring-4 ring-primary/50 shadow-2xl shadow-primary/20">
                <Image
                  src="/images/asepreasset.jpg"
                  alt="ASEPRE - Agentes de Seguridad Preventiva"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-card border border-border rounded-2xl px-4 py-3 shadow-xl">
                {/* <p className="text-xs text-muted-foreground">Certificados</p> */}
                <p className="text-sm font-bold text-foreground">Negocio Propiedad De Una Mujer</p>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-2xl px-4 py-3 shadow-xl">
                <p className="text-xs text-muted-foreground">Respuesta</p>
                <p className="text-sm font-bold text-primary">{"< 5 min"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
