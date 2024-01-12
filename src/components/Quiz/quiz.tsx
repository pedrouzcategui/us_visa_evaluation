"use client";
import QUIZ from "@/questions";
import QuestionCard from "../QuestionCard/QuestionCard";
import { useEffect, useState } from "react";
import QuizProvider from "@/contexts/QuizContext";

export function Quiz() {
    const { questions } = QUIZ
    const [index, setCurrentIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [isFinal, setIsFinal] = useState(false);
    const currentQuestion = questions[index];

    useEffect(() => {
        setIsFinal(index + 1 === questions.length ?? false);
    }, [index]);

    useEffect(() => {
        console.log(userAnswers)
    }, [userAnswers])

    return (
        <QuizProvider>
            <div className="w-4/5 mx-auto h-[95vh] flex flex-col items-center justify-center">
                <div className="w-fit px-4 text-center py-2 rounded-lg bg-slate-700">
                    <span className="text-white">Question {index + 1} / {questions.length}</span>
                </div>
                <QuestionCard
                    key={`question--${index}`}
                    index={index}
                    isFinal={isFinal}
                    setCurrentIndex={setCurrentIndex}
                    {...currentQuestion}
                />
            </div>
        </QuizProvider>

    );
}
