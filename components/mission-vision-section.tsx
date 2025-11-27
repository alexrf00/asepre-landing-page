import { Target, Eye } from "lucide-react"

export function MissionVisionSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-[#1a0000]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Mission */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#8B0000] to-amber-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300" />
            <div className="relative bg-black/80 p-8 md:p-10 rounded-2xl border border-amber-500/20 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[#8B0000] rounded-xl">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Misión</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Brindar servicios de seguridad preventiva con altos estándares de
                <span className="text-amber-400 font-medium"> profesionalismo, disciplina y ética</span>, protegiendo
                vidas, propiedades y comunidades.
              </p>
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 text-amber-400 text-sm">
                  <div className="w-2 h-2 bg-amber-400 rounded-full" />
                  Compromiso con la excelencia
                </div>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-[#8B0000] rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300" />
            <div className="relative bg-black/80 p-8 md:p-10 rounded-2xl border border-amber-500/20 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-amber-500 rounded-xl">
                  <Eye className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white">Visión</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Ser la empresa de seguridad referente en la región, reconocida por nuestra
                <span className="text-amber-400 font-medium">
                  {" "}
                  calidad operativa, excelencia en el servicio y confiabilidad absoluta
                </span>
                .
              </p>
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 text-amber-400 text-sm">
                  <div className="w-2 h-2 bg-amber-400 rounded-full" />
                  Líderes en seguridad preventiva
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
