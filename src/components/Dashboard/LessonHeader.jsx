export default function LessonHeader({ activeCard }) {
    const titles = [
        "Introduction",
        "Basic Sentences",
        "Numbers",
        "Family",
        "Activities",
        "Foods",
    ];

    return (
        <div className="text-center mb-10 transition-all duration-300">
            <h1 className="text-4xl font-bold text-gray-800">
                {titles[activeCard] || "Lesson"}
            </h1>
            <p className="text-gray-500 text-lg">
                Chapter {activeCard + 1}
            </p>
        </div>
    );
}