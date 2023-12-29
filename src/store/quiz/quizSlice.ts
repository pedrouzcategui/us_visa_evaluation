import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Answer } from "../../components/types";

type Quiz = {
  currentQuestionId: number;
  answers: Answer[];
};

const initialState: Quiz = {
  currentQuestionId: 0,
  answers: [],
};

const quizSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addQuestion(state, action: PayloadAction<Answer>) {
      state.answers.push({
        question_id: action.payload.question_id,
        value: action.payload.value,
      });
    },
  },
});

export const { addQuestion } = quizSlice.actions;
export default quizSlice.reducer;
