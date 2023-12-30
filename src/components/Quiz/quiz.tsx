"use client";
import QuestionCard from "../QuestionCard/QuestionCard";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { useAppSelector } from "@/store/hooks";

export function Quiz() {
    const questions = useAppSelector(state => state.quiz.questions);
    const [index, setCurrentIndex] = useState(0);
    const currentQuestion = questions[index];
    const [isFinal, setIsFinal] = useState(false);

    useEffect(() => {
        setIsFinal(index + 1 === questions.length ?? false);
    }, [index]);

    return (
        <Provider store={store}>
            <div className="h-[95vh] flex items-center justify-center">
                <QuestionCard
                    key={`question-${index}`}
                    index={index}
                    isFinal={isFinal}
                    setCurrentIndex={setCurrentIndex}
                    {...currentQuestion}
                />
            </div>
        </Provider>

    );
}
