import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Dashboard/Sidebar"
import songIcon from "../../assets/img/logo/song.png"
import play from "../../assets/img/play.png"
import { useEffect, useState } from "react";

const Song = () =>{
    const navigate = useNavigate();
    const [songs, setSongs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedSong, setSelectedSong] = useState(null);

    useEffect(() => {
        const fetchSongs = async () => {
            try {
            setLoading(true);
            const response = await fetch('http://127.0.0.1:8000/api/tutur/folk-songs');
            if (!response.ok) {
                throw new Error('Failed to fetch songs');
            }
            const data = await response.json();
            setSongs(data.songs || []);
            if (data.songs && data.songs.length > 0) {
                setSelectedSong(data.songs[0]);
            }
            } catch (err) {
            console.log('[v0] Error fetching songs:', err.message);
            setError(err.message);
            } finally {
            setLoading(false);
            }
        };

        fetchSongs();
    }, []);

    return(
        <div className="flex h-screen bg-gray-50 overflow-hidden">
            {/* Left Sidebar */}
            <Sidebar></Sidebar>

            {/* Main Content */}
            <div className="flex-1 flex flex-col ml-64 overflow-y-auto">
                {/* Content */}
                <div className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-gray-800">Folk Songs</h1>
                    <div className="flex gap-4 text-sm font-semibold text-gray-600">
                        <span>Learn languages through traditional melodies</span>
                    </div>
                </div>
                {loading ? (
                    <div className="text-center py-20">
                        <div className="inline-block">
                        <div className="text-6xl mb-4">🎵</div>
                        <p className="text-xl text-gray-600 font-semibold">Loading songs...</p>
                        </div>
                    </div>
                    ) : error ? (
                    <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-8 text-center">
                        <div className="text-5xl mb-4">⚠️</div>
                        <p className="text-red-700 font-semibold text-lg">Error: {error}</p>
                        <p className="text-red-600 mt-2">Make sure the API server is running at http://127.0.0.1:8000</p>
                    </div>
                    ) : (
                    <div className="grid grid-cols-3 gap-8 p-5">
                        {/* Songs List */}
                        <div className="col-span-2 space-y-4">
                        {songs.map((song, idx) => (
                            <div
                                key={idx}
                                onClick={() => setSelectedSong(song)}
                                className={`rounded-2xl p-6
                                cursor-pointer
                                border-2
                                border-[#e5e7eb]
                                transition
                                shadow-[0_6px_0_#e5e7eb]
                                ${
                                    selectedSong?.title === song.title
                                    ? 'shadow-none'
                                    : 'hover:translate-y-0.5 hover:shadow-[0_2px_0_#e5e7eb]'
                                }
                                `}
                            >
                            <div className="flex items-center justify-between">

                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                                        {song.title}
                                    </h3>

                                    <div className="flex items-center gap-3">

                                        <span className={`bg-white rounded-3xl p-6 shadow-md border border-gray-200 px-3 py-1 text-xs text-neutral-500 font-semibold`}>
                                            {song.lang.charAt(0).toUpperCase() + song.lang.slice(1)}
                                        </span>

                                        <span className="text-gray-500 font-semibold text-sm">
                                            {song.end}
                                        </span>

                                    </div>
                                </div>

                                <div className="text-4xl">
                                    <img className="w-10" src={songIcon} alt="" />
                                </div>

                            </div>
                            </div>
                            ))}
                        </div>

                        {/* Song Details */}
                        {selectedSong && (
                            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-200 h-fit sticky top-8">
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">{selectedSong.title}</h2>
                                
                                <div className="mb-6">
                                <a
                                    href={selectedSong.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-red-600 text-white font-bold py-3 rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2"
                                >
                                    <span>Watch on</span>
                                    <img className="w-2" src={play} alt="" />
                                    <span>YouTube</span>
                                </a>
                                </div>

                                <div className="mb-6">
                                <div className="bg-gradient-to-r from-cyan-100 to-blue-100 rounded-xl p-4 mb-4">
                                    <p className="text-sm font-semibold text-gray-700">Language</p>
                                    <p className="text-lg font-bold text-gray-800 uppercase">{selectedSong.lang}</p>
                                </div>
                                <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-4">
                                    <p className="text-sm font-semibold text-gray-700">Duration</p>
                                    <p className="text-lg font-bold text-gray-800">{selectedSong.start} - {selectedSong.end}</p>
                                </div>
                                </div>

                                <div>
                                <h3 className="font-bold text-gray-800 mb-3">Lyrics with Timestamps</h3>
                                <div className="space-y-2 max-h-96 overflow-y-auto">
                                    {selectedSong.timestamp.map((ts, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-gray-50 hover:bg-purple-50 rounded-lg p-3 transition-all cursor-pointer border-l-4 border-purple-400"
                                    >
                                        <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <p className="text-xs font-bold text-purple-600 mb-1">
                                            {ts.start} - {ts.end}
                                            </p>
                                            <p className="text-sm text-gray-700 font-medium">{ts.text}</p>
                                        </div>
                                        </div>
                                    </div>
                                    ))}
                                </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Song