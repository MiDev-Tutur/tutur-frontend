export default function LanguageDropdown({ value, languages, disable, onChange }) {
    return (
        <select
            className="
                border border-[#CBD5E1] p-3 rounded-2xl
                font-bold text-[#1E293B] bg-white
                focus:ring-2 focus:ring-[#0074BA] outline-none
            "
            value={value}
            onChange={(e) => onChange(e.target.value)}
        >
            {languages.map((lang) => (
                <option
                    key={lang}
                    value={lang}
                    disabled={lang === disable}
                >
                    {lang.charAt(0).toUpperCase() + lang.slice(1)}
                </option>
            ))}
        </select>
    );
}