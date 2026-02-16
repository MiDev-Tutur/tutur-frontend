export default function Sidebar() {
    const menuItems = [
        { icon: '🏠', label: 'LEARN' },
        { icon: '🔤', label: 'LETTERS' },
        { icon: '⚽', label: 'PRACTICE' },
        { icon: '🏆', label: 'LEADERBOARDS' },
        { icon: '📜', label: 'QUESTS' },
        { icon: '🛍️', label: 'SHOP' },
    ];

    return (
        <div className="w-64 flex flex-col">
        {/* Logo */}
        <div className="mb-12">
            <h1 className="text-3xl font-bold text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 bg-clip-text">
            Funlingo
            </h1>
        </div>

        {/* Navigation Items */}
        <nav className="space-y-3 flex-1">
            {menuItems.map((item, idx) => (
            <div
                key={idx}
                className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-700 hover:bg-white hover:shadow-md transition-all cursor-pointer"
            >
                <span className="text-2xl">{item.icon}</span>
                <span className="font-semibold text-sm tracking-wider">{item.label}</span>
            </div>
            ))}
        </nav>

        {/* Profile Button (Active) */}
        <div className="bg-gradient-to-r from-cyan-300 to-blue-300 rounded-2xl p-4 mb-4 shadow-lg border-4 border-cyan-400">
            <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center text-xl shadow-md">
                👩
            </div>
            <span className="font-bold text-gray-800 text-sm">PROFILE</span>
            </div>
        </div>

        {/* More Button */}
        <div className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-700 hover:bg-white hover:shadow-md transition-all cursor-pointer">
            <span className="text-2xl">💬</span>
            <span className="font-semibold text-sm tracking-wider">MORE</span>
        </div>
        </div>
    );
}
