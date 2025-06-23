'use client'


import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"



export default function HeaderSection() {


    return (
        <>

            {/* Industrial Typography Hero Section */}
            <section className=" min-h-screen overflow-hidden ">
                {/* Industrial SVG Background Shapes */}


                {/* Content using your template structure */}
                <div className="container mx-auto px-4 md:px-6">
                    <div className="min-h-screen flex items-center justify-center gap-32">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="z-10 space-y-4 md:mt-32"
                        >
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="uppercase text-slate-400 text-sm font-bold tracking-wider"
                            >
                                Somos Taller de Soldadura Rodriguez
                            </motion.p>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter dark:text-slate-100 leading-none"
                            >
                                Confianza y calidad{" "}
                                <span className="text-metallic-patina dark:text-metallic-weldingOrange">
                                    en cada punto de soldadura
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="text-slate-500 dark:text-slate-300 text-lg md:text-xl leading-relaxed max-w-3xl"
                            >
                                Solucionamos problemas críticos de soldadura con servicios hechos a medida: limpieza láser, reparación
                                de piezas y <br className="hidden md:block" />
                                fabricación de componentes personalizados
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                className="pt-4"
                            >
                                <button
                                    className="outline outline-1 outline-metallic-patina bg-metallic-patina/30 hover:bg-metallic-patina-300/70 dark:outline-metallic-weldingOrange px-8 py-2 rounded-xl dark:bg-orange-300/10 dark:hover:bg-orange-300/30 duration-300 transition-all ease-out"
                                >
                                    <Link href="/contact">Comunicate con nosotros</Link>
                                </button>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                        className="flex flex-col items-center space-y-2 dark:text-slate-400"
                    >
                        <span className="text-sm uppercase tracking-wider">Explorar</span>
                        <ArrowDown className="h-5 w-5" />
                    </motion.div>
                </motion.div>
            </section>
        </>
    )
}
