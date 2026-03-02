import { useEffect, useState } from "react";
import Level from "../../components/Dashboard/Level";
import Sidebar from "../../components/Dashboard/Sidebar";   
import { useNavigate } from "react-router-dom";
import LessonHeader from "../../components/Dashboard/LessonHeader";
import LanguageButton from "../../components/Dashboard/LanguageButton";

export default function Learn() {
    const [levels, setLevels] = useState([]);
    const navigate = useNavigate()
    const [isLocal, setIsLocal] = useState(true)
    const [languages, setLanguages] = useState([])
    let id = localStorage.getItem('id')
    let name = localStorage.getItem('name')

    if(!name && !id){
        navigate('/login')
    }

    useEffect(() => {
        let cancelled = false;

        const local = localStorage.getItem("local");
        const hasLocal = local !== null && local !== "false";

        if (hasLocal) {
            const fetchLevels = async () => {
            let step = 1;
            while (true) {
                const type = getTypeByStep(step);
                try {
                const res = await fetch(
                    `http://localhost:8000/api/tutur/course/${type}/${step}/indonesian/${local}`
                );

                if (!res.ok) break;

                const data = await res.json();
                if (!data?.questions?.length) break;

                if (!cancelled) {
                    setLevels(prev => [...prev, data]);
                }

                step++;
                } catch (err) {
                console.error(err);
                break;
                }
            }
            };

            fetchLevels();
            return () => (cancelled = true);

        } else {
            const getData = async () => {
            try {
                const res = await fetch("http://localhost:8000/api/tutur/getalllocallanguage");
                const data = await res.json();
                setLanguages(data.languages);
            } catch (err) {
                console.error(err);
            }
            };

            getData();
            setIsLocal(false);
        }
        }, []); 
    
    const getTypeByStep = (step) =>{
        const mod = step % 3
        
        switch(mod){
            case 1: 
                return "word"
            case 2: 
                return "phrase"
            default:
                return "sentence"
        }
    }
    return (
        <div className="flex h-screen bg-gray-50 overflow-hidden">
            {/* Left Sidebar */}
            <Sidebar></Sidebar>

            {/* Main Content */}
            <div className="flex-1 flex flex-col ml-64 overflow-y-auto">
                {/* Top Stats Bar */}
                <div className="bg-white border-b border-gray-200 px-8 py-4 flex justify-end gap-6">
                <div className="flex items-center gap-2">
                    <span className="text-2xl">🇺🇸</span>
                    <span className="font-semibold text-gray-700">18</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-2xl">👤</span>
                    <span className="font-semibold text-gray-400">0</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-2xl">🌍</span>
                    <span className="font-semibold text-cyan-500">572</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-2xl">❤️</span>
                    <span className="font-semibold text-red-500">5</span>
                </div>
                </div>

                {/* Main Lesson Area */}
                <div className="flex-1 flex gap-8 p-8">
                {/* Center Section */}
                <div className="flex-1 flex flex-col items-center">
                    {/* Lesson Header */}
                    {
                        isLocal? 
                        (
                            <>
                                <LessonHeader/>
                                <div className="w-full max-w-4xl bg-white flex flex-wrap gap-5 items-center rounded-3xl shadow-lg p-8">
                                    {
                                        levels.map(level => (
                                            <Level level={level} />
                                        ))
                                    }
                                </div>
                            </>
                        ):(
                            <div className="w-full max-w-6xl mx-auto p-6">
                                <div className="text-center mb-12">
                                    <h1 className="text-5xl font-bold text-gray-900 mb-3">Choose Your Language</h1>
                                    <p className="text-xl text-gray-600">Select your preferred language to start learning</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                                    {languages.map((language) => (
                                        <LanguageButton language={language}/>
                                    ))}
                                </div>
                            </div>
                        )
                    }
                </div>

                {/* Right Panel */}
                <div className="w-80 space-y-6">
                    {/* Super Card */}
                    <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-200">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-sm font-bold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">SUPER</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Naik level dengan Super</h3>
                    <p className="text-sm text-gray-600 mb-6">Bebas iklan, latihan yang dipersonalisasi, dan Legendaris tak terbatas!</p>
                    <div className="flex justify-center mb-6">
                        <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 via-purple-400 to-pink-400 rounded-2xl flex items-center justify-center text-4xl shadow-lg">✨</div>
                    </div>
                    <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-2xl">DAPATKAN SUPER</button>
                    </div>

                    {/* Liga Rubi */}
                    <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-200">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-bold text-gray-800">Liga Rubi</h3>
                        <button className="text-cyan-500 font-bold">LIHAT LIGA</button>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-4 flex items-center gap-3">
                        <div className="text-3xl">😴</div>
                        <p className="text-sm text-gray-600">Selesaikan satu pelajaran untuk bersaing dengan para pelajar lain di papan skor minggu ini</p>
                    </div>
                    </div>

                    {/* Misi Harian */}
                    <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-200">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-bold text-gray-800">Misi Harian</h3>
                        <button className="text-cyan-500 font-bold">LIHAT SEMUA</button>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-4 flex items-center gap-3">
                        <div className="text-3xl">⚡</div>
                        <div>
                        <p className="font-semibold text-gray-800">Dapatkan 10 XP</p>
                        <div className="w-40 bg-gray-300 rounded-full h-2 mt-2">
                            <div className="bg-orange-400 h-full w-3/5"></div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}
