import QuizProvider from "@/contexts/QuizContext";
import QuizWrapper from "./QuizWrapper";

export function Quiz() {
    return (
        <QuizProvider>
            <QuizWrapper />
        </QuizProvider>
    );
}
