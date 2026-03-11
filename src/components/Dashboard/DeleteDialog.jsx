export default function DeleteDialog({ languageName, onClose }) {
    const idUser = localStorage.getItem("id");

    const deleteLang = async () => {
        await fetch(
            `http://103.143.71.178:8000/api/tutur/community/delete/${idUser}/${languageName}`,
            { method: "DELETE" }
        );
        window.location.href = "/community";
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">

            <div className="bg-white rounded-3xl p-8 shadow-xl w-96">

                <h2 className="text-xl font-bold mb-4">Delete Language?</h2>

                <p className="text-gray-600 mb-6">
                    This action cannot be undone.
                </p>

                <div className="flex justify-between">
                    <button
                        className="px-4 py-2 bg-gray-300 rounded-xl"
                        onClick={onClose}
                    >
                        Cancel
                    </button>

                    <button
                        className="px-4 py-2 bg-red-500 text-white rounded-xl"
                        onClick={deleteLang}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}