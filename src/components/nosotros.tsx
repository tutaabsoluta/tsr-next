"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

const stats = [
  {
    id: 1,
    value: 40,
    label: "Años de experiencia",
    suffix: "+",
    description: "en soldadura de precisión y fabricación metálica.",
  },
  {
    id: 2,
    value: 5000,
    label: "Proyectos completados",
    suffix: "+",
    description: "entregados con éxito a nuestros clientes.",
  },
  {
    id: 3,
    value: 100,
    label: "Satisfacción del cliente",
    suffix: "%",
    description: "que refleja nuestro compromiso con un servicio de calidad.",
  },
  {
    id: 4,
    value: 250,
    label: "Empresas atendidas",
    suffix: "+",
    description: "de sectores como industria, construcción y más.",
  },
];

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    if (isInView) {
      stats.forEach((stat, index) => {
        const duration = 2000
        const frameDuration = 1000 / 60
        const totalFrames = Math.round(duration / frameDuration)
        const increment = stat.value / totalFrames

        let currentCount = 0
        let frame = 0

        const counter = setInterval(() => {
          frame++
          currentCount += increment

          if (frame === totalFrames) {
            clearInterval(counter)
            currentCount = stat.value
          }

          setCounts((prevCounts) => {
            const newCounts = [...prevCounts]
            newCounts[index] = Math.floor(currentCount)
            return newCounts
          })
        }, frameDuration)
      })
    }
  }, [isInView])

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-slate-200/50 dark:border-gray-700/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-400/20 text-orange-600 dark:text-orange-300 text-sm font-medium">
                  Nosotros
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                  Quienes Somos
                </h2>

                <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                  Fundado con una pasión por el trabajo metálico de precisión, nuestro taller ha crecido desde sus inicios humildes hasta convertirse en un nombre de confianza en servicios de soldadura y fabricación.
                </p>
              </motion.div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex items-baseline space-x-1">
                      <span className="text-3xl md:text-4xl font-bold text-orange-500 dark:text-orange-300">
                        {counts[index]}
                      </span>
                      <span className="text-2xl md:text-3xl font-bold text-orange-500 dark:text-orange-300">
                        {stat.suffix}
                      </span>
                    </div>
                    <h3 className="font-semibold text-slate-900 dark:text-white text-sm md:text-base">{stat.label}</h3>
                    <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {stat.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-2xl overflow-hidden bg-slate-100 dark:bg-gray-700">
                <Image
                  src="/taller.webp"
                  alt="Welding workshop team"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
