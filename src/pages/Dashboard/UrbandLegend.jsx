import { useEffect, useState } from 'react';
import Sidebar from '../../components/Dashboard/Sidebar';
import { useNavigate } from 'react-router-dom';
import urban from "../../assets/img/urban-legend.png"
import minang from "../../assets/img/minang.png"
import dayak from "../../assets/img/dayak.png"
import jawa from "../../assets/img/jawa.png"
import betawi from "../../assets/img/Betawi.png"

export default function UrbanLegend() {
    const navigate = useNavigate();
    const [legends, setLegends] = useState([])

    useEffect(() => {
        const getLegends = async () => {
            try {
                const res = await fetch("http://103.143.71.178:8000/api/tutur/urban-legends");
                const data = await res.json();
                const arr = Object.values(data)
                setLegends(arr)
            } catch (err) {
                console.error(err);
            }
        };

        getLegends();
    }, []);

    const handleRead = (legend) =>{
        navigate('/legend-story', {
            state:{
                    legend,
                }
            }
        )
    }

    const handleTest = async(legend) =>{
        const title = legend.title.toLowerCase().replace(/[_ ]+(.)/g, (_, c) => c.toUpperCase());
        const lang = legend.lang.replace(/[_ ]/g, '');

        try {
            const res = await fetch(`http://103.143.71.178:8000/api/tutur/urban-legends/test/${lang}/${title}`)
            const data = await res.json();

            navigate('/urban-test', {state: {data}})
        } catch (error) {
            console.err(error)
        }
    }

    const getImagePreview = (language) =>{
        const flags = {
            minang: minang,
            java: jawa,
            batak_toba: minang,
            iban: dayak,
            melayu_serawak: betawi
        }

        const key = language.toLowerCase().trim().replace(/\s+/g, "_")
        return flags[key]
    }

    return (
        <div className="flex h-screen bg-gray-50 overflow-hidden">
            {/* Left Sidebar */}
            <Sidebar></Sidebar>

            {/* Main Content */}
            <div className="flex-1 flex flex-col ml-64 overflow-y-auto">
                {/* Content */}
                <div className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-gray-800">Urban Legends</h1>
                    <div className="flex gap-4 text-sm font-semibold text-gray-600">
                        <span>Learn ASEAN Folklore & Culture</span>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 overflow-auto p-8">
                    <div className="max-w-6xl mx-auto">
                        {/* Info Card */}
                        <div className="relative bg-white rounded-3xl p-8 mb-8 text-neutral-900 shadow-md border border-gray-200 overflow-hidden">

                            {/* background image */}
                            <img
                                src={urban}
                                alt="urban background"
                                className="absolute inset-0 w-full h-full object-cover  bg-blue-600"
                            />
                            
                            <div className="absolute inset-0 bg-black/10"></div>

                            {/* content */}
                            <div className="relative text-white z-10">
                                <h2 className="text-2xl font-bold mb-2">
                                    Discover Urban Legends
                                </h2>

                                <p className="text-lg opacity-90">
                                    Explore the mystical stories and spirits from different countries of ASEAN while learning the language and culture.
                                </p>
                            </div>

                        </div>

                        {/* Legends Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {legends.map((legend) => (
                            <div
                                key={legend.id}
                                className="
                                bg-white rounded-2xl overflow-hidden
                                transition-all duration-300
                                hover:-translate-y-2 hover:shadow-xl
                                border border-gray-200 hover:border-gray-300
                                group
                                "
                            >

                                {/* Image */}
                                <div className="h-64 relative overflow-hidden">
                                    <img
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        src={getImagePreview(legend.lang)}
                                        alt=""
                                    />

                                    {/* gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                                    {/* region tag */}
                                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-neutral-900 shadow">
                                        {legend.lang.toUpperCase().replace(/_/g, " ")}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="p-6">

                                    <h3 className="text-xl font-bold text-gray-800 mb-3 transition">
                                        {legend.title}
                                    </h3>

                                    {/* Story Preview */}
                                    <div className="relative mb-5">
                                        <p className="text-sm text-gray-600 indent-5 leading-relaxed line-clamp-3">
                                            {legend.story[0]}
                                        </p>

                                        <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-white to-transparent"></div>
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex gap-3">
                                        <button
                                            onClick={() => handleRead(legend)}
                                            className="
                                                w-full max-w-xs  bg-[#0074ba] text-white cursor-pointer hover:shadow-none shadow-[0_4px_0_#02456d] font-medium py-2 px-6 rounded-xl transition transform text-lg hover:translate-y-1 duration-300
                                            "
                                        >
                                            Read
                                        </button>

                                        <button
                                            onClick={() => handleTest(legend)}
                                            className="
                                                w-full max-w-xs  bg-[#00d26a] text-white cursor-pointer hover:shadow-none shadow-[0_4px_0_#018041] font-medium py-2 px-6 rounded-xl transition transform text-lg hover:translate-y-1 duration-300
                                            "
                                        >
                                            Test
                                        </button>
                                    </div>

                                </div>

                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
