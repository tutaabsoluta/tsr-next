import { MoveRight } from "lucide-react";

interface ServiceCardProps {
    heading: string
    description: string
}

export default function ServiceCard({ heading, description }: ServiceCardProps) {
    return (
        <div className="p-[1px] rounded-xl w-full h-auto mt-12">
            <article className=" flex flex-col items-start justify-center gap-6 w-full h-full rounded-xl bg-indigo-100/90 dark:bg-[#192c36] p-4">

                <div className="bg-indigo-700/20 dark:bg-[#253648] rounded-md h-14 w-14 flex items-center justify-center">
                    <img src="laser.svg" alt="" className="w-8 h-8" />
                </div>

                <h5 className="text-indigo-800 dark:text-orange-400 font-semibold">{heading}</h5>



                <p className="text-gray-400 dark:text-gray-300 text-base max-w-xs">
                    {description}
                </p>

            <button className="text-indigo-700 dark:text-orange-200 font-medium hover:underline flex items-center gap-2">
            Ver más <MoveRight width={20} height={20} />
            </button>

            </article>
        </div>
    );
}