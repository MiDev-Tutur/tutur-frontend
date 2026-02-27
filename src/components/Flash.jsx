import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Flash({message}) {
    
    if (!message) return null;

    useEffect(() => {
        AOS.init({
            duration: 100,
        })
    },[])   

    return (
        <div data-aos="fade-in" className="absolute right-1/2 translate-x-1/2 top-5 min-w-xs flex items-center gap-4 px-8 py-4 bg-[#f25f5c] rounded-full shadow-lg text-white max-w-md">

            {/* Floating icon */}
            <div className="absolute -top-3 -left-3 w-11 h-11 bg-[#c83c3c] rounded-full flex items-center justify-center text-lg font-bold">
                ✖
            </div>

            {/* Content */}
            <div className="flex flex-col">
                <span className="text-xl font-semibold">Oh snap!</span>
                <span className="text-sm opacity-90">
                {message}
                </span>
            </div>

            {/* Close button */}
            <button
                // onClick={onClose}
                className="ml-auto text-xl font-bold hover:opacity-80 transition"
            >
                ✕
            </button>
        </div>
    );
}