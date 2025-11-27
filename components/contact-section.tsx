"use client"

import type React from "react"

import { useState } from "react"
import { Send, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { submitContactForm } from "@/app/actions/contact"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [servicio, setServicio] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const form = e.currentTarget
    const formData = new FormData(form)

    const result = await submitContactForm(formData)

    if (result.success) {
      setSubmitted(true)
    } else {
      setError(result.error || "Error al enviar")
    }

    setIsSubmitting(false)
  }

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#8B0000]/10 px-4 py-2 rounded-full mb-4">
            <Mail className="w-4 h-4 text-[#8B0000]" />
            <span className="text-[#8B0000] font-medium text-sm">Contáctenos</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Solicite una Cotización</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Complete el formulario y nos pondremos en contacto con usted a la brevedad posible.
          </p>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gradient-to-br from-[#8B0000] to-[#6B0000] p-8 rounded-2xl text-white">
              <h3 className="text-xl font-bold mb-6">Información de Contacto</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white/10 rounded-lg">
                    <Phone className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-sm text-white/70 mb-1">Teléfono</div>
                    <a href="tel:8095028501" className="hover:text-amber-400 transition-colors">
                      (809) 502-8501
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white/10 rounded-lg">
                    <Mail className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-sm text-white/70 mb-1">Email</div>
                    <a href="mailto:asepre.srl@gmail.com" className="hover:text-amber-400 transition-colors">
                      asepre.srl@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-sm text-white/70 mb-1">Dirección</div>
                    <p className="text-sm">Vanessa Ramírez Faña, Esquina Proyecto I, Cerros de Gurabo II</p>
                  </div>
                </div>
              </div>

              {/* Decorative element */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-sm text-white/70">
                  Disponibles <span className="text-amber-400 font-semibold">24/7</span> para sus necesidades de
                  seguridad
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">¡Mensaje Enviado!</h3>
                  <p className="text-gray-600">Nos pondremos en contacto pronto.</p>
                  <Button onClick={() => setSubmitted(false)} variant="outline" className="mt-4">
                    Enviar otro mensaje
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                      {error}
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nombre">Nombre Completo *</Label>
                      <Input
                        id="nombre"
                        name="nombre"
                        placeholder="Su nombre"
                        required
                        className="border-gray-200 focus:border-[#8B0000] focus:ring-[#8B0000]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telefono">Teléfono *</Label>
                      <Input
                        id="telefono"
                        name="telefono"
                        type="tel"
                        placeholder="(809) 000-0000"
                        required
                        className="border-gray-200 focus:border-[#8B0000] focus:ring-[#8B0000]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Correo Electrónico *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="correo@ejemplo.com"
                      required
                      className="border-gray-200 focus:border-[#8B0000] focus:ring-[#8B0000]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="servicio">Tipo de Servicio Requerido</Label>
                    <input type="hidden" name="servicio" value={servicio} />
                    <Select value={servicio} onValueChange={setServicio}>
                      <SelectTrigger className="border-gray-200 focus:border-[#8B0000] focus:ring-[#8B0000]">
                        <SelectValue placeholder="Seleccione un servicio" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Vigilantes / Puestos Fijos">Vigilantes / Puestos Fijos</SelectItem>
                        <SelectItem value="Patrullaje Preventivo">Patrullaje Preventivo</SelectItem>
                        <SelectItem value="Escoltas / Guardaespaldas">Escoltas / Guardaespaldas</SelectItem>
                        <SelectItem value="Otro">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mensaje">Mensaje</Label>
                    <Textarea
                      id="mensaje"
                      name="mensaje"
                      placeholder="Describa sus necesidades de seguridad..."
                      rows={4}
                      className="border-gray-200 focus:border-[#8B0000] focus:ring-[#8B0000] resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#8B0000] hover:bg-[#6B0000] text-white py-6 text-lg"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
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
                        <Send className="w-5 h-5" />
                        Enviar Solicitud
                      </span>
                    )}
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    * Campos requeridos. Sus datos están protegidos y no serán compartidos.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
