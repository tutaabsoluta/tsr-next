'use client'

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

export default function HeaderSection() {
    return (
        <section className="min-h-screen overflow-hidden relative">
            {/* Imagen de fondo */}
            <div className="absolute inset-0 z-0">
                <img
                    src="header.jpg"
                    alt="Soldadura de fondo"
                    className="w-full h-full object-cover"
                />
                {/* Capa oscura */}
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            {/* Contenido principal */}
            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="min-h-screen flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6 text-center text-white"
                    >
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="uppercase text-sm font-bold tracking-wider text-slate-300"
                        >
                            Somos Taller de Soldadura Rodríguez
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight"
                        >
                            Cada chispa cuenta.{" "}
                         <br/>   <span className="text-metallic-electricBlue">
                                Cada unión perdura.
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="text-slate-200 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
                        >
                            Especialistas en limpieza láser, reparación de piezas y fabricación de componentes únicos para la industria y el taller.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="pt-4 flex justify-center"
                        >
                            <Link href="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="outline outline-1 outline-metallic-electricBlue bg-metallic-vividBlue/20 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    Contactanos hoy
                                </motion.button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center space-y-2 text-slate-300"
                >
                    <span className="text-sm uppercase tracking-wider">Explorar</span>
                    <ArrowDown className="h-5 w-5" />
                </motion.div>
            </motion.div>
        </section>
    )
}
