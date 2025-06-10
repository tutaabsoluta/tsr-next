


"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

const stats = [
  {
    id: 1,
    value: 12,
    label: "Years of Experience",
    suffix: "+",
    description: "of precision welding and metal fabrication excellence",
  },
  {
    id: 2,
    value: 500,
    label: "Projects Completed",
    suffix: "+",
    description: "successfully delivered with outstanding quality",
  },
  {
    id: 3,
    value: 50,
    label: "Skilled Craftsmen",
    suffix: "+",
    description: "dedicated professionals committed to excellence",
  },
  {
    id: 4,
    value: 100,
    label: "Client Satisfaction",
    suffix: "%",
    description: "reflects our commitment to quality service",
  },
]

export default function Nosotros() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    if (isInView) {
      stats.forEach((stat, index) => {
        const duration = 2000 // 2 seconds
        const frameDuration = 1000 / 60 // 60fps
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

        return () => clearInterval(counter)
      })
    }
  }, [isInView])

  return (
    <section className="py-24 bg-gradient-to-br from-muted/30 via-background to-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-border/50"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <span className="text-sm font-medium text-primary uppercase tracking-wider">About us</span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight"
                >
                  Our Welding Workshop Journey
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-muted-foreground text-lg leading-relaxed"
                >
                  Founded with a passion for precision metalwork, our workshop has grown from humble beginnings to
                  become a trusted name in welding and fabrication services.
                </motion.p>
              </div>

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
                      <span className="text-3xl md:text-4xl font-bold text-primary">{counts[index]}</span>
                      <span className="text-2xl md:text-3xl font-bold text-primary">{stat.suffix}</span>
                    </div>
                    <h3 className="font-semibold text-foreground text-sm md:text-base">{stat.label}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{stat.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-secondary/20 to-background border border-border/50">
                <Image
                  src="/taller.webp"
                  alt="Welding workshop team at work"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
              </div>

              {/* Floating accent elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full blur-xl" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}