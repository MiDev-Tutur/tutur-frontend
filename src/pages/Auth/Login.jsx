import { useState } from 'react';
import Header from '../../components/Auth/Header';
import { useNavigate } from 'react-router-dom';
import google from "../../assets/img/google.png"

export default function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async(e) =>{
        e.preventDefault()
    }

    return (
        <div className="min-h-screen flex flex-col mx-45 font-[Rubik]">
            {/* Header */}
            <Header></Header>

            {/* Main Content */}
            <main className="flex-1 flex items-center justify-center px-4 py-6">
                <div className="w-full max-w-lg flex flex-col gap-5">
                    {/* Heading */}
                    <h2 className="text-3xl font-medium text-zinc-800 text-center">
                        Welcome back to your cultural<br />journey
                    </h2>

                    {/* Form */}
                    <form onSubmit={handleLogin} className="flex flex-col justify-center gap-5 items-center mt-5">
                        {/* Email Input */}
                        <input
                        type="email"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-6 py-3 text-xl border-3 border-gray-300 rounded-2xl placeholder-gray-500 focus:outline-none focus:border-blue-400 bg-gray-200/25"
                        />

                        {/* Password Input */}
                        <input
                        type="password"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-6 py-3 text-xl border-3 border-gray-300 rounded-2xl placeholder-gray-500 focus:outline-none focus:border-blue-400 bg-gray-200/25"
                        />

                        {/* Login Button */}
                        <button
                            type='submit'
                            className="w-full max-w-xs bg-[#00d26a] text-white cursor-pointer hover:shadow-none shadow-[0_4px_0_#018041] font-medium py-4 px-6 rounded-xl transition transform text-xl hover:translate-y-1 duration-300"
                        >
                            LOGIN
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center gap-4">
                        <div className="flex-1 border-t-2 border-gray-300"></div>
                        <span className="text-gray-500 font-medium">OR</span>
                        <div className="flex-1 border-t-2 border-gray-300"></div>
                    </div>

                    {/* Google Button */}
                    <button className="w-full py-3 text-lg font-extrabold text-gray-700 border border-gray-300 rounded-2xl transition flex items-center hover:translate-y-1 duration-300 justify-center gap-2 hover:cursor-pointer bg-white hover:shadow-none shadow-[0_4px_0_#d9d9d9]">
                        <img className='w-5' src={google} alt="" />
                        <span className="text-xl font-medium">Google</span>
                    </button>

                    {/* Sign Up Button */}
                    <button
                        type='submit'
                        onClick={() => navigate('/register')}
                        className="w-full self-center max-w-xs bg-[#0074ba] text-white cursor-pointer hover:shadow-none shadow-[0_4px_0_#02456d] font-medium py-4 px-6 rounded-xl transition transform text-xl hover:translate-y-1 duration-300"
                    >
                        SIGN UP?
                    </button>
                </div>
            </main>
        </div>
    );
}
