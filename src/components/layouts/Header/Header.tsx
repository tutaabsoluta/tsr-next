'use client';

import { Button } from "@/components/ui/button";
import { useMobile } from "@/hooks/useMobile";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];



export function Header() {

  const pathname = usePathname();
  const isMobile = useMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);



  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link
            href='/'
            className="flex items-center"
          >
            <img
              src="logo.png" alt="Logo de empresa Taller Soldadura Rodriguez"
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
                    className={`relative text-sm font-medium transition-colors hover:text-blue-500 ${pathname === item.href ? 'text-dark-primary' : 'text-muted-foreground'}`}
                  >
                    {item.label}
                    {pathname === item.href && (
                      <motion.div
                        layoutId="underline"
                        className="absolute left-0 right-0 h-0.5 bg-orange-400 bottom-[-5px]"
                      />
                    )}
                  </Link>
                ))
              }
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
