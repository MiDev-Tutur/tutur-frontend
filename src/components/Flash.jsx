import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Flash({message, type}) {
    
    if (!message) return null;

    useEffect(() => {
        AOS.init({
            duration: 100,
        })
    },[])   

    return (
        <div data-aos="fade-in" className={`absolute right-1/2 translate-x-1/2 top-5 min-w-xs flex items-center gap-4 px-8 py-4 ${type == "error" ?"bg-[#f25f5c]":"bg-[#00d26a]"} rounded-full shadow-lg text-white max-w-md`}>

            {/* Floating icon */}
            <div className={`absolute -top-3 -left-3 w-11 h-11 ${type == "error"?"bg-[#c83c3c]":"bg-[#00a151]"} rounded-full flex items-center justify-center text-lg font-bold`}>
                {type == "error"?"✖":"✔"}
            </div>

            {/* Content */}
            <div className="flex flex-col">
                <span className="text-xl font-semibold">{type == 'error' ? 'Oh snap!':'Great one'}</span>
                <span className="text-sm opacity-90">
                    {message}
                </span>
            </div>
        </div>
    );
}