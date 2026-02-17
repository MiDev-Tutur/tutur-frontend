import indonesia from "../../assets/img/indonesia.png"
import english from "../../assets/img/english.png"
import down from "../../assets/img/down.png"
import { useState } from "react"

const Header = () =>{
    const [showDropdown, setShowDropdown] = useState(false);
        
    const languages = [
        {
            name: 'English',
            flag: english
        },
        {
            name: 'Bahasa Indonesia',
            flag: indonesia
        },
    ];
    const [selectedLanguage, setSelectedLanguage] = useState(languages[1].name);
    const [selectedFlag, setSelectedFlag] = useState(languages[1].flag);

    return(
        <header className="flex justify-between items-center px-8 py-6">
            <div className="text-4xl font-bold text-zinc-800">Tutur.</div>
            
            <div className="relative">
                <button
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-50 cursor-pointer transition"
                >
                    <img className='w-5' src={selectedFlag} alt="" />
                    <span className="text-gray-700 font-semibold">{selectedLanguage}</span>
                    <img className='w-5 font-semibold' src={down} alt="" />
                </button>
                
                {showDropdown && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 z-10">
                        {languages.map((lang) => (
                        <button
                            key={lang.name}
                            onClick={() => {
                                setSelectedLanguage(lang.name);
                                setSelectedFlag(lang.flag);
                                setShowDropdown(false);
                            }}
                            className="w-full flex cursor-pointer items-center gap-3 text-left px-4 py-3 hover:bg-gray-100 transition first:rounded-t-lg last:rounded-b-lg"
                        >
                            <img src={lang.flag} alt={lang.name} className="w-5 h-5" />
                            <span>{lang.name}</span>
                        </button>
                        ))}
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header