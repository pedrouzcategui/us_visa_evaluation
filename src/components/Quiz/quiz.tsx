import { Quiz } from "../types";
import QuestionCard from '../QuestionCard/QuestionCard';

export function Quiz({ questions }: Quiz) {
    return (
        <>{questions.map((q, i) => {
            return <QuestionCard key={`question-${i}`} id={i + 1} {...q} />
        })}</>
    )
}
