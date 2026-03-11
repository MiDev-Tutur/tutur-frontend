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

    const [progress, setProgress] = useState(0)

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
        console.log(correct)

        const isCorrect =
            correct.length === selectedOptions.length &&
            correct.every((ans, index) => ans === selectedOptions[index])

        if(isCorrect){

            setCorrectOption(selectedOptions)

            setTimeout(() => {

                const nextIndex = questionIndex + 1
                const nextLevel = subLevel + 1

                const newProgress = (nextLevel / countSubLevel) * 100
                setProgress(newProgress)

                if(nextIndex >= countSubLevel){
                    navigate("/urban-legend")
                    return
                }

                setQuestionIndex(nextIndex)
                setSubLevel(nextLevel)

                setQuestions(data.questions[nextIndex])

                setSelectedOptions([])
                setCorrectOption([])

            },800)

        }else{

            setWrongOption(selectedOptions)

            setTimeout(() => {

                setWrongOption([])
                setSelectedOptions([])

            },800)

        }

    }


    const progressWidth = (subLevel / countSubLevel) * 100


    return (

        <div className="min-h-screen bg-white">

            {/* HEADER */}
            <div className="max-w-7xl mx-auto px-10 pt-10">

                <div className="flex items-center justify-between mb-6">

                    <button
                        onClick={()=>navigate("/urban-legend")}
                        className="text-gray-600 font-semibold hover:text-black"
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
                        style={{width:`${progressWidth}%`}}
                    />

                </div>

            </div>



            {/* MAIN */}
            <div className="max-w-7xl mx-auto px-10 py-16 grid grid-cols-2 gap-16 items-start">


                {/* LEFT - QUESTION */}
                <div>

                    {isMultiple && (
                        <p className="text-sm text-gray-500 mb-4">
                            Fill {questions.answer.length} blanks in order
                        </p>
                    )}

                    <h1 className="text-4xl font-bold text-gray-900 leading-snug mb-6">
                        {questions.question}
                    </h1>

                    

                </div>



                {/* RIGHT - OPTIONS */}
                <div className="space-y-2">
                    <p className="text-gray-500 text-lg">
                        Select the correct answers to continue the legend.
                    </p>

                    {questions.options.map(option => {

                        const isSelected = selectedOptions.includes(option)
                        const isWrong = wrongOption.includes(option)
                        const isCorrect = correctOption.includes(option)

                        const order = selectedOptions.indexOf(option) + 1

                        return(

                            <button
                                key={option}
                                onClick={()=>handleAnswer(option)}
                                className={`
                                    w-full flex items-center justify-between
                                    text-left p-6 rounded-xl border-2
                                    cursor-pointer
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

                                {isMultiple && isSelected && (

                                    <div className="ml-4 flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white font-bold">
                                        {order}
                                    </div>

                                )}

                            </button>

                        )

                    })}



                    {/* SUBMIT */}
                    <button
                        onClick={checkAnswer}
                        disabled={selectedOptions.length !== questions.answer.length}
                        className="
                            mt-6 w-full py-4 rounded-xl font-semibold text-lg
                            bg-[#0074ba] text-white cursor-pointer hover:shadow-none hover:translate-y-1 disabled:translate-0 shadow-[0_4px_0_#02456d]
                            disabled:bg-gray-300 disabled:shadow-[0_4px_0_#bec4c8] disabled:cursor-no-drop
                            transition
                        "
                    >
                        Submit Answer
                    </button>

                </div>

            </div>


            {/* FEEDBACK */}
            {(correctOption.length > 0 || wrongOption.length > 0) && (

                <div className={`w-full py-6 ${correctOption.length ? "bg-green-100" : "bg-red-100"}`}>

                    <div className="max-w-6xl mx-auto px-10">

                        <span className={`font-bold text-lg ${correctOption.length ? "text-green-700" : "text-red-700"}`}>
                            {correctOption.length ? "Correct! 🎉" : "Try Again"}
                        </span>

                    </div>

                </div>

            )}

        </div>
    )

}

export default UrbanTest