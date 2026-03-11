export default function ProgressBar({ progress }) {
    return (
        <div className="w-full bg-gray-200 rounded-xl h-6 overflow-hidden">
            <div
                className="h-full bg-[#0074BA] rounded-xl transition-all"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
}