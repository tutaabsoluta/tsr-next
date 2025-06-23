"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Quote, Star } from "lucide-react"
import { testimoniales } from "@/lib/data"

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const mainTestimonial = testimoniales[0]
  const sideTestimonials = testimoniales.slice(1, 4)

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-slate-200/50 dark:border-gray-700/50">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8 }}
          >
            {/* Header */}
            <div className="text-center mb-16 space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-400/20 text-orange-600 dark:text-orange-300 text-sm font-medium mb-4">
                  <Quote className="h-4 w-4 mr-2" />
                  Testimoniales
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
                  Lo Que Dicen Nuestros Clientes
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
                  No te quedes solo con nuestra palabra. Esto es lo que opinan nuestros clientes sobre nuestros servicios de soldadura.
                </p>
              </motion.div>
            </div>

            {/* Bento Grid Layout - Equal Width Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Left Column - Main Testimonial */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-slate-50 dark:bg-gray-700 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 dark:border-gray-600 relative overflow-hidden"
              >
                <div className="absolute top-6 left-6">
                  <Quote className="h-8 w-8 text-orange-500/20 dark:text-orange-400/20" />
                </div>

                <div className="mb-8">
                  <div className="text-4xl font-bold text-orange-500 dark:text-orange-400 mb-2">100%</div>
                  <div className="text-lg font-semibold text-slate-900 dark:text-white mb-6">
                    Client Satisfaction Rate
                  </div>
                  <p className="text-lg italic leading-relaxed text-slate-600 dark:text-slate-300">
                    "{mainTestimonial.quote}"
                  </p>
                </div>

                <div className="flex items-center">
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">{mainTestimonial.name}</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">{mainTestimonial.title}</p>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Multiple Testimonials */}
              <div className="flex flex-col gap-6">
                {/* Top Testimonial */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-slate-50 dark:bg-gray-700 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-gray-600"
                >
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-orange-500 dark:text-orange-400 mb-1">500+</div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white mb-3">Projects Completed</div>
                    <p className="text-sm italic text-slate-600 dark:text-slate-300">
                      "{sideTestimonials[0]?.quote.substring(0, 80)}..."
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div>
                      <h5 className="font-medium text-sm text-slate-900 dark:text-white">
                        {sideTestimonials[0]?.name}
                      </h5>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{sideTestimonials[0]?.title}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Bottom Two Testimonials */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-slate-50 dark:bg-gray-700 backdrop-blur-sm rounded-2xl p-4 border border-slate-200 dark:border-gray-600"
                  >
                    <p className="text-sm italic text-slate-600 dark:text-slate-300 mb-3">
                      "{sideTestimonials[1]?.quote.substring(0, 60)}..."
                    </p>
                    <div className="flex items-center">

                      <div>
                        <h6 className="font-medium text-xs text-slate-900 dark:text-white">
                          {sideTestimonials[1]?.name}
                        </h6>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{sideTestimonials[1]?.title}</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="bg-orange-100 dark:bg-orange-400/20 backdrop-blur-sm rounded-2xl p-4 border border-orange-200 dark:border-orange-400/30"
                  >
                    <p className="text-sm italic text-slate-600 dark:text-slate-300 mb-3">
                      "{sideTestimonials[2]?.quote.substring(0, 60)}..."
                    </p>
                    <div className="flex items-center">
                      <div>
                        <h6 className="font-medium text-xs text-slate-900 dark:text-white">
                          {sideTestimonials[2]?.name}
                        </h6>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{sideTestimonials[2]?.title}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Bottom Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-slate-200 dark:border-gray-600"
            >
              <div className="flex items-center mb-4 sm:mb-0">
                <div className="flex items-center mr-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-orange-400 dark:fill-orange-300 text-orange-400 dark:text-orange-300"
                    />
                  ))}
                  <span className="ml-2 font-semibold text-slate-900 dark:text-white">4.9</span>
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300">
                  <span className="font-semibold text-slate-900 dark:text-white">200+</span> satisfied clients
                </div>
              </div>
              <button className="text-sm font-medium text-orange-500 dark:text-orange-400 hover:text-orange-600 dark:hover:text-orange-300 transition-colors">
                View all reviews →
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
