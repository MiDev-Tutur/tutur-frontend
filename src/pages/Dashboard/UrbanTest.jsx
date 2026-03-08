import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

const UrbanTest = () => {

    const location = useLocation()
    const navigate = useNavigate()

    const data = location.state?.data
    const countSubLevel = data.questions.length

    const [subLevel, setSubLevel] = useState(1)
    const [questionIndex, setQuestionIndex] = useState(0)
    const [questions, setQuestions] = useState(data.questions[0])

    const [selectedOptions, setSelectedOptions] = useState([])
    const [wrongOption, setWrongOption] = useState([])
    const [correctOption, setCorrectOption] = useState([])

    const [proggPercentage, setProggPercentage] = useState(0)

    const isMultiple = questions.answer.length > 1

    const handleAnswer = (option) => {

        if(isMultiple){

            if(selectedOptions.includes(option)) return

            if(selectedOptions.length >= questions.answer.length) return

            setSelectedOptions(prev => [...prev, option])

        }else{

            setSelectedOptions([option])

        }
    }

    const checkAnswer = () => {

        const correct = questions.answer

        const isCorrect =
            correct.length === selectedOptions.length &&
            correct.every((ans, index) => ans === selectedOptions[index])

        if(isCorrect){

            setCorrectOption(selectedOptions)

            setTimeout(() => {

                const nextIndex = questionIndex + 1
                const nextLevel = subLevel + 1

                const progress = (nextLevel / countSubLevel) * 100
                setProggPercentage(Math.round(progress))

                if(nextIndex >= countSubLevel){
                    navigate('/urban-legend')
                    return
                }

                setQuestionIndex(nextIndex)
                setSubLevel(nextLevel)

                setQuestions(data.questions[nextIndex])

                setSelectedOptions([])
                setCorrectOption([])

            }, 800)

        }else{

            setWrongOption(selectedOptions)

            setTimeout(() => {
                setWrongOption([])
                setSelectedOptions([])
            }, 800)

        }
    }

    const progressWidth = (subLevel / countSubLevel) * 100

    return (

        <div className="bg-linear-to-br from-slate-50 via-blue-50 to-slate-50 min-h-screen">

            <div className="flex items-center justify-center min-h-screen p-4">

                <div className="w-full max-w-2xl">

                    {/* Progress */}
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

                            <div
                                className="h-full bg-linear-to-r from-blue-500 to-cyan-500 rounded-full"
                                style={{ width: `${progressWidth}%` }}
                            />

                        </div>

                    </div>

                    {/* Question */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">

                        <div className="mb-6">

                            {isMultiple && (
                                <p className="text-sm text-slate-500 mb-2">
                                    Fill {questions.answer.length} blanks in order
                                </p>
                            )}

                            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
                                {questions.question}
                            </h1>

                        </div>

                        {/* Options */}
                        <div className="space-y-4">

                            {questions.options.map(option => {

                                const isSelected = selectedOptions.includes(option)
                                const isWrong = wrongOption.includes(option)
                                const isCorrect = correctOption.includes(option)

                                const order = selectedOptions.indexOf(option) + 1

                                return (

                                    <label key={option} className="block cursor-pointer">

                                        <input
                                            type={isMultiple ? "checkbox" : "radio"}
                                            checked={isSelected}
                                            onChange={() => handleAnswer(option)}
                                            className="hidden"
                                        />

                                        <div
                                            className={`
                                                flex items-center justify-between p-5 border-2 rounded-xl transition-all duration-300
                                                ${isWrong
                                                    ? "border-red-500 bg-red-100"
                                                    : isCorrect
                                                        ? "border-green-500 bg-green-100"
                                                        : isSelected
                                                            ? "border-blue-500 bg-blue-50"
                                                            : "border-slate-200 hover:border-blue-400 hover:bg-blue-50"
                                                }
                                            `}
                                        >

                                            <span
                                                className={`
                                                    text-lg font-medium
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

                                            {/* ORDER NUMBER (ONLY MULTIPLE) */}
                                            {isMultiple && isSelected && (
                                                <div className="ml-4 flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white font-bold">
                                                    {order}
                                                </div>
                                            )}

                                        </div>

                                    </label>

                                )

                            })}

                        </div>

                        {/* Submit */}
                        <button
                            onClick={checkAnswer}
                            disabled={selectedOptions.length !== questions.answer.length}
                            className="mt-6 w-full bg-blue-500 hover:bg-blue-600 disabled:bg-slate-300 text-white py-3 rounded-xl transition"
                        >
                            Submit Answer
                        </button>

                        <div className="mt-12 pt-8 border-t border-slate-200">

                            <p className="text-sm text-slate-500 text-center">
                                Select the correct answer
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default UrbanTest