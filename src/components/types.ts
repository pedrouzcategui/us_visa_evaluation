export type Answer = {
  option: string;
  points: number;
};

export type Question = {
  text: string;
  example?: string;
  answer_html_type: string;
  answers?: Answer[];
};

export type Quiz = {
  questions: Question[];
};
