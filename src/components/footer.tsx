import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-16 bg-gradient-to-br from-slate-50 via-white to-orange-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-orange-900/10">
      <div className="container mx-auto px-6">
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-slate-200/50 dark:border-gray-700/50">
          {/* Contenido principal del footer */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Información de la empresa */}
            <div className="lg:col-span-2 space-y-6">
              <Link href="/" className="inline-block group">
                <img src="logo2.png" alt="Logo de Empresa" className="w-full h-16" />
              </Link>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed max-w-md">
                Servicios profesionales de soldadura y fabricación metálica con tecnología avanzada de limpieza láser. Calidad artesanal en cada proyecto.
              </p>

              {/* Lista de contacto */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-orange-500 dark:text-orange-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-white">123 Calle Metalúrgica</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">Distrito Industrial, Ciudad, País</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-orange-500 dark:text-orange-400 flex-shrink-0" />
                  <Link
                    href="tel:+15551234567"
                    className="text-sm font-medium text-slate-900 dark:text-white hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                  >
                    +1 (555) 123-4567
                  </Link>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-orange-500 dark:text-orange-400 flex-shrink-0" />
                  <Link
                    href="mailto:info@weldingworkshop.com"
                    className="text-sm font-medium text-slate-900 dark:text-white hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                  >
                    info@weldingworkshop.com
                  </Link>
                </div>
              </div>
            </div>

            {/* Enlaces rápidos */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Enlaces Rápidos</h3>
              <ul className="space-y-3">
                {[
                  { label: "Inicio", href: "/" },
                  { label: "Servicios", href: "/services" },
                  { label: "Galería", href: "/gallery" },
                  { label: "Sobre Nosotros", href: "/about" },
                  { label: "Contacto", href: "/contact" },
                  { label: "Preguntas Frecuentes", href: "/faq" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-slate-600 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Servicios */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Nuestros Servicios</h3>
              <ul className="space-y-3">
                {[
                  "Limpieza Láser",
                  "Extensión de Chasis",
                  "Soldadura Personalizada",
                  "Sistemas de Escape",
                  "Fabricación Metálica",
                  "Plataformas Personalizadas",
                ].map((service) => (
                  <li key={service}>
                    <Link
                      href="/services"
                      className="text-slate-600 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300 text-sm"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sección inferior */}
          <div className="pt-8 border-t border-slate-200 dark:border-gray-600">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              {/* Derechos de autor */}
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                © {new Date().getFullYear()} Welding Workshop. Todos los derechos reservados.
              </p>

              {/* Redes sociales */}
              <div className="flex items-center space-x-3">
                {[
                  { icon: Facebook, href: "#", label: "Facebook" },
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: Twitter, href: "#", label: "Twitter" },
                  { icon: Youtube, href: "#", label: "YouTube" },
                ].map(({ icon: Icon, href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    className="p-3 bg-slate-100 dark:bg-gray-700 hover:bg-orange-100 dark:hover:bg-orange-400/20 rounded-xl transition-all duration-300 group border border-slate-200 dark:border-gray-600 hover:border-orange-300 dark:hover:border-orange-400/30"
                    aria-label={label}
                  >
                    <Icon className="h-5 w-5 text-slate-600 dark:text-slate-300 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors duration-300" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
