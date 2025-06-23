// "use client"

// import { useRef } from "react"
// import { motion, useInView } from "framer-motion"
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// const faqData = [
//   {
//     id: "item-1",
//     question: "What makes laser cleaning better than traditional methods?",
//     answer:
//       "Laser cleaning is non-abrasive, environmentally friendly, and preserves the base material. It removes rust, paint, and contaminants without chemicals or media blasting, making it perfect for delicate components and precision work. The process is also faster and produces no secondary waste.",
//   },
//   {
//     id: "item-2",
//     question: "Do you provide warranties on your welding work?",
//     answer:
//       "Yes, we stand behind our craftsmanship with comprehensive warranties. Structural welding comes with a 2-year warranty, while cosmetic work is covered for 1 year. We use certified welding procedures and high-quality materials to ensure long-lasting results.",
//   },
//   {
//     id: "item-3",
//     question: "How long does a typical chassis extension take?",
//     answer:
//       "Chassis extensions typically take 3-5 business days depending on complexity. This includes precise measurements, cutting, welding, reinforcement, and electrical system relocation. We provide detailed timelines during consultation and keep you updated throughout the process.",
//   },
//   {
//     id: "item-4",
//     question: "Are your welders certified and what standards do you follow?",
//     answer:
//       "All our welders are certified professionals with AWS (American Welding Society) certifications. We follow industry standards including AWS D1.1 for structural welding and maintain strict quality control procedures. Our work meets or exceeds all relevant safety and building codes.",
//   },
//   {
//     id: "item-5",
//     question: "Can you work with different types of metals?",
//     answer:
//       "We work with steel, stainless steel, aluminum, and various alloys. Our team has expertise in MIG, TIG, and stick welding techniques, allowing us to handle everything from thin sheet metal to heavy structural components with the appropriate welding process for each material.",
//   },
//   {
//     id: "item-6",
//     question: "Do you offer mobile welding services?",
//     answer:
//       "Yes, we provide mobile welding services for on-site repairs and projects that can't be brought to our workshop. Our mobile units are fully equipped with professional welding equipment and safety gear. Contact us to discuss your specific location and project requirements.",
//   },
//   {
//     id: "item-7",
//     question: "How do you ensure quality and precision in custom fabrication?",
//     answer:
//       "We use precision measuring tools, CAD software for complex projects, and follow strict quality control procedures. Every project undergoes multiple inspection points, and we provide detailed documentation. Our experienced craftsmen combine traditional skills with modern technology for exceptional results.",
//   },
//   {
//     id: "item-8",
//     question: "What information do you need for a project quote?",
//     answer:
//       "For accurate quotes, we need project details including dimensions, materials, drawings or photos, timeline requirements, and intended use. We offer free consultations where we can assess your needs and provide detailed estimates. The more information you provide, the more accurate our quote will be.",
//   },
// ]

// export default function Faq() {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, amount: 0.2 })

//   return (
//     <section className="py-24 bg-gradient-to-br from-background via-secondary/5 to-background">
//       <div className="container mx-auto px-4 md:px-6">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 40 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
//           transition={{ duration: 0.8 }}
//           className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-border/50"
//         >
//           {/* Header */}
//           <div className="text-center mb-16">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//               transition={{ duration: 0.6 }}
//             >
//               <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
//                 Got Questions?
//               </span>
//               <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Frequently Asked Questions</h2>
//               <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
//                 Find answers to common questions about our welding services, processes, and what to expect when working
//                 with us.
//               </p>
//             </motion.div>
//           </div>

//           {/* FAQ Accordion */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="max-w-4xl mx-auto"
//           >
//             <Accordion type="multiple" className="w-full space-y-4">
//               {faqData.map((faq, index) => (
//                 <motion.div
//                   key={faq.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//                   transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
//                 >
//                   <AccordionItem
//                     value={faq.id}
//                     className="border border-border/50 rounded-xl px-6 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-colors duration-300"
//                   >
//                     <AccordionTrigger className="text-left hover:no-underline py-6 text-base md:text-lg font-semibold">
//                       {faq.question}
//                     </AccordionTrigger>
//                     <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
//                       {faq.answer}
//                     </AccordionContent>
//                   </AccordionItem>
//                 </motion.div>
//               ))}
//             </Accordion>
//           </motion.div>

//           {/* CTA at bottom */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.6, delay: 0.8 }}
//             className="mt-16 text-center"
//           >
//             <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
//               <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
//               <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
//                 Can't find the answer you're looking for? Our team is here to help with any specific questions about
//                 your project.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <motion.a
//                   href="/contact"
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors duration-300"
//                 >
//                   Contact Us
//                 </motion.a>
//                 <motion.a
//                   href="tel:+15551234567"
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   className="inline-flex items-center justify-center px-8 py-3 bg-card border border-border/50 rounded-xl font-medium hover:bg-card/80 transition-colors duration-300"
//                 >
//                   Call Now
//                 </motion.a>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }
