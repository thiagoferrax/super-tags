import { ValidationError } from "@repo/domain";
import { MakeCreateUser, MakeUserRepository } from "@repo/main";


class HttpResponseUtils {

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

    static Created(): Response {
        return HttpResponseUtils.GenerateReponse(undefined, 201)
    }

    static BadRequestError(errorCode: string): Response {
        return HttpResponseUtils.GenerateError(errorCode, 400)
    }

    static UnexpectedError(): Response {
        return HttpResponseUtils.GenerateError("UNEXPECTED_ERROR", 500)
    }
}

export const GET = async () => {
    try {
        const users = await MakeUserRepository().GetAll();
        return Response.json(users)
    } catch (err: any) {
        console.error(err)
        return HttpResponseUtils.UnexpectedError()
    }
}

export const POST = async (request: Request) => {
    try {
        const createUserUseCase = MakeCreateUser()

        const body = await request.json()
        await createUserUseCase.Execute({
            name: body.name, email: body.email, password: body.password
        })
        return HttpResponseUtils.Created()
    } catch (err: any) {
        console.error(err)
        if (err instanceof ValidationError) {
            console.log("Micael")
            return HttpResponseUtils.BadRequestError(err.code)
        }
        return HttpResponseUtils.UnexpectedError()
    }

}

export const DELETE = async (request: Request) => {
    await MakeUserRepository().ClearAll();
    return new Response(undefined, { status: 204 })
}