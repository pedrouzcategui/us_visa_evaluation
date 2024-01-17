"use client";
import styles from "./style.module.css";
import { ChangeEvent, useContext } from "react";
import { capitalize } from "@/utils";
import { NO_ANSWER, YES_ANSWER } from "@/consts/quiz_values";
import { QuizContext } from "@/contexts/QuizContext";
const OPTIONS = [YES_ANSWER, NO_ANSWER];

export function YesNo({
    selectedIndex,
    setSelectedIndex,
}: {
    selectedIndex: number;
    setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
}) {

    // Get Current Question
    // Put the value of the current answer if exists

    const onOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
        let { value } = e.target;
        let selectedIndex = parseInt(value);
        setSelectedIndex(selectedIndex);
    };

    return (
        <div>
            <div>
                {OPTIONS.map((option, i) => {
                    return (
                        <label
                            key={`${option}-${i}`}
                            htmlFor="yes_no"
                            className={styles.label_container}
                        >
                            <input
                                name="yes_no"
                                value={i}
                                type="radio"
                                checked={selectedIndex === i}
                                onChange={onOptionChange}
                            />
                            <span>{capitalize(option)}</span>
                        </label>
                    );
                })}
            </div>
        </div>
    );
}
