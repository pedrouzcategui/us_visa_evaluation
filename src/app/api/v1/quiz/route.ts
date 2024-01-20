import { db } from "@/lib/db";
import { apiRouterErrors } from "@/lib/errors";

export async function GET() {
  const quizzes = await db.quiz.findMany();
  return Response.json(quizzes);
}

export async function POST(request: Request) {
  const data = await request.json();
  return Response.json({ data });
}
