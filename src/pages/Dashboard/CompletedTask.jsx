import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';

export default function CompletedTask() {
    const navigate = useNavigate();

    const handleContinue = () => {
        navigate('/profile');
    };

    const handleReview = () => {
        navigate('/profile');
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-cyan-100 via-blue-50 to-purple-100">
            <div className="flex-1 flex items-center justify-center py-12">
                <div className="max-w-2xl w-full">
                    {/* Decorative sparkles */}
                    <div className="flex justify-around mb-8 px-8">
                    <div className="animate-pulse">
                        <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                    </div>
                    <div className="animate-pulse delay-100">
                        <svg className="w-10 h-10 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                    </div>
                    </div>

                    {/* Main celebratory section */}
                    <div className="bg-white rounded-3xl shadow-2xl p-12 mb-8">
                    {/* Cartoon characters celebrating */}
                    <div className="flex justify-center mb-20 relative">
                        {/* Character 1 - Green owl */}
                        <div className="absolute left-1/4 transform -translate-x-1/2 text-6xl animate-bounce">
                        🦉
                        </div>
                        {/* Character 2 - Person */}
                        <div className="absolute right-1/4 transform translate-x-1/2 text-6xl animate-bounce" style={{ animationDelay: '0.1s' }}>
                        👨‍🎓
                        </div>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-linear-to-r from-yellow-400 via-orange-400 to-pink-400">
                        Pelajaran Selesai!
                    </h1>
                    <p className="text-center text-gray-600 text-lg mb-12">
                        Luar Biasa! Kamu telah menyelesaikan pelajaran ini
                    </p>

                    {/* Achievement Stats */}
                    <div className="grid grid-cols-2 gap-6 mb-8">
                        {/* Total XP Card */}
                        <div className="bg-linear-to-br from-yellow-300 to-yellow-400 rounded-2xl p-6 border-4 border-yellow-500 text-center transform hover:scale-105 transition-transform">
                        <p className="text-white font-bold text-sm mb-3 tracking-wider">TOTAL XP</p>
                        <div className="flex items-center justify-center gap-2">
                            <span className="text-3xl">⚡</span>
                            <p className="text-5xl font-bold text-white">15</p>
                        </div>
                        </div>

                        {/* Completion Card */}
                        <div className="bg-linear-to-br from-green-400 to-green-500 rounded-2xl p-6 border-4 border-green-600 text-center transform hover:scale-105 transition-transform">
                        <p className="text-white font-bold text-sm mb-3 tracking-wider">SEMPURNA</p>
                        <div className="flex items-center justify-center gap-2">
                            <span className="text-3xl">✓</span>
                            <p className="text-5xl font-bold text-white">100%</p>
                        </div>
                        </div>
                    </div>

                    {/* Bonus Info */}
                    <div className="bg-purple-50 rounded-xl p-4 mb-8 border-l-4 border-purple-400">
                        <p className="text-purple-900 text-center font-semibold">
                        🎉 Bonus XP +10 untuk akurasi sempurna!
                        </p>
                    </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 justify-between px-8">
                    <button
                        onClick={handleReview}
                        className="px-8 py-3 bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold rounded-full transition-all transform hover:scale-105 text-lg"
                    >
                        ← ULAS PELAJARAN
                    </button>
                    <button
                        onClick={handleContinue}
                        className="px-8 py-3 bg-linear-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-bold rounded-full transition-all transform hover:scale-105 text-lg shadow-lg"
                    >
                        LANJUTKAN →
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
