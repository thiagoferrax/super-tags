import { ValidationError } from "@repo/domain";
import { MakeCreateUser, MakeUserRepository } from "@repo/main";
import { HttpResponse } from "../utils/HttpResponse";


export const POST = async (request: Request) => {
    try {
        const createUserUseCase = MakeCreateUser()

        const body = await request.json()
        await createUserUseCase.Execute({
            name: body.name, email: body.email, password: body.password
        })
        return HttpResponse.Created()
    } catch (err: any) {
		if (err instanceof ValidationError) {
			return HttpResponse.BadRequestError(err.code)
        }
		console.error(err)
        return HttpResponse.UnexpectedError()
    }
}





export const GET = async () => {
    try {
        const users = await MakeUserRepository().GetAll();
        return Response.json(users)
    } catch (err: any) {
        console.error(err)
        return HttpResponse.UnexpectedError()
    }
}


export const DELETE = async (request: Request) => {
    await MakeUserRepository().ClearAll();
    return new Response(undefined, { status: 204 })
}