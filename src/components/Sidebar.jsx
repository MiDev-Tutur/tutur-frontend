import { Link } from "react-router-dom";

export default function Sidebar() {
    const menuItems = [
        { icon: '🏠', href: "/learn",label: 'LEARN' },
        { icon: '📜', href: "/subscriptions",label: 'SUBSCRIPTION' },
        { icon: '👩', href: "/profile", label: 'PROFILE' },
        { icon: '🛍️', href: "/login", label: 'LOGOUT' },
    ];

    return (
        <div className="w-64 flex flex-col">
            {/* Logo */}
            <Link to="/" className="mb-12">
                <h1 className="text-3xl font-bold text-transparent bg-linear-to-r from-pink-500 via-purple-500 to-orange-500 bg-clip-text">
                Funlingo
                </h1>
            </Link>

            {/* Navigation Items */}
            <nav className="space-y-3 flex-1">
                {menuItems.map((item, idx) => (
                <a
                    href={item.href}
                    key={idx}
                    className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-700 hover:bg-white hover:shadow-md transition-all cursor-pointer"
                >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-semibold text-sm tracking-wider">{item.label}</span>
                </a>
                ))}
            </nav>
        </div>
    );
}
