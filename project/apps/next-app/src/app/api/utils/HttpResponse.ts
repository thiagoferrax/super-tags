export class HttpResponse {

    private static GenerateReponse(body: object | undefined, statusCode: number): Response {
        console.log(body)
        return new Response(JSON.stringify(body), { status: statusCode })
    }

    private static GenerateError(errorCode: string, statusCode: number): Response {
        return HttpResponse.GenerateReponse({ errorCode }, statusCode)
    }

    static Ok(body: object): Response {
        return HttpResponse.GenerateReponse(body, 200)
    }

    static Created(): Response {
        return HttpResponse.GenerateReponse(undefined, 201)
    }

    static BadRequestError(errorCode: string): Response {
        return HttpResponse.GenerateError(errorCode, 400)
    }

    static UnexpectedError(): Response {
        return HttpResponse.GenerateError("UNEXPECTED_ERROR", 500)
    }
}