export type Option = {
  value: string;
  label: string;
};

export type Answer = {
  question_id: number;
  value: string;
};

export type OptionProps = {
  options: Option[];
};

export type Question = {
  text: string;
  example?: string;
  answer_component: string;
  options: Option[];
};

export type Quiz = {
  questions: Question[];
};
