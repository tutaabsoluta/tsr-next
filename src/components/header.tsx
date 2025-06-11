
export default function NamePage() {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Content */}
            <div className="container px-4 md:px-6 relative z-10 space-y-6 text-center max-w-7xl">
                <p className="uppercase text-metallic-ironGray">Somos Taller de Soldadura Rodriguez</p>
                <h1 className="tracking-tighter dark:text-white">Confianza y calidad <span className="text-metallic-patina dark:text-cyan-400 font-black">en cada punto de soldadura</span></h1>
                <p className="text-2xl text-slate-500">Solucionamos problemas críticos de soldadura con servicios hechos a medida: limpieza láser, reparación de piezas y <br /> fabricación de componentes personalizados
                </p>

                <div className="flex items-center justify-center">
                    <button className="bg-metallic-patina px-6 py-3 rounded-md font-bold hover:bg-cyan-900 transition-all duration-300 text-white">Comunicate con nosotros</button>
                </div>
            </div>
        </div>
    );
}