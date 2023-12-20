'use client'
import React from 'react'
import styles from './style.module.css'
import { Question } from "../types"

type QuestionTypeExtended = Question & { id: number }

export default function QuestionCard({ id, text, example, answers, answer_html_type }: QuestionTypeExtended) {
    return (
        <div className={styles.card}>
            <h2 className={styles.question_id}>Question #{id}</h2>
            <h1 className={styles.question_text}>{text}</h1>
            <span className={styles.question_example}>{example ? `Ejemplo: ${example}` : ""}</span>
            <div className={styles.answers_container}>
                <div>
                    <label><input name='x' type='radio' />Si</label>
                </div>
                <div>
                    <label><input name='x' type='radio' />No</label>
                </div>
            </div>
            <div className={styles.button_container}>
                <button className={styles.button}>Siguiente Pregunta</button>
            </div>
        </div>
    )
}
