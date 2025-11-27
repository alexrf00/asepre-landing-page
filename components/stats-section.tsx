"use client"

import { useEffect, useRef, useState } from "react"
import { Shield, Users, Clock, Award } from "lucide-react"

const stats = [
  {
    icon: Clock,
    value: 16,
    suffix: "+",
    label: "Años de trayectoria",
    description: "Protegiendo familias y empresas",
  },
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Clientes activos",
    description: "Confían en nosotros",
  },
  {
    icon: Shield,
    value: 24,
    suffix: "/7",
    label: "Servicio continuo",
    description: "Sin interrupciones",
  },
  {
    icon: Award,
    value: 100,
    suffix: "%",
    label: "Profesionales",
    description: "Personal certificado",
  },
]

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 2000
          const steps = 60
          const increment = value / steps
          let current = 0

          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)

          return () => clearInterval(timer)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, hasAnimated])

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-bold text-foreground tabular-nums">
      {count}
      {suffix}
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="relative py-24 bg-secondary/30 border-y border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-3 p-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-4">
                <stat.icon className="w-7 h-7" />
              </div>
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <div>
                <p className="text-foreground font-semibold">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
