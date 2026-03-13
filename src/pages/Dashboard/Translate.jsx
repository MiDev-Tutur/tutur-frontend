import { useEffect, useState } from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import Navbar from "../../components/Dashboard/Navbar";
import LanguageDropdown from "../../components/Dashboard/LanguageDropdown";
import SwapButton from "../../components/Dashboard/SwapButton";

export default function Translate() {
    const API_URL = import.meta.env.VITE_API_URL
    const [inputText, setInputText] = useState("");
    const [outputText, setOutputText] = useState("");
    const [method, setMethod] = useState("");

    const [leftLang, setLeftLang] = useState("english");
    const [rightLang, setRightLang] = useState("indonesian");

    const [typingTimeout, setTypingTimeout] = useState(null);

    const [languages, setLanguages] = useState([])

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        if (!inputText.trim()) {
            setOutputText("");
            setMethod("");
            return;
        }

        if (typingTimeout) clearTimeout(typingTimeout);

        const timeout = setTimeout(translate, 450);
        setTypingTimeout(timeout);

    }, [inputText, rightLang]);

    const translate = async () => {
        const res = await fetch(`${API_URL}/tutur/translate`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                text: inputText,
                target_language: rightLang
            })
        });

        const data = await res.json();
        setMethod(data.method);
        setOutputText(data.translated_text);
    };

    /* ===========================
            GET LANGUAGES
    ============================ */
    const getData = async () => {
        try {
            const res = await fetch(`${API_URL}/tutur/languages`);
            const data = await res.json();
            const lang = data.map(item => item.languageName.toLowerCase());
            setLanguages(lang);
        } catch (err) {
            console.error(err);
        }
    };

    const handleSwap = () => {
        const temp = leftLang;
        setLeftLang(rightLang);
        setRightLang(temp);

        setInputText(outputText);
    };

    return (
        <div className="flex h-screen bg-[#F8FAFC] overflow-hidden">

            <Sidebar />

            <div className="flex-1 flex flex-col ml-64 overflow-y-auto">

                <Navbar />

                {/* HEADER */}
                <div className="px-12 mt-10">
                    <h1 className="text-4xl font-bold text-[#1E293B]">Translator</h1>
                    <p className="text-gray-600 mt-2">
                        Realtime translation powered by Dataset & AI Model
                    </p>
                </div>

                {/* TRANSLATE CARD */}
                <div className="px-12 mt-10 flex justify-center">

                    <div className="
                        flex flex-row gap-10 bg-white 
                        p-10 rounded-[28px] shadow-lg border border-[#E5E7EB]
                        max-w-6xl w-full
                    ">

                        {/* LEFT TEXT INPUT */}
                        <div className="flex-1 flex flex-col gap-4">

                            <LanguageDropdown
                                value={leftLang}
                                languages={languages}
                                disable={rightLang}
                                onChange={setLeftLang}
                            />

                            <textarea
                                className="
                                    border border-[#E2E8F0] rounded-3xl p-5 h-64
                                    w-full focus:ring-2 focus:ring-[#0074BA] outline-none
                                    text-[#1E293B] text-lg
                                "
                                placeholder="Enter text here…"
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                            />

                            <button
                                className="text-sm text-gray-500 hover:text-red-500"
                                onClick={() => setInputText("")}
                            >
                                Clear
                            </button>
                        </div>

                        {/* SWAP */}
                        <SwapButton onClick={handleSwap} />

                        {/* RIGHT TEXT OUTPUT */}
                        <div className="flex-1 flex flex-col gap-4">

                            <LanguageDropdown
                                value={rightLang}
                                languages={languages}
                                disable={leftLang}
                                onChange={setRightLang}
                            />

                            <textarea
                                className="
                                    border border-[#E2E8F0] rounded-3xl p-5 h-64
                                    w-full bg-[#F1F5F9] text-gray-700 text-lg
                                "
                                value={outputText}
                                readOnly
                            />

                            {method && (
                                <span className="text-sm text-gray-500">
                                    <b>Method:</b>{" "}
                                    {method === "dataset_lookup"
                                        ? "Dataset Lookup (Fast)"
                                        : "Model Inference (AI)"}
                                </span>
                            )}

                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}