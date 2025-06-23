import Header from "@/components/header";
import Nosotros from "@/components/nosotros";
import Services from "@/components/services";
import Testimoniales from "@/components/testimoniales";
import Trabajos from "@/components/trabajos";
import Footer from "@/components/footer";
import { Metadata } from "next";
import Separator from "@/components/separator";

// export const metadata: Metadata = {
//   title: "TSR | Taller de Soldadura Rodríguez",
//   description: "Especialistas en soldadura industrial, limpieza láser, alargado de chasis y más.",
//   keywords: "soldadura, limpieza láser, soldadura industrial, alargado de chasis, plataformas, muflas",
//   openGraph: {
//     title: "TSR | Taller de Soldadura Rodriguez",
//     description: "Servicios de limpieza láser, alargado de chasis, plataformas y más.",
//     siteName:"Taller de Soldadura Rodriguez LTDA",
//     type: "website",
//     // TODO images: [
//     //   {
//     //     url: "https://tu-dominio.com/og-servicios.jpg",
//     //     width: 1200,
//     //     height: 630,
//     //     alt: "Ejemplo de nuestros servicios",

//     //   }
//     // ],
//   },
// };
export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <Services />
      <Trabajos />
      {/* <Separator /> */}
      <Testimoniales />
      <Nosotros />
      <Footer />
    </div>
  );
}

