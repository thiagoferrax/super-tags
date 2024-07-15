import { ValidationError } from "@repo/domain"
import { MakeSignIn } from "@repo/main"
import { HttpResponse } from "../utils/HttpResponse"


export const POST = async (request: Request) => {
	try {
		const body = await request.json()
		const signInUseCase = MakeSignIn()
		const response = await signInUseCase.Execute({
			username: body.username,
			password: body.password
		})

		return new Response(JSON.stringify(response), { status: 200 })
	} catch (err: any) {
		if (err instanceof ValidationError) {
			return HttpResponse.BadRequestError(err.code)
		}
		console.error(err)
		return HttpResponse.UnexpectedError()
	}
}
