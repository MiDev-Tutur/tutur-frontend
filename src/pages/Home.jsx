import { useNavigate } from 'react-router-dom';
import betawi from "../assets/img/Betawi.png"
import minang from "../assets/img/minang.png"
import dayak from "../assets/img/dayak.png"
import jawa from "../assets/img/jawa.png"
import madura from "../assets/img/Madura.png"
import papua from "../assets/img/papua.png"
import hero from "../assets/img/hero.png"
import Header from '../components/Auth/Header';

export default function Home() {
    const navigate = useNavigate();
    
    const regions = [
        { name: 'Minang', icon: minang },
        { name: 'Jawa', icon: jawa },
        { name: 'Papua', icon: papua },
        { name: 'Dayak', icon:  dayak},
        { name: 'Betawi', icon:  betawi},
        { name: 'Madura', icon:  madura},
    ];

    return (
        <div className='min-h-screen bg-white font-[Rubik]'>
            <div className="flex flex-col mx-45">
                {/* Header */}
                <Header></Header>

                {/* Main Content */}
                <div className="flex-1 flex items-center justify-between px-8 py-12">
                    {/* Left Side - Illustrations */}
                    <div className="flex-1 flex justify-center items-center">
                        <div className="relative w-full flex justify-center items-center">
                            <img src={hero} className='w-96' alt="" />
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="flex-1 flex flex-col justify-center items-start gap-8">
                        <div className='w-full flex justify-center'>
                            <h1 className="text-3xl text-wrap max-w-md text-center font-medium text-zinc-800 leading-tight">
                                Learn the root, share the culture, connect the region
                            </h1>
                        </div>

                        <div className="w-full items-center flex flex-col gap-8">
                            <button
                                onClick={() => navigate('/login')}
                                className="w-full max-w-xs  bg-[#00d26a] text-white cursor-pointer hover:shadow-none shadow-[0_4px_0_#018041] font-medium py-4 px-6 rounded-xl transition transform text-xl hover:translate-y-1 duration-300"
                            >
                                START
                            </button>
                            <button
                                onClick={() => navigate('/register')}
                                className="w-full max-w-xs bg-[#0074ba] text-white cursor-pointer hover:shadow-none shadow-[0_4px_0_#02456d] font-medium py-4 px-6 rounded-xl transition transform text-xl hover:translate-y-1 duration-300"
                            >
                                SIGN UP
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-y-2 border-gray-200'>
                {/* Footer - Regional Categories */}
                <footer className="mx-45 h-max">
                    <div className="flex justify-between items-center flex-wrap px-8 py-2">
                    {regions.map((region, index) => (
                        <div key={index} className="flex items-center cursor-pointer hover:opacity-80 transition">
                            <img src={region.icon} className="w-17"/>
                            <span className="text-gray-700 font-medium">{region.name}</span>
                        </div>
                    ))}
                    </div>
                </footer>
            </div>
        </div>
    );
}
