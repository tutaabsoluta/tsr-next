import Link from "next/link"
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {

  const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      {...props}
    >
      <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
    </svg>
  );

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
                    <p className="text-sm font-medium text-slate-900 dark:text-white">San Rafael, Vazquez Coronado</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">San José, Costa Rica</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-orange-500 dark:text-orange-400 flex-shrink-0" />
                  <Link
                    href="tel:+50622290887"
                    className="text-sm font-medium text-slate-900 dark:text-white hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                  >
                    +506 2229 0887
                  </Link>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-orange-500 dark:text-orange-400 flex-shrink-0" />
                  <Link
                    href="mailto:info@weldingworkshop.com"
                    className="text-sm font-medium text-slate-900 dark:text-white hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                  >
                    t_rodriguezltda@hotmail.com
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
                © {new Date().getFullYear()} Taller de Soldadura Rodriguez. Todos los derechos reservados.
              </p>

              {/* Redes sociales */}
              <div className="flex items-center space-x-3">
                {[
                  { icon: Facebook, href: "https://www.facebook.com/p/Taller-de-Soldadura-Rodr%C3%ADguez-Ltda-100057187370330/?locale=es_LA", label: "Facebook" },
                  { icon: Instagram, href: "https://instagram.com/taller_s_r", label: "Instagram" },
                  { icon: TikTokIcon, href: "https://tiktok.com/@taller.de.soldadu6", label: "Twitter" },
                ].map(({ icon: Icon, href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    className="transition-all duration-300 group"
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
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
