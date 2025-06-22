"use client"

import { useCallback, useEffect, useState, useRef } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, Hammer } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import Badge from "./badge"

const jobsData = [
  {
    id: 1,
    image: "/slider.jpg",
    title: "Extensión de Chasis de Camión",
    description: "Alargamos el chasis para carga especializada, manteniendo la seguridad estructural.",
  },
  {
    id: 2,
    image: "/slider1.jpg",
    title: "Restauración con Láser",
    description: "Limpieza precisa con láser que recupera maquinaria antigua sin dañarla.",
  },
  {
    id: 3,
    image: "/slider2.jpg",
    title: "Fabricación de Bull Bar",
    description: "Diseño resistente con soportes para luces LED y winch, listo para lo extremo.",
  },
  {
    id: 4,
    image: "/slider3.jpg",
    title: "Plataforma Industrial",
    description: "Estructura segura y modular para acceso en planta de producción.",
  },
  {
    id: 5,
    image: "/slider4.jpg",
    title: "Sistema de Escape Deportivo",
    description: "Escape de acero inoxidable optimizado para rendimiento y sonido.",
  },
  {
    id: 6,
    image: "/slider5.jpg",
    title: "Góndola de Transporte",
    description: "Estructura reforzada para cargas pesadas y fácil manejo de equipos.",
  },
]

const PARALLAX_FACTOR = 1.2

export default function OurJobs() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
  })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const [parallaxValues, setParallaxValues] = useState<number[]>([])
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)
  const ref = useRef(null)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index)
    },
    [emblaApi],
  )

  const startAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
    }

    autoplayRef.current = setInterval(() => {
      if (emblaApi) {
        emblaApi.scrollNext()
      }
    }, 10000)
  }, [emblaApi])

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  const onScroll = useCallback((emblaApi: any) => {
    const engine = emblaApi.internalEngine()
    const scrollProgress = emblaApi.scrollProgress()
    const styles = emblaApi.scrollSnapList().map((scrollSnap: number, snapIndex: number) => {
      let diffToTarget = scrollSnap - scrollProgress
      const slidesInSnap = engine.slideRegistry[snapIndex]

      slidesInSnap.forEach((slideIndex: number) => {
        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem: any) => {
            const target = loopItem.target()

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target)

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress)
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress)
              }
            }
          })
        }
      })

      return diffToTarget * (-1 * PARALLAX_FACTOR) * 100
    })
    setParallaxValues(styles)
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    onScroll(emblaApi)
    emblaApi.on("reInit", onInit)
    emblaApi.on("reInit", onSelect)
    emblaApi.on("select", onSelect)
    emblaApi.on("scroll", onScroll)
    emblaApi.on("reInit", onScroll)

    startAutoplay()

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
      }
    }
  }, [emblaApi, onInit, onSelect, onScroll, startAutoplay])

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="p-8 md:p-12"
        >
          {/* Header */}
          <div className=" mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge icon={Hammer} text="Trabajos" />
            <h2 className="font-bold tracking-tight mt-4">
              Trabajos que generan confianza
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
              Explora algunos de nuestros trabajos donde mostramos nuestra expertiz en soldadura e ingenieria industrial
            </p>
          </motion.div>
          </div>

          {/* Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
              <div className="flex">
                {jobsData.map((job, index) => (
                  <div key={job.id} className="flex-[0_0_100%] px-2">
                    <div className="rounded-xl overflow-hidden border border-border/50 shadow-lg">
                      <div className="relative h-[500px] md:h-[600px] overflow-hidden">
                        <div
                          className="absolute inset-0 w-[120%] h-[120%]"
                          style={{
                            transform: `translateX(${parallaxValues[index] || 0}%)`,
                          }}
                        >
                          <Image
                            src={job.image || "/placeholder.svg"}
                            alt={job.title}
                            fill
                            className="object-cover"
                            priority={index === 0}
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-metallic-blueSteel/95 via-transparent to-transparent" />

                        {/* Content overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                          <h3 className="text-white text-2xl md:text-3xl font-bold mb-4 text-foreground">{job.title}</h3>
                          <p className="text-white text-muted-foreground leading-relaxed max-w-3xl">{job.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-between items-center mt-8">
              {/* Left side - Navigation arrows */}
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={scrollPrev}
                  className="rounded-full border-border/50 hover:border-primary/50 hover:bg-primary/10"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Previous slide</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={scrollNext}
                  className="rounded-full border-border/50 hover:border-primary/50 hover:bg-primary/10"
                >
                  <ChevronRight className="h-4 w-4" />
                  <span className="sr-only">Next slide</span>
                </Button>
              </div>

              {/* Right side - Bullets */}
              <div className="flex gap-2">
                {scrollSnaps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === selectedIndex
                        ? "bg-metallic-patina scale-110"
                        : "bg-slate-300 hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
