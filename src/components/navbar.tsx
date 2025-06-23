"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

import { Menu, X, Home, Wrench, ImageIcon, User, Phone, ArrowDown } from "lucide-react"
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
  const pathname = usePathname()
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (

    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-3" : "py-6"}`}>
      <div className="container mx-auto px-6">
        <div
          className={`bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-200/50 dark:border-gray-700/50 transition-all duration-300 ${isScrolled ? "px-6 py-3" : "px-8 py-4"
            }`}
        >
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
                  className="rounded-xl bg-slate-100 dark:bg-gray-700 hover:bg-orange-100 dark:hover:bg-orange-400/20 border border-slate-200 dark:border-gray-600"
                >
                  {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-6">
                <nav className="hidden md:flex items-center space-x-2">
                  {navItems.map((item) => {
                    const Icon = item.icon
                    const isActive = pathname === item.href
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${isActive
                            ? "bg-orange-100 dark:bg-orange-400/20 text-orange-600 dark:text-orange-300 border border-orange-200 dark:border-orange-400/30"
                            : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-gray-700 border border-transparent"
                          }`}
                      >
                        <Icon className="h-4 w-4" />
                        <span>{item.label}</span>
                      </Link>
                    )
                  })}
                </nav>
                <div className="flex items-center space-x-3">

                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="container mx-auto px-6 mt-4"
          >
            <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-200/50 dark:border-gray-700/50 p-6">
              <div className="space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${isActive
                          ? "bg-orange-100 dark:bg-orange-400/20 text-orange-600 dark:text-orange-300"
                          : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-gray-700"
                        }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </Link>
                  )
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}