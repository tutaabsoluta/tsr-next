interface Testimonial {
  id: number
  name: string
  title: string
  quote: string
}


export const testimoniales: Testimonial[] = [
  {
    id: 1,
    name: "Marcos Lee",
    title: "Gerente de Mueblería Diamond",
    quote:
      "Las extensiones de chasis que realizaron para nuestros camiones de reparto quedaron perfectas. La calidad del trabajo y la atención al detalle fueron excepcionales, y completaron el proyecto antes del plazo acordado."
  },
  {
    id: 2,
    name: "Renato Umaña",
    title: "Vendedor de Vehiculos",
    quote:
      "Usamos sus servicios de limpieza láser para restaurar piezas de autos clásicos, y los resultados han sido impresionantes. Es mucho más preciso que los métodos tradicionales y no daña el metal original."
  },
  {
    id: 3,
    name: "Leonardo Ballena",
    title: "Supervisor de Proyecto, Soluciones Industriales",
    quote:
      "Las plataformas que fabricaron mejoraron nuestras operaciones y superaron lo que esperábamos en calidad y funcionalidad."
  },
  {
    id: 4,
    name: "Víctor Rodríguez",
    title: "Director de Operaciones, TSR",
    quote:
      "Gracias a su experiencia resolvimos un problema clave en producción. Entregaron justo lo que necesitábamos, a tiempo y sin pasarse del presupuesto."
  }
]
