import { db } from "../lib/db";
import { B1B2_QUIZ } from "./quizzes";

async function main() {
  await db.quiz.deleteMany();
  // Insert QUIZ in DB
  const quiz = await db.quiz.create({
    data: {
      title: B1B2_QUIZ.title,
      description:
        "This quiz enables you to know if you're fit for a B1/B2 visa!",
      country: "US",
    },
  });

  const seederQuestions = B1B2_QUIZ.questions.map((question) => ({
    name: question.title,
    example_text: question.example_text,
    type: question.type as any,
    quizId: quiz.id,
  }));

  const questions = await db.question.createMany({
    data: seederQuestions,
  });
}

main();
