import { MoveRight } from "lucide-react";

interface ServiceCardProps {
    heading: string
    description: string
}

export default function ServiceCard({  heading, description }: ServiceCardProps) {
    return (
        <div className="p-[1px] rounded-xl bg-gradient-to-br from-slate-600/80 via-slate-800/60 to-slate-500/80 dark:from-cyan-600/80 dark:via-cyan-800/60 dark:to-cyan-500/80 w-80 h-60 mt-12">
            <article className="flex flex-col items-start justify-center gap-6 w-full h-full rounded-xl text-center bg-slate-50 dark:bg-gray-900 p-4">
                <div>
                    <div className="flex items-center gap-4">
                        <div className="bg-slate-400/20 rounded-xl h-14 w-14 flex items-center justify-center">
                            <img src="laser.svg" alt="" className="w-8 h-8" />
                        </div>

                        <h4 className="dark:text-white font-semibold">{ heading }</h4>
                    </div>
                </div>

                <p className="text-gray-400 text-base max-w-xs">
                    { description }
                </p>

                <button className=" px-3 py-2  text-black dark:text-white flex items-center justify-center gap-2">Ver mas
                    <MoveRight width={20} height={20} />
                </button>

            </article>
        </div>
    );
}