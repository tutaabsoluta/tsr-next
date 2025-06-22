
export default function NamePage() {
    return (
        <div className="min-h-screen flex items-center justify-center gap-32">
            {/* Content */}
            <div className=" z-10 space-y-4 mt-32">
                <p className="uppercase text-metallic-ironGray text-sm">Somos Taller de Soldadura Rodriguez</p>
                <h1 className="tracking-tighter dark:text-white text-slate-800">Confianza y calidad <span className="text-metallic-patina dark:text-cyan-400 font-black">en cada punto de soldadura</span></h1>
                <p className="text-slate-500">Solucionamos problemas críticos de soldadura con servicios hechos a medida: limpieza láser, reparación de piezas y <br /> fabricación de componentes personalizados
                </p>

                <div className="">
                    <button className="bg-metallic-blueSteel px-6 py-3 rounded-md font-bold hover:bg-cyan-900 transition-all duration-300 text-white mt-4">Comunicate con nosotros</button>
                </div>
            </div>


        </div>
    );
}