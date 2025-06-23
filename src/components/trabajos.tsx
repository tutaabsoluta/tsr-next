"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, Hammer } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"

const jobsData = [
  {
    id: 1,
    image: "/slider1.jpg",
    title: "Extensión personalizada de chasis de camión",
    description: "Extendimos el chasis 2 metros para carga especial.",
  },
  {
    id: 2,
    image: "/slider2.jpg",
    title: "Restauración con limpieza láser",
    description: "Usamos limpieza láser para restaurar una máquina antigua.",
  },
  {
    id: 3,
    image: "/slider3.jpg",
    title: "Fabricación de mataburros de alta resistencia",
    description: "Fabricamos un mataburros robusto para todoterreno.",
  },
  {
    id: 4,
    image: "/slider4.jpg",
    title: "Construcción de plataforma industrial",
    description: "Construimos una plataforma de acceso para manufactura.",
  },
  {
    id: 5,
    image: "/slider5.jpg",
    title: "Sistema de escape de alto rendimiento",
    description: "Diseñamos un escape deportivo con acero inoxidable curvado.",
  },
];


export default function OurJobs() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on("select", () => setSelectedIndex(emblaApi.selectedScrollSnap()))
  }, [emblaApi])

  return (
    <section className="py-16">
      <div className="container mx-auto md:px-6">
        <div className="md:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-2 md:p-12 md:shadow-xl md:borderborder-gray-700/50">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-400/20 text-orange-300 text-sm font-medium mb-4">
              <Hammer />
                Nuestros Trabajos
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                Proyectos Destacados
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Conocé nuestros proyectos de soldadura y reparación, reflejo de nuestro compromiso con la calidad, la precisión y el servicio personalizado.
              </p>
            </motion.div>
          </div>

          {/* Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
              <div className="flex">
                {jobsData.map((job) => (
                  <div key={job.id} className="flex-[0_0_100%] px-2">
                    <div className="bg-gray-700 rounded-2xl overflow-hidden">
                      <div className="relative h-[400px] md:h-[500px]">
                        <Image src={job.image || "/placeholder.svg"} alt={job.title} fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                          <h3 className="text-xl md:text-3xl font-bold text-white mb-4">{job.title}</h3>
                          <p className="text-white/90 leading-relaxed text-sm md:text-base">{job.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="flex justify-between items-center mt-8">
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={scrollPrev}
                  className="rounded-xl border-gray-600"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={scrollNext}
                  className="rounded-xl border-gray-600"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex gap-2">
                {scrollSnaps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === selectedIndex ? "bg-orange-400 w-8" : "bg-gray-600"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
