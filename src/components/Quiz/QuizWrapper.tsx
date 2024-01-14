"use client"
import { useState, useContext, useEffect } from "react";
import { QuizContext } from "@/contexts/QuizContext";
import QuestionCard from "../QuestionCard/QuestionCard";
import QuizAnswersConfirmationScreen from "./QuizAnswersConfirmationScreen";

export default function QuizWrapper() {
    const { currentQuestionIndex, questions, isReview } = useContext(QuizContext);
    const currentQuestion = questions.find(question => question.id == currentQuestionIndex);
    if (!currentQuestion) throw new Error('Question not found or some shit like that')
    const { id, title, example, answer_component, options } = currentQuestion;
    const [isFinal, setIsFinal] = useState(false);

    useEffect(() => {
        setIsFinal(currentQuestionIndex === questions.length ?? false);
    }, [currentQuestionIndex]);

    return (
        <div className="w-4/5 mx-auto min-h-[95vh] flex flex-col items-center justify-center">
            <QuestionProgressIndicator
                currentQuestionIndex={currentQuestionIndex}
                questionsLength={questions.length}
            />
            <QuestionCard
                id={id}
                answer_component={answer_component}
                options={options}
                title={title}
                example={example}
                key={`question--${currentQuestionIndex}`}
                index={currentQuestionIndex}
                isFinal={isFinal}
            />
            {
                isReview && <QuizAnswersConfirmationScreen />
            }
        </div>
    );
}

function QuestionProgressIndicator({
    currentQuestionIndex,
    questionsLength,
}: {
    currentQuestionIndex: number;
    questionsLength: number;
}) {
    return (
        <div className="w-fit px-4 text-center py-2 rounded-lg bg-slate-700">
            <span className="text-white">
                Question {currentQuestionIndex} / {questionsLength}
            </span>
        </div>
    );
}
