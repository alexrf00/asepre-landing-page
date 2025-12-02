import { Target, Eye } from "lucide-react"
import { GoldDivider } from "@/components/gold-divider"

export function MissionVisionSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-32">
      {/* Decorative elements */}
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

      {/* Geometric patterns */}
      <div className="absolute right-0 top-0 h-64 w-64 -translate-y-1/2 translate-x-1/2 rounded-full border border-amber-500/10" />
      <div className="absolute bottom-0 left-0 h-48 w-48 -translate-x-1/2 translate-y-1/2 rounded-full border border-red-700/10" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
            Nuestro Compromiso
          </span>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">Misión y Visión</h2>
          <GoldDivider className="mt-6" />
        </div>

        {/* Two columns */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Misión */}
          <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-gray-50 p-8 transition-all hover:border-amber-500/50 hover:shadow-lg md:p-10">
            {/* Corner accent */}
            <div className="absolute right-0 top-0 h-16 w-16">
              <div className="absolute right-0 top-0 h-full w-full bg-gradient-to-bl from-red-700/10 to-transparent" />
              <div className="absolute right-4 top-4">
                <Target className="h-6 w-6 text-red-700" />
              </div>
            </div>

            <div className="relative">
              <div className="mb-6 flex items-center gap-4">
                <div className="rounded-full bg-red-700/10 p-4">
                  <Target className="h-8 w-8 text-red-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">Misión</h3>
              </div>
              <div className="h-px w-16 bg-amber-500" />
<p className="mt-6 text-pretty text-lg leading-relaxed text-gray-700">
                Brindar servicios de seguridad preventiva con altos estándares de profesionalismo, disciplina y ética,
                protegiendo vidas, propiedades y comunidades.
              </p>
            </div>
          </div>

          {/* Visión */}
          <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-gray-50 p-8 transition-all hover:border-amber-500/50 hover:shadow-lg md:p-10">
            {/* Corner accent */}
            <div className="absolute right-0 top-0 h-16 w-16">
              <div className="absolute right-0 top-0 h-full w-full bg-gradient-to-bl from-amber-500/10 to-transparent" />
              <div className="absolute right-4 top-4">
                <Eye className="h-6 w-6 text-amber-600" />
              </div>
            </div>

            <div className="relative">
              <div className="mb-6 flex items-center gap-4">
                <div className="rounded-full bg-amber-500/10 p-4">
                  <Eye className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">Visión</h3>
              </div>
              <div className="h-px w-16 bg-amber-500" />
<p className="mt-6 text-pretty text-lg leading-relaxed text-gray-700">
                Ser la empresa de seguridad referente en la región, reconocida por nuestra calidad operativa, excelencia
                en el servicio y confiabilidad absoluta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
