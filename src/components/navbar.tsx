"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, Home, Wrench, ImageIcon, User, Phone } from "lucide-react"
import { useMobile } from "@/hooks/useMobile"
import ManualThemeToggle from "./manualThemeToggle"

const navItems = [
  { label: "Inicio", href: "/", icon: Home },
  { label: "Servicios", href: "/services", icon: Wrench },
  { label: "Galeria", href: "/gallery", icon: ImageIcon },
  { label: "Nosotros", href: "/about", icon: User },
  { label: "Contacto", href: "/contact", icon: Phone },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
<header
  className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ${
    isScrolled
      ? "bg-background/80 backdrop-blur-xl shadow-xl border-green-300/80 dark:border-orange-300/80 py-2"
      : "bg-transparent border-transparent py-4"
  }`}
>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <img src="logo2.png" alt="Logo de empresa de soldadura" className="w-full h-12" />
          </Link>

          {isMobile ? (
            <div className="flex items-center space-x-2">
              <ManualThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                className="relative z-10"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          ) : (
            <div className="flex items-center space-x-8">
              <nav className="hidden md:flex items-center space-x-2">
                {navItems.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="relative flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 group"
                      >
                        <Icon className="h-4 w-4 text-muted-foreground transition-colors duration-300 group-hover:text-orange-500" />
                        <span className="text-sm font-medium text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                          {item.label}
                        </span>
                        {/* Clean hover effect */}
                        <span className="absolute inset-0 z-[-1] rounded-full opacity-0 group-hover:opacity-100 bg-gradient-to-r from-orange-500/10 to-red-500/10 transition-opacity duration-300" />
                      </Link>
                    </motion.div>
                  )
                })}
              </nav>

              <div className="flex items-center space-x-4">
                <ManualThemeToggle />

              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.4 }}
          className="md:hidden bg-background/95 backdrop-blur-xl border-t border-metallic-weldingOrange/50"
        >
          <div className="container mx-auto px-4 py-6">
            {navItems.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center space-x-3 py-3 text-lg font-medium hover:text-orange-500 transition-colors duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      )}
    </header>
  )
}
