import React from "react";
import { IQuestion, IAnswer } from "@/components/types";
import QUIZ from "@/questions";

type IQuizContext = {
  questions: IQuestion[];
  userAnswers: IAnswer[];
  handleQuestionChange: (question_id: number, answer_index_value: number) => void;
};

export const QuizContext = React.createContext<IQuizContext>({} as IQuizContext);

const QuizProvider = ({ children }: { children: React.ReactNode }) => {

  const [userAnswers, setUserAnswers] = React.useState<IAnswer[]>([]);

  function handleQuestionChange(question_id: number, answer_index_value: number) {
    setUserAnswers((prevAnswers) =>
      prevAnswers.map((answer) =>
        answer.questionID === question_id ? { ...answer, selectedIndex: answer_index_value } : answer
      )
    )
  }

  return (
    <QuizContext.Provider
      value={{ questions: QUIZ.questions, userAnswers, handleQuestionChange }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;
