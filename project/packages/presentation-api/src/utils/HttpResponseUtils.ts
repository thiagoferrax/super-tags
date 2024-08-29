import { HttpResponse } from "../models"

export class HttpResponseUtils {

	private static GenerateReponse(body: object | undefined, statusCode: number): HttpResponse {
		console.log(body)
		return {
			status: statusCode,
			body: body
		}
	}

	private static GenerateError(errorCode: string, statusCode: number): HttpResponse {
		return HttpResponseUtils.GenerateReponse({
			errorCode
		}, statusCode)
	}

	static Ok(body: object): HttpResponse {
		return HttpResponseUtils.GenerateReponse(body, 200)
	}

	static Created(body?: object): HttpResponse {
		return HttpResponseUtils.GenerateReponse(body, 201)
	}

	static BadRequestError(errorCode: string): HttpResponse {
		return HttpResponseUtils.GenerateError(errorCode, 400)
	}

	static UnexpectedError(): HttpResponse {
		return HttpResponseUtils.GenerateError("UNEXPECTED_ERROR", 500)
	}
	static Unauthorized(): HttpResponse {
		return HttpResponseUtils.GenerateReponse(undefined, 401)
	}
}