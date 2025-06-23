"use client"

import { motion } from "framer-motion"

export default function Separator() {
  return (
    <div className="w-full py-12 flex justify-center overflow-hidden">
      <motion.div
        className="relative w-full max-w-6xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* Base metal line - curved path */}
        <svg className="w-full h-8" viewBox="0 0 1200 32" preserveAspectRatio="none">
          <motion.path
            d="M0,16 Q150,8 300,16 T600,16 T900,16 T1200,16"
            stroke="url(#baseGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />

          {/* Weld bead - thicker curved path */}
          <motion.path
            d="M0,16 Q150,8 300,16 T600,16 T900,16 T1200,16"
            stroke="url(#weldGradient)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 3, ease: "easeInOut", delay: 0.2 }}
            style={{
              filter: "drop-shadow(0 0 4px rgba(251, 146, 60, 0.4))",
            }}
          />

          {/* Heat glow effect */}
          <motion.path
            d="M0,16 Q150,8 300,16 T600,16 T900,16 T1200,16"
            stroke="url(#glowGradient)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 3.5, ease: "easeInOut", delay: 0.5 }}
            style={{
              filter: "blur(2px)",
            }}
          />

          <defs>
            {/* Base metal gradient */}
            <linearGradient id="baseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="20%" stopColor="#64748b" />
              <stop offset="80%" stopColor="#64748b" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>

            {/* Orange weld bead gradient */}
            <linearGradient id="weldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="10%" stopColor="#ea580c" />
              <stop offset="25%" stopColor="#fb923c" />
              <stop offset="50%" stopColor="#fed7aa" />
              <stop offset="75%" stopColor="#fb923c" />
              <stop offset="90%" stopColor="#ea580c" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>

            {/* Glow effect gradient */}
            <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="20%" stopColor="rgba(251, 146, 60, 0.3)" />
              <stop offset="50%" stopColor="rgba(251, 146, 60, 0.6)" />
              <stop offset="80%" stopColor="rgba(251, 146, 60, 0.3)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating sparks animation */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-orange-400 rounded-full"
              style={{
                left: `${15 + i * 15}%`,
                top: "50%",
              }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                y: [0, -10, -20],
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1.5,
                delay: 1 + i * 0.3,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}