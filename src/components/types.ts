export type Option = {
  value: string;
  label: string;
};

export type Answer = {
  question_id: number;
  value: string;
};

export type IQuestion = {
  id: number;
  title: string;
  example?: string;
  options: string[];
  answer_component: "radio" | "input" | "select" | "checkbox";
  selectedOptionIndex: number | number[];
};

export type IQuiz = {
  questions: IQuestion[];
};
