"use client";
import styles from "./style.module.css";
import { IQuestion } from "../types";
import { YesNo } from "..";
import { useContext, useState } from "react";
import { QuizContext } from "@/contexts/QuizContext";

type QuestionTypeExtended = IQuestion & {
    isFinal: boolean;
    index: number;
};

export default function QuestionCard({
    id,
    title,
    example,
    answer_component,
    isFinal,
    index,
}: QuestionTypeExtended) {
    const { setCurrentQuestionIndex, handleAnswerChange, currentQuestionIndex } = useContext(QuizContext);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleQuestionChange = (next_question_id: number) => {
        if (next_question_id > currentQuestionIndex) {
            handleAnswerChange(id, selectedIndex);
        }
        setCurrentQuestionIndex((next_question_id));
    };

    return (
        <div className={styles.card}>
            <h2 className={styles.question_id}>Question #{id}</h2>
            <h1 className={styles.question_text}>{title}</h1>
            <span className={styles.question_example}>{example && `${example}`}</span>
            <div className={styles.answers_container}>
                <AnswerInput
                    answer_component={answer_component}
                    selectedIndex={selectedIndex}
                    setSelectedIndex={setSelectedIndex}
                />
            </div>
            <div className={styles.button_container}>
                <div>
                    {index != 0 && (
                        <button
                            className={styles.button}
                            onClick={() => handleQuestionChange(index - 1)}
                        >
                            Pregunta Anterior
                        </button>
                    )}
                </div>
                <button
                    disabled={isFinal}
                    className={styles.button}
                    onClick={() => handleQuestionChange(index + 1)}
                >
                    {isFinal ? "Terminar Test" : "Siguiente Pregunta"}
                </button>
            </div>
        </div>
    );
}

function AnswerInput({
    answer_component,
    selectedIndex,
    setSelectedIndex,
}: {
    answer_component: string;
    selectedIndex: number;
    setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
    switch (answer_component) {
        case "radio":
            return (
                <YesNo
                    selectedIndex={selectedIndex}
                    setSelectedIndex={setSelectedIndex}
                />
            );
        default:
            return <></>;
    }
}
