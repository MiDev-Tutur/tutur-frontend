export default function Statistics() {
    return (
        <div className="mt-8">
        <h2 className="text-3xl font-black text-gray-900 mb-6">Statistics</h2>

        <div className="grid grid-cols-2 gap-6">
            {/* Day Streak */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:shadow-xl transition-all cursor-pointer transform hover:scale-105">
            <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">🔥</span>
                <div>
                <p className="text-4xl font-black text-gray-900">7</p>
                <p className="text-gray-500 text-sm font-semibold">Day Streak</p>
                </div>
            </div>
            <div className="w-full h-2 bg-gradient-to-r from-orange-300 to-orange-500 rounded-full"></div>
            </div>

            {/* Total XP */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:shadow-xl transition-all cursor-pointer transform hover:scale-105">
            <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">⚡</span>
                <div>
                <p className="text-4xl font-black text-gray-900">18920</p>
                <p className="text-gray-500 text-sm font-semibold">Total XP</p>
                </div>
            </div>
            <div className="w-full h-2 bg-gradient-to-r from-purple-300 to-purple-500 rounded-full"></div>
            </div>

            {/* Lessons Completed */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:shadow-xl transition-all cursor-pointer transform hover:scale-105">
            <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">📚</span>
                <div>
                <p className="text-4xl font-black text-gray-900">156</p>
                <p className="text-gray-500 text-sm font-semibold">Lessons</p>
                </div>
            </div>
            <div className="w-full h-2 bg-gradient-to-r from-cyan-300 to-cyan-500 rounded-full"></div>
            </div>

            {/* Perfect Days */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:shadow-xl transition-all cursor-pointer transform hover:scale-105">
            <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">⭐</span>
                <div>
                <p className="text-4xl font-black text-gray-900">42</p>
                <p className="text-gray-500 text-sm font-semibold">Perfect Days</p>
                </div>
            </div>
            <div className="w-full h-2 bg-gradient-to-r from-pink-300 to-pink-500 rounded-full"></div>
            </div>
        </div>
        </div>
    );
}
