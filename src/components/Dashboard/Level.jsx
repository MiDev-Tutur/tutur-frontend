import { useNavigate } from "react-router-dom";
import star from "../../assets/img/star.png"


const Level = ({level}) =>{

    const navigate = useNavigate()

    const handleLevel = (e) =>{
        e.preventDefault();
        navigate("/question", {
            state: level
        })
    }

    return(
        <button
            onClick={(e) => handleLevel(e)}
            className="w-20 rounded-full bg-[#0074ba] cursor-pointer hover:shadow-none shadow-[0_4px_0_#02456d] font-medium p-5 transition transform text-xl hover:translate-y-1 duration-300"
        >
            <img src={star} alt="" />
        </button>
    )
}

export default Level