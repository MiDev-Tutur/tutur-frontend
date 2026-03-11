import { useNavigate } from "react-router-dom";
import star from "../../assets/img/star.png";

const Level = ({ level, index, currentLevel }) => {
    const navigate = useNavigate();

    const levelNumber = index + 1;
    const isUnlocked = levelNumber <= currentLevel;

    const handleLevel = () => {
        if (!isUnlocked) return;
        navigate("/question", { state: level });
    };

    return (
        <button
            disabled={!isUnlocked}
            onClick={handleLevel}
            className={`
                w-20 h-20 rounded-full p-5 flex items-center justify-center 
                transition-all duration-300
                ${isUnlocked
                    ? "bg-[#0074ba] cursor-pointer hover:translate-y-1 shadow-[0_4px_0_#02456d] hover:shadow-none"
                    : "bg-gray-300 cursor-not-allowed"
                }
            `}
        >
            <img src={star} alt="" className="w-10" />
        </button>
    );
};

export default Level;