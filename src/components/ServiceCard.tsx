"use client"

import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

interface ServiceCardProps {
  heading: string
  description: string
  icon: string
}

export default function ServiceCard({ heading, description, icon }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group p-4 md:p-8 rounded-2xl bg-[#e8edf0] border hover:shadow-lg transition-all duration-300"
    >
      <div className="space-y-4">
        {/* Icon Container */}
        <div className="w-12 h-12 rounded-full bg-metallic-blue flex items-center justify-center">
          <img src={icon} className="h-8 w-8" alt="" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-black">
          {heading}
        </h3>

        {/* Description */}
        <p className="text-slate-600 leading-relaxed">{description}</p>

        {/* CTA Link */}
        <Link
          href="/#"
          className="flex items-center text-metallic-arcBlue font-medium "
        >
          <span className="text-sm">Ver Más</span>
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </motion.div>
  )
}
