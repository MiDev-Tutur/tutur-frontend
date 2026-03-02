import { useNavigate } from "react-router-dom";

const LanguageButton = ({language}) =>{
    const navigate = useNavigate()

    const handleSelect = (language) => {
        localStorage.setItem('local', language)
        navigate('/learn')
    };

    return(
        <button
            onClick={() => handleSelect(language)}
            className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 transform hover:scale-110 cursor-pointer shadow-lg hover:shadow-2xl'
            }`}
        >
            {/* Gradient background */}
            <div className={`absolute inset-0 bg-linear-to-br from-red-400 to-orange-400 opacity-90 group-hover:opacity-100 transition-opacity`}></div>
            
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-3">
                <div className="text-white text-center">
                    <p className="text-lg font-bold">{language}</p>
                    <p className="text-sm opacity-90">{language}</p>
                </div>
            </div>
            {/* Shine effect on hover */}
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </button>
    )
}

export default LanguageButton