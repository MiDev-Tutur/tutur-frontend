import Level from "./Level";

export default function LevelBatch({ levels, batchIndex, currentLevel }) {
    return (
        <div className="flex flex-col bg-white rounded-3xl shadow-xl p-10 w-[380px] mx-5">
            <h2 className="text-2xl font-bold mb-5 text-center">
                Chapter {batchIndex + 1}
            </h2>

            <div className="grid grid-cols-2 gap-8">
                {levels.map((level, i) => {
                    const zigzag = i % 2 === 0 ? "translate-y-4" : "-translate-y-4";

                    return (
                        <div className={`flex justify-center ${zigzag}`} key={i}>
                            <Level
                                level={level}
                                index={i + batchIndex * 6}
                                currentLevel={currentLevel}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}