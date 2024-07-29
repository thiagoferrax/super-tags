
import { makeSignInController } from "@repo/main"
import { NextAdapter } from "../utils/adapters/NextAdapter";

export const POST = async (request: Request) => {
	const controller = new NextAdapter(makeSignInController())
	return await controller.Execute(request)
};

