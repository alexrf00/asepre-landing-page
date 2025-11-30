"use client"

import type React from "react"

import { useState } from "react"
import { Send, Phone, Mail, MapPin, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { GoldDivider } from "@/components/gold-divider"

const serviceTypes = [
  "Vigilantes / Puestos Fijos",
  "Patrullaje Preventivo",
  "Escoltas / Guardaespaldas",
  "Consulta General",
  "Cotización Personalizada",
]

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch("https://formsubmit.co/ajax/asepre.srl@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Nombre: formState.name,
          Teléfono: formState.phone,
          Email: formState.email || "No proporcionado",
          "Tipo de Servicio": formState.service,
          Mensaje: formState.message || "Sin mensaje adicional",
          _subject: `Nueva solicitud de ${formState.service} - ASEPRE`,
        }),
      })

      if (!response.ok) {
        throw new Error("Error al enviar el mensaje")
      }

      setIsSubmitted(true)

      setTimeout(() => {
        setIsSubmitted(false)
        setFormState({
          name: "",
          phone: "",
          email: "",
          service: "",
          message: "",
        })
      }, 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al enviar el mensaje")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contacto"
      className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-background via-background to-primary/30"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/50" />
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
            Contacto
          </span>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            <span className="text-balance">Solicite una Cotización</span>
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-gray-300">
            Complete el formulario y nos pondremos en contacto con usted a la brevedad
          </p>
          <GoldDivider className="mt-6" />
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact info */}
          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-xl border border-gray-700 bg-gray-800/80 p-6 shadow-sm">
              <h3 className="mb-6 text-xl font-semibold text-white">Información de Contacto</h3>

              <div className="space-y-6">
                <a
                  href="tel:8095028501"
                  className="flex items-center gap-4 text-gray-300 transition-colors hover:text-amber-500"
                >
                  <div className="rounded-lg bg-red-700/20 p-3">
                    <Phone className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Teléfono</p>
                    <p className="font-semibold text-white">(809) 502-8501</p>
                  </div>
                </a>

                <a
                  href="mailto:asepre.srl@gmail.com"
                  className="flex items-center gap-4 text-gray-300 transition-colors hover:text-amber-500"
                >
                  <div className="rounded-lg bg-amber-500/20 p-3">
                    <Mail className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="font-semibold text-white">asepre.srl@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-red-700/20 p-3">
                    <MapPin className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Dirección</p>
                    <p className="font-semibold text-white">VANESSA RAMÍREZ FAÑA, ESQUINA PROYECTO I, CERROS DE GURABO II</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick contact buttons */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <Button asChild className="h-14 bg-red-700 text-white shadow-lg shadow-red-700/30 hover:bg-red-800">
                <a href="https://wa.me/18095028501" target="_blank" rel="noopener noreferrer">
                  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Directo
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-14 border-amber-500 text-amber-500 hover:bg-amber-500/10 hover:text-amber-400 bg-transparent"
              >
                <a href="tel:8095028501">
                  <Phone className="mr-2 h-5 w-5" />
                  Llamar Ahora
                </a>
              </Button>
            </div>
          </div>

          {/* Contact form - white background */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="rounded-xl border border-gray-200 bg-white p-8 shadow-lg">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 rounded-full bg-amber-100 p-4">
                    <CheckCircle className="h-12 w-12 text-amber-600" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">¡Solicitud Enviada!</h3>
                  <p className="text-gray-600">Nos pondremos en contacto con usted pronto.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {error && (
                    <div className="flex items-center gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">
                      <AlertCircle className="h-5 w-5 flex-shrink-0" />
                      <p className="text-sm">{error}</p>
                    </div>
                  )}

                  <div className="grid gap-6 md:grid-cols-2">
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-900">
                        Nombre Completo <span className="text-red-700">*</span>
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Su nombre"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="h-12 border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:border-amber-500 focus:ring-amber-500"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-900">
                        Teléfono <span className="text-red-700">*</span>
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(809) 000-0000"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="h-12 border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:border-amber-500 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-900">
                        Correo Electrónico
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="correo@ejemplo.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="h-12 border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:border-amber-500 focus:ring-amber-500"
                      />
                    </div>

                    {/* Service type */}
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-medium text-gray-900">
                        Tipo de Servicio <span className="text-red-700">*</span>
                      </label>
                      <Select
                        value={formState.service}
                        onValueChange={(value) => setFormState({ ...formState, service: value })}
                        required
                      >
                        <SelectTrigger className="h-12 border-gray-300 bg-white text-gray-900 focus:border-amber-500 focus:ring-amber-500">
                          <SelectValue placeholder="Seleccione un servicio" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceTypes.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-900">
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Describa sus necesidades de seguridad..."
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:border-amber-500 focus:ring-amber-500"
                    />
                  </div>

                  {/* Submit button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-14 w-full bg-red-700 text-lg font-semibold text-white shadow-lg shadow-red-700/30 transition-all hover:bg-red-800 hover:shadow-xl hover:shadow-red-700/40"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Enviando...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-5 w-5" />
                        Enviar Solicitud
                      </span>
                    )}
                  </Button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
