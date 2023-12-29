"use client";
import { Answer, Quiz } from "../types";
import QuestionCard from "../QuestionCard/QuestionCard";
import { useEffect, useState } from "react";
import { QuizContext } from "@/providers/QuizProvider";

export function Quiz({ questions }: Quiz) {
    const [index, setCurrentIndex] = useState(0);
    const currentQuestion = questions[index];
    const [isFinal, setIsFinal] = useState(false);
    const [quiz, setQuiz] = useState<Array<{ question_id: number, value: string }>>([]);

    const setQuizQuestion = (question: { question_id: number, value: string }) => {
        const question_exists = quiz.find(answer => answer.question_id == question.question_id);
        if (question_exists) return;
        setQuiz([...quiz, question]);
    };

    // For debugging purposes only
    useEffect(() => {
        console.log(quiz)
    }, [quiz])

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
