import { api } from "@/lib/api";
import { endpoints } from "./endpoints";

// TODO: Define Prisma Client

// TODO: Figure out typing here
export async function getQuiz(id: string) {
  const { quiz }: any = await api.get(endpoints.quiz.single(id));
  return quiz;
}
