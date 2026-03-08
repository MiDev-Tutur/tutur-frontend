import { useEffect, useState } from "react";

export default function TypewriterText({ text, speed = 25, onComplete, skip }) {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setDisplayedText("");
        setIndex(0);
    }, [text]);

    useEffect(() => {
        if (skip) {
            setDisplayedText(text);
            setIndex(text.length);
            return;
        }

        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text[index]);
                setIndex(index + 1);
            }, speed);

            return () => clearTimeout(timeout);
        } else {
            onComplete && onComplete();
        }
    }, [index, text, speed, skip, onComplete]);

    return (
        <p className="text-lg leading-relaxed indent-8">
            {displayedText}
            {index < text.length && (
                <span className="animate-pulse">|</span>
            )}
        </p>
    );
}