import { api } from "@/lib/api";
import { endpoints } from "./endpoints";
import { PrismaClient } from "@prisma/client";

export async function getQuiz(id: string) {
  const { quiz }: any = await api.get(endpoints.quiz.single(id));
  return quiz;
}
