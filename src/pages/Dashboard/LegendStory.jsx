import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TypewriterText from "../../components/Dashboard/TypewriterText";

export default function LegendStory() {

    const navigate = useNavigate();
    const location = useLocation();
    const legend = location.state?.legend;

    const [currentParagraph, setCurrentParagraph] = useState(0);
    const [typingDone, setTypingDone] = useState(false);
    const [skipTyping, setSkipTyping] = useState(false);

    if (!legend) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">
                        Legend not found
                    </h1>

                    <button
                        onClick={() => navigate("/urban-legend")}
                        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
                    >
                        Back to Urban Legends
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

    const progress =
        ((currentParagraph + 1) / legend.story.length) * 100;
    const isStoryFinished =
        currentParagraph === legend.story.length - 1 && typingDone;

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">

            {/* Header */}
            <div className="sticky top-0 bg-white shadow-sm z-20">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

                    <button
                        onClick={() => navigate("/urban-legend")}
                        className="text-gray-700 font-semibold hover:text-black"
                    >
                        ← Back
                    </button>

                    <h1 className="text-2xl font-bold">
                        {legend.title}
                    </h1>

                    <div className="w-24 h-1 bg-gray-300 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                </div>
            </div>


            {/* Main */}
            <div className="max-w-7xl mx-auto px-6 py-12 flex gap-12">

                {/* Left Section */}
                <div className="w-1/2 text-center">

                    <div
                        className={`bg-gradient-to-br ${legend.color} rounded-3xl p-12 mb-8 shadow-2xl inline-block`}
                    >
                        <span className="text-8xl">
                            {legend.icon}
                        </span>
                    </div>

                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        {legend.title}
                    </h2>

                    <p className="text-gray-600 text-lg">
                        From {legend.region}
                    </p>

                </div>


                {/* Story Section */}
                <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-3xl">

                    <h3 className="text-2xl font-bold mb-6 text-gray-900">
                        Story
                    </h3>

                    <div className="h-max text-gray-700">

                        <TypewriterText
                            key={currentParagraph}
                            text={legend.story[currentParagraph]}
                            speed={20}
                            skip={skipTyping}
                            onComplete={() => setTypingDone(true)}
                        />

                    </div>


                    {/* Navigation */}
                    <div className="flex justify-between mt-10">

                        <button
                            onClick={previousParagraph}
                            className="px-6 py-3 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
                        >
                            Previous
                        </button>

                        <button
                            onClick={nextParagraph}
                            className="px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
                        >
                            {currentParagraph === legend.story.length - 1
                                ? "Finish"
                                : "Next"}
                        </button>

                    </div>


                    {/* Paragraph Indicator */}
                    <div className="text-center mt-6 text-gray-500 text-sm">
                        Paragraph {currentParagraph + 1} of {legend.story.length}
                    </div>

                </div>

            </div>


            {/* Bottom Action Buttons */}
            {
                isStoryFinished && (
                    <div className="flex gap-4 justify-center pb-12">

                        <button
                            onClick={() => navigate("/urban-legend")}
                            className="border-2 border-gray-400 text-gray-700 font-bold py-4 px-8 rounded-xl hover:bg-gray-100"
                        >
                            Back to Legends
                        </button>

                        <button
                            className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg transform hover:scale-105 transition"
                        >
                            Start Learning This Legend
                        </button>

                    </div>
                )
            }

        </div>
    );
}