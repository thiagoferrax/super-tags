import { ValidationError } from "@repo/domain";
import { MakeSuperTag, MakeSuperTagRepository } from "@repo/main";
import { HttpResponse } from "../utils/HttpResponse";

export const POST = async (request: Request) => {
  try {
    const createSuperTagUseCase = MakeSuperTag();

    const body = await request.json();
    await createSuperTagUseCase.Execute({
      emoji: body.emoji,
      titulo: body.titulo,
      texto: body.texto,
      parentId: null,
    });
    return HttpResponse.Created();
  } catch (err: any) {
    if (err instanceof ValidationError) {
      return HttpResponse.BadRequestError(err.code);
    }
    console.error(err);
    return HttpResponse.UnexpectedError();
  }
};

export const GET = async () => {
  try {
    const SuperTags = await MakeSuperTagRepository().GetByUserId();
    return Response.json(SuperTags);
  } catch (err: any) {
    console.error(err);
    return HttpResponse.UnexpectedError();
  }
};

export const DELETE = async (request: Request) => {
  await MakeSuperTagRepository().ClearAll();
  return new Response(undefined, { status: 204 });
};
