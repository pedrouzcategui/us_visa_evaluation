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
                    question_id={id}
                    selectedOptionIndex={selectedOptionIndex}
                    answer_component={answer_component}
                    options={options}
                />
            </div>
            <div className={styles.button_container}>
                <div>
                    {index == 0 &&
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
    question_id,
    answer_component,
    options = [],
    selectedOptionIndex
}: {
    question_id: number,
    answer_component: string;
    options: string[];
    selectedOptionIndex: number | number[];
}) {

    switch (answer_component) {
        case "radio":
            return <YesNo selectedOptionIndex={selectedOptionIndex} options={options} question_id={question_id} />;
        case "input":
            return <Input />;
        case "select":
            return <Select options={options} />;
        case "checkbox":
            return <Checkboxes options={options} />;
    }
    return <></>;
}
