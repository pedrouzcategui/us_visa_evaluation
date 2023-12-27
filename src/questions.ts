import { Question } from "./components/types";

export const questions: Question[] = [
  {
    text: "¿Ha viajado usted a los Estados Unidos en los ultimos 5 años?",
    answer_component: "radio",
    options: [
      {
        label: "Yes",
        value: "Yes",
      },
      {
        label: "No",
        value: "No",
      },
    ],
  },
  {
    text: "¿Tiene usted familiares en los Estados Unidos?",
    answer_component: "radio",
    options: [
      {
        label: "Yes",
        value: "Yes",
      },
      {
        label: "No",
        value: "No",
      },
    ],
  },
  {
    text: "¿Cuál es su motivo de viaje a los Estados Unidos? Por favor, marque todas las situaciones que apliquen",
    answer_component: "checkbox",
    options: [
      {
        label: "De Paseo",
        value: "De Paseo",
      },
      {
        label: "Visitar a un familiar",
        value: "Visitar a un familiar",
      },
      {
        label: "Asistir una conferencia",
        value: "Asistir una conferencia",
      },
    ],
  },
  {
    text: "¿Tiene algún familiar directo (Hermano, Hermana, Papá, Mamá, Esposa, o Hijos) viviendo Ilegalmente en los Estados Unidos?",
    answer_component: "radio",
    options: [
      {
        label: "Yes",
        value: "Yes",
      },
      {
        label: "No",
        value: "No",
      },
    ],
  },
  {
    text: "¿Gana usted más de USD $500 al mes?",
    answer_component: "radio",
    options: [
      {
        label: "Yes",
        value: "Yes",
      },
      {
        label: "No",
        value: "No",
      },
    ],
  },
  {
    text: "Indique el sector en el cuál trabaja:",
    answer_component: "select",
    options: [
      {
        label: "Agricultura",
        value: "Agricultura",
      },
      {
        label: "Ingenieria",
        value: "Ingenieria",
      },
      {
        label: "Marketing",
        value: "Marketing",
      },
    ],
  },
  {
    text: "Cuál es su país de origen?",
    answer_component: "select",
    options: [
      {
        label: "Argentina",
        value: "Argentina",
      },
      {
        label: "Mexico",
        value: "Mexico",
      },
      {
        label: "Venezuela",
        value: "Venezuela",
      },
    ],
  },
  {
    text: "¿En qué país planea sacar su visa de turista?",
    answer_component: "select",
    options: [
      {
        label: "Argentina",
        value: "Argentina",
      },
      {
        label: "Mexico",
        value: "Mexico",
      },
      {
        label: "Venezuela",
        value: "Venezuela",
      },
    ],
  },
];
