"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, Hammer } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import Badge from "./badge"

const jobsData = [
  {
    id: 1,
    image: "/img1.jpg",
    title: "Custom Truck Chassis Extension",
    description:
      "Extended a commercial delivery truck chassis by 2 meters to accommodate specialized cargo requirements. The project involved precise measurements, structural reinforcement, and complete electrical system relocation while maintaining vehicle safety standards.",
  },
  {
    id: 2,
    image: "/img2.jpg",
    title: "Laser Cleaning Restoration",
    description:
      "Restored a vintage industrial machine using our advanced laser cleaning technology. Removed decades of rust, paint, and corrosion without damaging the original metal surface, bringing the equipment back to operational condition.",
  },
  {
    id: 3,
    image: "/img3.jpg",
    title: "Heavy-Duty Bull Bar Fabrication",
    description:
      "Designed and fabricated a custom heavy-duty bull bar for an off-road vehicle. Features integrated LED light mounts, winch plate, and reinforced mounting points. Built to withstand extreme conditions while maintaining vehicle aesthetics.",
  },
  {
    id: 4,
    image: "/img4.jpg",
    title: "Industrial Platform Construction",
    description:
      "Constructed a multi-level access platform for a manufacturing facility. The platform includes safety railings, non-slip surfaces, and modular design for easy maintenance access. Built to handle heavy equipment loads safely.",
  },
  {
    id: 5,
    image: "/img5.jpg",
    title: "Performance Exhaust System",
    description:
      "Custom-built performance exhaust system for a sports car using mandrel-bent stainless steel tubing. Optimized for both performance gains and sound quality while maintaining emissions compliance.",
  },
  {
    id: 6,
    image: "/img6.webp",
    title: "Transport Gondola Fabrication",
    description:
      "Fabricated a specialized gondola for heavy equipment transport. Features reinforced stress points, removable side panels, and custom tie-down points. Designed for maximum payload capacity and durability.",
  },
]

const PARALLAX_FACTOR = 1.2

export default function OurJobs() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const [parallaxValues, setParallaxValues] = useState<number[]>([])
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)

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

    // Start autoplay when component mounts
    startAutoplay()

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
      }
    }
  }, [emblaApi, onInit, onSelect, onScroll, startAutoplay])

  return (
    <section className="px-4 md:px-6">
      <div className="container mx-auto">
        <div className="mb-16">
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

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {jobsData.map((job, index) => (
                <div key={job.id} className="flex-[0_0_100%] md:flex-[0_0_80%] lg:flex-[0_0_60%] pl-4">
                  <div className="bg-card/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-border/50 shadow-lg">
                    <div className="relative h-80 overflow-hidden">
                      <div
                        className="absolute inset-0 w-[120%] h-[120%]"
                        style={{
                          transform: `translateX(${parallaxValues[index] || 0}%)`,
                        }}
                      >
                        <Image src={job.image || "/placeholder.svg"} alt={job.title} fill className="object-cover" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    </div>

                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-4 text-foreground">{job.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{job.description}</p>
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
                className="rounded-full border-border/50 hover:border-cyan-400 hover:bg-gray-700"
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous slide</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={scrollNext}
                className="rounded-full border-border/50 hover:border-cyan-400 hover:bg-gray-700"
              >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next slide</span>
              </Button>
            </div>

            {/* Right side - Dot indicators */}
            <div className="flex gap-2">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === selectedIndex
                      ? "bg-cyan-400"
                      : "bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}