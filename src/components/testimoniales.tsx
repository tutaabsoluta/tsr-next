"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Quote, Star } from "lucide-react"
import { testimoniales } from "@/lib/data"
import Badge from "./badge"

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  // Select specific testimonials for the bento layout
  const mainTestimonial = testimoniales[0]
  const sideTestimonials = testimoniales.slice(1, 4)

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          // className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-border/50"
        >
          {/* Header */}
          <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <Badge icon={Quote} text="Testimoniales" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 mt-4">Lo que dicen nuestros clientes</h2>
            <p className="max-w-2xl text-slate-400">
              No se fíe solo de nuestras palabras. Esto es lo que nuestros clientes opinan sobre nuestros servicios
            </p>
          </motion.div>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Large testimonial - Left side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 relative overflow-hidden"
            >
              <div className="absolute top-4 left-4">
                <Quote className="h-8 w-8 text-primary/20" />
              </div>

              <div className="mb-6">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-lg font-semibold mb-4">Client Satisfaction Rate</div>
                <p className="text-lg italic leading-relaxed">"{mainTestimonial.quote}"</p>
              </div>

              <div className="flex items-center">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={mainTestimonial.avatar || "/placeholder.svg"}
                    alt={mainTestimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{mainTestimonial.name}</h4>
                  <p className="text-muted-foreground text-sm">{mainTestimonial.title}</p>
                </div>
              </div>
            </motion.div>

            {/* Right side - 3 smaller testimonials */}
            <div className="space-y-6">
              {/* Top testimonial */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50"
              >
                <div className="mb-4">
                  <div className="text-2xl font-bold text-primary mb-1">50+</div>
                  <div className="text-sm font-semibold mb-3">Projects Completed</div>
                  <p className="text-sm italic">"{sideTestimonials[0]?.quote.substring(0, 80)}..."</p>
                </div>
                <div className="flex items-center">
                  <div className="relative h-8 w-8 rounded-full overflow-hidden mr-3">
                    <Image
                      src={sideTestimonials[0]?.avatar || "/placeholder.svg"}
                      alt={sideTestimonials[0]?.name || "Client"}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h5 className="font-medium text-sm">{sideTestimonials[0]?.name}</h5>
                    <p className="text-xs text-muted-foreground">{sideTestimonials[0]?.title}</p>
                  </div>
                </div>
              </motion.div>

              {/* Bottom two testimonials */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-card/50 backdrop-blur-sm rounded-2xl p-4 border border-border/50"
                >
                  <p className="text-sm italic mb-3">"{sideTestimonials[1]?.quote.substring(0, 60)}..."</p>
                  <div className="flex items-center">
                    <div className="relative h-6 w-6 rounded-full overflow-hidden mr-2">
                      <Image
                        src={sideTestimonials[1]?.avatar || "/placeholder.svg"}
                        alt={sideTestimonials[1]?.name || "Client"}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h6 className="font-medium text-xs">{sideTestimonials[1]?.name}</h6>
                      <p className="text-xs text-muted-foreground">{sideTestimonials[1]?.title}</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-primary/10 backdrop-blur-sm rounded-2xl p-4 border border-primary/20"
                >
                  <p className="text-sm italic mb-3">"{sideTestimonials[2]?.quote.substring(0, 60)}..."</p>
                  <div className="flex items-center">
                    <div className="relative h-6 w-6 rounded-full overflow-hidden mr-2">
                      <Image
                        src={sideTestimonials[2]?.avatar || "/placeholder.svg"}
                        alt={sideTestimonials[2]?.name || "Client"}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h6 className="font-medium text-xs">{sideTestimonials[2]?.name}</h6>
                      <p className="text-xs text-muted-foreground">{sideTestimonials[2]?.title}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Bottom stats section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-border/50"
          >
            <div className="flex items-center mb-4 sm:mb-0">
              <div className="flex items-center mr-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
                <span className="ml-2 font-semibold">4.8</span>
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">200+</span> satisfied clients love our services
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
