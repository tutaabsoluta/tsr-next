

import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-muted/20 via-background to-muted/30 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-6">
                <span className="text-2xl font-bold tracking-tight">
                  Welding<span className="text-primary">Workshop</span>
                </span>
              </Link>
              <p className="text-muted-foreground mb-8 max-w-md leading-relaxed">
                Professional welding and metal fabrication services with cutting-edge laser cleaning technology. Quality
                craftsmanship for every project.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="p-3 bg-secondary/10 hover:bg-primary/10 rounded-xl transition-colors duration-300 group"
                >
                  <Facebook className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="#"
                  className="p-3 bg-secondary/10 hover:bg-primary/10 rounded-xl transition-colors duration-300 group"
                >
                  <Instagram className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="#"
                  className="p-3 bg-secondary/10 hover:bg-primary/10 rounded-xl transition-colors duration-300 group"
                >
                  <Twitter className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="#"
                  className="p-3 bg-secondary/10 hover:bg-primary/10 rounded-xl transition-colors duration-300 group"
                >
                  <Youtube className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="sr-only">YouTube</span>
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallery"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm leading-relaxed">
                    123 Metal Works Street
                    <br />
                    Industrial District
                    <br />
                    City, Country
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <Link
                    href="tel:+15551234567"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    +1 (555) 123-4567
                  </Link>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <Link
                    href="mailto:info@weldingworkshop.com"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    info@weldingworkshop.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Welding Workshop. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}