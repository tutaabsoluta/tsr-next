
export default function NamePage() {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">

            {/* Background image */}
            <div className="absolute inset-0 z-0 right-0">
                <img src="header-bg.jpg" className="w-full h-full object-cover" alt="" />
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            </div>

            {/* Content */}
            <div className="container px-4 md:px-6 relative z-10 space-y-6">

                <h1 className="font-black">Soldadura de Precision y <br /> <span className="text-cyan-300 font-black tracking-tight"> Limpieza Laser</span></h1>
                <p>Expertos en soldadura industrial, muflas, portones, gondolas para vagonetas, plataformas y mas...</p>

                <div className="flex items-center gap-4">
                    <button className="outline outline-1 outline-cyan-400 px-4 py-3 rounded-md font-bold hover:bg-cyan-900 transition-all duration-300">Explora nuestros servicios</button>
                    <button className="outline outline-1 outline-white px-4 py-3 rounded-md font-bold hover:bg-cyan-500 transition-all duration-300">Contactanos</button>
                </div>
            </div>
        </div>
    );
}