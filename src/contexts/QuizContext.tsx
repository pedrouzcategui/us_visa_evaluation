import React from "react";
import { IQuestion, IAnswer } from "@/components/types";
import QUIZ from "@/questions";

type IQuizContext = {
  questions: IQuestion[];
  userAnswers: IAnswer[];
  setUserAnswers: React.Dispatch<React.SetStateAction<IAnswer[]>>;
};

export const QuizContext = React.createContext<IQuizContext>({} as IQuizContext);

const QuizProvider = ({ children }: { children: React.ReactNode }) => {

  function handleQuestionChange(question_id: number, value: number) {
    // Set User Answers
  }

  const [userAnswers, setUserAnswers] = React.useState<IAnswer[]>([]);

  return (
    <QuizContext.Provider
      value={{ questions: QUIZ.questions, userAnswers, setUserAnswers }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;
