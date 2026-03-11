import { useEffect, useState, useRef } from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import Navbar from "../../components/Dashboard/Navbar";
import LessonHeader from "../../components/Dashboard/LessonHeader";
import LanguageButton from "../../components/Dashboard/LanguageButton";
import LevelBatch from "../../components/Dashboard/LevelBatch";
import { useNavigate } from "react-router-dom";

export default function Learn() {
    const [levels, setLevels] = useState([]);
    const [isLocal, setIsLocal] = useState(true);
    const [languages, setLanguages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [courseStep, setCourseStep] = useState(0);
    const [selectedLocal, setSelectedLocal] = useState(
        localStorage.getItem("local")
    );

    const currentLevel = courseStep + 1;

    const navigate = useNavigate();
    const cancelled = useRef(false);

    const id = localStorage.getItem("id");
    const name = localStorage.getItem("name");

    const scrollRef = useRef(null);
    const batchRefs = useRef([]);
    const [activeCard, setActiveCard] = useState(0);

    /* ===========================
            CHECK LOGIN
    ============================ */
    useEffect(() => {
        if (!name || !id) navigate("/login");
    }, [id, name, navigate]);

    /* ===========================
            CREATE COURSE
    ============================ */
    const createCourse = async () => {
        try {
            const dominantName = localStorage.getItem("dominant");
            const localName = localStorage.getItem("local");

            const resLang = await fetch("http://103.143.71.178:8000/api/tutur/languages");
            const langs = await resLang.json();

            const dominant = langs.find(
                (l) => l.languageName.toLowerCase() === dominantName
            );
            const local = langs.find(
                (l) => l.languageName.toLowerCase().replace(/\s+/g, "_") === localName
            );

            if (!dominant || !local) return;

            await fetch("http://103.143.71.178:8000/api/tutur/courses", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    idUser: Number(id),
                    idDominantLanguage: dominant.idLanguage,
                    idLocalLanguage: local.idLanguage,
                    courseStep: 0,
                }),
            });
        } catch (err) {
            console.error(err);
        }
    };

    /* ===========================
        GET USER COURSE STEP
    ============================ */
    const getUserCurrentLevel = async () => {
        try {
            const dominant = localStorage.getItem("dominant");
            const local = localStorage.getItem("local");

            const res = await fetch(
                `http://103.143.71.178:8000/api/tutur/courses/user/${id}/${dominant}/${local}`
            );

            if (res.status === 404) {
                await createCourse();
                const newRes = await fetch(
                    `http://103.143.71.178:8000/api/tutur/courses/user/${id}/${dominant}/${local}`
                );
                const newData = await newRes.json();
                setCourseStep(newData.courseStep);
                return;
            }

            if (!res.ok) throw new Error("Failed to fetch course");

            const data = await res.json();
            setCourseStep(data.courseStep);
        } catch (err) {
            console.error(err);
        }
    };

    /* ===========================
            FETCH LEVELS
    ============================ */
    const fetchLevels = async (localLang) => {
        try {
            const dominant = localStorage.getItem("dominant");
            const res = await fetch(
                `http://127.0.0.1:8000/api/tutur/course/${dominant}/${localLang}`
            );

            if (!res.ok) throw new Error("Failed to fetch levels");

            const data = await res.json();

            if (cancelled.current) {
                setLevels(data.courses);
                setLoading(false);
            }
        } catch (err) {
            console.error(err);
            if (!cancelled.current) setLoading(false);
        }
    };

    /* ===========================
            GET LANGUAGES
    ============================ */
    const getData = async () => {
        try {
            const res = await fetch("http://103.143.71.178:8000/api/tutur/languages");
            const data = await res.json();

            const locals = data.filter((item) => item.languageType === "local");
            setLanguages(locals);
        } catch (err) {
            console.error(err);
        }
    };

    /* ===========================
            INITIAL LOAD
    ============================ */
    useEffect(() => {
        const init = async () => {
            const local = localStorage.getItem("local");
            const hasLocal = local !== null && local !== "false";

            await getData();

            if (hasLocal) {
                setSelectedLocal(local.replace(/_/g, " "));
                await fetchLevels(local);
                await getUserCurrentLevel();
            } else {
                setIsLocal(false);
                setLoading(false);
            }
        };

        init();
        return () => (cancelled.current = true);
    }, []);

    /* ==================================
        GROUP LEVELS INTO BATCHES OF 6
    =================================== */
    const levelGroups = [];
    for (let i = 0; i < levels.length; i += 6) {
        levelGroups.push(levels.slice(i, i + 6));
    }

    /* ===========================
        OBSERVE WHICH CARD ACTIVE
    ============================ */
    useEffect(() => {
        if (!levelGroups.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveCard(Number(entry.target.dataset.index));
                    }
                });
            },
            { root: scrollRef.current, threshold: 0.55 }
        );

        batchRefs.current.forEach((el, i) => {
            if (el) {
                el.dataset.index = i;
                observer.observe(el);
            }
        });

        return () => observer.disconnect();
    }, [levels]);

    /* ===========================
        AUTO SCROLL TO CURRENT LEVEL
    ============================ */
    useEffect(() => {
        if (!levels.length) return;

        const batchIndex = Math.floor((currentLevel - 1) / 6);
        const target = batchRefs.current[batchIndex];

        if (target && scrollRef.current) {
            scrollRef.current.scrollTo({
                left: target.offsetLeft - 40,
                behavior: "smooth",
            });
        }
    }, [levels, currentLevel]);

    /* ===========================
        CHANGE LOCAL LANGUAGE
    ============================ */
    const handleSelected = async (e) => {
        const selected = e.target.value.toLowerCase().trim().replace(/\s+/g, "_");

        localStorage.setItem("local", selected);
        setSelectedLocal(selected.replace(/_/g, " "));

        setLevels([]);
        setLoading(true);

        await fetchLevels(selected);
        await getUserCurrentLevel();
    };

    /* ===========================
            RENDER UI
    ============================ */
    return (
        <div className="flex h-screen bg-gray-50 overflow-hidden">

            <Sidebar />

            {/* CENTER CONTENT */}
            <div className="flex-1 flex flex-col ml-64 mr-80 overflow-y-auto">

                <Navbar fetchLevels={fetchLevels} />

                <div className="flex flex-col items-center p-8">

                    {!loading && isLocal && (
                        <LessonHeader activeCard={activeCard} />
                    )}

                    {loading ? (
                        <h1 className="text-gray-600 text-xl mt-20">Loading...</h1>
                    ) : isLocal ? (
                        <>
                            <div
                                ref={scrollRef}
                                className="flex overflow-x-auto snap-x snap-mandatory 
                                px-10 pb-10 w-full max-w-[1300px]"
                            >
                                {levelGroups.map((batch, i) => (
                                    <div
                                        className="snap-center"
                                        key={i}
                                        ref={(el) => (batchRefs.current[i] = el)}
                                    >
                                        <LevelBatch
                                            levels={batch}
                                            batchIndex={i}
                                            currentLevel={currentLevel}
                                        />
                                    </div>
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="text-center mt-16 w-full max-w-4xl">
                            <h1 className="text-4xl font-bold text-gray-800">
                                Choose Your Language
                            </h1>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
                                {languages.map((lang) => (
                                    <LanguageButton key={lang.idLanguage} language={lang.languageName} />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* RIGHT PANEL FIXED */}
            <div className="fixed right-0 top-0 h-full w-80 bg-white border-l border-gray-200 shadow-xl p-6 overflow-y-auto">

                <h3 className="text-lg font-bold text-gray-800 mb-4">Local Languages</h3>

                <div className="bg-gray-50 rounded-2xl p-4">
                    <select
                        onChange={handleSelected}
                        value={selectedLocal}
                        className="w-full bg-white border border-gray-200 rounded-xl p-3 
                        text-gray-800 font-semibold focus:outline-none
                        focus:ring-2 focus:ring-blue-400"
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

        </div>
    );
}