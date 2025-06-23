"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import ServiceCard from "@/components/ServiceCard"
import { services } from '../data/servicesData'

export default function ServicesPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-16">
      <div className="container mx-auto md:px-6">
        <div className="md:bg-white/90 md:dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-12 md:shadow-xl md:border border-slate-200/50 dark:border-gray-700/50">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-400/30 dark:bg-orange-400/20 text-metallic-patina dark:text-orange-300 text-sm font-medium mb-4">
              <Settings />
                Servicios
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
                Servicios Especializados
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Ofrecemos una gama completa de servicios de soldadura y fabricación de metales diseñados para satisfacer sus necesidades específicas con tecnología de vanguardia y artesanía experta.
              </p>
            </motion.div>
          </div>

          {/* Services Grid */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {services.slice(0, 6).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ServiceCard heading={service.heading} description={service.description} icon={service.icon} />
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="rounded-xl px-8 bg-green-400 hover:bg-green-500 dark:bg-orange-400 dark:hover:bg-orange-500 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/services">
                  Ver todos los Servicios
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-xl px-8 border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
