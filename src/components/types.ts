export type Option = {
  value: string | number;
  label: string;
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
