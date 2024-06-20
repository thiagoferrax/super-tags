import { User } from "@/backend/User";
import { IUserRepository } from "@/backend/db/user-repository";
import { UserRepositoryInMemory } from "@/backend/db/user-repository-in-memory"
import { MakeUserRepository } from "@/backend/main/db-factories";

const userRepository: IUserRepository = MakeUserRepository()
export const POST = async (request: Request) => {
    const body = await request.json()
    const user = await userRepository.GetUserByEmail(body.username)
    console.log(user)
    console.log(body.password, body.username)
    if (!user || user.password !== body.password) {
        return new Response(JSON.stringify({
            error: "Invalid credentials"
        }), { status: 400 })
    }

    return new Response(JSON.stringify({
        token: "some_token"
    }), { status: 200 })
}
