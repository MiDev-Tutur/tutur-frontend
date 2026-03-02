const LessonHeader = () =>{
    return(
        <div className="w-full max-w-2xl bg-linear-to-r from-cyan-400 to-cyan-500 rounded-3xl p-8 mb-12 text-white shadow-lg">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                <button className="text-white text-2xl">←</button>
                <div>
                    <p className="text-sm opacity-90">BAGIAN 2, UNIT 1</p>
                    <h2 className="text-3xl font-bold">Belanja pakalan</h2>
                </div>
                </div>
                <button className="bg-cyan-600 px-6 py-3 rounded-2xl font-bold flex items-center gap-2">
                    ☰ BUKU PANDUAN
                </button>
            </div>
        </div>
    )
}

export default LessonHeader