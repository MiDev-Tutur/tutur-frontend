import { useState } from 'react';

export default function FollowingPanel() {
    const [activeTab, setActiveTab] = useState('following');

    const followers = [
        { id: 1, name: 'Luna', username: 'luna_star', xp: '45230', avatar: '🌙', color: 'from-purple-400 to-pink-400' },
        { id: 2, name: 'Max', username: 'max_power', xp: '38920', avatar: '⚡', color: 'from-yellow-300 to-orange-400' },
        { id: 3, name: 'Sunny', username: 'sunny_days', xp: '28450', avatar: '☀️', color: 'from-yellow-300 to-yellow-400' },
    ];

    return (
        <div className="w-72 space-y-6">
        {/* Stats Header */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100">
            <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-linear-to-r from-red-300 to-red-400 rounded-lg">
                <span className="text-3xl">🇨🇳</span>
                <span className="font-black text-white text-lg">5</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-linear-to-r from-yellow-300 to-yellow-400 rounded-lg">
                <span className="text-3xl">💰</span>
                <span className="font-black text-white text-lg">1</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-linear-to-r from-cyan-300 to-blue-400 rounded-lg">
                <span className="text-3xl">💎</span>
                <span className="font-black text-white text-lg">222</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-linear-to-r from-green-400 to-teal-400 rounded-lg">
                <span className="text-3xl">🎁</span>
                <span className="font-black text-white text-lg">8</span>
            </div>
            </div>
        </div>

        {/* Following/Followers Tabs */}
        <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-100">
            {/* Tab Headers */}
            <div className="flex border-b-2 border-gray-100">
            <button
                onClick={() => setActiveTab('following')}
                className={`flex-1 py-4 font-black text-sm transition-all ${
                activeTab === 'following'
                    ? 'text-cyan-500 border-b-4 border-cyan-500'
                    : 'text-gray-400'
                }`}
            >
                FOLLOWING
            </button>
            <button
                onClick={() => setActiveTab('followers')}
                className={`flex-1 py-4 font-black text-sm transition-all ${
                activeTab === 'followers'
                    ? 'text-cyan-500 border-b-4 border-cyan-500'
                    : 'text-gray-400'
                }`}
            >
                FOLLOWERS
            </button>
            </div>

            {/* Followers List */}
            <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
            {followers.map((follower) => (
                <div
                key={follower.id}
                className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-xl transition-all cursor-pointer transform hover:scale-105"
                >
                {/* Avatar */}
                <div className={`w-14 h-14 rounded-full bg-linear-to-br ${follower.color} flex items-center justify-center text-2xl shadow-md border-2 border-white`}>
                    {follower.avatar}
                </div>

                {/* User Info */}
                <div className="flex-1 min-w-0">
                    <h3 className="font-black text-gray-900 text-sm">{follower.name}</h3>
                    <p className="text-gray-500 text-xs">{follower.xp} XP</p>
                </div>
                </div>
            ))}
            </div>

            {/* View More Button */}
            <button className="w-full py-4 text-center font-black text-cyan-500 hover:bg-gray-50 transition-all border-t-2 border-gray-100 flex items-center justify-center gap-2">
            View 1 more
            <span className="text-lg">→</span>
            </button>
        </div>

        {/* Add Friends */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 text-center cursor-pointer hover:shadow-xl transition-all transform hover:scale-105">
            <p className="font-black text-gray-900 text-lg">Add friends</p>
            <p className="text-gray-400 text-sm mt-2">Find people to learn with!</p>
        </div>
        </div>
    );
}
