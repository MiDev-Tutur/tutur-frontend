import { Repeat } from "lucide-react";

export default function SwapButton({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="
                w-14 h-14 rounded-full bg-linear-to-br 
                from-[#E2E8F0] to-white flex items-center justify-center
                shadow-md hover:shadow-lg transition
                mt-24
            "
        >
            <Repeat size={26} className="text-[#1E293B]" />
        </button>
    );
}