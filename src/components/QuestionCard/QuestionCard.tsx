"use client";
import { useState } from "react";
import styles from "./style.module.css";
import { IQuestion } from "../types";
import { Checkboxes, Input, YesNo, Select } from "..";

type QuestionTypeExtended = IQuestion & {
    setCurrentIndex: (value: number) => void;
    isFinal: boolean;
    index: number;
};

export default function QuestionCard({
    id,
    title,
    example,
    options,
    answer_component,
    selectedOptionIndex,
    setCurrentIndex,
    isFinal,
    index
}: QuestionTypeExtended) {

    const handleQuestionChange = (question_id: number) => {
        // Here I should update the context
        setCurrentIndex(question_id);
    }

    return (
        <div className={styles.card}>
            <h2 className={styles.question_id}>Question #{id}</h2>
            <h1 className={styles.question_text}>{title}</h1>
            <span className={styles.question_example}>
                {example && `${example}`}
            </span>
            <div className={styles.answers_container}>
                <AnswerInput
                    selectedOptionIndex={selectedOptionIndex}
                    answer_component={answer_component}
                />
            </div>
            <div className={styles.button_container}>
                <div>
                    {index != 0 &&
                        <button
                            className={styles.button}
                            onClick={() => handleQuestionChange(index - 1)}
                        >
                            Pregunta Anterior
                        </button>
                    }
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
    selectedOptionIndex
}: {
    answer_component: string;
    selectedOptionIndex: number | number[];
}) {

    switch (answer_component) {
        case "radio":
            return <YesNo selectedOptionIndex={selectedOptionIndex} />;
        default:
            return <></>;
    }
}
