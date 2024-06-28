import { MakeCreateUser, MakeUserRepository } from "@repo/main";

export const GET = async () => {
    const users = await MakeUserRepository().GetAll();
    return Response.json(users)
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
        if (err.message === "INVALID_CREDENTIALS") {
            return new Response("INVALID_CREDENTIALS", { status: 400 })
        }
        return new Response("UNEXPECTED_ERROR", { status: 500 })
    }

}

export const DELETE = async (request: Request) => {
    await MakeUserRepository().ClearAll();
    return new Response(undefined, { status: 204 })
}