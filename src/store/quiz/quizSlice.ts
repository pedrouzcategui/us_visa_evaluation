import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Answer, IQuestion } from "../../components/types";

type Quiz = {
  questions: IQuestion[];
};

const initialState: Quiz = {
  questions: [
    {
      id: 1,
      title: "¿Ha viajado usted a los Estados Unidos en los ultimos 5 años?",
      answer_component: "radio",
      options: ["yes", "no"],
      selectedOptionIndex: 0,
    },
    {
      id: 2,
      title: "¿Tiene usted familiares en los Estados Unidos?",
      example:
        "Ejemplo: Familiares directos, si usted tiene un familiar que no ha visto desde hace mas de 10 años, eso no es un famliar.",
      answer_component: "radio",
      options: ["yes", "no"],
      selectedOptionIndex: 0,
    },
    {
      id: 3,
      title:
        "¿Cuál es su motivo de viaje a los Estados Unidos? Por favor, marque todas las situaciones que apliquen",
      answer_component: "checkbox",
      options: ["De Paseo", "Visitar a un Familiar", "Asistir una conferencia"],
      selectedOptionIndex: [0],
    },
  ],
};

const quizSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setSelectedOption: (
      state,
      action: PayloadAction<{
        selected_option: number | number[];
        question_id: number;
      }>
    ) => {
      state.questions[action.payload.question_id].selectedOptionIndex =
        action.payload.selected_option;
    },
  },
});

export const { setSelectedOption } = quizSlice.actions;
export default quizSlice.reducer;
