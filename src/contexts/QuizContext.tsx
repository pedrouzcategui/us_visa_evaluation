"use client"
import React, { useEffect } from "react";
import { IQuestion, IAnswer } from "@/components/types";
import QUIZ from "@/questions";

type IQuizContext = {
  currentQuestionIndex: number;
  questions: IQuestion[];
  userAnswers: IAnswer[];
  isReview: boolean;
  isEdit: boolean;
  currentUserAnswer: IAnswer;
  handleAnswerChange: (
    question_id: number,
    answer_index_value: number
  ) => void;
  setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  setIsReview: React.Dispatch<React.SetStateAction<boolean>>;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
};

export const QuizContext = React.createContext<IQuizContext>(
  {} as IQuizContext
);

const QuizProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(1);
  const [userAnswers, setUserAnswers] = React.useState<IAnswer[]>([]);
  const [isReview, setIsReview] = React.useState(false);
  const [isEdit, setIsEdit] = React.useState(false);
  const currentUserAnswer = userAnswers[currentQuestionIndex - 1];


  function handleAnswerChange(
    question_id: number,
    answer_index_value: number
  ) {
    let questionIndex = userAnswers.findIndex(
      (answer) => answer.questionID == question_id
    );
    setUserAnswers((previous_answers) => {
      if (questionIndex === -1) {
        let answer: IAnswer = {
          questionID: question_id,
          selectedIndex: answer_index_value,
        };
        return [...previous_answers, answer];
      }
      return previous_answers.map((answer) =>
        answer.questionID === question_id
          ? { ...answer, selectedIndex: answer_index_value }
          : answer
      );
    });
  }



  return (
    <QuizContext.Provider
      value={{
        questions: QUIZ.questions,
        userAnswers,
        handleAnswerChange,
        currentQuestionIndex,
        setCurrentQuestionIndex,
        isReview,
        setIsReview,
        isEdit,
        setIsEdit,
        currentUserAnswer
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;
