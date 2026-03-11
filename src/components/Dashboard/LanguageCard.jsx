import { useNavigate } from "react-router-dom";

export default function LanguageCard({ language }) {
    const navigate = useNavigate();

    return (
        <div className="bg-white p-6 rounded-3xl shadow-lg border flex flex-col gap-4">

            <h2 className="text-2xl font-bold">{language.languageName}</h2>
            <p className="text-gray-500 text-sm">
                Dominant: {language.dominantLanguage}
            </p>

            <button
                onClick={() =>
                    navigate("/community/editor", { state: language })
                }
                className="mt-3 bg-[#0074ba] text-white px-4 py-2 rounded-xl hover:bg-[#005f95]"
            >
                Edit Language
            </button>

        </div>
    );
}