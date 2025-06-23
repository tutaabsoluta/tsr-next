"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BotonWhatsapp() {
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/50686602987", "_blank")
    setIsOpen(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                className="bg-[#304d3b] rounded-lg shadow-lg p-4 mb-4 w-72"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-white">Escríbenos</h3>
                  <Button variant="ghost" size="icon" className="h-6 w-6 text-white" onClick={() => setIsOpen(false)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-white text-sm text-muted-foreground mb-4">
                  ¿Tienes alguna consulta? Chatea con nosotros de forma directa por WhatsApp.
                </p>
                <Button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white flex items-center justify-center gap-2"
                >
                  <img src="/whatsapp.svg" alt="WhatsApp" className="h-4 w-4" />
                  Abrir Chat
                </Button>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="bg-[#25D366] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <img src="/whatsapp.svg" alt="WhatsApp" className="h-6 w-6" />
            )}
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
