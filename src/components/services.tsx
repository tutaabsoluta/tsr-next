import { Badge } from "./ui/badge";

export default function Services() {
    return (
        <section className="mt-24 px-32 ">

            <div>
                <Badge variant={'default'}>Servicios</Badge>
                <h2 className="mt-4">Nuestros servicios</h2>
                <p className="text-slate-400">Ofrecemos una amplia gama de servicios de soldadura y fabricación <br />  de metales adaptados a sus necesidades específicas.</p>

            </div>


            <div className="grid grid-cols-3 place-items-center">
                {/* Limpieza laser */}
                <article className="flex flex-col items-center justify-center gap-6 outline outline-2 outline-gray-300 w-80 h-64 rounded-xl mt-12 text-center bg-slate-50 dark:bg-gray-800">

                    <div className="bg-gray-500 outline outline-1 rounded-full h-14 w-14 flex items-center justify-center">
                        <img src="laser.svg" alt="" className="w-8 h-8" />
                    </div>

                    <h4>Limpieza laser</h4>

                    <p className="text-slate-400">Advanced non-abrasive cleaning technology for metal surfaces</p>
                </article>
                {/* Extension chasis */}
                <article className=" flex flex-col items-center justify-center gap-6 outline outline-2 outline-gray-300 w-80 h-64 rounded-xl mt-12 text-center bg-slate-50 dark:bg-gray-800">

                    <div className="bg-gray-500 outline outline-1 rounded-full h-14 w-14 flex items-center justify-center">
                        <img src="chasis.svg" alt="" className="w-8 h-8" />
                    </div>

                    <h4>Extension de chasis</h4>

                    <p className="text-slate-400">Advanced non-abrasive cleaning technology for metal surfaces</p>
                </article>

                {/* Plataformas y carretas */}
                <article className=" flex flex-col items-center justify-center gap-6 outline outline-2 outline-gray-300 w-80 h-64 rounded-xl mt-12 text-center bg-slate-50 dark:bg-gray-800">

                    <div className="bg-gray-500 outline outline-1 rounded-full h-14 w-14 flex items-center justify-center">
                        <img src="plataforma.svg" alt="" className="w-8 h-8" />
                    </div>

                    <h4>Plataformas y carretas</h4>

                    <p className="text-slate-400">Advanced non-abrasive cleaning technology for metal surfaces</p>
                </article>

                <article className=" flex flex-col items-center justify-center gap-6 outline outline-2 outline-gray-300 w-80 h-64 rounded-xl mt-12 text-center bg-slate-50 dark:bg-gray-800">

                    <div className="bg-gray-500 outline outline-1 rounded-full h-14 w-14 flex items-center justify-center">
                        <img src="bumper.svg" alt="" className="w-8 h-8" />
                    </div>

                    <h4>Mataburros, bumpers y estribos</h4>

                    <p className="text-slate-400">Advanced non-abrasive cleaning technology for metal surfaces</p>
                </article>

                <article className=" flex flex-col items-center justify-center gap-6 outline outline-2 outline-gray-300 w-80 h-64 rounded-xl mt-12 text-center bg-slate-50 dark:bg-gray-800">

                    <div className="bg-gray-500 outline outline-1 rounded-full h-14 w-14 flex items-center justify-center">
                        <img src="mufla.svg" alt="" className="w-8 h-8" />
                    </div>

                    <h4>Sistemas de escape</h4>

                    <p className="text-slate-400">Advanced non-abrasive cleaning technology for metal surfaces</p>
                </article>

                <article className=" flex flex-col items-center justify-center gap-6 outline outline-2 outline-gray-300 w-80 h-64 rounded-xl mt-12 text-center bg-slate-50 dark:bg-gray-800">

                    <div className="bg-gray-500 outline outline-1 rounded-full h-14 w-14 flex items-center justify-center">
                        <img src="soldadora.svg" alt="" className="w-8 h-8" />
                    </div>

                    <h4>Soldadura personalizada</h4>

                    <p className="text-slate-400">Advanced non-abrasive cleaning technology for metal surfaces</p>
                </article>
            </div>

            <div className="flex items-center justify-center mt-16">
                <button className="px-12 bg-metallic-blueSteel py-3 rounded-xl font-bold text-white">Explorar mas sobre nuestros servicios</button>
            </div>

            {/* //TODO */}
            {/* <div className="text-center mt-12">
                <h4>Tambien ofrecemos mantenimiento en camiones, automoviles y equipo industrial</h4>
            </div> */}

        </section>
    );
}