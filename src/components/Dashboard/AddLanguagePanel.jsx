import { useState } from "react";

export default function AddLanguagePanel({ onAdded }) {
    const idUser = localStorage.getItem("id");
    const [dominant, setDominant] = useState("");
    const [languageName, setLanguageName] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        const API_URL = import.meta.env.VITE_API_URL
        if (!dominant || !languageName) return;

        setLoading(true);

        await fetch(`${API_URL}/tutur/community/addLanguage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                idUser,
                dominantLanguage: dominant,
                languageName: languageName
            }),
        });

        setLoading(false);
        onAdded();
    };

    return (
        <div className="w-80 bg-white rounded-3xl p-6 shadow-lg border">

            <h3 className="text-lg font-bold mb-4">Add New Language</h3>

            <input
                className="w-full border rounded-xl p-3 mb-4"
                placeholder="Dominant Language"
                onChange={(e) => setDominant(e.target.value)}
            />

            <input
                className="w-full border rounded-xl p-3 mb-4"
                placeholder="Language Name"
                onChange={(e) => setLanguageName(e.target.value)}
            />

            <button
                onClick={handleSubmit}
                className="w-full bg-[#0074BA] text-white p-3 rounded-xl hover:bg-[#005f95]"
            >
                {loading ? "Adding..." : "Add Language"}
            </button>

        </div>
    );
}