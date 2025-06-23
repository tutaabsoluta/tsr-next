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
      className="group p-8 rounded-2xl bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-orange-400 hover:shadow-lg transition-all duration-300"
    >
      <div className="space-y-4">
        <div className="w-12 h-12 rounded-xl bg-green-300 dark:bg-orange-400/20 flex items-center justify-center group-hover:bg-green-200 dark:group-hover:bg-orange-400/30 transition-colors duration-300">
          <img src={icon} className="h-8 w-8" alt="" />
        </div>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white group-hover:text-metallic-patina dark:group-hover:text-orange-300 transition-colors duration-300">
          {heading}
        </h3>

        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{description}</p>

        <Link
          href="/#"
          className="flex items-center text-green-500 dark:text-orange-400 font-medium group-hover:text-green-600 dark:group-hover:text-orange-300 transition-colors duration-300"
        >
          <span className="text-sm">Ver Más</span>
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </motion.div>
  )
}