import { useEffect, useState } from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import Navbar from "../../components/Dashboard/Navbar";
import LanguageCard from "../../components/Dashboard/LanguageCard";
import AddLanguagePanel from "../../components/Dashboard/AddLanguagePanel";

export default function Community() {
    const [languages, setLanguages] = useState([]);
    const idUser = localStorage.getItem("id");

    const fetchLanguages = async () => {
        const res = await fetch(`http://127.0.0.1:8000/api/tutur/community/listLanguages/${idUser}`);
        const data = await res.json();
        setLanguages(data.languages);
    };

    useEffect(() => {
        fetchLanguages();
    }, []);

    return (
        <div className="flex h-screen bg-gray-50 overflow-hidden">

            <Sidebar />

            <div className="flex-1 flex flex-col ml-64 overflow-y-auto">

                <Navbar />

                <div className="p-10 flex flex-col gap-10">

                    <h1 className="text-4xl font-bold mb-4">Community Languages</h1>

                    <div className="flex flex-row gap-10">

                        {/* LEFT: LIST LANGUAGES */}
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                            {languages.map((lang, i) => (
                                <LanguageCard key={i} language={lang} />
                            ))}
                        </div>

                        {/* RIGHT: ADD LANGUAGE */}
                        <AddLanguagePanel onAdded={fetchLanguages} />

                    </div>
                </div>
            </div>

        </div>
    );
}