"use client";
import { QuizContext } from "@/contexts/QuizContext";
import React from "react";
import Button from "../Button/Button";

export default function QuizAnswersConfirmationScreen() {
    const handleQuizSubmission = () => {
        console.log('Submitting Quiz')
    }

    return (
        <div className="p-4">
            <h2 className="text-center text-2xl font-bold ">Revise sus respuestas</h2>
            <QuestionAnswerRows />
            <Button onClick={handleQuizSubmission} variant="black" className="w-full my-2">
                Send Answers
            </Button>
        </div>
    );
}

function QuestionAnswerRows() {
    const { questions, userAnswers } = React.useContext(QuizContext);

    return questions.map((q, i) => {
        return (
            <QuizAnswerRow
                key={`${q.title}-${i}`}
                user_answer={userAnswers[i].selectedIndex}
                question_title={q.title}
                question_number={q.id}
            />
        );
    });
}

function QuizAnswerRow({
    question_title,
    question_number,
    user_answer,
}: {
    question_title: string;
    question_number: number;
    user_answer: number;
}) {
    const { setCurrentQuestionIndex, setIsReview, setIsEdit } =
        React.useContext(QuizContext);

    const handleEditQuestion = () => {
        setCurrentQuestionIndex(question_number);
        setIsEdit(true)
        setIsReview(false);
    };

    return (
        <div>
            <div className="grid grid-cols-3 gap-3 p-4">
                <div className="flex items-center">
                    <h2 className="text-lg font-semibold">
                        #{question_number}: {question_title}
                    </h2>
                </div>
                <div className="flex items-center justify-center">
                    <p className="text-gray-600 dark:text-gray-400">
                        Selected Answer: {user_answer == 0 ? "Yes" : "No"}
                    </p>
                </div>
                <div className="flex items-center justify-end">
                    <Button variant="secondary" onClick={handleEditQuestion}>
                        Editar Respuesta
                    </Button>
                </div>
            </div>
            <hr className="border-gray-200 dark:border-gray-700" />
        </div>
    );
}
