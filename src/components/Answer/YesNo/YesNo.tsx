"use client";
import styles from "./style.module.css";
import { ChangeEvent, useEffect, useState } from "react";
import { NO_ANSWER, YES_ANSWER } from "@/consts/quiz_values";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { capitalize } from '@/utils';
import { setSelectedOption } from "@/store/quiz/quizSlice";

export function YesNo({ question_id, options, selectedOptionIndex }: { question_id: number, options: string[], selectedOptionIndex: number | number[] }) {
    const dispatch = useAppDispatch();
    const [selectedIndex, setSelectedIndex] = useState(selectedOptionIndex);
    const onOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
        let { value } = e.target;
        setSelectedIndex(parseInt(value));
    };

    useEffect(() => {
        dispatch(setSelectedOption({ selected_option: selectedIndex, question_id: question_id - 1 }))
    }, [selectedIndex])

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
