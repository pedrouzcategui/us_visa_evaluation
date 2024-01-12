"use client";
import styles from "./style.module.css";
import { ChangeEvent, useContext, useState } from "react";
import { capitalize } from '@/utils';
import QuizContext from "@/contexts/QuizContext";

export function YesNo({ question_id, options, selectedOptionIndex }: { question_id: number, options: string[], selectedOptionIndex: number | number[] }) {

    const Quiz = useContext(QuizContext);

    const [selectedIndex, setSelectedIndex] = useState(selectedOptionIndex);

    const onOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
        let { value } = e.target;
        setSelectedIndex(parseInt(value));

    };

    return (
        <div>
            <div>
                {
                    options.map((option, i) => {
                        return (<label key={`${question_id}-${option}-${i}`} htmlFor="yes_no" className={styles.label_container}>
                            <input
                                name="yes_no"
                                value={i}
                                type="radio"
                                checked={selectedIndex === i}
                                onChange={onOptionChange}
                            />
                            <span>{capitalize(option)}</span>
                        </label>)
                    })
                }
            </div>
        </div>
    );
}
