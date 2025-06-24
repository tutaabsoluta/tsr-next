'use client'

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import ServiceCard from "@/components/ServiceCard"
import { services } from '../data/servicesData'

export default function ServicesPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div ref={ref} className=" mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-metallic-arcBlue/20 text-metallic-blue text-sm font-bold mb-4">
              <Settings />
              Servicios
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-800 mb-6">
              Servicios Especializados
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl  leading-relaxed">
              Ofrecemos una gama completa de servicios de soldadura y fabricación de metales diseñados para satisfacer sus necesidades específicas con tecnología de vanguardia y artesanía experta.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <motion.div
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
              <ServiceCard
                heading={service.heading}
                description={service.description}
                icon={service.icon}
              />
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
              className="rounded-xl px-8 bg-metallic-vividBlue hover:bg-sky-500 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/services">
                Ver todos los Servicios
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-xl px-8 border-slate-600 hover:bg-slate-100 text-slate-700"
            >
              <Link href="/contact">
                Cotiza tu proyecto
              </Link>
            </Button>
          </div>
        </motion.div>
        
      </div>
    </section>
  )
}
