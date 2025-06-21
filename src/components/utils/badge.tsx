import { type LucideIcon } from "lucide-react";

interface BadgeProps {
    icon: LucideIcon
    text: string
}



export default function Badge({ icon: Icon, text }: BadgeProps) {
    return (
        <div className="border-2 flex items-center gap-2 border-metallic-patina/60 bg-metallic-patina/20 text-metallic-patina font-bold w-fit px-2 py-[2px] rounded-lg text-sm">
            <Icon width={18} height={18} />
            { text }
        </div>
    );
}