"use client";
import styles from "./style.module.css";
import { ChangeEvent, MouseEventHandler, useContext } from "react";
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
    const onOptionChange2 = (e: React.MouseEvent<HTMLElement>) => {
        let div = e.target as HTMLElement;
        if (!div) {
            return;
        }
        let value = div.innerText;
        let selectedIndex = value === "Yes" ? 0 : 1;
        setSelectedIndex(selectedIndex);
    };

    return (
        <div>
            {/* <div>
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
            </div> */}
            <div className="grid grid-cols-2 gap-3 my-5">
                <AnswerBox handleOptionChange={onOptionChange2} value="Yes" isActive={selectedIndex == 0} />
                <AnswerBox handleOptionChange={onOptionChange2} value="No" isActive={selectedIndex == 1} />
            </div>
        </div>
    );
}

interface AnswerBoxProps {
    handleOptionChange: (e: any) => void;
    value: string;
    isActive: boolean;
}

function AnswerBox({ handleOptionChange, value, isActive }: AnswerBoxProps) {
    return (
        <div
            onClick={handleOptionChange}
            className={`flex items-center justify-center border-2 py-5  hover:cursor-pointer ${isActive ? 'border-green-600 bg-green-400' : 'border-slate-600 hover:bg-slate-200'}`}
        >
            {value}
        </div>
    )
}
