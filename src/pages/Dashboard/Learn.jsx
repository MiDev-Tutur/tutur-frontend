import { useEffect, useState, useRef } from "react";
import Level from "../../components/Dashboard/Level";
import Sidebar from "../../components/Dashboard/Sidebar";   
import { useNavigate } from "react-router-dom";
import LessonHeader from "../../components/Dashboard/LessonHeader";
import LanguageButton from "../../components/Dashboard/LanguageButton";
import Navbar from "../../components/Dashboard/Navbar";

export default function Learn() {

    const [levels, setLevels] = useState([]);
    const [isLocal, setIsLocal] = useState(true);
    const [languages, setLanguages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedLocal, setSelectedLocal] = useState(
        localStorage.getItem("local")
    );

    const navigate = useNavigate();
    const cancelled = useRef(false);

    const id = localStorage.getItem("id");
    const name = localStorage.getItem("name");

    useEffect(() => {
        if (!name || !id) {
            navigate("/login");
        }
    }, [id, name, navigate]);


    const fetchLevels = async (localLang) => {

        try {

            const dominant = localStorage.getItem("dominant");

            const res = await fetch(
                `http://127.0.0.1:8000/api/tutur/course/${dominant}/${localLang}`
            );

            if (!res.ok) {
                throw new Error("Failed to fetch levels");
            }

            const data = await res.json();

            if (cancelled.current) {
                setLevels(data.courses);
                setLoading(false);
            }

        } catch (err) {
            console.error(err);

            if (!cancelled.current) {
                setLoading(false);
            }
        }
    };


    const getData = async () => {

        try {

            const res = await fetch(
                "http://localhost:8000/api/tutur/languages"
            );

            if (!res.ok) {
                throw new Error("Failed to fetch languages");
            }

            const data = await res.json();

            const localLanguages = data
                .filter(item => item.languageType === "local")
                .map(item => item.languageName);

            setLanguages(localLanguages);

        } catch (err) {
            console.error(err);
        }
    };


    useEffect(() => {

        const local = localStorage.getItem("local");
        const hasLocal = local !== null && local !== "false";
        
        getData();
        
        if (hasLocal) {
            setSelectedLocal(local.replace(/_/g, " "));
            fetchLevels(local);
        } else {
            setIsLocal(false);
            setLoading(false);
        }

        return () => {
            cancelled.current = true;
        };

    }, []);


    const handleSelected = (e) => {

        const selected = e.target.value
            .toLowerCase()
            .trim()
            .replace(/\s+/g, "_");

        localStorage.setItem("local", selected);

        setSelectedLocal(selected.replace(/_/g, " "));
        setLevels([]);
        setLoading(true);
        fetchLevels(selected);
    };

    return (

        <div className="flex h-screen bg-gray-50 overflow-hidden">

            <Sidebar/>

            <div className="flex-1 flex flex-col ml-64 overflow-y-auto">

                <Navbar fetchLevels={fetchLevels}></Navbar>

                <div className="flex-1 flex gap-8 p-8">

                    <div className="flex-1 flex flex-col items-center">

                        {loading ? (
                            <div className="w-full max-w-6xl mx-auto p-6">

                                <div className="text-center mb-12">
                                    <h1 className="text-gray-500 text-lg mb-3">
                                        Loading Lessons...
                                    </h1>
                                </div>
                            </div>

                        ) : isLocal ? (

                            <>
                                <LessonHeader/>

                                <div className="w-full max-w-4xl bg-white flex flex-wrap gap-5 items-center rounded-3xl shadow-lg p-8">

                                    {levels.map((level,index)=>(
                                        <Level key={index} level={level}/>
                                    ))}

                                </div>
                            </>

                        ) : (

                            <div className="w-full max-w-6xl mx-auto p-6">

                                <div className="text-center mb-12">
                                    <h1 className="text-5xl font-bold text-gray-900 mb-3">
                                        Choose Your Language
                                    </h1>

                                    <p className="text-xl text-gray-600">
                                        Select your preferred language to start learning
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

                                    {languages.map((language,index)=>(
                                        <LanguageButton
                                            key={index}
                                            language={language}
                                        />
                                    ))}

                                </div>

                            </div>

                        )}

                    </div>

                    <div className="w-80 space-y-6">

                        {
                            isLocal && (
                                <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-200">

                                    <h3 className="text-lg font-bold text-gray-800 mb-4">
                                        Local Languages
                                    </h3>

                                    <div className="bg-gray-50 rounded-2xl p-4">

                                        <select
                                            onChange={handleSelected}
                                            value={selectedLocal}
                                            className="w-full bg-white border border-gray-200 rounded-xl p-3 text-gray-800 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        >

                                            {languages.map((language)=>(
                                                <option
                                                    key={language}
                                                    value={language.toLowerCase()}
                                                >
                                                    {language || Kosong}
                                                </option>
                                            ))}

                                        </select>

                                    </div>

                                </div>
                            )
                        }
                        
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