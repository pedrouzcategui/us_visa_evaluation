"use client";
import styles from "./style.module.css";
import { ChangeEvent, useContext, useState } from "react";
import { NO_ANSWER, YES_ANSWER } from "@/consts/quiz_values";

export function YesNo({ setAnswer }: { setAnswer: (arg: any) => any }) {
    const [option, setOption] = useState(YES_ANSWER);
    const onOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAnswer(e.target.value)
        setOption(e.target.value);
    };
    return (
        <div>
            <div>
                <label htmlFor={YES_ANSWER} className={styles.label_container}>
                    <input
                        name="option"
                        value={YES_ANSWER}
                        type="radio"
                        checked={option === YES_ANSWER}
                        onChange={onOptionChange}
                    />
                    <span>Yes</span>
                </label>
                <label htmlFor={NO_ANSWER} className={styles.label_container}>
                    <input
                        name="option"
                        value={NO_ANSWER}
                        type="radio"
                        checked={option === NO_ANSWER}
                        onChange={onOptionChange}
                    />
                    <span>No</span>
                </label>
            </div>
        </div>
    );
}
