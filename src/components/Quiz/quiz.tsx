'use client'
import { Quiz } from "../types";
import QuestionCard from '../QuestionCard/QuestionCard';
import { useEffect, useState } from "react";

export function Quiz({ questions }: Quiz) {

    const [index, setCurrentIndex] = useState(0);
    const [isFinal, setIsFinal] = useState(false);
    const currentQuestion = questions[index];

    useEffect(() => {
        if (index + 1 == questions.length) {
            console.log('Se ejecuta')
            setIsFinal(true);
        } else {
            setIsFinal(false);
        }
    }, [index])

    return <QuestionCard key={`question-${index}`} id={index} isFinal={isFinal} {...currentQuestion} setCurrentIndex={setCurrentIndex} />

}
