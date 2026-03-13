import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import minang from "../../assets/img/minang.png"
import dayak from "../../assets/img/dayak.png"
import jawa from "../../assets/img/jawa.png"
import betawi from "../../assets/img/Betawi.png"

const Question = () => {
    const API_URL = import.meta.env.VITE_API_URL
    const location = useLocation()
    const navigate = useNavigate()
    const data = location.state

    const [subLevel, setSubLevel] = useState(1)
    const countSubLevel = data.questions.length

    const [progress, setProgress] = useState(0)
    const [questions, setQuestions] = useState(data.questions[0])

    const [selectedOption, setSelectedOption] = useState(null)
    const [wrongOption, setWrongOption] = useState(null)
    const [correctOption, setCorrectOption] = useState(null)

    const updateLevel = async () => {
        try {

            const idUser = localStorage.getItem("id")
            const dominant = localStorage.getItem("dominant")
            const local = localStorage.getItem("local")

            const res = await fetch(
                `${API_URL}/tutur/courses/${idUser}/${dominant}/${local}`,
                {
                    method: "PATCH"
                }
            )

            if (!res.ok) {
                throw new Error("Failed to update level")
            }

        } catch (err) {
            console.error(err)
        }
    }

    const handleAnswer = (option) => {

        setSelectedOption(option)

        if(option === questions.answer){

            setCorrectOption(option)

            setTimeout(()=>{

                setCorrectOption(null)
                setSelectedOption(null)

                const newProgress = ((subLevel + 1) / countSubLevel) * 100
                setProgress(newProgress)

                if(subLevel === countSubLevel){
                    updateLevel()
                    navigate("/learn")
                }else{
                    setQuestions(data.questions[subLevel])
                    setSubLevel(subLevel+1)
                }

            },900)

        }else{

            setWrongOption(option)

            setTimeout(()=>{
                setWrongOption(null)
                setSelectedOption(null)
            },700)

        }

    }

    const getFlag = () =>{
        const language = localStorage.getItem('local')
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

        <div className="min-h-screen bg-white">

            {/* HEADER */}
            <div className="max-w-7xl mx-auto px-10 pt-10">

                <div className="flex items-center justify-between mb-6">

                    <button
                        onClick={()=>navigate("/learn")}
                        className="text-gray-600 cursor-pointer font-semibold hover:text-black"
                    >
                        ← Back
                    </button>

                    <span className="text-gray-500 font-medium">
                        Question {subLevel} / {countSubLevel}
                    </span>

                </div>

                {/* Progress */}
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">

                    <div
                        className="h-full bg-blue-500 transition-all duration-500"
                        style={{width:`${progress}%`}}
                    />

                </div>

            </div>


            {/* MAIN */}
            <div className="max-w-7xl mx-auto px-10 py-16 grid grid-cols-2 gap-16 items-start">


                {/* LEFT - QUESTION */}
                <div className="flex items-center gap-6">
                    <div className="
                        w-32
                        rounded-xl
                        mb-4
                        group-hover:scale-110
                        transition-transform
                    ">
                        <img
                            src={getFlag()}
                            className="w-full h-full"
                        />
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 leading-snug mb-6">
                        {questions.question}
                    </h1>

                </div>


                {/* RIGHT - OPTIONS */}
                <div className="space-y-4">
                    <p className="text-gray-500 text-lg">
                        Choose the correct answer to continue.
                    </p>
                    {questions.options.map(option => {

                        const isSelected = selectedOption === option
                        const isWrong = wrongOption === option
                        const isCorrect = correctOption === option

                        return(
                            
                            <button
                                key={option}
                                onClick={()=>handleAnswer(option)}
                                className={`
                                    w-full text-left p-6 rounded-xl border-2
                                    transition-all duration-200 font-semibold text-lg

                                    ${isWrong
                                        ? "border-red-500 bg-red-50"
                                        : isCorrect
                                        ? "border-green-500 bg-green-50 scale-105"
                                        : isSelected
                                        ? "border-blue-500 bg-blue-50"
                                        : "border-gray-200 hover:border-blue-400 hover:bg-blue-50"
                                    }
                                `}
                            >

                                {option}

                            </button>

                        )

                    })}

                </div>

            </div>

        </div>

    )

}

export default Question