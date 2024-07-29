export class HttpResponseUtils {

	private static GenerateReponse(body: object | undefined, statusCode: number): Response {
		console.log(body)
		return new Response(JSON.stringify(body), { status: statusCode })
	}

	private static GenerateError(errorCode: string, statusCode: number): Response {
		return HttpResponseUtils.GenerateReponse({ errorCode }, statusCode)
	}

	static Ok(body: object): Response {
		return HttpResponseUtils.GenerateReponse(body, 200)
	}

	static Created(body?: object): Response {
		return HttpResponseUtils.GenerateReponse(body, 201)
	}

	static BadRequestError(errorCode: string): Response {
		return HttpResponseUtils.GenerateError(errorCode, 400)
	}

	static UnexpectedError(): Response {
		return HttpResponseUtils.GenerateError("UNEXPECTED_ERROR", 500)
	}
	static Unauthorized(): Response {
		return HttpResponseUtils.GenerateReponse(undefined, 401)
	}
}