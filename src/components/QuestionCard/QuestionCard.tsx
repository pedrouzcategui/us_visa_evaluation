"use client";
import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { Option, Question } from "../types";
import { Checkboxes, Input, YesNo, Select } from "..";

type QuestionTypeExtended = Question & {
    id: number;
    setCurrentIndex: (value: number) => void;
    isFinal: boolean;
    setQuizQuestion: (question: any) => any;
};

export default function QuestionCard({
    id,
    text,
    example,
    options,
    answer_component,
    setCurrentIndex,
    isFinal,
    setQuizQuestion,
}: QuestionTypeExtended) {
    const [answer, setAnswer] = useState(options[0].value);
    const [question, setQuestion] = useState({
        question_id: id,
        answer: "",
    });

    const handleNextQuestion = (next_question_id: number) => {
        setQuizQuestion(question);
        setCurrentIndex(next_question_id);
    };

    const handlePreviousQuestion = (prev_question_id: number) => {
        setCurrentIndex(prev_question_id);
    }

    useEffect(() => {
        let question = {
            question_id: id,
            answer: answer,
        };
        setQuestion(question);
    }, [answer]);

    return (
        <div className={styles.card}>
            <h2 className={styles.question_id}>Question #{id + 1}</h2>
            <h1 className={styles.question_text}>{text}</h1>
            <span className={styles.question_example}>
                {example ? `Ejemplo: ${example}` : ""}
            </span>
            <div className={styles.answers_container}>
                <AnswerInput
                    answer_component={answer_component}
                    options={options}
                    setAnswer={setAnswer}
                />
            </div>
            <div className={styles.button_container}>
                <div>
                    {id == 0 ? (
                        ""
                    ) : (
                        <button
                            className={styles.button}
                            onClick={() => handlePreviousQuestion(id - 1)}
                        >
                            Pregunta Anterior
                        </button>
                    )}
                </div>
                <button
                    disabled={isFinal}
                    className={styles.button}
                    onClick={() => handleNextQuestion(id + 1)}
                >
                    {isFinal ? "Terminar Test" : "Siguiente Pregunta"}
                </button>
            </div>
        </div>
    );
}

function AnswerInput({
    answer_component,
    setAnswer,
    options = [],
}: {
    answer_component: string;
    setAnswer: (arg: any) => any;
    options: Option[];
}) {
    switch (answer_component) {
        case "radio":
            return <YesNo setAnswer={setAnswer} />;
        case "input":
            return <Input />;
        case "select":
            return <Select options={options} />;
        case "checkbox":
            return <Checkboxes options={options} />;
    }
    return <></>;
}
