import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

const Question = () =>{
    const location = useLocation()
    const navigate = useNavigate()
    const data = location.state
    const [subLevel, setSubLevel] = useState(1)
    const countSubLevel = data.questions.length
    const [proggPercentage, setProggPercentage] = useState(0)
    const [questions, setQuestions] = useState(data.questions[0])
    const [proggBar, setProggBar] = useState(0)

    const [selectedOption, setSelectedOption] = useState(null)
    const [wrongOption, setWrongOption] = useState(null)
    const [correctOption, setCorrectOption] = useState(null)

    const handleAnswer = (option) =>{
        setSelectedOption(option)

        if(option === questions.answer){
            setCorrectOption(option)

            setTimeout(() => {
                setCorrectOption(null)
                setSelectedOption(null)
                setProggPercentage((subLevel/countSubLevel)*100)
                setProggBar((subLevel/countSubLevel)*100)
                setSubLevel(subLevel+1)
                if(subLevel == countSubLevel){
                    navigate('/learn')
                }else{
                    setQuestions(data.questions[subLevel])
                }
            }, 800)
        }else{
            setWrongOption(option)

            setTimeout(() => {
                setWrongOption(null)
                setSelectedOption(null)
            }, 800)
        }
    }

    return(
        <div className="bg-linear-to-br from-slate-50 via-blue-50 to-slate-50 min-h-screen">
            <div className="flex items-center justify-center min-h-screen p-4">
                <div className="w-full max-w-2xl">

                    <div className="mb-12">
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-sm font-medium text-slate-600">
                                Question {subLevel} of {countSubLevel}
                            </span>
                            <span className="text-sm font-medium text-slate-600">
                                {proggPercentage}%
                            </span>
                        </div>
                        <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div className={`h-full w-[${proggBar}%] bg-linear-to-r from-blue-500 to-cyan-500 rounded-full`}></div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">

                        <div className="mb-10">
                            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
                                {questions.question}
                            </h1>
                        </div>

                        <div className="space-y-4">
                            {questions.options.map(option => {
                                const isSelected = selectedOption === option
                                const isWrong = wrongOption === option
                                const isCorrect = correctOption === option

                                return (
                                    <label key={option} className="block cursor-pointer">
                                        <input 
                                            type="radio" 
                                            name="answer"
                                            checked={isSelected}
                                            onChange={() => handleAnswer(option)}
                                            className="hidden"
                                        />

                                        <div
                                            className={`
                                                flex items-center p-5 border-2 rounded-xl transition-all duration-300
                                                ${isWrong 
                                                    ? "border-red-500 bg-red-100 animate-shake" 
                                                    : isCorrect
                                                        ? "border-green-500 bg-green-100 animate-pop"
                                                        : isSelected 
                                                            ? "border-blue-500 bg-blue-50"
                                                            : "border-slate-200 hover:border-blue-400 hover:bg-blue-50"
                                                }
                                            `}
                                        >
                                            <span
                                                className={`
                                                    text-lg font-medium transition-colors duration-300
                                                    ${isWrong 
                                                        ? "text-red-600"
                                                        : isCorrect
                                                            ? "text-green-600"
                                                            : isSelected
                                                                ? "text-blue-600"
                                                                : "text-slate-700"
                                                    }
                                                `}
                                            >
                                                {option}
                                            </span>
                                        </div>
                                    </label>
                                )
                            })}
                        </div>

                        <div className="mt-12 pt-8 border-t border-slate-200">
                            <p className="text-sm text-slate-500 text-center">
                                Select an answer and click next to continue
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question