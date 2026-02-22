import Sidebar from "../../components/Dashboard/Sidebar";

export default function Learn() {
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
            <div className="flex-1 flex flex-col items-center justify-center">
                {/* Lesson Header */}
                <div className="w-full max-w-2xl bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-3xl p-8 mb-12 text-white shadow-lg">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                    <button className="text-white text-2xl">←</button>
                    <div>
                        <p className="text-sm opacity-90">BAGIAN 2, UNIT 1</p>
                        <h2 className="text-3xl font-bold">Belanja pakalan</h2>
                    </div>
                    </div>
                    <button className="bg-cyan-600 px-6 py-3 rounded-2xl font-bold flex items-center gap-2">
                    ☰ BUKU PANDUAN
                    </button>
                </div>
                </div>

                {/* Learning Section */}
                <div className="relative w-full max-w-2xl h-96 flex items-center justify-center">
                <div className="absolute left-0 space-y-16">
                    <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg">✓</div>
                    <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg">📖</div>
                    <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg">✓</div>
                </div>

                <div className="text-center">
                    <div className="inline-block bg-gradient-to-br from-orange-400 to-amber-500 rounded-full w-32 h-32 flex items-center justify-center text-5xl shadow-lg mb-4">
                    🧑‍🦱
                    </div>
                    <div className="text-4xl">🔥</div>
                </div>

                <div className="absolute right-0 space-y-16">
                    <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg">📖</div>
                    <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg">✓</div>
                </div>

                <div className="absolute bottom-0 text-4xl">📦</div>
                </div>

                <button className="mt-12 bg-white border-2 border-gray-300 rounded-full p-4 hover:shadow-lg">⬇️</button>
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
