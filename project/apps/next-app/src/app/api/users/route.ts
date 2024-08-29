import {  makeUserRegisterController, MakeUserRepository } from "@repo/main";
import { HttpResponseUtils } from "../utils/HttpResponse";
import { NextAdapter } from "../utils/adapters/NextAdapter";


export const POST = async (request: Request) => {
	const controller = new NextAdapter(makeUserRegisterController())
	return await controller.Execute(request)
};

export const GET = async () => {
  try {
    const users = await MakeUserRepository().GetAll();
    return Response.json(users);
  } catch (err: any) {
    console.error(err);
    return HttpResponseUtils.UnexpectedError();
  }
};

export const DELETE = async (request: Request) => {
  await MakeUserRepository().ClearAll();
  return new Response(undefined, { status: 204 });
};
