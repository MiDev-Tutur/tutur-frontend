import { useNavigate } from "react-router-dom";
import star from "../../assets/img/star.png"

const Level = ({ level, index, currentLevel }) => {

    const navigate = useNavigate()

    const levelNumber = index + 1

    const isUnlocked = levelNumber <= currentLevel

    const handleLevel = (e) => {

        if (!isUnlocked) return

        e.preventDefault()

        navigate("/question", {
            state: level
        })

    }

    return (

        <button
            disabled={!isUnlocked}
            onClick={(e) => handleLevel(e)}
            className={`
                w-20 rounded-full font-medium p-5 transition transform text-xl duration-300

                ${isUnlocked
                    ? "bg-[#0074ba] cursor-pointer hover:shadow-none shadow-[0_4px_0_#02456d] hover:translate-y-1"
                    : "bg-gray-300 cursor-not-allowed"
                }
            `}
        >
            <img src={star} alt="" />
        </button>

    )

}
export default Level