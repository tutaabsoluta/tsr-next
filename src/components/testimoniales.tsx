'use client'

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Quote } from "lucide-react"
import { testimoniales } from "@/data/testimonialsData"

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const mainTestimonial = testimoniales[0]
  const sideTestimonials = testimoniales.slice(1, 4)

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto md:px-6">
        <div className="p-4 md:p-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Textual content - 1/3 */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-metallic-arcBlue/20 text-metallic-blue text-sm font-bold">
                    <Quote className="h-4 w-4 mr-2" />
                    Testimoniales
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white my-4">
                    Lo Que Dicen Nuestros Clientes
                  </h2>
                  <p className="text-xl text-slate-300 leading-relaxed">
                    No te quedes solo con nuestra palabra. Esto es lo que opinan nuestros clientes sobre nuestros servicios de soldadura.
                  </p>
                </motion.div>
              </div>

              {/* Testimonials - 2/3 */}
              <div className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Main Testimonial */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gray-900 backdrop-blur-sm rounded-2xl p-4 md:p-8 border border-gray-600 relative overflow-hidden"
                >
                  <div className="absolute top-4 left-4">
                    <Quote className="h-8 w-8 text-metallic-electricBlue/50" />
                  </div>
                  <div className="mb-8">
                    <div className="text-lg font-semibold text-metallic-vividBlue mt-4 mb-8">
                      Calidad Incomparable
                    </div>
                    <p className="text-lg italic leading-relaxed text-slate-300">
                      {mainTestimonial.quote}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div>
                      <h4 className="font-semibold text-white">{mainTestimonial.name}</h4>
                      <p className="text-slate-400 text-sm">{mainTestimonial.title}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Smaller Testimonials (stacked) */}
                <div className="flex flex-col gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-gray-900 backdrop-blur-sm rounded-2xl p-6 border border-gray-600"
                  >
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-metallic-vividBlue mb-3">
                        100% Recomendados
                      </div>
                      <p className="text-sm italic text-slate-300">
                        {sideTestimonials[0]?.quote}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <div>
                        <h5 className="font-medium text-sm text-white">
                          {sideTestimonials[0]?.name}
                        </h5>
                        <p className="text-xs text-slate-400">{sideTestimonials[0]?.title}</p>
                      </div>
                    </div>
                  </motion.div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {sideTestimonials.slice(1).map((testimonial, idx) => (
                      <motion.div
                        key={testimonial.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
                        className={`backdrop-blur-sm rounded-2xl p-4 border ${
                          idx === 1
                            ? "bg-metallic-arcBlue/30 border-orange-400/30"
                            : "bg-gray-900 border-gray-600"
                        }`}
                      >
                        <p className="text-sm italic text-slate-300 mb-3">
                          {testimonial.quote.substring(0, 100)}
                        </p>
                        <div className="flex items-center">
                          <div>
                            <h6 className="font-medium text-xs text-white">{testimonial.name}</h6>
                            <p className="text-xs text-slate-400">{testimonial.title}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
