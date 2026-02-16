export default function ProfileHeader() {
    return (
        <div className="space-y-6">
        {/* Character Card */}
        <div className="relative rounded-3xl bg-linear-to-br from-emerald-300 via-cyan-300 to-blue-400 p-8 shadow-xl overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-4 right-6 w-12 h-12 bg-white bg-opacity-40 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-60 transition-all">
            <span className="text-xl">✏️</span>
            </div>

            <div className="flex justify-center pb-6">
            {/* Cartoon Character */}
            <div className="relative w-48 h-48">
                {/* Head */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-orange-300 rounded-full border-4 border-white shadow-lg">
                {/* Hair */}
                <div className="absolute -top-2 left-0 w-full h-16 bg-orange-400 rounded-t-full border-4 border-white"></div>

                {/* Eyes */}
                <div className="absolute top-12 left-6 flex gap-4">
                    <div className="w-6 h-6 bg-gray-900 rounded-full border-2 border-black relative">
                    <div className="absolute w-2 h-2 bg-white rounded-full top-1 left-1"></div>
                    </div>
                    <div className="w-6 h-6 bg-gray-900 rounded-full border-2 border-black relative">
                    <div className="absolute w-2 h-2 bg-white rounded-full top-1 left-1"></div>
                    </div>
                </div>

                {/* Eyebrows */}
                <div className="absolute top-10 left-6 flex gap-4">
                    <div className="w-6 h-1 bg-gray-800 rounded-full transform -rotate-12"></div>
                    <div className="w-6 h-1 bg-gray-800 rounded-full transform rotate-12"></div>
                </div>

                {/* Mouth */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-8 h-4 border-4 border-gray-800 rounded-full border-t-0"></div>

                {/* Beard */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-10 h-3 bg-gray-800 rounded-full"></div>
                </div>

                {/* Glasses */}
                <div className="absolute top-20 left-1/2 transform -translate-x-1/2 flex gap-2">
                <div className="w-8 h-6 border-4 border-blue-600 rounded-lg bg-blue-100 bg-opacity-40"></div>
                <div className="w-2 h-1 bg-blue-600"></div>
                <div className="w-8 h-6 border-4 border-blue-600 rounded-lg bg-blue-100 bg-opacity-40"></div>
                </div>
            </div>
            </div>
        </div>

        {/* User Info Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100">
            <h1 className="text-4xl font-black text-gray-900 mb-2">Kira Sunshine</h1>
            <p className="text-gray-500 text-lg mb-6">kira_2024</p>
            <p className="text-gray-600 mb-6">Joined December 2024</p>

            {/* Following/Followers Stats */}
            <div className="flex gap-8 mb-8">
            <div>
                <span className="text-2xl font-black text-cyan-500">8</span>
                <p className="text-gray-600">Following</p>
            </div>
            <div>
                <span className="text-2xl font-black text-orange-500">24</span>
                <p className="text-gray-600">Followers</p>
            </div>
            </div>

            {/* Country Badges */}
            <div className="flex gap-3 items-center">
            <div className="text-3xl">🎌</div>
            <div className="text-3xl">🇯🇵</div>
            <div className="text-3xl">🇰🇷</div>
            </div>
        </div>
        </div>
    );
}
