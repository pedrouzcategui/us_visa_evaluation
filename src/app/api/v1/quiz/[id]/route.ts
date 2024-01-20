import { db } from "@/lib/db";

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  const { id } = context.params;
  try {
    const quiz = await db.quiz.findFirst({
      where: {
        id: id,
      },
    });
    return Response.json(quiz);
  } catch (error) {
    return Response.json(error, { status: 404 });
  }
}

export async function PUT(
  request: Request,
  context: { params: { id: string } }
) {
  //TODO: implement
}

export async function DELETE(
  request: Request,
  context: { params: { id: string } }
) {
  //TODO: implement
}
