import { MakeUserRepository } from "@/core/main/infra/db/make-user-repository";
import { MakeCreateUser } from "@/core/main/use-cases/make-create-user";

export const GET = async () => {
    const users = await MakeUserRepository().GetAll();
    return Response.json(users)
}

export const POST = async (request: Request) => {
    const createUserUseCase = MakeCreateUser()

    const body = await request.json()
    createUserUseCase.Execute({
        name: body.name, email: body.email, password: body.password
    })
    return new Response("Success", { status: 201 })
}

export const DELETE = async (request: Request) => {
    await MakeUserRepository().ClearAll();
    return new Response(undefined, { status: 204 })
}