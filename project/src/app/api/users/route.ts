import { User } from "../../../backend/core/models/user";
import { IUserRepository } from "@/backend/db/user-repository";
import { UserRepositoryInMemory } from "@/backend/db/user-repository-in-memory"
import { MakeUserRepository } from "@/backend/main/db-factories";


const userRepository: IUserRepository = MakeUserRepository()
export const GET = async () => {
    const users = await userRepository.GetAll();
    return Response.json(users)
}

export const POST = async (request: Request) => {
    const body = await request.json()
    userRepository.Add(new User(null, body.name, body.email, body.password))
    return new Response("Success", { status: 201 })
}

export const DELETE = async (request: Request) => {
    await userRepository.ClearAll();
    return new Response(undefined, { status: 204 })
}