export default function TranslationRow({ row, onUpdated }) {
    const API_URL = import.meta.env.VITE_API_URL
    const idUser = localStorage.getItem("id");
    const [text, setText] = useState(row.translation || "");

    const update = async () => {
        await fetch(
            `${API_URL}/tutur/community/updateTranslation/${idUser}/${row.languageName}`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ translations: [{ row_position: row.row_position, translation: text }] })
            }
        );
        onUpdated();
    };

    return (
        <div className="flex items-center justify-between py-2 border-b">

            <div>
                <p className="font-semibold">{row.source}</p>
                <p className="text-gray-500 text-sm">{row.type}</p>
            </div>

            <input
                className="border rounded-lg p-2 w-64"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onBlur={update}
            />

        </div>
    );
}