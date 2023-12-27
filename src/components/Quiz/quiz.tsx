"use client";
import { Quiz } from "../types";
import QuestionCard from "../QuestionCard/QuestionCard";
import { useEffect, useState } from "react";

export function Quiz({ questions }: Quiz) {
    const [index, setCurrentIndex] = useState(0);
    const currentQuestion = questions[index];
    const [isFinal, setIsFinal] = useState(false);
    const [quiz, setQuiz] = useState<Array<any>>([]);

    const setQuizQuestion = (question: any) => {
        setQuiz([...quiz, question]);
    };

    // For debugging purposes only
    // useEffect(() => {
    //     console.log(quiz)
    // }, [quiz])

    useEffect(() => {
        setIsFinal(index + 1 === questions.length ?? false);
    }, [index]);

    return (
        <QuestionCard
            setQuizQuestion={setQuizQuestion}
            key={`question-${index}`}
            id={index}
            isFinal={isFinal}
            {...currentQuestion}
            setCurrentIndex={setCurrentIndex}
        />
    );
}
