import Link from "next/link";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

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

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/p/Taller-de-Soldadura-Rodr%C3%ADguez-Ltda-100057187370330/?locale=es_LA",
      label: "Facebook",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/taller_s_r",
      label: "Instagram",
    },
    {
      icon: TikTokIcon,
      href: "https://tiktok.com/@taller.de.soldadu6",
      label: "TikTok",
    },
  ];

  const quickLinks = [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/services" },
    { label: "Galería", href: "/gallery" },
    { label: "Sobre Nosotros", href: "/about" },
    { label: "Contacto", href: "/contact" },
  ];

  return (
    <footer className="bg-[#22262F] text-white px-6 md:px-12 pt-12 pb-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

        {/* Contacto y ubicación */}
        <div className="space-y-8">
          <div>
            <h3 className="text-base font-semibold mb-4">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-metallic-electricBlue" />
                <Link
                  href="tel:+50622290887"
                  className="text-sm text-slate-400 hover:text-metallic-electricBlue transition-colors"
                >
                  +506 2229 0887
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-metallic-electricBlue" />
                <Link
                  href="mailto:t_rodriguezltda@hotmail.com"
                  className="text-sm text-slate-400 hover:text-metallic-electricBlue transition-colors"
                >
                  t_rodriguezltda@hotmail.com
                </Link>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-metallic-electricBlue mt-0.5" />
                <div>
                  <p className="text-sm text-slate-400">San Rafael, Vázquez de Coronado</p>
                  <p className="text-sm text-slate-400">San José, Costa Rica</p>
                </div>
              </div>
            </div>
          </div>

          <div>

          </div>
        </div>

        {/* Enlaces rápidos */}
        <div>
          <h3 className="text-base font-semibold mb-4">Enlaces Rápidos</h3>
          <ul className="space-y-3">
            {quickLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-slate-400 text-sm hover:text-metallic-electricBlue transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Info empresa */}
        <div>
          <h3 className="text-base font-semibold mb-4">Más acerca de nosotros</h3>
          <p className="text-slate-400 text-sm max-w-sm mb-6">
            Somos un taller de soldadura comprometido con la calidad y la satisfacción del cliente, ofreciendo soluciones personalizadas para empresas y particulares.
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="bg-[#22262F] outline outline-1 outline-slate-600 text-slate-200 rounded-full p-2 hover:text-metallic-electricBlue transition-colors"
              >
                <Icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Footer base */}
      <div className="mt-12 border-t border-slate-700 pt-6 text-center text-sm text-slate-300">
        © {new Date().getFullYear()} Taller de Soldadura Rodríguez. Todos los derechos reservados.
      </div>
    </footer>
  );
}
