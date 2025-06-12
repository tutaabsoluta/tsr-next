'use client';

import { Button } from "@/components/ui/button";
import ManualThemeToggle from "@/components/ui/manual-theme-toggle";
import { useMobile } from "@/hooks/useMobile";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/services" },
  { label: "Galería", href: "/gallery" },
  { label: "Acerca", href: "/about" },
  { label: "Contacto", href: "/contact" },
];



export function Navbar() {

  const pathname = usePathname();
  const isMobile = useMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);



  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 mt-4">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link
            href='/'
            className="flex items-center"
          >
            <img
              src="logo2.png" alt="Logo de empresa Taller Soldadura Rodriguez"
              className="max-w-full h-14"
            />
          </Link>

          {isMobile ? (
            <div className="flex items-center">
              <Button
                variant={'ghost'}
                size={'icon'}
                aria-label="Desplegar Menu"
                className="ml-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          ) :
            <nav className="hidden md:flex items-center space-x-4">
              {
                navItems.map(item => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative text-sm font-medium transition-colors hover:text-metallic-patina dark:hover:text-metallic-sparkGold ${pathname === item.href ? 'text-metallic-patina dark:text-metallic-sparkGold' : 'text-muted-foreground text-light-text dark:text-dark-text'}`}
                  >
                    {item.label}
                    {pathname === item.href && (
                      <motion.div
                        layoutId="underline"
                        className="absolute left-0 right-0 h-0.5 bg-metallic-patina dark:bg-metallic-sparkGold bottom-[-5px]"
                      />
                    )}
                  </Link>
                ))
              }
              <ManualThemeToggle/>
            </nav>
          }

        </div>
      </div>

      {/* Links in Mobile */}

      { mobileMenuOpen && (

        <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
          { navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-lg font-medium py-2 ${pathname === item.href ? "text-primary" : "text-muted-foreground"
                }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}

    </header>
  )
}
