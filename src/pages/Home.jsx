import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import betawi from "../assets/img/Betawi.png"
import minang from "../assets/img/minang.png"
import dayak from "../assets/img/dayak.png"
import jawa from "../assets/img/jawa.png"
import madura from "../assets/img/Madura.png"
import papua from "../assets/img/papua.png"
import indonesia from "../assets/img/indonesia.png"
import english from "../assets/img/english.png"
import down from "../assets/img/down.png"
import hero from "../assets/img/hero.png"

export default function Home() {
    const navigate = useNavigate();
    const [showDropdown, setShowDropdown] = useState(false);
    
        const languages = [
            {
                name: 'English',
                flag: english
            },
            {
                name: 'Bahasa Indonesia',
                flag: indonesia
            },
        ];
    const [selectedLanguage, setSelectedLanguage] = useState(languages[1].name);
    const [selectedFlag, setSelectedFlag] = useState(languages[1].flag);
    
    const regions = [
        { name: 'Minang', icon: minang },
        { name: 'Jawa', icon: jawa },
        { name: 'Papua', icon: papua },
        { name: 'Dayak', icon:  dayak},
        { name: 'Betawi', icon:  betawi},
        { name: 'Madura', icon:  madura},
    ];

    return (
        <div className='min-h-screen bg-white font-[Nunito]'>
            <div className="flex flex-col mx-45">
                {/* Header */}
                <header className="flex justify-between items-center px-8 py-6">
                    <div className="text-4xl font-bold text-zinc-800">Tutur.</div>
                    
                    <div className="relative">
                        <button
                            onClick={() => setShowDropdown(!showDropdown)}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-50 cursor-pointer transition"
                        >
                            <img className='w-5' src={selectedFlag} alt="" />
                            <span className="text-gray-700 font-semibold">{selectedLanguage}</span>
                            <img className='w-5 font-semibold' src={down} alt="" />
                        </button>
                        
                        {showDropdown && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 z-10">
                            {languages.map((lang) => (
                            <button
                                key={lang.name}
                                onClick={() => {
                                    setSelectedLanguage(lang.name);
                                    setSelectedFlag(lang.flag);
                                    setShowDropdown(false);
                                }}
                                className="w-full flex items-center gap-3 text-left px-4 py-3 hover:bg-gray-100 transition first:rounded-t-lg last:rounded-b-lg"
                            >
                                <img src={lang.flag} alt={lang.name} className="w-5 h-5" />
                                <span>{lang.name}</span>
                            </button>
                            ))}
                            </div>
                        )}
                    </div>
                </header>

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
                            <h1 className="text-4xl text-wrap max-w-md text-center font-bold text-zinc-800 leading-tight">
                                Learn the root, share the culture, connect the region
                            </h1>
                        </div>

                        <div className="w-full items-center flex flex-col gap-8">
                            <button
                                onClick={() => navigate('/login')}
                                className="w-full max-w-xs bg-blue-400 text-white cursor-pointer hover:shadow-none shadow-[0_4px_0_#3e7aa4] font-bold py-4 px-6 rounded-xl transition transform text-xl hover:translate-y-1 duration-300"
                            >
                                START
                            </button>
                            <button
                                onClick={() => navigate('/register')}
                                className="w-full max-w-xs bg-green-500 text-white cursor-pointer hover:shadow-none shadow-[0_4px_0_#3b8702] font-bold py-4 px-6 rounded-xl transition transform text-xl hover:translate-y-1 duration-300"
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
                            <span className="text-gray-700 font-semibold text-sm">{region.name}</span>
                        </div>
                    ))}
                    </div>
                </footer>
            </div>
        </div>
    );
}
