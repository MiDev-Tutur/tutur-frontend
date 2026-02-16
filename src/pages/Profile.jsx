import { useState } from 'react';
import Sidebar from '../components/Sidebar';

export default function Profile() {
    const [formData, setFormData] = useState({
        fullName: 'Fitrah',
        email: 'fitrah867406@example.com',
        username: 'Fitrah867406',
        language: 'English',
        joinDate: 'April 2023',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const practiceScores = [
        { subject: 'Spanish', score: 8500, level: 'Advanced', icon: '🇪🇸' },
        { subject: 'French', score: 6200, level: 'Intermediate', icon: '🇫🇷' },
        { subject: 'German', score: 4800, level: 'Beginner', icon: '🇩🇪' },
        { subject: 'Japanese', score: 3500, level: 'Beginner', icon: '🇯🇵' },
    ];

    return (
        <div className="min-h-screen bg-linear-to-br from-teal-100 via-cyan-50 to-blue-100">
            <div className="flex gap-6 p-6">
                {/* Left Sidebar */}
                <Sidebar />

                {/* Main Content */}
                <div className="flex-1 max-w-4xl">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-4xl font-black text-teal-700">Account Settings</h1>
                        <p className="text-gray-600 text-lg mt-2">Manage your profile and practice scores</p>
                    </div>

                    {/* Account Information Section */}
                    <div className="bg-white rounded-3xl shadow-lg p-8 mb-8 border-4 border-teal-200">
                        <div className="flex justify-between items-center mb-8">
                        <h2 className="text-3xl font-black text-teal-600 flex items-center gap-3">
                            <span className="text-4xl">👤</span>
                            Account Information
                        </h2>
                        <button
                            className={`px-6 py-3 rounded-full font-bold text-lg transition-all 
                                : 'bg-teal-400 hover:bg-teal-500 text-white`}>
                                    Edit
                        </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Full Name */}
                        <div>
                            <label className="block text-teal-700 font-bold text-lg mb-3">Full Name</label>
                            <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className={`w-full px-5 py-3 rounded-2xl border-3 font-semibold text-lg transition-all border-gray-300 bg-gray-50 text-gray-700 cursor-not-allowed
                            }`}
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-teal-700 font-bold text-lg mb-3">Email Address</label>
                            <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-5 py-3 rounded-2xl border-3 font-semibold text-lg transition-all border-gray-300 bg-gray-50 text-gray-700 cursor-not-allowed
                            }`}
                            />
                        </div>

                        {/* Username */}
                        <div>
                            <label className="block text-teal-700 font-bold text-lg mb-3">Username</label>
                            <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className={`w-full px-5 py-3 rounded-2xl border-3 font-semibold text-lg transition-all border-gray-300 bg-gray-50 text-gray-700 cursor-not-allowed
                            }`}
                            />
                        </div>

                        {/* Learning Language */}
                        <div>
                            <label className="block text-teal-700 font-bold text-lg mb-3">Primary Language</label>
                            <input
                            type="text"
                            name="language"
                            value={formData.language}
                            onChange={handleChange}
                            className={`w-full px-5 py-3 rounded-2xl border-3 font-semibold text-lg transition-all border-gray-300 bg-gray-50 text-gray-700 cursor-not-allowed'
                            }`}
                            />
                        </div>

                        {/* Join Date */}
                        <div>
                            <label className="block text-teal-700 font-bold text-lg mb-3">Member Since</label>
                            <input
                            type="text"
                            name="joinDate"
                            value={formData.joinDate}
                            disabled
                            className="w-full px-5 py-3 rounded-2xl border-3 border-gray-300 bg-gray-50 text-gray-700 font-semibold text-lg cursor-not-allowed"
                            />
                        </div>
                        </div>

                        <button
                            className="mt-8 w-full bg-linear-to-r from-teal-400 to-cyan-400 hover:from-teal-500 hover:to-cyan-500 text-white font-black text-lg py-4 rounded-2xl transition-all transform hover:scale-105 shadow-lg"
                        >
                            Save Changes
                        </button>
                    </div>

                    {/* Practice Scoring Section */}
                    <div className="bg-white rounded-3xl shadow-lg p-8 border-4 border-cyan-200">
                        <h2 className="text-3xl font-black text-cyan-600 flex items-center gap-3 mb-8">
                        <span className="text-4xl">📊</span>
                        Practice Scoring
                        </h2>

                        <div className="space-y-6">
                        {practiceScores.map((item, index) => (
                            <div
                            key={index}
                            className="bg-linear-to-r from-cyan-50 to-blue-50 rounded-2xl p-6 border-3 border-cyan-200 hover:shadow-lg transition-all"
                            >
                            <div className="flex items-center justify-between gap-4">
                                <div className="flex items-center gap-4 flex-1">
                                <span className="text-5xl">{item.icon}</span>
                                <div>
                                    <h3 className="text-2xl font-black text-cyan-800">{item.subject}</h3>
                                    <p className="text-cyan-600 font-bold">{item.level}</p>
                                </div>
                                </div>

                                <div className="text-right">
                                <p className="text-4xl font-black text-cyan-700">{item.score}</p>
                                <p className="text-cyan-600 font-bold">Total Points</p>
                                </div>
                            </div>

                            {/* Progress Bar */}
                            <div className="mt-4 bg-white rounded-full h-4 border-2 border-cyan-300 overflow-hidden">
                                <div
                                className="bg-linear-to-r from-cyan-400 to-blue-500 h-full rounded-full transition-all"
                                style={{ width: `${Math.min((item.score / 10000) * 100, 100)}%` }}
                                ></div>
                            </div>
                            </div>
                        ))}
                        </div>

                        {/* View More Button */}
                        <button className="mt-8 w-full bg-blue-400 hover:bg-blue-500 text-white font-black text-lg py-4 rounded-2xl transition-all transform hover:scale-105 shadow-lg">
                            View Detailed Statistics
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
