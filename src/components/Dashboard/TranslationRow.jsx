export default function TranslationRow({ row, onUpdated }) {
    const idUser = localStorage.getItem("id");
    const [text, setText] = useState(row.translation || "");

    const update = async () => {
        await fetch(
            `http://103.143.71.178:8000/api/tutur/community/updateTranslation/${idUser}/${row.languageName}`,
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