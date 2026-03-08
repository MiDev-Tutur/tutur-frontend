import { useEffect, useState } from "react";
import indonesia from "../../assets/img/indonesia.png"
import english from "../../assets/img/english.png"
import down from "../../assets/img/down.png"
import profile from "../../assets/img/logo/profile.png"

const Navbar = ({fetchLevels}) =>{
    const name = localStorage.getItem("name")
    const [showDropdown, setShowDropdown] = useState(false);

    const languages = [
        {
            name: 'English',
            flag: english,
            dominant: "english"
        },
        {
            name: 'Bahasa Indonesia',
            flag: indonesia,
            dominant: "indonesian"
        },
        {
            name: 'Malay',
            flag: english,
            dominant: "malay"
        },
    ];

    const savedDominant = localStorage.getItem("dominant") || "indonesian";
    const defaultLang = languages.find(l => l.dominant === savedDominant) || languages[1];

    const [selectedLanguage, setSelectedLanguage] = useState(defaultLang.name);
    const [selectedFlag, setSelectedFlag] = useState(defaultLang.flag);

    useEffect(() => {
        if (!localStorage.getItem("dominant")) {
            localStorage.setItem("dominant", "indonesian");
        }
    }, []);

    const handleDominant = (lang) => {

        localStorage.setItem("dominant", lang.dominant);

        const local = localStorage.getItem("local");

        setSelectedLanguage(lang.name);
        setSelectedFlag(lang.flag);
        setShowDropdown(false);

        fetchLevels(local);
    };

    return(

        <div className="bg-white border-b border-gray-200 px-8 py-4 flex justify-end gap-6">
            <div className="flex justify-center items-center">
                <div className="relative">
                    <button
                        onClick={() => setShowDropdown(!showDropdown)}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-50 cursor-pointer transition"
                    >
                        <img className='w-5' src={selectedFlag} alt="" />
                        <span className="text-gray-700">{selectedLanguage}</span>
                        <img className='w-5 font-semibold' src={down} alt="" />
                    </button>
                    
                    {showDropdown && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 z-10">
                            {languages.map((lang) => (
                            <button
                                key={lang.name}
                                onClick={() => handleDominant(lang)}
                                className="w-full flex cursor-pointer items-center gap-3 text-left px-4 py-3 hover:bg-gray-100 transition first:rounded-t-lg last:rounded-b-lg"
                            >
                                <img src={lang.flag} alt={lang.name} className="w-5 h-5" />
                                <span className="text-nowrap">{lang.name}</span>
                            </button>
                            ))}
                        </div>
                    )}
                </div>
                <div className="flex items-center">
                    <img src={profile} className="w-10"/>
                    <span className="text-gray-700">{name}</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar