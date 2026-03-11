import minang from "../../assets/img/minang.png"
import dayak from "../../assets/img/dayak.png"
import jawa from "../../assets/img/jawa.png"
import betawi from "../../assets/img/Betawi.png"

const LanguageButton = ({language}) =>{

    const handleSelect = (language) => {
        localStorage.setItem('local', language.toLowerCase().trim().replace(/\s+/g, "_"))
        window.location.href = '/learn';
    };

    const getFlag = (language) =>{
        const flags = {
            minang: minang,
            java: jawa,
            batak_toba: minang,
            iban: dayak,
            melayu_serawak: betawi
        }

        const key = language.toLowerCase().trim().replace(/\s+/g, "_")
        return flags[key]
    }

    return(
        <button
            onClick={() => handleSelect(language)}
            className={`
            group relative
            w-56 text-gray-700 rounded-2xl transition
            flex flex-col items-center justify-center
            text-center hover:cursor-pointer hover:shadow-none shadow-[0_4px_0_#d9d9d9]
            cursor-pointer bg-white px-6 border border-gray-200 hover:translate-y-1 duration-300
            `}
            >

            {/* flag */}
            <div className="
                w-32
                rounded-xl
                flex items-center justify-center
                mb-4
                group-hover:scale-110
                transition-transform
            ">
                <img
                    src={getFlag(language)}
                    alt={language}
                    className="w-full h-full"
                />
            </div>

            <div className="relative -top-5">
                {/* language name */}
                <p className="text-neutral-900 font-semibold text-lg">
                    {language}
                </p>

                {/* learner count */}
                <p className="text-neutral-600 text-sm">
                    {language}
                </p>
            </div>

            </button>
    )
}

export default LanguageButton