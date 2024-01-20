import { api } from "@/lib/api";
import { endpoints } from "./endpoints";
import { IAnswer } from "../components/types";

export async function quizSubmission(userAnswers: IAnswer[]) {
  const res = await api.post(endpoints.quiz.submissions.create, userAnswers);
}
