import { Context, Dispatch, SetStateAction, createContext } from "react";
import { IQuestion, IAnswer } from "@/components/types";

type QuizContext = {
  questions: IQuestion[];
  userAnswers: IAnswer[];
  setUserAnswers: Dispatch<SetStateAction<IAnswer[]>>;
};

const QuizContext: Context<QuizContext> = createContext<QuizContext>(
  {} as QuizContext
);

export default QuizContext;
