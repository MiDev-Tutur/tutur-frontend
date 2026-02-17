import { useState } from 'react';
import { Link} from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="min-h-screen bg-linear-to-br from-orange-50 to-white flex items-center justify-center p-4">
            <div className="w-full max-w-6xl">
                <div className='flex gap-5 w-full justify-between my-5'>
                    <div className='flex flex-col justify-center'>
                        {/* Logo */}
                        <div className="text-center mb-12">
                            <div className="text-6xl font-black text-purple-600 mb-2">FunLingo</div>
                            <p className="text-gray-700 text-lg font-semibold">Learn languages the fun way!</p>
                        </div>
                        {/* Character Mascot */}
                        <div className="flex justify-center w-full mb-12">
                            <div className="relative w-40 h-40">
                                {/* Head */}
                                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-yellow-300 rounded-full border-4 border-white shadow-lg">
                                {/* Hair */}
                                <div className="absolute -top-2 left-0 w-full h-12 bg-yellow-400 rounded-t-full border-4 border-white"></div>

                                {/* Eyes */}
                                <div className="absolute top-8 left-5 flex gap-2">
                                    <div className="w-5 h-5 bg-gray-900 rounded-full border-2 border-black">
                                    <div className="absolute w-1.5 h-1.5 bg-white rounded-full top-0.5 left-0.5"></div>
                                    </div>
                                    <div className="w-5 h-5 bg-gray-900 rounded-full border-2 border-black">
                                    <div className="absolute w-1.5 h-1.5 bg-white rounded-full top-0.5 left-0.5"></div>
                                    </div>
                                </div>

                                {/* Smile */}
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-6 h-3 border-4 border-gray-800 rounded-full border-t-0"></div>
                                </div>

                                {/* Arms */}
                                <div className="absolute top-20 -left-8 w-8 h-4 bg-yellow-300 rounded-full border-2 border-white transform -rotate-45"></div>
                                <div className="absolute top-20 -right-8 w-8 h-4 bg-yellow-300 rounded-full border-2 border-white transform rotate-45"></div>
                            </div>
                        </div>
                    </div>

                    {/* Login Card */}
                    <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl p-8 border-4 border-purple-300">
                        <form className="space-y-6">
                            {/* Email Input */}
                            <div>
                            <label className="block text-gray-800 font-bold text-sm mb-3">
                                📧 Email Address
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="your@email.com"
                                className="w-full px-4 py-3 border-3 border-purple-300 rounded-2xl focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-gray-800 font-semibold"
                            />
                            </div>

                            {/* Password Input */}
                            <div>
                            <label className="block text-gray-800 font-bold text-sm mb-3">
                                🔐 Password
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                className="w-full px-4 py-3 border-3 border-purple-300 rounded-2xl focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-gray-800 font-semibold"
                            />
                            </div>

                            {/* Remember & Forgot */}
                            <div className="flex justify-between items-center text-sm">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="w-4 h-4 rounded" />
                                <span className="text-gray-700 font-semibold">Remember me</span>
                            </label>
                            <a href="#" className="text-pink-500 font-bold hover:text-pink-600">
                                Forgot password?
                            </a>
                            </div>

                            {/* Login Button */}
                            <button
                            type="submit"
                            className="w-full bg-linear-to-r from-purple-500 to-pink-500 text-white font-black text-lg py-4 rounded-2xl hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg transform hover:scale-105 active:scale-95"
                            >
                            🚀 Sign In
                            </button>
                        </form>

                        {/* Divider */}
                        <div className="flex items-center gap-4 my-8">
                            <div className="flex-1 h-1 bg-gray-300 rounded-full"></div>
                            <span className="text-gray-600 font-bold">OR</span>
                            <div className="flex-1 h-1 bg-gray-300 rounded-full"></div>
                        </div>

                        {/* Social Login */}
                        <div className="space-y-3">
                            <button className="w-full border-3 border-gray-300 text-gray-800 font-bold py-3 rounded-2xl hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                            🍎 Continue with Apple
                            </button>
                            <button className="w-full border-3 border-gray-300 text-gray-800 font-bold py-3 rounded-2xl hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                            🔵 Continue with Google
                            </button>
                        </div>

                        {/* Sign Up Link */}
                        <p className="text-center text-gray-700 mt-8 font-semibold">
                            Don't have an account?{' '}
                            <Link to="/register" className="text-pink-500 font-black hover:text-pink-600 underline">
                            Sign Up
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Fun Footer */}
                <div className="text-center mt-8 text-gray-700 font-bold">
                    ✨ Learning is more fun together! ✨
                </div>
            </div>
        </div>
    );
}
