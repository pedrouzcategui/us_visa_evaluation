import { IQuestion } from "@/components/types";

type Quiz = {
  questions: IQuestion[];
};

const QUIZ: Quiz = {
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
        "¿Tiene algún familiar directo (Hermano, Hermana, Papá, Mamá, Esposa, o Hijos) viviendo Ilegalmente en los Estados Unidos?",
      answer_component: "radio",
      options: ["yes", "no"],
      selectedOptionIndex: 0,
    },
    {
      id: 4,
      title: "¿Gana usted mas de USD $500 al mes?",
      answer_component: "radio",
      options: ["yes", "no"],
      selectedOptionIndex: 0,
    },
    {
      id: 5,
      title: "¿Posee vivienda en su país de origen a su nombre?",
      answer_component: "radio",
      options: ["yes", "no"],
      selectedOptionIndex: 0,
    },
    {
      id: 6,
      title: "¿Planea usted irse a vivir a los Estados Unidos?",
      example: "Sea honesto, por favor.",
      answer_component: "radio",
      options: ["yes", "no"],
      selectedOptionIndex: 0,
    },
    {
      id: 7,
      title: "¿Ha viajado usted internacionalmente en los ultimos 5 años?",
      answer_component: "radio",
      options: ["yes", "no"],
      selectedOptionIndex: 0,
    },
    {
      id: 8,
      title: "¿Posee cuenta bancaria en los Estados Unidos?",
      answer_component: "radio",
      options: ["yes", "no"],
      selectedOptionIndex: 0,
    },
    {
      id: 9,
      title: "¿Trabaja usted para algún ciudadano americano?",
      example: "Ejemplo: Su Jefe es un ciudadano americano.",
      answer_component: "radio",
      options: ["yes", "no"],
      selectedOptionIndex: 0,
    },
    {
      id: 10,
      title: "Do you speak english?",
      example:
        "Without hesitations or needing to think on the middle of a conversation. Responda 'No' si no entiende la pregunta.",
      answer_component: "radio",
      options: ["yes", "no"],
      selectedOptionIndex: 0,
    },
    {
      id: 11,
      title: "¿Culmino usted los estudios superiores?",
      example:
        "Estudios superiores a 5 años de duración, técnicos no son considerados estudios superiores.",
      answer_component: "radio",
      options: ["yes", "no"],
      selectedOptionIndex: 0,
    },
    {
      id: 12,
      title:
        "¿Posee usted negocios que facturen mas de USD $5,000 al mes luego de impuestos?",
      example:
        "Estudios superiores a 5 años de duración, técnicos no son considerados estudios superiores.",
      answer_component: "radio",
      options: ["yes", "no"],
      selectedOptionIndex: 0,
    },
    {
      id: 13,
      title: "¿Posee usted antecedentes penales?",
      answer_component: "radio",
      options: ["yes", "no"],
      selectedOptionIndex: 0,
    },
  ],
};

export default QUIZ;
