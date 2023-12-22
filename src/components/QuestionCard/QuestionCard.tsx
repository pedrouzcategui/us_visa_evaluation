'use client'
import React from 'react'
import styles from './style.module.css'
import { Option, Question } from '../types';
import { Checkboxes, Input, YesNo, Select } from '..'

type QuestionTypeExtended = Question & { id: number, setCurrentIndex: (value: number) => void, isFinal: boolean }

export default function QuestionCard({ id, text, example, options, answer_component, setCurrentIndex, isFinal }: QuestionTypeExtended) {

    const handleCurrentIndex = (value: number) => {
        setCurrentIndex(value)
    }

    return (
        <div className={styles.card}>
            <h2 className={styles.question_id}>Question #{id + 1}</h2>
            <h1 className={styles.question_text}>{text}</h1>
            <span className={styles.question_example}>{example ? `Ejemplo: ${example}` : ""}</span>
            <div className={styles.answers_container}>
                <AnswerInput answer_component={answer_component} options={options} />
            </div>
            <div className={styles.button_container}>
                <div>
                    {
                        id == 0 ? "" : (<button className={styles.button} onClick={() => handleCurrentIndex(id - 1)}>Pregunta Anterior</button>)
                    }
                </div>
                <button disabled={isFinal} className={styles.button} onClick={() => handleCurrentIndex(id + 1)}>{isFinal ? "Terminar Test" : "Siguiente Pregunta"}</button>
            </div>
        </div>
    )
}

function AnswerInput({ answer_component, options = [] }: { answer_component: string, options: Option[] }) {
    switch (answer_component) {
        case 'radio':
            return <YesNo options={options} />
        case 'input':
            return <Input />
        case 'select':
            return <Select options={options} />
        case 'checkbox':
            return <Checkboxes options={options} />
    }
    return <></>
}