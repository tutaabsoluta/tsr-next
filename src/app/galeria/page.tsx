import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TSR | Galeria",
  description: "Especialistas en soldadura industrial, limpieza láser, alargado de chasis y más.",
  keywords: "soldadura, limpieza láser, soldadura industrial, alargado de chasis, plataformas",
  openGraph: {
    title: "TSR | Galeria",
    description: "Servicios de limpieza láser, alargado de chasis, plataformas y más.",
    siteName:"Taller de Soldadura Rodriguez LTDA",
    type: "website",
    // TODO images: [
    //   {
    //     url: "https://tu-dominio.com/og-servicios.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Ejemplo de nuestros servicios",

    //   }
    // ],
  },
};


export default function GaleryPage() {
  return (
    <div>
      <h1>Nuestros Trabajos</h1>
    </div>
  );
}