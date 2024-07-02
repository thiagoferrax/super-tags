import { ValidationError } from "@repo/domain";
import { MakeCreateUser, MakeUserRepository } from "@repo/main";

export const GET = async () => {
	try {
		const users = await MakeUserRepository().GetAll();
		console.log("Micael 1")

		return Response.json(users)
	} catch (err: any) {
		console.error(err)
		return new Response("UNEXPECTED_ERROR", { status: 500 })
	}
}

export const POST = async (request: Request) => {
	try {
		const createUserUseCase = MakeCreateUser()

		const body = await request.json()
		createUserUseCase.Execute({
			name: body.name, email: body.email, password: body.password
		})
		return new Response("Success", { status: 201 })
	} catch (err: any) {
		console.log(err)
		if (err instanceof ValidationError) {
			return new Response(err.code, { status: 400 })
		}
		return new Response("UNEXPECTED_ERROR", { status: 500 })
	}

}

export const DELETE = async (request: Request) => {
	await MakeUserRepository().ClearAll();
	return new Response(undefined, { status: 204 })
}