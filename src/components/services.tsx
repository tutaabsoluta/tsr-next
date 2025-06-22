import {  Wrench } from "lucide-react";
import Badge from "./badge";
import ServiceCard from "./ServiceCard";
import { services } from "@/data/servicesData";

export default function Services() {


    return (
        <section className="mt-24 container mx-auto px-4 md:px-6">

            <div>
                <Badge icon={Wrench} text="Servicios" />
                <h2 className="mt-4">Nuestros servicios</h2>
                <p className="text-slate-400">Ofrecemos una amplia gama de servicios de soldadura y fabricación <br />  de metales adaptados a sus necesidades específicas.</p>

            </div>

            {/* Cards */}
            <div className="md:grid md:grid-cols-2 xl:grid-cols-3 place-items-center gap-3">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        heading={service.heading}
                        description={service.description}
                    />
                ))}

                {/* <div className="flex items-center justify-center mt-16">
                    <button className="px-12 bg-metallic-blueSteel py-3 rounded-xl font-bold text-white">Explorar mas sobre nuestros servicios</button>
                </div> */}
            </div>
            {/* //TODO */}
            {/* <div className="text-center mt-12">
                <h4>Tambien ofrecemos mantenimiento en camiones, automoviles y equipo industrial</h4>
            </div> */}

        </section>
    );
}