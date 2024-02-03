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
    },
    {
      id: 2,
      title: "¿Tiene usted familiares directos en los Estados Unidos?",
      example:
        "Ejemplo: Familiares directos son los siguientes: Padre, Madre, Hermana, Hermano, Hijo, Hija, Esposa, Esposo.",
      answer_component: "radio",
      options: ["yes", "no"],
    },
    {
      id: 3,
      title:
        "¿Tiene algún familiar directo viviendo Ilegalmente en los Estados Unidos?",
      answer_component: "radio",
      options: ["yes", "no"],
    },
    {
      id: 4,
      title: "¿Gana usted mas de USD $500 al mes?",
      answer_component: "radio",
      options: ["yes", "no"],
    },
    {
      id: 5,
      title: "¿Posee vivienda en su país de origen a su nombre?",
      answer_component: "radio",
      options: ["yes", "no"],
    },
    {
      id: 6,
      title: "¿Planea usted irse a vivir a los Estados Unidos?",
      example: "Sea honesto, por favor.",
      answer_component: "radio",
      options: ["yes", "no"],
    },
    {
      id: 7,
      title: "¿Ha viajado usted internacionalmente en los ultimos 5 años?",
      answer_component: "radio",
      options: ["yes", "no"],
    },
    {
      id: 8,
      title: "¿Posee cuenta bancaria en los Estados Unidos?",
      answer_component: "radio",
      options: ["yes", "no"],
    },
    {
      id: 9,
      title: "¿Trabaja usted para algún ciudadano americano?",
      example: "Ejemplo: Su Jefe es un ciudadano americano.",
      answer_component: "radio",
      options: ["yes", "no"],
    },
    {
      id: 10,
      title: "Do you speak english?",
      example:
        "Without hesitations or needing to think on the middle of a conversation. Responda 'No' si no entiende la pregunta.",
      answer_component: "radio",
      options: ["yes", "no"],
    },
    {
      id: 11,
      title: "¿Culmino usted los estudios superiores?",
      example:
        "Estudios superiores a 5 años de duración, técnicos no son considerados estudios superiores.",
      answer_component: "radio",
      options: ["yes", "no"],
    },
    {
      id: 12,
      title:
        "¿Posee usted negocios que facturen mas de USD $5,000 al mes luego de impuestos?",
      answer_component: "radio",
      options: ["yes", "no"],
    },
    {
      id: 13,
      title:
        "¿Ha cometido algún delito o infracción que esté reflejado en sus antecedentes penales?",
      answer_component: "radio",
      options: ["yes", "no"],
    },
    {
      id: 14,
      title: "¿Ha pertenecido usted a la milicia?",
      answer_component: "radio",
      options: ["yes", "no"],
    },
    {
      id: 15,
      title: "¿Es usted una persona destacada en algún área?",
      example:
        "Ejemplo: Reconocido en su país/mundialmente como Deportista, Cantante, Músico, Investigador, Periodista, entre otros.",
      answer_component: "radio",
      options: ["yes", "no"],
    },
    {
      id: 16,
      title: "¿Se quedará en Estados Unidos más de un mes?",
      example:
        "Ejemplo: Reconocido en su país/mundialmente como Deportista, Cantante, Músico, Investigador, Periodista, entre otros.",
      answer_component: "radio",
      options: ["yes", "no"],
    },
    {
      id: 17,
      title: "¿Tiene usted más de $10,000 en ahorros?",
      answer_component: "radio",
      options: ["yes", "no"],
    },
  ],
};

export default QUIZ;
