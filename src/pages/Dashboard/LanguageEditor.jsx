import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../../components/Dashboard/Sidebar";
import Navbar from "../../components/Dashboard/Navbar";
import ProgressBar from "./components/ProgressBar";
import TranslationRow from "./components/TranslationRow";
import DeleteDialog from "./components/DeleteDialog";

export default function LanguageEditor() {
    const { state: language } = useLocation();

    const idUser = localStorage.getItem("id");
    const [data, setData] = useState(null);
    const [progress, setProgress] = useState(0);
    const [showDelete, setShowDelete] = useState(false);

    async function fetchData() {
        const res = await fetch(
            `http://103.143.71.178:8000/api/tutur/community/listLanguages/${idUser}/${language.languageName}`
        );
        const json = await res.json();
        setData(json.language);
    }

    async function fetchProgress() {
        const res = await fetch(
            `http://103.143.71.178:8000/api/tutur/community/progress/${idUser}/${language.languageName}`
        );
        const json = await res.json();
        setProgress(json.progressPercent);
    }

    useEffect(() => {
        fetchData();
        fetchProgress();
    }, []);

    const handleSave = async () => {
        await fetch(
            `http://103.143.71.178:8000/api/tutur/community/save/${idUser}/${language.languageName}`,
            { method: "POST" }
        );
        fetchProgress();
    };

    if (!data) return null;

    return (
        <div className="flex h-screen bg-gray-50 overflow-hidden">

            <Sidebar />

            <div className="flex-1 flex flex-col ml-64 overflow-y-auto">
                <Navbar />

                <div className="p-10">

                    <h1 className="text-4xl font-bold mb-6">
                        {data.languageName}
                    </h1>

                    <ProgressBar progress={progress} />

                    <div className="bg-white p-6 mt-8 rounded-3xl shadow-lg border max-h-[620px] overflow-y-auto">
                        {data.translations.map((t, i) => (
                            <TranslationRow
                                key={i}
                                row={t}
                                onUpdated={() => {
                                    fetchData();
                                    fetchProgress();
                                }}
                            />
                        ))}
                    </div>

                    <div className="flex gap-4 mt-8">

                        <button
                            className="bg-[#0074BA] text-white px-6 py-3 rounded-xl"
                            onClick={handleSave}
                        >
                            Save Language (Publish)
                        </button>

                        <button
                            onClick={() => setShowDelete(true)}
                            className="bg-red-500 text-white px-6 py-3 rounded-xl"
                        >
                            Delete Language
                        </button>

                    </div>
                </div>
            </div>

            {showDelete && (
                <DeleteDialog
                    languageName={data.languageName}
                    onClose={() => setShowDelete(false)}
                />
            )}

        </div>
    );
}