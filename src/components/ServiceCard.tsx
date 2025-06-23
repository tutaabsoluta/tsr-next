"use client"

import { MoveRight } from "lucide-react"
import { motion } from "framer-motion"

interface ServiceCardProps {
  heading: string
  description: string
}

export default function ServiceCard({ heading, description }: ServiceCardProps) {
  return (
    <div className="p-[1px] rounded-xl w-full h-auto mt-12">
      <motion.article
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col items-start justify-center gap-6 w-full h-full rounded-xl bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 p-4 group hover:bg-slate-800/95 hover:border-orange-500/70 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 relative overflow-hidden"
      >
        {/* Industrial background effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-500/20 to-transparent" />
        </div>

        {/* Welding sparks effect */}
        <motion.div
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-4 right-4 w-1 h-1 bg-orange-400 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />

        <div className="bg-slate-700/50 border border-orange-500/30 rounded-md h-14 w-14 flex items-center justify-center group-hover:border-orange-500/50 transition-all duration-300 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <img src="laser.svg" alt="" className="w-8 h-8 relative z-10" />
        </div>

        <h5 className="text-slate-100 font-semibold group-hover:text-orange-400 transition-colors duration-300">
          {heading}
        </h5>

        <p className="text-slate-300 text-base max-w-xs group-hover:text-slate-200 transition-colors duration-300">
          {description}
        </p>

        <motion.button
          whileHover={{ x: 3 }}
          transition={{ duration: 0.2 }}
          className="text-orange-400 font-medium hover:underline flex items-center gap-2 group-hover:text-orange-300 transition-colors duration-300"
        >
          Ver más
          <motion.div whileHover={{ x: 2 }} transition={{ duration: 0.2 }}>
            <MoveRight width={20} height={20} />
          </motion.div>
        </motion.button>
      </motion.article>
    </div>
  )
}
