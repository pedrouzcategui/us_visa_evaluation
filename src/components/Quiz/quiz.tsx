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
            <div className="w-4/5 mx-auto h-[95vh] flex flex-col items-center justify-center">
                <div className="w-fit px-4 text-center py-2 rounded-lg bg-slate-700">
                    <span className="text-white">Question {index + 1} / {questions.length}</span>
                </div>
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
