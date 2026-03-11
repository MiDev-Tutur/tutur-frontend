import { useEffect, useState } from "react";
import Sidebar from "../../components/Dashboard/Sidebar"
import LanguageButton from "../../components/Dashboard/LanguageButton";

const Language = () =>{
    const [languages, setLanguages] = useState([])

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch("http://103.143.71.178:8000/api/tutur/languages");
                const data = await res.json();
                const localLanguages = data
                    .filter(item => item.languageType === "local")
                    .map(item => item.languageName);

                setLanguages(localLanguages);
            } catch (err) {
                console.error(err);
            }
        };

        getData();
    }, []);

    return(
        <div className="flex h-screen bg-gray-50 overflow-hidden">
            {/* Left Sidebar */}
            <Sidebar></Sidebar>

            {/* Main Content */}
            <div className="flex-1 flex flex-col ml-64 overflow-y-auto">
                <div className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-gray-800">Languages</h1>
                    <div className="flex gap-4 text-sm font-semibold text-gray-600">
                        <span>Learn Local Language From Your Domaint Language</span>
                    </div>
                </div>
                <div className="w-full max-w-6xl mx-auto bg-white rounded-3xl p-6 shadow-md border border-gray-200 mt-10">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold text-gray-900 mb-3">Choose Your Language</h1>
                        <p className="text-xl text-gray-600">Select your preferred language to start learning</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {languages.map((language) => (
                            <LanguageButton language={language}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Language