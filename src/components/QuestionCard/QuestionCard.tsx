"use client";
import styles from "./style.module.css";
import { IQuestion } from "../types";
import { YesNo } from "..";
import { useContext, useState } from "react";
import { QuizContext } from "@/contexts/QuizContext";
import Button from "../Button/Button";
// import Grid from '@/components';

type QuestionTypeExtended = IQuestion & {
    isFinal: boolean;
    index: number;
};

type QuestionCardHeaderProps = {
    id: number;
    title: string;
    example?: string;
}

export default function QuestionCard({
    id,
    title,
    example,
    answer_component,
    isFinal,
    index,
}: QuestionTypeExtended) {
    const {
        setCurrentQuestionIndex,
        handleAnswerChange,
        currentQuestionIndex,
        questions,
        setIsReview,
        userAnswers,
        isEdit,
        isReview
    } = useContext(QuizContext);

    const [selectedIndex, setSelectedIndex] = useState(userAnswers[currentQuestionIndex]?.selectedIndex || 0);

    // console.log(`Is Final:`, isFinal);
    // console.log(`Is Edit:`, isEdit);
    const handleQuestionChange = (next_question_id: number) => {
        if (next_question_id > currentQuestionIndex || isEdit) {
            handleAnswerChange(id, selectedIndex);
        }
        if (next_question_id > questions.length || isEdit) {
            setIsReview(true);
            return;
        }
        setCurrentQuestionIndex(next_question_id);
    };



    return (
        <div className="w-4/5 min-h-[400px] flex flex-col justify-between p-5 border-2 border-slate-900 mt-5">
            <div>
                <QuestionCard.Header id={id} title={title} example={example} />
                <AnswerInput
                    answer_component={answer_component}
                    selectedIndex={selectedIndex}
                    setSelectedIndex={setSelectedIndex}
                />
            </div>
            {/* <Grid>
                <Button
                    variant="primary"
                    isVisible={index != 1 && !isEdit}
                    onClick={() => handleQuestionChange(index - 1)}
                >
                    Pregunta Anterior
                </Button>
                <Button
                    variant="secondary"
                    disabled={isFinal}
                    isVisible={!isFinal && !isEdit}
                    onClick={() => handleQuestionChange(index + 1)}
                >
                    Siguiente Pregunta
                </Button>
                <Button
                    variant="secondary"
                    isVisible={isFinal || isEdit}
                    onClick={() => handleQuestionChange(index + 1)}
                >
                    Revisar Respuestas
                </Button>
            </Grid> */}
        </div>
    );
}

QuestionCard.Header = ({ id, title, example }: QuestionCardHeaderProps) => {
    return (
        <>
            <h2 className={styles.question_id}>Question #{id}</h2>
            <h1 className={styles.question_text}>{title}</h1>
            <span className={styles.question_example}>{example && `${example}`}</span>
            <div className={styles.answers_container}></div>
        </>
    )
}

function AnswerInput({
    answer_component,
    selectedIndex,
    setSelectedIndex,
}: {
    answer_component: string;
    selectedIndex: number;
    setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
    switch (answer_component) {
        case "radio":
            return (
                <YesNo
                    selectedIndex={selectedIndex}
                    setSelectedIndex={setSelectedIndex}
                />
            );
        default:
            return <></>;
    }
}
