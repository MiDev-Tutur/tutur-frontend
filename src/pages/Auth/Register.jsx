import { useState } from 'react';
import Header from '../../components/Auth/Header';
import google from "../../assets/img/google.png"

export default function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData(prev => ({
                ...prev,
                [name]: value,
            }));
        };

    return (
        <div className="min-h-screen flex flex-col mx-45 font-[Rubik]">
            {/* Header */}
            <Header></Header>

            {/* Main Content */}
            <main className="flex-1 flex items-center justify-center px-4 py-6">
                <div className="w-full max-w-lg flex flex-col gap-5">
                    {/* Heading */}
                    <div className='flex flex-col gap-2'>
                        <h2 className="text-3xl font-medium text-zinc-800 text-center">
                            Create Profile
                        </h2>
                        <span className="text-gray-700 text-center">
                            Join millions learning about ASEAN culture
                        </span>
                    </div>

                    {/* Form */}
                    <form className="flex flex-col justify-center gap-5 items-center">
                        {/* Name Input */}
                        <input
                        type="text"
                        name='name'
                        placeholder="Name (optional)"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-6 py-3 text-xl border-3 border-gray-300 rounded-2xl placeholder-gray-500 focus:outline-none focus:border-blue-400 bg-gray-200/25"
                        />

                        {/* Email Input */}
                        <input
                        type="email"
                        name='email'
                        required
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-6 py-3 text-xl border-3 border-gray-300 rounded-2xl placeholder-gray-500 focus:outline-none focus:border-blue-400 bg-gray-200/25"
                        />

                        {/* Password Input */}
                        <input
                        type="password"
                        name='password'
                        placeholder="Password"
                        value={formData.password}
                        required
                        onChange={handleChange}
                        className="w-full px-6 py-3 text-xl border-3 border-gray-300 rounded-2xl placeholder-gray-500 focus:outline-none focus:border-blue-400 bg-gray-200/25"
                        />

                        {/* Login Button */}
                        <button
                        type='submit'
                        className="w-full self-center max-w-xs bg-[#0074ba] text-white cursor-pointer hover:shadow-none shadow-[0_4px_0_#02456d] font-medium py-4 px-6 rounded-xl transition transform text-xl hover:translate-y-1 duration-300"
                        >
                            CREATE ACCOUNT
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

                    {/* Term */}
                    <span className="text-gray-700 text-center max-w-xs self-center">
                        By signing in to Tutur, you aggre to our Terms and Privacy Policy.
                    </span>
                </div>
            </main>
        </div>
    );
}
