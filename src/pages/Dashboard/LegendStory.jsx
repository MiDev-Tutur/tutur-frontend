import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TypewriterText from "../../components/Dashboard/TypewriterText";
import toba from "../../assets/img/taoToba.jpg"
import malin from "../../assets/img/malin.png"
import rorojonggrang from "../../assets/img/rorojonggrang.webp"
import apoisaloi from "../../assets/img/apoisaloi.jpg"
import serawak from "../../assets/img/serawak.jpg"

export default function LegendStory() {
    const API_URL = import.meta.env.VITE_API_URL
    const navigate = useNavigate();
    const location = useLocation();
    const legend = location.state?.legend;

    const [currentParagraph, setCurrentParagraph] = useState(0);
    const [typingDone, setTypingDone] = useState(false);
    const [skipTyping, setSkipTyping] = useState(false);

    if (!legend) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-4">Legend not found</h1>

                    <button
                        onClick={() => navigate("/urban-legend")}
                        className="bg-green-500 text-white px-6 py-3 rounded-xl font-bold shadow-[0_4px_0_#15803d]"
                    >
                        Back
                    </button>
                </div>
            </div>
        );
    }

    const nextParagraph = () => {
        if (!typingDone) {
            setSkipTyping(true);
            setTypingDone(true);
            return;
        }

        if (currentParagraph < legend.story.length - 1) {
            setCurrentParagraph((prev) => prev + 1);
            setTypingDone(false);
            setSkipTyping(false);
        }
    };

    const previousParagraph = () => {
        if (currentParagraph > 0) {
            setCurrentParagraph((prev) => prev - 1);
            setTypingDone(false);
            setSkipTyping(false);
        }
    };

    const getImagePreview = (language) =>{
        const flags = {
            minang: malin,
            java: rorojonggrang,
            batak_toba: toba,
            iban: apoisaloi,
            melayu_serawak: serawak
        }

        const key = language.toLowerCase().trim().replace(/\s+/g, "_")
        return flags[key]
    }

    const progress = ((currentParagraph + 1) / legend.story.length) * 100;

    const isStoryFinished =
        currentParagraph === legend.story.length - 1 && typingDone;

    const handleTest = async(legend) =>{
        const title = legend.title.toLowerCase().replace(/[_ ]+(.)/g, (_, c) => c.toUpperCase());
        const lang = legend.lang.toLowerCase().replace(/[_ ]+(.)/g, (_, c) => c.toUpperCase());

        try {
            const res = await fetch(`${API_URL}/tutur/urban-legends/test/${lang}/${title}`)
            const data = await res.json();

            navigate('/urban-test', {state: {data}})
        } catch (error) {
            console.err(error)
        }
    }

    return (
        <div className="min-h-screen">
            {/* Header */}
            <div className="max-w-7xl mx-auto pt-10 px-6">
                <div className="flex items-center justify-between mb-6">
                    <button
                        onClick={() => navigate("/urban-legend")}
                        className="font-bold cursor-pointer text-gray-700 hover:text-black"
                    >
                        ← Back
                    </button>

                    <h1 className="text-xl font-bold text-gray-800">
                        {legend.title}
                    </h1>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                    <div
                        className="h-full bg-blue-500 transition-all duration-500"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>

            {/* Story Scene */}
            <div className="max-w-7xl gap-10 mx-auto px-6 py-10 flex">
                {/* Image */}
                <div className="w-1/2 h-96">
                    <img
                        className="w-full h-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-110"
                        src={getImagePreview(legend.lang)}
                        alt=""
                    />
                </div>

                <div className="w-1/2 flex flex-col justify-center items-center">
                    {/* Dialog Bubble */}
                    <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-3xl w-full relative border-2 border-gray-200">
                        <div className="absolute top-10 -left-4 w-8 h-8 bg-white -rotate-45 border-l-2 border-t-2 border-gray-200"></div>

                        <h2 className="text-2xl font-bold mb-4 text-gray-800">
                            Story
                        </h2>

                        <div className="text-lg text-gray-700 leading-relaxed min-h-[120px]">
                            <TypewriterText
                                key={currentParagraph}
                                text={legend.story[currentParagraph]}
                                speed={20}
                                skip={skipTyping}
                                onComplete={() => setTypingDone(true)}
                            />
                        </div>
                    </div>
                    {/* Navigation */}
                    <div className="flex gap-6 mt-10">
                        <button
                            onClick={previousParagraph}
                            className="
                            bg-gray-200
                            px-8 py-3
                            rounded-xl
                            font-bold
                            shadow-[0_4px_0_#9ca3af]
                            hover:translate-y-1
                            hover:shadow-none
                            cursor-pointer
                            transition
                            "
                        >
                            Previous
                        </button>

                        <button
                            onClick={nextParagraph}
                            className="
                            bg-[#00d26a] text-white
                            px-10 py-3
                            rounded-xl
                            font-bold
                            shadow-[0_4px_0_#018041]
                            hover:translate-y-1
                            hover:shadow-none
                            cursor-pointer
                            transition
                            "
                        >
                            {currentParagraph === legend.story.length - 1
                                ? "Finish"
                                : "Next"}
                        </button>
                    </div>
                    {/* Paragraph Indicator */}
                    <div className="text-gray-500 text-sm mt-6">
                        Paragraph {currentParagraph + 1} / {legend.story.length}
                    </div>
                </div>
            </div>

            {/* End Action */}
            {isStoryFinished && (
                <div className="flex justify-center gap-6 pb-12">
                    <button
                        onClick={() => navigate("/urban-legend")}
                        className="
                        bg-gray-200
                        px-8 py-4
                        rounded-xl
                        font-bold
                        shadow-[0_4px_0_#9ca3af]
                        hover:translate-y-1
                        hover:shadow-none
                        cursor-pointer
                        transition
                        "
                    >
                        Back
                    </button>

                    <button
                        onClick={() => handleTest(legend)}
                        className="
                        bg-[#0074ba] text-white cursor-pointer hover:shadow-none shadow-[0_4px_0_#02456d]
                        px-10 py-4
                        rounded-xl
                        font-bold
                        hover:translate-y-1
                        transition
                        "
                    >
                        Start Test
                    </button>
                </div>
            )}
        </div>
    );
}