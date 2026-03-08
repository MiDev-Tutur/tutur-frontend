import { useEffect, useState } from 'react';
import Sidebar from '../../components/Dashboard/Sidebar';
import { useNavigate } from 'react-router-dom';

export default function UrbanLegend() {
    const navigate = useNavigate();
    const [legends, setLegends] = useState([])

    useEffect(() => {
        const getLegends = async () => {
            try {
                const res = await fetch("http://localhost:8000/api/tutur/urban-legends");
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
        navigate('/legend-story', {state: {legend}})
    }

    const handleTest = async(legend) =>{
        const title = legend.title
            .replace(/[_\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : "")
            .replace(/^./, c => c.toLowerCase());

        const lang = legend.lang

        try {
            const res = await fetch(`http://127.0.0.1:8000/api/tutur/urban-legends/test/${lang}/${title}`)
            const data = await res.json();

            navigate('/question', {state: {data}})
        } catch (error) {
            console.err(error)
        }
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
                        <span>Learn Indonesian Folklore & Culture</span>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 overflow-auto p-8">
                    <div className="max-w-6xl mx-auto">
                        {/* Info Card */}
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 mb-8 text-white">
                        <h2 className="text-2xl font-bold mb-2">Discover Indonesian Legends</h2>
                        <p className="text-lg opacity-90">Explore the mystical stories and spirits from different regions of Indonesia while learning the language and culture.</p>
                        </div>

                        {/* Legends Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {legends.map((legend) => (
                            <div
                                key={legend.id}
                                className="bg-white rounded-2xl p-6 cursor-pointer transition-all transform hover:scale-105 hover:shadow-lg border-2 border-gray-200 hover:border-purple-300'
                                "
                            >
                                <div className="bg-linear-to-br rounded-xl p-4 mb-4 text-center from-purple-400 to-pink-400">
                                    <span className="text-6xl">{legend.icon}</span>
                                </div>
                                
                                <h3 className="text-xl font-bold text-gray-800 mb-1">{legend.title}</h3>
                                <p className="text-sm text-cyan-600 font-semibold mb-3">{legend.region}</p>
                                
                                <p className="text-sm text-gray-600 mb-4">{legend.description}</p>
                                
                                <div className='flex items-center justify-between gap-8'>
                                    <button onClick={() => handleRead(legend)} className="w-full bg-linear-to-r from-purple-500 to-pink-500 text-white font-bold py-2 rounded-xl hover:shadow-lg transition-all">
                                        Read
                                    </button>
                                    <button onClick={() => handleTest(legend)} className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 rounded-xl hover:shadow-lg transition-all">
                                        Test
                                    </button>
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
