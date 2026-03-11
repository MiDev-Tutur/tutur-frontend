import { useEffect, useState, useRef } from "react";
import Level from "../../components/Dashboard/Level";
import Sidebar from "../../components/Dashboard/Sidebar";
import { useNavigate } from "react-router-dom";
import LessonHeader from "../../components/Dashboard/LessonHeader";
import LanguageButton from "../../components/Dashboard/LanguageButton";
import Navbar from "../../components/Dashboard/Navbar";

export default function Learn() {

    const [levels, setLevels] = useState([])
    const [isLocal, setIsLocal] = useState(true)
    const [languages, setLanguages] = useState([])
    const [loading, setLoading] = useState(true)
    const [courseStep, setCourseStep] = useState(0)
    const [selectedLocal, setSelectedLocal] = useState(
        localStorage.getItem("local")
    )

    const currentLevel = courseStep + 1

    const navigate = useNavigate()
    const cancelled = useRef(false)

    const id = localStorage.getItem("id")
    const name = localStorage.getItem("name")

    useEffect(() => {
        if (!name || !id) {
            navigate("/login")
        }
    }, [id, name, navigate])

    /*
    ===============================
    CREATE COURSE
    ===============================
    */

    const createCourse = async () => {

        try {

            const dominantName = localStorage.getItem("dominant")
            const localName = localStorage.getItem("local")

            const resLang = await fetch(
                "http://localhost:8000/api/tutur/languages"
            )

            const langs = await resLang.json()

            const dominant = langs.find(
                l => l.languageName.toLowerCase() === dominantName
            )

            const local = langs.find(
                l => l.languageName
                    .toLowerCase()
                    .replace(/\s+/g, "_") === localName
            )

            if (!dominant || !local) {
                console.error("Language not found")
                return
            }

            await fetch(
                "http://localhost:8000/api/tutur/courses",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        idUser: Number(id),
                        idDominantLanguage: dominant.idLanguage,
                        idLocalLanguage: local.idLanguage,
                        courseStep: 0
                    })
                }
            )

        } catch (err) {
            console.error(err)
        }

    }

    /*
    ===============================
    GET USER COURSE (PER LANGUAGE)
    ===============================
    */

    const getUserCurrentLevel = async () => {

        try {

            const dominant = localStorage.getItem("dominant")
            const local = localStorage.getItem("local")

            const res = await fetch(
                `http://localhost:8000/api/tutur/courses/user/${id}/${dominant}/${local}`
            )

            if (res.status === 404) {

                await createCourse()

                const newRes = await fetch(
                    `http://localhost:8000/api/tutur/courses/user/${id}/${dominant}/${local}`
                )

                const newData = await newRes.json()

                setCourseStep(newData.courseStep)

                return
            }

            if (!res.ok) {
                throw new Error("Failed to fetch courses")
            }

            const data = await res.json()

            setCourseStep(data.courseStep)

        } catch (err) {
            console.error(err)
        }

    }

    /*
    ===============================
    FETCH LEVELS
    ===============================
    */

    const fetchLevels = async (localLang) => {

        try {

            const dominant = localStorage.getItem("dominant")

            const res = await fetch(
                `http://127.0.0.1:8000/api/tutur/course/${dominant}/${localLang}`
            )

            if (!res.ok) {
                throw new Error("Failed to fetch levels")
            }

            const data = await res.json()

            if (cancelled.current) {
                setLevels(data.courses)
                setLoading(false)
            }

        } catch (err) {

            console.error(err)

            if (!cancelled.current) {
                setLoading(false)
            }
        }
    }

    /*
    ===============================
    GET LANGUAGES
    ===============================
    */

    const getData = async () => {

        try {

            const res = await fetch(
                "http://localhost:8000/api/tutur/languages"
            )

            const data = await res.json()

            const localLanguages = data.filter(
                item => item.languageType === "local"
            )

            setLanguages(localLanguages)

        } catch (err) {
            console.error(err)
        }

    }

    /*
    ===============================
    INITIAL LOAD
    ===============================
    */

    useEffect(() => {

        const init = async () => {

            const local = localStorage.getItem("local")
            const hasLocal = local !== null && local !== "false"

            await getData()

            if (hasLocal) {

                setSelectedLocal(local.replace(/_/g, " "))

                await fetchLevels(local)
                await getUserCurrentLevel()

            } else {

                setIsLocal(false)
                setLoading(false)

            }

        }

        init()

        return () => {
            cancelled.current = true
        }

    }, [])

    /*
    ===============================
    CHANGE LANGUAGE
    ===============================
    */

    const handleSelected = async (e) => {

        const selected = e.target.value
            .toLowerCase()
            .trim()
            .replace(/\s+/g, "_")

        localStorage.setItem("local", selected)

        setSelectedLocal(selected.replace(/_/g, " "))
        setLevels([])
        setLoading(true)

        await fetchLevels(selected)
        await getUserCurrentLevel()

    }

    /*
    ===============================
    RENDER
    ===============================
    */

    return (

        <div className="flex h-screen bg-gray-50 overflow-hidden">

            <Sidebar />

            <div className="flex-1 flex flex-col ml-64 overflow-y-auto">

                <Navbar fetchLevels={fetchLevels} />

                <div className="flex-1 flex gap-8 p-8">

                    <div className="flex-1 flex flex-col items-center">

                        {loading ? (

                            <div className="w-full max-w-6xl mx-auto p-6">

                                <div className="text-center mb-12">
                                    <h1 className="text-gray-500 text-lg mb-3">
                                        Loading Lessons...
                                    </h1>
                                </div>

                            </div>

                        ) : isLocal ? (

                            <>

                                <LessonHeader />

                                <div className="w-full max-w-4xl bg-white flex flex-wrap gap-5 items-center rounded-3xl shadow-lg p-8">

                                    {levels.map((level, index) => (
                                        <Level
                                            key={index}
                                            level={level}
                                            index={index}
                                            currentLevel={currentLevel}
                                        />
                                    ))}

                                </div>

                            </>

                        ) : (

                            <div className="w-full max-w-6xl mx-auto p-6">

                                <div className="text-center mb-12">

                                    <h1 className="text-5xl font-bold text-gray-900 mb-3">
                                        Choose Your Language
                                    </h1>

                                    <p className="text-xl text-gray-600">
                                        Select your preferred language to start learning
                                    </p>

                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

                                    {languages.map((language) => (

                                        <LanguageButton
                                            key={language.idLanguage}
                                            language={language.languageName}
                                        />

                                    ))}

                                </div>

                            </div>

                        )}

                    </div>

                    <div className="w-80 space-y-6">

                        {isLocal && (

                            <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-200">

                                <h3 className="text-lg font-bold text-gray-800 mb-4">
                                    Local Languages
                                </h3>

                                <div className="bg-gray-50 rounded-2xl p-4">

                                    <select
                                        onChange={handleSelected}
                                        value={selectedLocal}
                                        className="w-full bg-white border border-gray-200 rounded-xl p-3 text-gray-800 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    >

                                        {languages.map((language) => (

                                            <option
                                                key={language.idLanguage}
                                                value={language.languageName.toLowerCase()}
                                            >
                                                {language.languageName}
                                            </option>

                                        ))}

                                    </select>

                                </div>

                            </div>

                        )}

                    </div>

                </div>

            </div>

        </div>

    )
}