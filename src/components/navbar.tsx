"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

import { Menu, X, Home, Wrench, ImageIcon, User, Phone } from "lucide-react"
import { useMobile } from "@/hooks/useMobile"

const navItems = [
  { label: "Inicio", href: "/", icon: Home },
  { label: "Servicios", href: "/services", icon: Wrench },
  { label: "Galería", href: "/gallery", icon: ImageIcon },
  { label: "Nosotros", href: "/about", icon: User },
  { label: "Contacto", href: "/contact", icon: Phone },
]

export default function Navbar() {

  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (

     <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-gray-900/90 backdrop-blur-xl shadow-lg border-b border-gray-700/50 py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center group">
          <img src="logo2.png" alt="" className="w-full h-14" />
            </Link>

            {isMobile ? (
              <div className="flex items-center space-x-3">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="rounded-xl"
                >
                  {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-8">
                <nav className="hidden md:flex items-center space-x-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium text-metallic-weldingOrange hover:text-white hover:bg-slate-800 transition-all duration-200"
                    >
                      <item.icon className="h-4 w-4 text-metallic-electricBlue" />
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </nav>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-slate-200/50 dark:border-gray-700/50"
          >
            <div className="container mx-auto px-6 py-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center space-x-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </header>
  );
}